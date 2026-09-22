/**
 * Hemşirelik Bakım Rehberim - Bakım Planı Oluşturucu & Akıllı Tanı Öneri Motoru Logic (Standard Global Script)
 */

window.CarePlanBuilder = class CarePlanBuilder {
    constructor() {
        this.reset();
    }

    reset() {
        this.currentPlan = {
            id: null,
            patientInfo: {
                name: '',
                age: '',
                gender: 'Kadın',
                diagnosis: '',
                room: '',
                vitals: {
                    ates: '',
                    tansiyonSystolic: '',
                    tansiyonDiastolic: '',
                    nabiz: '',
                    solunum: '',
                    spo2: '',
                    agri: '0'
                }
            },
            academicInfo: {
                university: '',
                faculty: '',
                course: '',
                instructor: '',
                hospital: '',
                date: '',
                student: ''
            },
            carePlans: []
        };
    }

    setPatientInfo(info) {
        this.currentPlan.patientInfo = { ...this.currentPlan.patientInfo, ...info };
        this.saveDraft();
    }

    setAcademicInfo(info) {
        if (!this.currentPlan.academicInfo) this.currentPlan.academicInfo = {};
        this.currentPlan.academicInfo = { ...this.currentPlan.academicInfo, ...info };
        this.saveDraft();
    }

    setVitals(vitals) {
        this.currentPlan.patientInfo.vitals = { ...this.currentPlan.patientInfo.vitals, ...vitals };
        this.saveDraft();
    }

    saveDraft() {
        try {
            localStorage.setItem('bakimrehberim_active_draft', JSON.stringify(this.currentPlan));
        } catch (e) {
            console.error('Draft autosave error:', e);
        }
    }

    loadDraft() {
        try {
            let data = localStorage.getItem('bakimrehberim_active_draft');
            if (!data) data = localStorage.getItem('nursiplan_active_draft');
            if (data) {
                const parsed = JSON.parse(data);
                if (parsed && (parsed.patientInfo?.name || (parsed.carePlans && parsed.carePlans.length > 0))) {
                    this.loadFullPlan(parsed);
                    return true;
                }
            }
        } catch (e) {
            console.error('Draft load error:', e);
        }
        return false;
    }

    /**
     * Yaşam bulgularına göre otomatik akıllı NANDA tanı önerileri üretir
     */
    getSmartSuggestions() {
        const vitals = this.currentPlan.patientInfo.vitals || {};
        const suggestions = [];
        const nandaList = window.NANDA_DIAGNOSES || [];

        const ates = parseFloat(vitals.ates);
        const spo2 = parseFloat(vitals.spo2);
        const solunum = parseFloat(vitals.solunum);
        const agri = parseFloat(vitals.agri);
        const tansiyonSys = parseFloat(vitals.tansiyonSystolic);
        const nabiz = parseFloat(vitals.nabiz);

        // 1. Ateş > 38.0
        if (!isNaN(ates) && ates >= 38.0) {
            const diag = nandaList.find(d => d.id === 'hipertermi');
            if (diag) suggestions.push({ diag, reason: `Vücut Sıcaklığı (${ates}°C) yüksek (≥ 38.0°C).` });
        } else if (!isNaN(ates) && ates >= 37.8) {
            const diag = nandaList.find(d => d.id === 'enfeksiyon_riski');
            if (diag) suggestions.push({ diag, reason: `Hafif ateş/subfebril durum (${ates}°C) enfeksiyon riski göstergesi.` });
        }

        // 2. Ağrı >= 4
        if (!isNaN(agri) && agri >= 4) {
            const diag = nandaList.find(d => d.id === 'akut_agri');
            if (diag) suggestions.push({ diag, reason: `Ağrı Skoru (${agri}/10) yüksek (≥ 4).` });
        }

        // 3. SpO2 <= 93 veya Solunum >= 22
        if (!isNaN(spo2) && spo2 <= 93) {
            const diag = nandaList.find(d => d.id === 'gaz_degisimi');
            if (diag) suggestions.push({ diag, reason: `SpO2 düzeyi (%${spo2}) düşük (≤ %93).` });
        }
        if (!isNaN(solunum) && solunum >= 24) {
            const diag = nandaList.find(d => d.id === 'solunum_yolu_kapanmasi');
            if (diag) suggestions.push({ diag, reason: `Solunum hızı (${solunum}/dk) yüksek (Takipne ≥ 24).` });
        }

        // 4. Tansiyon Sys <= 95 veya Nabiz >= 105
        if (!isNaN(tansiyonSys) && tansiyonSys <= 95) {
            const diag = nandaList.find(d => d.id === 'sivi_volum_eksikligi');
            if (diag) suggestions.push({ diag, reason: `Sistolik Tansiyon (${tansiyonSys} mmHg) düşük (Hipotansiyon).` });
        }
        if (!isNaN(nabiz) && nabiz >= 100) {
            const diag = nandaList.find(d => d.id === 'anksiyete');
            if (diag) suggestions.push({ diag, reason: `Nabız (${nabiz}/dk) yüksek (Taşikardi ≥ 100). Anksiyete veya ağrı sorgulanmalı.` });
        }

        return suggestions;
    }

    addCarePlanItem(carePlanItem) {
        if (!carePlanItem.diagnosisTitle) {
            const nandaList = window.NANDA_DIAGNOSES || [];
            const found = nandaList.find(d => d.id === carePlanItem.diagnosisId);
            carePlanItem.diagnosisTitle = found ? `${found.code} - ${found.title}` : carePlanItem.diagnosisId;
        }

        // Var olan aynı tanıyı tekrar eklemeyi önle
        const existingIndex = this.currentPlan.carePlans.findIndex(cp => cp.diagnosisId === carePlanItem.diagnosisId);
        if (existingIndex >= 0) {
            this.currentPlan.carePlans[existingIndex] = carePlanItem;
        } else {
            this.currentPlan.carePlans.push(carePlanItem);
        }
        this.saveDraft();
    }

    removeCarePlanItem(diagnosisId) {
        this.currentPlan.carePlans = this.currentPlan.carePlans.filter(cp => cp.diagnosisId !== diagnosisId);
        this.saveDraft();
    }

    loadFullPlan(planObject) {
        this.currentPlan = JSON.parse(JSON.stringify(planObject));
        const nandaList = window.NANDA_DIAGNOSES || [];
        if (this.currentPlan.carePlans) {
            this.currentPlan.carePlans.forEach(cp => {
                if (!cp.diagnosisTitle) {
                    const found = nandaList.find(d => d.id === cp.diagnosisId);
                    cp.diagnosisTitle = found ? `${found.code} - ${found.title}` : cp.diagnosisId;
                }
            });
        }
        this.saveDraft();
    }

    /**
     * Hastanın tıbbi tanısını ve tüm vital bulgularını analiz ederek
     * en az 10 adet Ana ve Yan Hemşirelik Bakım Planı üreten akıllı motor logic.
     */
    generateAutoCarePlans() {
        const info = this.currentPlan.patientInfo || {};
        const vitals = info.vitals || {};
        const nandaList = window.NANDA_DIAGNOSES || [];
        if (nandaList.length === 0) return [];

        const diagText = (info.diagnosis || '').trim();
        const diagLower = diagText.toLowerCase();

        const ates = parseFloat(vitals.ates);
        const spo2 = parseFloat(vitals.spo2);
        const solunum = parseFloat(vitals.solunum);
        const agri = parseFloat(vitals.agri);
        const tansiyonSys = parseFloat(vitals.tansiyonSystolic);
        const tansiyonDia = parseFloat(vitals.tansiyonDiastolic);
        const nabiz = parseFloat(vitals.nabiz);
        const age = parseInt(info.age) || 0;
        const weight = parseFloat(info.weight);
        const height = parseFloat(info.height);
        let bmi = 0;
        if (weight > 0 && height > 0) {
            const hM = height / 100;
            bmi = Math.round((weight / (hM * hM)) * 10) / 10;
        }

        // Ana ve Yan tanı ID listeleri
        const mainDiagIds = new Set();
        const secondaryDiagIds = new Set();

        // 1. TIBBİ TANI ANALİZİ (Medical Diagnosis Keyword Engine)
        const isRespiratory = /koah|pnömoni|pnemonie|astım|astim|solunum|bronşit|plevral|covid|atelektazi|akciğer/i.test(diagLower);
        const isSurgical = /post-op|postop|cerrahi|ameliyat|apandektomi|kolesistektomi|mastektomi|protez|laparoskopi|sezaryen|kese|yara|dikiş/i.test(diagLower);
        const isCardiac = /kalp|hipertansiyon|kky|mi|myokard|iskemi|aritmi|angina|dolaşım|koroner/i.test(diagLower);
        const isDiabetes = /diyabet|diabet|şeker|seker|hipoglisemi|hiperglisemi/i.test(diagLower);
        const isNeuro = /inme|svo|felç|felc|travma|nöroloji|noroloji|parkinson|koma|epilepsi/i.test(diagLower);
        const isRenal = /böbrek|bobrek|diyaliz|kby|aby|nefrit|üroloji/i.test(diagLower);
        const isOnco = /kanser|tümör|tumor|onkoloji|kemoterapi|radyoterapi|lenfoma/i.test(diagLower);
        const isOrtho = /kırık|kirik|ortopedi|protez|amputasyon|çıkık|trauma/i.test(diagLower);
        const isGI = /gis|mide|ülser|ulser|ishal|gastrit|siroz|karaciğer|hepatit/i.test(diagLower);

        // Tıbbi tanı eşleşmelerini Ana Bakım Planı olarak ekle
        if (isRespiratory) {
            mainDiagIds.add('gaz_degisimi');
            mainDiagIds.add('solunum_yolu_kapanmasi');
            mainDiagIds.add('etkisiz_solunum_deseni');
            secondaryDiagIds.add('aktivite_toleranssizligi');
            secondaryDiagIds.add('enfeksiyon_riski');
        }
        if (isSurgical) {
            mainDiagIds.add('akut_agri');
            mainDiagIds.add('doku_butunlugu_bozulma');
            mainDiagIds.add('enfeksiyon_riski');
            secondaryDiagIds.add('yatak_ici_hareketlilik');
            secondaryDiagIds.add('sivi_volum_eksikligi');
            secondaryDiagIds.add('anksiyete');
        }
        if (isCardiac) {
            mainDiagIds.add('kardiyak_cikti_azalma');
            mainDiagIds.add('periferik_doku_perfuzyonu');
            mainDiagIds.add('sivi_volum_fazlaligi');
            secondaryDiagIds.add('aktivite_toleranssizligi');
            secondaryDiagIds.add('anksiyete');
        }
        if (isDiabetes) {
            mainDiagIds.add('kan_sekeri_dengesizligi');
            mainDiagIds.add('periferik_doku_perfuzyonu');
            secondaryDiagIds.add('enfeksiyon_riski');
            secondaryDiagIds.add('doku_butunlugu_bozulma');
            secondaryDiagIds.add('bilgi_eksikligi');
        }
        if (isNeuro) {
            mainDiagIds.add('fiziksel_hareketlilik');
            mainDiagIds.add('yutma_guclugu');
            secondaryDiagIds.add('oz_bakim_eksikligi');
            secondaryDiagIds.add('dusme_riski');
            secondaryDiagIds.add('sozel_iletisim_bozulma');
        }
        if (isRenal) {
            mainDiagIds.add('sivi_volum_fazlaligi');
            mainDiagIds.add('elektrolit_dengesizligi');
            secondaryDiagIds.add('enfeksiyon_riski');
            secondaryDiagIds.add('yorgunluk');
        }
        if (isOnco) {
            mainDiagIds.add('yorgunluk');
            mainDiagIds.add('beslenme_dengesizligi_az');
            secondaryDiagIds.add('bulanti_kusma');
            secondaryDiagIds.add('enfeksiyon_riski');
            secondaryDiagIds.add('anksiyete');
        }
        if (isOrtho) {
            mainDiagIds.add('fiziksel_hareketlilik');
            mainDiagIds.add('akut_agri');
            secondaryDiagIds.add('oz_bakim_eksikligi');
            secondaryDiagIds.add('dusme_riski');
            secondaryDiagIds.add('periferik_doku_perfuzyonu');
        }
        if (isGI) {
            mainDiagIds.add('sivi_volum_eksikligi');
            mainDiagIds.add('beslenme_dengesizligi_az');
            secondaryDiagIds.add('akut_agri');
            secondaryDiagIds.add('bulanti_kusma');
        }

        // 2. VİTAL BULGULAR & KLİNİK ANALİZİ (Dynamic Vitals Rules Engine)

        // Ateş
        if (!isNaN(ates) && ates >= 38.0) {
            mainDiagIds.add('hipertermi');
        } else if (!isNaN(ates) && ates >= 37.5) {
            secondaryDiagIds.add('enfeksiyon_riski');
        }

        // SpO2 ve Solunum
        if (!isNaN(spo2) && spo2 <= 93) {
            mainDiagIds.add('gaz_degisimi');
        }
        if (!isNaN(solunum) && solunum >= 24) {
            mainDiagIds.add('solunum_yolu_kapanmasi');
        } else if (!isNaN(solunum) && solunum >= 20) {
            mainDiagIds.add('etkisiz_solunum_deseni');
        }

        // Ağrı
        if (!isNaN(agri) && agri >= 4) {
            mainDiagIds.add('akut_agri');
        } else if (!isNaN(agri) && agri >= 1) {
            secondaryDiagIds.add('akut_agri');
        }

        // Tansiyon & Nabız
        if (!isNaN(tansiyonSys) && (tansiyonSys >= 140 || (!isNaN(tansiyonDia) && tansiyonDia >= 90))) {
            mainDiagIds.add('periferik_doku_perfuzyonu');
        }
        if (!isNaN(tansiyonSys) && tansiyonSys <= 95) {
            mainDiagIds.add('sivi_volum_eksikligi');
        }
        if (!isNaN(nabiz) && nabiz >= 100) {
            secondaryDiagIds.add('kardiyak_cikti_azalma');
            secondaryDiagIds.add('anksiyete');
        }

        // VKİ ve Yaş
        if (bmi > 0 && bmi < 18.5) {
            mainDiagIds.add('beslenme_dengesizligi_az');
        } else if (bmi >= 30) {
            secondaryDiagIds.add('beslenme_dengesizligi_fazla');
        }
        if (age >= 65) {
            secondaryDiagIds.add('dusme_riski');
            secondaryDiagIds.add('yatak_ici_hareketlilik');
        }

        // Fallback varsayılan ana ve yan tanılar (Tıbbi tanı girilmemişse veya vital bulgular normalse)
        if (mainDiagIds.size === 0) {
            mainDiagIds.add('akut_agri');
            mainDiagIds.add('etkisiz_solunum_deseni');
            mainDiagIds.add('doku_butunlugu_bozulma');
            mainDiagIds.add('enfeksiyon_riski');
        }

        // Evrensel Yan Bakım Planı Havuzu (Güvenlik, Risk Önleme, Öz Bakım ve Taburculuk)
        const universalSecondaryPool = [
            'dusme_riski',
            'enfeksiyon_riski',
            'basinc_yaralanmasi_riski',
            'anksiyete',
            'uyku_bicimi_bozulma',
            'oz_bakim_eksikligi',
            'bilgi_eksikligi',
            'sagligi_yonetme',
            'fiziksel_hareketlilik',
            'yatak_ici_hareketlilik',
            'yorgunluk',
            'sivi_volum_eksikligi'
        ];

        // 3. EN AZ 10 TANE BAKIM PLANI OLUŞTURMA VE BİRLEŞTİRME
        const finalPlanItems = [];
        const addedDiagIds = new Set();

        // Önce Ana Bakım Planlarını ekle
        mainDiagIds.forEach(id => {
            const diag = nandaList.find(d => d.id === id);
            if (diag && !addedDiagIds.has(id)) {
                addedDiagIds.add(id);
                finalPlanItems.push(this.buildCustomizedCarePlanItem(diag, true, info, vitals));
            }
        });

        // Sonra Öncelikli Yan Bakım Planlarını ekle
        secondaryDiagIds.forEach(id => {
            const diag = nandaList.find(d => d.id === id);
            if (diag && !addedDiagIds.has(id)) {
                addedDiagIds.add(id);
                finalPlanItems.push(this.buildCustomizedCarePlanItem(diag, false, info, vitals));
            }
        });

        // Eğer toplam plan sayısı 10'dan azsa, evrensel yan tanı havuzundan tamamla!
        for (const secId of universalSecondaryPool) {
            if (finalPlanItems.length >= 10) break; // En az 10 adede ulaşıldı
            const diag = nandaList.find(d => d.id === secId);
            if (diag && !addedDiagIds.has(secId)) {
                addedDiagIds.add(secId);
                finalPlanItems.push(this.buildCustomizedCarePlanItem(diag, false, info, vitals));
            }
        }

        // Eğer hala 10'dan azsa (veri havuzundan herhangi tanı ekle)
        if (finalPlanItems.length < 10) {
            for (const diag of nandaList) {
                if (finalPlanItems.length >= 10) break;
                if (!addedDiagIds.has(diag.id)) {
                    addedDiagIds.add(diag.id);
                    finalPlanItems.push(this.buildCustomizedCarePlanItem(diag, false, info, vitals));
                }
            }
        }

        // Güncel plana kaydet
        this.currentPlan.carePlans = finalPlanItems;
        this.saveDraft();

        return finalPlanItems;
    }

    /**
     * Tanıyı hastanın vital bulgularına ve tıbbi tanısına özel etiyoloji ve belirtilerle zenginleştirir.
     * Akademik PES Formatı: Problem (NANDA) - Etiyoloji (...ile ilişkili) - Belirtiler (...ile kanıtlanan)
     */
    buildCustomizedCarePlanItem(diag, isMainPlan, info, vitals) {
        const diagText = info.diagnosis || 'Klinik Durum';
        const ates = vitals.ates ? `${vitals.ates}°C` : '';
        const spo2 = vitals.spo2 ? `%${vitals.spo2}` : '';
        const solunum = vitals.solunum ? `${vitals.solunum}/dk` : '';
        const agri = vitals.agri ? `${vitals.agri}/10 NRS` : '';
        const tansiyon = (vitals.tansiyonSystolic && vitals.tansiyonDiastolic) ? `${vitals.tansiyonSystolic}/${vitals.tansiyonDiastolic} mmHg` : '';

        // Özel Etiyoloji Metni Oluşturma (PES: ...ile ilişkili)
        let rawEtiology = '';
        if (diag.etiology && diag.etiology.length > 0) {
            rawEtiology = diag.etiology.slice(0, 2).join('; ');
        } else {
            rawEtiology = `${diagText} patofizyolojik süreci ve doku irritasyonu`;
        }

        let etiologyText = rawEtiology;
        if (!etiologyText.toLowerCase().includes('ilişkili')) {
            etiologyText = `${rawEtiology} ile ilişkili`;
        }

        // Hastaya Özel Fiziksel Belirti Metni Oluşturma (PES: ...ile kanıtlanan)
        const symptomsArr = [];
        if (diagText) symptomsArr.push(`Tıbbi Tanı: ${diagText}`);
        if (ates && (diag.id === 'hipertermi' || diag.id === 'enfeksiyon_riski')) symptomsArr.push(`Vücut Sıcaklığı: ${ates}`);
        if (spo2 && (diag.id === 'gaz_degisimi' || diag.id === 'solunum_yolu_kapanmasi' || diag.id === 'etkisiz_solunum_deseni')) symptomsArr.push(`SpO2 Düzeyi: ${spo2}`);
        if (solunum && (diag.id === 'etkisiz_solunum_deseni' || diag.id === 'solunum_yolu_kapanmasi')) symptomsArr.push(`Solunum Hızı: ${solunum}`);
        if (agri && (diag.id === 'akut_agri' || diag.id === 'kronik_agri')) symptomsArr.push(`Ağrı Skoru: ${agri}`);
        if (tansiyon && (diag.id === 'periferik_doku_perfuzyonu' || diag.id === 'kardiyak_cikti_azalma')) symptomsArr.push(`Kan Basıncı: ${tansiyon}`);

        if (diag.symptoms && diag.symptoms.length > 0) {
            symptomsArr.push(diag.symptoms.slice(0, 2).join('; '));
        }

        let rawSymptoms = symptomsArr.join(' | ');
        let symptomsText = rawSymptoms;
        if (rawSymptoms && !rawSymptoms.toLowerCase().includes('kanıtlanan')) {
            symptomsText = `${rawSymptoms} ile kanıtlanan`;
        }

        // NOC ve NIC Seçimleri
        const selectedNoc = diag.noc ? [...diag.noc] : ['Hasta çıktısı fizyolojik sınırlar içinde tutulacak.'];
        const selectedNic = diag.nic ? [...diag.nic] : ['Hemşirelik izlemi ve bakımı 2 saatte bir sürdürülecek.'];

        return {
            diagnosisId: diag.id,
            diagnosisTitle: `${diag.code} - ${diag.title}`,
            category: diag.category,
            isMainPlan: isMainPlan,
            etiology: etiologyText,
            symptoms: symptomsText,
            noc: selectedNoc,
            nic: selectedNic,
            scoreBefore: '2',
            scoreTarget: '4',
            frequency: '2 saatte bir',
            evaluationStatus: '🎯 Hedefe Ulaşıldı (%85 Hemşirelik Girişimleri Başarılı)'
        };
    }
};

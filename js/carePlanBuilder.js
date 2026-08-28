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
};

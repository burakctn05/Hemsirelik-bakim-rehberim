/**
 * Hemşirelik Bakım Rehberim - Klinik Hazır Bakım Planı Şablonları (15 Detaylı Vaka)
 */

window.CLINICAL_TEMPLATES = [
    {
        id: 'post_op_care',
        title: '🏥 Cerrahi Sonrası (Post-Op) Bakım Planı',
        description: 'Genel cerrahi veya ortopedik cerrahi geçiren hastalarda akut ağrı, enfeksiyon riski ve mobilite bozulması takibi.',
        tags: ['Cerrahi', 'Post-Op', 'Ağrı', 'Enfeksiyon'],
        patientInfo: {
            name: 'Ahmet Y.',
            age: 52,
            gender: 'Erkek',
            diagnosis: 'Post-Op Apandektomi (Günübirlik/Yatan)',
            room: 'Cerrahi Servis 304',
            vitals: { ates: 37.6, tansiyonSystolic: 135, tansiyonDiastolic: 85, nabiz: 88, solunum: 18, spo2: 97, agri: 6 }
        },
        carePlans: [
            {
                diagnosisId: 'akut_agri',
                diagnosisTitle: '00132 - Akut Ağrı',
                etiology: 'Cerrahi insizyon ve doku travmasına bağlı olarak',
                symptoms: 'Ağrı skorunun 6/10 olması, insizyon bölgesinde hassasiyet ve harekette çekinme şeklinde gösterilen',
                noc: [
                    'Hastanın ağrı skoru 3\'ün altına indirilecek.',
                    'Hasta mobilize olurken ve öksürürken ağrısının hafiflediğini ifade edecek.'
                ],
                nic: [
                    'Ağrı şiddeti (0-10 NRS ölçeği ile) 2 saatte bir değerlendirilecek.',
                    'Hekim istemine uygun IV analjezik zamanında infüze edilecek ve etkisi izlenecek.',
                    'İnsizyon bölgesi öksürük ve hareket esnasında yastık ile desteklenecek.',
                    'Hastanın rahat edebileceği pozisyon (yarı-Fowler/dizler bükük) sağlanacak.'
                ],
                evaluationStatus: 'Kısmen Ulaşıldı (Analjezik sonrası ağrı skoru 3\'e geriledi).'
            },
            {
                diagnosisId: 'enfeksiyon_riski',
                diagnosisTitle: '00004 - Enfeksiyon Riski',
                etiology: 'Cerrahi insizyon, doku bütünlüğünde bozulma ve iv kateter bulunmasına bağlı olarak',
                symptoms: 'Cerrahi yara ve invaziv hat varlığı ile tanımlanan (Risk Tanısı)',
                noc: [
                    'Yara yerinde enfeksiyon belirtileri gelişmeyecek.',
                    'Hastanın ateşi 37.5 °C altında kalacak.'
                ],
                nic: [
                    'Cerrahi pansuman steril teknikle değiştirilecek.',
                    'İnsizyon hattı enfeksiyon yönünden kontrol edilecek.',
                    'El hijyeni sağlanacak.',
                    'Profilaktik antibiyotik tedavisi uygulanacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı (Yara yeri temiz ve kuru).'
            }
        ]
    },
    {
        id: 'koah_respiratory',
        title: '🫁 KOAH ve Solunum Sıkıntısı Bakım Planı',
        description: 'Akut KOAH alevlenmesi yaşayan hastalarda gaz değişimi bozulması ve etkisiz solunum yolu temizliği takibi.',
        tags: ['Dahiliye', 'Solunum', 'KOAH', 'Dispne'],
        patientInfo: {
            name: 'Mehmet K.',
            age: 68,
            gender: 'Erkek',
            diagnosis: 'KOAH Akut Alevlenme + Solunum Yetmezliği',
            room: 'Göğüs Hastalıkları 208',
            vitals: { ates: 37.1, tansiyonSystolic: 140, tansiyonDiastolic: 90, nabiz: 104, solunum: 26, spo2: 89, agri: 1 }
        },
        carePlans: [
            {
                diagnosisId: 'gaz_degisimi',
                diagnosisTitle: '00030 - Gaz Değişiminde Bozulma',
                etiology: 'Alveoler-kapiller zar değişiklikleri ve kronik havayolu obstrüksiyonuna bağlı olarak',
                symptoms: 'SpO2 %89, takipne (26/dk), dudaklarda siyanoz ve dispne ile gösterilen',
                noc: [
                    'SpO2 düzeyi hedef %92-94 aralığında tutulacak.',
                    'Solunum hızı 20/dk altına düşecek ve dispne hissi gerileyecek.'
                ],
                nic: [
                    'SpO2 takibi sürekli yapılacak.',
                    'Hekim istemine uygun olarak 2 L/dk Oksijen verilecek.',
                    'High-Fowler pozisyonu verilecek.',
                    'Nebülizatör tedavisi uygulanacak.'
                ],
                evaluationStatus: 'Kısmen Ulaşıldı (SpO2 %93).'
            },
            {
                diagnosisId: 'solunum_yolu_kapanmasi',
                diagnosisTitle: '00031 - Etkisiz Solunum Yolu Temizliği',
                etiology: 'Bronşiyal sekresyon artışı ve yapışkan balgama bağlı olarak',
                symptoms: 'Etkisiz öksürük ve auskultasyonda ronküs sesleri ile gösterilen',
                noc: [
                    'Sekresyonların atılması ve solunum yollarının açık tutulması sağlanacak.'
                ],
                nic: [
                    'Etkili öksürme egzersizleri gösterilecek.',
                    'Sıvı alımı artırılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            }
        ]
    },
    {
        id: 'stroke_neurology',
        title: '🧠 Serebrovasküler Olay (İnme / Strok) Bakım Planı',
        description: 'İnme geçiren nöroloji hastalarında serebral doku perfüzyonu, aspirasyon riski ve mobilite bozulması bakımı.',
        tags: ['Nöroloji', 'İnme/Strok', 'Mobilite', 'Aspirasyon'],
        patientInfo: {
            name: 'Hasan V.',
            age: 74,
            gender: 'Erkek',
            diagnosis: 'Akut İskemik Serebrovasküler Olay (Sağ Hemiparezi)',
            room: 'Nöroloji Servisi 108',
            vitals: { ates: 36.9, tansiyonSystolic: 160, tansiyonDiastolic: 95, nabiz: 84, solunum: 19, spo2: 95, agri: 0 }
        },
        carePlans: [
            {
                diagnosisId: 'serebral_doku_perfuzyonu_bozulma',
                diagnosisTitle: '00201 - Etkisiz Serebral Doku Perfüzyonu Riski',
                etiology: 'Serebral arteriyel obstrüksiyon ve beyin iskemisine bağlı olarak',
                symptoms: 'Sağ tarafta kuvvet kaybı (hemiparezi), hafif konuşma bozukluğu (disatri) ile tanımlanan',
                noc: [
                    'Nörolojik durum stabil kalacak, GKS skoru düşmeyecek.',
                    'Tansiyon değerleri hekimin belirlediği tolerans aralığında tutulacak.'
                ],
                nic: [
                    'GKS ve nörolojik muayene 2 saatte bir yapılacak.',
                    'Yatak başı 30 derece yükseltilecek.',
                    'Baş nötral pozisyonda tutulacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı (GKS: 14, nörolojik tablo stabil).'
            },
            {
                diagnosisId: 'aspirasyon_riski',
                diagnosisTitle: '00039 - Aspirasyon Riski',
                etiology: 'Nörolojik hasara bağlı yutma güçlüğü (disfaji) ve fasiyel pareziye bağlı olarak',
                symptoms: 'Sıvı gıdalarla öksürme ve yutma refleksinde zayıflama ile tanımlanan (Risk Tanısı)',
                noc: [
                    'Beslenme esnasında akciğerlere aspirasyon yaşanmayacak.'
                ],
                nic: [
                    'Beslenme ve oral ilaç alımında hasta High-Fowler (90°) pozisyonuna getirilecek.',
                    'Oral gıdalar püre kıvamında ve sıvılar koyulaştırılarak verilecek.',
                    'Yatak başında aspiratör cihazı hazır tutulacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı (Aspirasyon bulgusu yok).'
            }
        ]
    },
    {
        id: 'mi_cardiac_care',
        title: '❤️ Akut Miyokard İnfarktüsü (MI) Kardiyak Bakım Planı',
        description: 'Akut koroner sendrom ve MI hastalarında göğüs ağrısı, kardiyak debi riski ve anksiyete yönetimi.',
        tags: ['Kardiyoloji', 'Miyokard İnfarktüsü', 'Ağrı', 'Kardiyak'],
        patientInfo: {
            name: 'Kemal B.',
            age: 58,
            gender: 'Erkek',
            diagnosis: 'Akut Anterior STEMI (Stent Uygulanmış)',
            room: 'Kardiyoloji Yoğun Bakım K-2',
            vitals: { ates: 37.0, tansiyonSystolic: 110, tansiyonDiastolic: 70, nabiz: 92, solunum: 22, spo2: 96, agri: 5 }
        },
        carePlans: [
            {
                diagnosisId: 'akut_agri',
                diagnosisTitle: '00132 - Akut Ağrı',
                etiology: 'Miyokard iskemisi ve koroner arter tıkanıklığına bağlı olarak',
                symptoms: 'Retrosternal baskı tarzında göğüs ağrısı (NRS: 5/10) ile gösterilen',
                noc: [
                    'Hastanın göğüs ağrısı tamamen (0/10) geçecek.'
                ],
                nic: [
                    'Sublingual Nitrogliserin veya IV Morfin uygulanacak.',
                    'Hastaya mutlak yatak istirahati verilecek.',
                    'Oksijen desteği sürdürülecek.'
                ],
                evaluationStatus: 'Kısmen Ulaşıldı (Ağrı 1/10\'e geriledi).'
            },
            {
                diagnosisId: 'kardiyak_debi_azalma',
                diagnosisTitle: '00029 - Kardiyak Debide Azalma',
                etiology: 'Miyokard doku nekrozu ve sol ventrikül kontraktilite azalmasına bağlı olarak',
                symptoms: 'Kardiyak yetmezlik riski ile tanımlanan (Risk Tanısı)',
                noc: [
                    'Kardiyak ritim ve doku perfüzyonu yeterli tutulacak.'
                ],
                nic: [
                    'EKG monitörizasyonu sürekli takip edilecek.',
                    'Saatlik idrar çıkışı (AÇT) takibi yapılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı (Monitörde sinüs ritmi).'
            }
        ]
    },
    {
        id: 'maternity_postpartum',
        title: '🤰 Kadın Doğum (Postpartum / Sezaryen) Bakım Planı',
        description: 'Sezaryen doğum sonrası annede akut ağrı, enfeksiyon riski ve emzirme danışmanlığı takibi.',
        tags: ['Kadın Doğum', 'Postpartum', 'Sezaryen', 'Emzirme'],
        patientInfo: {
            name: 'Merve S.',
            age: 29,
            gender: 'Kadın',
            diagnosis: 'Primer C/S (Sezaryen Doğum Post-Op 1. Gün)',
            room: 'Kadın Doğum Servisi 201',
            vitals: { ates: 37.2, tansiyonSystolic: 120, tansiyonDiastolic: 75, nabiz: 80, solunum: 17, spo2: 98, agri: 5 }
        },
        carePlans: [
            {
                diagnosisId: 'akut_agri',
                diagnosisTitle: '00132 - Akut Ağrı',
                etiology: 'Cerrahi Pfannenstiel insizyonu ve uterus involüsyon kramplarına bağlı olarak',
                symptoms: 'Alt karın bölgesinde 5/10 şiddetinde ağrı ile gösterilen',
                noc: [
                    'Annelerin ağrı skoru 3\'ün altına gerileyecek.'
                ],
                nic: [
                    'Analjezik tedavisi emzirme saatlerinden 30 dk önce verilecek.',
                    'Fundus yüksekliği ve loşia (kanama) takibi yapılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı (Ağrı geriledi).'
            },
            {
                diagnosisId: 'enfeksiyon_riski',
                diagnosisTitle: '00004 - Enfeksiyon Riski',
                etiology: 'Cerrahi insizyon ve loşiyel akıntı varlığına bağlı olarak',
                symptoms: 'Sezaryen yarası bulunması ile tanımlanan (Risk Tanısı)',
                noc: [
                    'Yara yerinde ve endometriumda enfeksiyon gelişmeyecek.'
                ],
                nic: [
                    'Sezaryen pansumanı kuru ve steril tutulacak.',
                    'Loşia miktarı, rengi ve kokusu takip edilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı (Ateş 36.7°C, loşia rubra normal).'
            }
        ]
    },
    {
        id: 'icu_sepsis',
        title: '⚡ Yoğun Bakım Sepsis & Septik Şok Bakım Planı',
        description: 'Şiddetli sepsis vakalarında organ perfüzyonu, yüksek ateş ve mekanik ventilasyon desteği bakımı.',
        tags: ['Yoğun Bakım', 'Sepsis', 'Şok', 'Perfüzyon'],
        patientInfo: {
            name: 'Ali R.',
            age: 71,
            gender: 'Erkek',
            diagnosis: 'Ürosepsis + Septik Şok Tablosu',
            room: 'Genel Yoğun Bakım YB-4',
            vitals: { ates: 38.9, tansiyonSystolic: 82, tansiyonDiastolic: 50, nabiz: 128, solunum: 28, spo2: 91, agri: 0 }
        },
        carePlans: [
            {
                diagnosisId: 'dolasim_perfuzyon_bozulma',
                diagnosisTitle: '00204 - Etkisiz Periferik Doku Perfüzyonu',
                etiology: 'Sistemik inflamatuar yanıta (SIRS) bağlı hipotansiyona bağlı olarak',
                symptoms: 'Ortalama kan basıncının < 65 mmHg olması ve oligüri ile gösterilen',
                noc: [
                    'Ortalama Arter Basıncı (OAB) > 65 mmHg olacak.'
                ],
                nic: [
                    'Hızlı IV kristaloid yüklemesi yapılacak.',
                    'Vasopresör (Noradrenalin) infüzyonu uygulanacak.'
                ],
                evaluationStatus: 'Kısmen Ulaşıldı (OAB: 68 mmHg).'
            },
            {
                diagnosisId: 'hipertermi',
                diagnosisTitle: '00007 - Hipertermi (Yüksek Ateş)',
                etiology: 'Bakteriyel sepsis enfeksiyonuna bağlı olarak',
                symptoms: 'Ateşin 38.9°C olması ile gösterilen',
                noc: [
                    'Vücut sıcaklığı 37.5°C altına düşürülecek.'
                ],
                nic: [
                    'Geniş spektrumlu IV antibiyotik başlanacak.',
                    'Ilık kompres ve soğutucu pedler uygulanacak.'
                ],
                evaluationStatus: 'Kısmen Ulaşıldı (Ateş 37.8°C).'
            }
        ]
    },
    {
        id: 'burn_injury',
        title: '🔥 Acil Servis / Yanık Yaralanması Bakım Planı',
        description: '2.-3. derece termal yanıklarda sıvı şoku önleme, doku bütünlüğü ve ağrı yönetimi.',
        tags: ['Acil', 'Yanık', 'Sıvı Şoku', 'Yara Bakımı'],
        patientInfo: {
            name: 'Murat C.',
            age: 35,
            gender: 'Erkek',
            diagnosis: '%25 TAVY 2. Derece Termal Yanık',
            room: 'Yanık Ünitesi Y-2',
            vitals: { ates: 37.4, tansiyonSystolic: 100, tansiyonDiastolic: 65, nabiz: 112, solunum: 22, spo2: 96, agri: 8 }
        },
        carePlans: [
            {
                diagnosisId: 'sivi_volum_eksikligi',
                diagnosisTitle: '00027 - Sıvı Volüm Eksikliği (Dehidratasyon)',
                etiology: 'Yanık yüzeyinden aşırı plazma kaybına bağlı olarak',
                symptoms: 'Hipotansiyon, taşikardi ve oligüri ile gösterilen',
                noc: [
                    'Parkland formülüne uygun sıvı resüsitasyonu sağlanacak.'
                ],
                nic: [
                    'Parkland formülüne göre (4 mL x kg x %Yanık) Ringer Laktat verilecek.',
                    'Saatlik idrar takibi yapılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı (İdrar çıkışı 40 mL/saat).'
            },
            {
                diagnosisId: 'cilt_butunlugu_bozulma',
                diagnosisTitle: '00046 - Doku / Cilt Bütünlüğünde Bozulma',
                etiology: 'Termal ısı temasında epidermiş harabiyetine bağlı olarak',
                symptoms: 'Açık erosiv yanık yaraları ile gösterilen',
                noc: [
                    'Yanık yaralarında enfeksiyon gelişmeyecek.'
                ],
                nic: [
                    'Aseptik koşullarda gümüş sülfadiazinli yanık pansumanı yapılacak.'
                ],
                evaluationStatus: 'Kısmen Ulaşıldı.'
            }
        ]
    },
    {
        id: 'orthopedic_fracture',
        title: '🦴 Ortopedi Femur Kırığı & Ameliyat Öncesi Planı',
        description: 'Trafik kazası veya düşme sonrası femur kırığı olan hastada immobilizasyon, ağrı ve düşme riski.',
        tags: ['Ortopedi', 'Kırık', 'İmmobilite', 'Traksiyon'],
        patientInfo: {
            name: 'İbrahim E.',
            age: 48,
            gender: 'Erkek',
            diagnosis: 'Sol Femur Şaft Kırığı (Traksiyonda)',
            room: 'Ortopedi Servisi 402',
            vitals: { ates: 36.8, tansiyonSystolic: 130, tansiyonDiastolic: 80, nabiz: 86, solunum: 17, spo2: 97, agri: 7 }
        },
        carePlans: [
            {
                diagnosisId: 'akut_agri',
                diagnosisTitle: '00132 - Akut Ağrı',
                etiology: 'Kemik bütünlüğünün bozulması ve kas spazmlarına bağlı olarak',
                symptoms: 'Sol uylukta 7/10 şiddetinde ağrı ile gösterilen',
                noc: ['Ağrı skoru 3\'ün altına inerek kas spazmları yatışacak.'],
                nic: [
                    'Traksiyon ağırlıklarının aksı korunacak.',
                    'Düzenli analjezik tedavisi verilecek.'
                ],
                evaluationStatus: 'Kısmen Ulaşıldı (Ağrı 4/10).'
            },
            {
                diagnosisId: 'fiziksel_hareket_bozuklugu',
                diagnosisTitle: '00085 - Fiziksel Mobilitede Bozulma',
                etiology: 'Kırık immobilizasyonu ve traksiyona bağlı olarak',
                symptoms: 'Yatağa bağımlılık ile gösterilen',
                noc: ['DVT ve bası yarası önlenecek.'],
                nic: [
                    'Sağlam ekstremitelere aktif egzersiz yaptırılacak.',
                    'Sakruma 2 saatte bir pozisyon verilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            }
        ]
    },
    {
        id: 'psychiatry_depression',
        title: '🧠 Psikiyatri Majör Depresyon Bakım Planı',
        description: 'Depresif nöbet geçiren hastalarda öz bakım eksikliği, umutsuzluk ve uyku bozukluğu takibi.',
        tags: ['Psikiyatri', 'Depresyon', 'Öz Bakım', 'Uyku'],
        patientInfo: {
            name: 'Selin B.',
            age: 34,
            gender: 'Kadın',
            diagnosis: 'Majör Depresif Bozukluk (Yatan)',
            room: 'Psikiyatri Servisi P-3',
            vitals: { ates: 36.6, tansiyonSystolic: 110, tansiyonDiastolic: 70, nabiz: 72, solunum: 15, spo2: 99, agri: 0 }
        },
        carePlans: [
            {
                diagnosisId: 'oz_bakim_eksikligi_banyo',
                diagnosisTitle: '00108 - Öz Bakımda Eksiklik: Banyo ve Hijyen',
                etiology: 'Enerji azlığı ve motivasyon kaybına bağlı olarak',
                symptoms: 'Öz bakımını ihmal etme ve banyoyu reddetme ile gösterilen',
                noc: ['Hasta öz bakım aktivitelerine katılacak.'],
                nic: [
                    'Küçük ulaşılabilir öz bakım hedefleri konulacak.',
                    'Teşvik edici destek verilecek.'
                ],
                evaluationStatus: 'Kısmen Ulaşıldı.'
            },
            {
                diagnosisId: 'uyku_biciminde_bozulma',
                diagnosisTitle: '00096 - Uyku Biçiminde Bozulma (İnsomnia)',
                etiology: 'Anksiyete ve zihinsel ruminasyonlara bağlı olarak',
                symptoms: 'Gece uyanma ve sabah yorgun kalkma ile gösterilen',
                noc: ['Gece 6-7 saat kesintisiz uyku sağlanacak.'],
                nic: [
                    'Gündüz uyumaları kısıtlanacak.',
                    'Gevşeme müziği sağlanacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            }
        ]
    },
    {
        id: 'oncology_chemo',
        title: '🩺 Onkoloji Kemoterapi Yan Etkileri Planı',
        description: 'Kanser tedavisi alan hastalarda şiddetli bulantı, nötropenik enfeksiyon riski ve beslenme bozukluğu.',
        tags: ['Onkoloji', 'Kemoterapi', 'Bulantı', 'Nötropeni'],
        patientInfo: {
            name: 'Gönül K.',
            age: 56,
            gender: 'Kadın',
            diagnosis: 'Meme Ca (Kemoterapi 2. Kür)',
            room: 'Onkoloji Günübirlik 12',
            vitals: { ates: 37.5, tansiyonSystolic: 115, tansiyonDiastolic: 75, nabiz: 88, solunum: 18, spo2: 97, agri: 2 }
        },
        carePlans: [
            {
                diagnosisId: 'bulanti',
                diagnosisTitle: '00178 - Bulantı',
                etiology: 'Kemoterapi ilaçlarının emetojenik etkisine bağlı olarak',
                symptoms: 'Sürekli öğürme hissi ve iştahsızlık ile gösterilen',
                noc: ['Bulantı kontrol altına alınacak.'],
                nic: [
                    'Antiemetik ilaçlar zamanında verilecek.',
                    'Kuru gıdalar (kraker, leblebi) önerilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'enfeksiyon_riski',
                diagnosisTitle: '00004 - Enfeksiyon Riski',
                etiology: 'Kemoterapiye bağlı nötropeniye (WBC düşüklüğü) bağlı olarak',
                symptoms: 'Lökosit düşüklüğü ile tanımlanan (Risk Tanısı)',
                noc: ['Nötropenik enfeksiyon gelişmeyecek.'],
                nic: [
                    'Hasta Nötropenik İzolasyon odasına alınacak.',
                    'Taze çiçek ve ziyaretçi kısıtlanacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            }
        ]
    },
    {
        id: 'hypertension_cardio',
        title: '💔 Hipertansif Kriz ve Kardiyovasküler Plan',
        description: 'Şiddetli kan basıncı yüksekliği ile başvuran hastalarda labil hipertansiyon ve baş ağrısı.',
        tags: ['Kardiyoloji', 'Hipertansiyon', 'Baş Ağrısı'],
        patientInfo: {
            name: 'Nuri T.',
            age: 63,
            gender: 'Erkek',
            diagnosis: 'Hipertansif Atak',
            room: 'Dahiliye Acil Gözlem G-1',
            vitals: { ates: 36.7, tansiyonSystolic: 185, tansiyonDiastolic: 110, nabiz: 96, solunum: 20, spo2: 97, agri: 6 }
        },
        carePlans: [
            {
                diagnosisId: 'kan_basinci_labilite_riski',
                diagnosisTitle: '00239 - Kan Basıncında Labilite (Dalgalanma) Riski',
                etiology: 'Sistemik vasküler direnç artışına bağlı olarak',
                symptoms: 'Tansiyonun 185/110 mmHg olması ve zonklayıcı baş ağrısı ile gösterilen',
                noc: ['Kan basıncı kademeli düşürülecek.'],
                nic: [
                    'Hasta yarı-oturur pozisyona getirilecek.',
                    'IV/Oral antihipertansif verilecek.',
                    'Tansiyon 15 dakikada bir ölçülecek.'
                ],
                evaluationStatus: 'Kısmen Ulaşıldı (145/90 mmHg).'
            }
        ]
    },
    {
        id: 'diabetes_hyperglycemia',
        title: '🩺 Diyabet ve Metabolik Bakım Planı',
        description: 'Tip 2 Diyabet hastalarında kan şekeri regülasyonu ve ayak bakımı.',
        tags: ['Endokrin', 'Diyabet', 'Beslenme'],
        patientInfo: {
            name: 'Fatma T.',
            age: 61,
            gender: 'Kadın',
            diagnosis: 'Tip 2 Diabetes Mellitus',
            room: 'Dahiliye Servisi 102',
            vitals: { ates: 36.8, tansiyonSystolic: 145, tansiyonDiastolic: 92, nabiz: 82, solunum: 16, spo2: 98, agri: 2 }
        },
        carePlans: [
            {
                diagnosisId: 'dolasim_perfuzyon_bozulma',
                diagnosisTitle: '00204 - Etkisiz Periferik Doku Perfüzyonu',
                etiology: 'Diyabetik mikrovasküler değişikliklere bağlı olarak',
                symptoms: 'Ayaklarda uyuşma ve soğukluk ile gösterilen',
                noc: ['Ayak sıcaklığı ve dolaşım korunacak.'],
                nic: ['Günlük ayak muayenesi ve bakımı yapılacak.']
            }
        ]
    },
    {
        id: 'renal_hypervolemia',
        title: '💧 Akut Böbrek Yetmezliği & Ödem Bakım Planı',
        description: 'Böbrek yetmezliği ve hipervolemi gelişen hastalarda sıvı artışı, ödem ve sıvı-elektrolit dengesi takibi.',
        tags: ['Nefroloji', 'Böbrek Yetmezliği', 'Ödem', 'Hipervolemi'],
        patientInfo: {
            name: 'Zeynep A.',
            age: 65,
            gender: 'Kadın',
            diagnosis: 'Akut Böbrek Hasarı + Hipervolemi',
            room: 'Nefroloji Servisi 301',
            vitals: { ates: 36.9, tansiyonSystolic: 155, tansiyonDiastolic: 96, nabiz: 90, solunum: 21, spo2: 94, agri: 1 }
        },
        carePlans: [
            {
                diagnosisId: 'sivi_volum_fazlaligi',
                diagnosisTitle: '00026 - Sıvı Volüm Fazlalığı (Hipervolemi / Ödem)',
                etiology: 'Böbreklerden su/sodyum atılımının azalmasına bağlı olarak',
                symptoms: 'Pretibial ödem (+++) ve kilo artışı ile gösterilen',
                noc: ['Ödem gerileyecek.'],
                nic: ['AÇT ve kilo takibi yapılacak.', 'Diüretik verilecek.']
            }
        ]
    },
    {
        id: 'pediatric_gastroenteritis',
        title: '👶 Pediatrik Akut Gastroenterit & Sıvı Kaybı Planı',
        description: 'Çocuk hastalarda diyare ve kusmaya bağlı dehidratasyon, yüksek ateş ve beslenme bozukluğu bakımı.',
        tags: ['Pediatri', 'Gastroenterit', 'Dehidratasyon', 'Ateş'],
        patientInfo: {
            name: 'Caner D. (Çocuk)',
            age: 4,
            gender: 'Erkek',
            diagnosis: 'Akut Rotavirüs Gastroenteriti',
            room: 'Pediatri Servisi 105',
            vitals: { ates: 38.6, tansiyonSystolic: 95, tansiyonDiastolic: 60, nabiz: 125, solunum: 28, spo2: 98, agri: 3 }
        },
        carePlans: [
            {
                diagnosisId: 'sivi_volum_eksikligi',
                diagnosisTitle: '00027 - Sıvı Volüm Eksikliği (Dehidratasyon)',
                etiology: 'Diyare ve kusmaya bağlı olarak',
                symptoms: 'Cilt turgorunda azalma ve kuru mukozalar ile gösterilen',
                noc: ['Hidrasyon düzelecek.'],
                nic: ['IV izotonik sıvı verilecek.', 'ORS çözeltisi verilecek.']
            },
            {
                diagnosisId: 'hipertermi',
                diagnosisTitle: '00007 - Hipertermi (Yüksek Ateş)',
                etiology: 'Gastroenterit enfeksiyonuna bağlı olarak',
                symptoms: 'Ateş 38.6°C ile gösterilen',
                noc: ['Ateş normale düşecek.'],
                nic: ['Antipiretik şurup verilecek.', 'Ilık kompres yapılacak.']
            }
        ]
    },
    {
        id: 'geriatric_fall_risk',
        title: '👵 İleri Yaş Düşme ve Bası Yarası Önleme Planı',
        description: 'Yatağa bağımlı geriatri hastalarında koruyucu bakım.',
        tags: ['Geriatri', 'Düşme Riski', 'Bası Yarası'],
        patientInfo: {
            name: 'Ayşe M.',
            age: 83,
            gender: 'Kadın',
            diagnosis: 'Femur Boyun Kırığı',
            room: 'Ortopedi 405',
            vitals: { ates: 36.7, tansiyonSystolic: 125, tansiyonDiastolic: 78, nabiz: 74, solunum: 17, spo2: 96, agri: 4 }
        },
        carePlans: [
            {
                diagnosisId: 'dusme_riski',
                diagnosisTitle: '00155 - Düşme Riski',
                etiology: 'İleri yaş ve immobilizasyona bağlı olarak',
                symptoms: 'İtaki düşme skoru: 8 ile tanımlanan',
                noc: ['Düşme olayı yaşanmayacak.'],
                nic: ['Yatak kenarlıkları kaldırılacak.', 'Düşme etiketi asılacak.']
            },
            {
                diagnosisId: 'cilt_butunlugu_bozulma',
                diagnosisTitle: '00046 - Doku / Cilt Bütünlüğünde Bozulma',
                etiology: 'Yatağa bağımlılık ve sakral basınca bağlı olarak',
                symptoms: 'Sakrumda evre 1 eritem ile gösterilen',
                noc: ['Açık yara oluşmayacak.'],
                nic: ['Havalı yatak kurulacak.', '2 saatte bir pozisyon verilecek.']
            }
        ]
    }
];

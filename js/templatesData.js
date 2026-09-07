/**
 * Hemşirelik Bakım Rehberim - Klinik Hazır Bakım Planı Şablonları (26 Detaylı Vaka)
 * Dahiliye, Cerrahi, Nöroloji, Pediatri, Kadın Doğum & Lohusalık ve Psikiyatri Branş Şablonları
 */

window.CLINICAL_TEMPLATES = [
    // =========================================================================
    // 1. PEDİATRİ & ÇOCUK SAĞLIĞI ŞABLONLARI
    // =========================================================================
    {
        id: 'ped_jaundice',
        title: '👶 Yenidoğan Sarılığı (Hiperbilirubinemi) Bakım Planı',
        category: 'pediatri',
        description: 'Fototerapi alan yenidoğanlarda serum bilirubin yükselmesi, dehidratasyon riski ve göz/cilt bütünlüğü takibi.',
        tags: ['Pediatri', 'Yenidoğan', 'Sarılık', 'Fototerapi'],
        patientInfo: {
            name: 'Elif Bebek',
            age: 0,
            gender: 'Kadın',
            diagnosis: 'Yenidoğan Sarılığı (Total Bilirubin: 17.4 mg/dL)',
            room: 'Yenidoğan Servisi 102',
            vitals: { ates: 37.1, tansiyonSystolic: 70, tansiyonDiastolic: 45, nabiz: 142, solunum: 46, spo2: 98, agri: 1 }
        },
        carePlans: [
            {
                diagnosisId: 'yenidogan_sariligi',
                diagnosisTitle: '00194 - Yenidoğan Sarılığı',
                etiology: 'Karaciğer enzim yetersizliği ve bilirubin konjugasyon yetersizliğine bağlı olarak',
                symptoms: 'Ciltte ve skleralarda sarılık (Kramer 4 zonu) ve Total Bilirubin 17.4 mg/dL olması ile gösterilen',
                noc: [
                    'Serum total bilirubin düzeyi < 12 mg/dL seviyesine düşürülecek.',
                    'Fototerapi komplikasyonu (döküntü, göz zedelenmesi) gelişmeyecek.'
                ],
                nic: [
                    '[Bağımsız] Bebeğin cilt ve sklera sarılığı 4 saatte bir Kramer skalasına göre değerlendirilecek.',
                    '[Bağımlı] Hekim istemine uygun olarak sürekli tekli/çiftli Fototerapi ünitesi başlatılacak.',
                    '[Bağımsız] Fototerapi esnasında bebeğin gözleri steril koruyucu pedler ile kapatılacak ve bebek beziyle genital bölge korunacak.',
                    '[İşbirlikli] Bilirubin atılımını (gaita ve idrar çıkışını) hızlandırmak için 2 saatte bir anne sütü ile besleme desteklenecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı (Bilirubin 10.8 mg/dL\'ye geriledi).'
            },
            {
                diagnosisId: 'sivi_volum_eksikligi_riski',
                diagnosisTitle: '00028 - Sıvı Volüm Eksikliği Riski',
                etiology: 'Fototerapi lambalarının oluşturduğu ısı artışı ve insensibl sıvı kaybına bağlı olarak',
                symptoms: 'Fototerapi uygulaması ve sık sulu sarı gaita çıkışı ile tanımlanan (Risk Tanısı)',
                noc: [
                    'Hasta dehidrate olmayacak, cilt turgoru normal kalacak.',
                    'Ön fontanel çöküklüğü gelişmeyecek.'
                ],
                nic: [
                    '[Bağımsız] Bebek her beslenme öncesi ve sonrası tartılarak günlük kilo takibi yapılacak.',
                    '[Bağımsız] Cilt turgoru, mukozaların nemliliği ve ön fontanel 4 saatte bir fiziki muayene ile kontrol edilecek.',
                    '[İşbirlikli] Diyetisyen ve anne işbirliği ile sıvı ihtiyacını karşılamak üzere sık emzirme seansları düzenlenecek.',
                    '[Bağımlı] Gerekli hallerde hekim istemli IV hidrasyon sıvısı infüze edilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı (Tartı stabil, hidrasyon iyi).'
            }
        ]
    },
    {
        id: 'ped_dehydration',
        title: '👶 Pediatrik Akut İshal & Dehidratasyon Bakım Planı',
        category: 'pediatri',
        description: 'Rotavirüs veya bakteriyel gastroenterit kaynaklı ishal ve kusması olan çocuklarda sıvı-elektrolit dengesi takibi.',
        tags: ['Pediatri', 'Gastroenterit', 'Dehidratasyon', 'İshal'],
        patientInfo: {
            name: 'Caner K.',
            age: 2,
            gender: 'Erkek',
            diagnosis: 'Akut Gastroenterit + Orta Derece Dehidratasyon',
            room: 'Çocuk Servisi 204',
            vitals: { ates: 38.4, tansiyonSystolic: 85, tansiyonDiastolic: 55, nabiz: 128, solunum: 28, spo2: 97, agri: 3 }
        },
        carePlans: [
            {
                diagnosisId: 'sivi_volum_eksikligi',
                diagnosisTitle: '00027 - Sıvı Volüm Eksikliği (Dehidratasyon)',
                etiology: 'Aşırı sulu dışkılama (günde 6-8 kez) ve kusmaya bağlı olarak',
                symptoms: 'Göz kürelerinde hafif çöküklük, cilt turgorunda azalma ve mukozalarda kuruluk ile gösterilen',
                noc: [
                    'Hastanın sıvı-elektrolit dengesi normale dönecek.',
                    'İdrar çıkışı yaşa uygun (> 1-2 mL/kg/saat) tutulacak.'
                ],
                nic: [
                    '[Bağımsız] Dehidratasyon bulguları (gözyaşı, mukoza nemi, kapiller dolum süresi) 2 saatte bir değerlendirilecek.',
                    '[Bağımlı] Hekim istemine uygun IV izotonik sıvı infüzyonu ve elektrolit tedavisi açılacak.',
                    '[İşbirlikli] Diyetisyen önerisi doğrultusunda Oral Dehidratasyon Sıvısı (ORS) azar azar ve sık aralıklarla içirilecek.',
                    '[Bağımsız] Aldığı-Çıkardığı Sıvı Takibi (AÇT) ve bezi tartılarak gaita/idrar miktarı mililitre cinsinden kaydedilecek.'
                ],
                evaluationStatus: 'Kısmen Ulaşıldı (Hidrasyon düzeliyor).'
            },
            {
                diagnosisId: 'ishal',
                diagnosisTitle: '00013 - İshal (Diyare)',
                etiology: 'Gastrointestinal sistem enfeksiyonu ve artmış bağırsak motilitesine bağlı olarak',
                symptoms: 'Sulu, kötü kokulu gaita ve hiperaktif bağırsak sesleri ile gösterilen',
                noc: [
                    'Gaita sıklığı ve kıvamı şekilliye dönecek.',
                    'Anal bölgede dermtit/pişik gelişmeyecek.'
                ],
                nic: [
                    '[Bağımsız] Her dışkılama sonrası perianal bölge ılık suyla temizlenecek ve bariyer krem (çinko oksit) uygulanacak.',
                    '[İşbirlikli] Diyetisyen kontrolünde pirinç lapası, muz, elma püresi ve şeftaliden oluşan ishali kesici diyet uygulanacak.',
                    '[Bağımlı] Hekim istemli probiyotik saşe tedavisi besine karıştırılarak verilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            }
        ]
    },
    {
        id: 'ped_bronchiolitis',
        title: '👶 Pediatrik Bronşiyolit & Solunum Sıkıntısı Bakım Planı',
        category: 'pediatri',
        description: 'Süt çocuklarında RSV virüsüne bağlı bronşiyolit, hırıltılı solunum (wheezing) ve burun tıkanıklığı bakımı.',
        tags: ['Pediatri', 'Bronşiyolit', 'RSV', 'Solunum'],
        patientInfo: {
            name: 'Zeynep Bebek',
            age: 0,
            gender: 'Kadın',
            diagnosis: 'Akut RSV Bronşiyoliti',
            room: 'Süt Çocuğu Servisi 108',
            vitals: { ates: 37.8, tansiyonSystolic: 80, tansiyonDiastolic: 50, nabiz: 148, solunum: 52, spo2: 91, agri: 2 }
        },
        carePlans: [
            {
                diagnosisId: 'solunum_yolu_kapanmasi',
                diagnosisTitle: '00031 - Etkisiz Solunum Yolu Temizliği',
                etiology: 'Bronşiyollerde ödem ve koyu kıvamlı mukus tıkaçlarına bağlı olarak',
                symptoms: 'Ekspiratuar wheezing, interkostal retraksiyonlar ve burun tıkanıklığı ile gösterilen',
                noc: [
                    'Solunum yolları açık tutulacak, sekresyonlar aspire edilecek.',
                    'SpO2 düzeyi oda havasında %95 üzerine çıkacak.'
                ],
                nic: [
                    '[Bağımsız] Yatak başı High-Fowler (45-60°) pozisyona getirilecek ve baş hafif ekstansiyonda tutulacak.',
                    '[Bağımsız] Beslenme ve uyku öncesinde burun deliklerine serum fizyolojik damlatılıp nazal aspiratörle temizlenecek.',
                    '[Bağımlı] Hekim istemine uygun soğuk buhar nebül ve bronkodilatör (Salbutamol) uygulaması yapılacak.',
                    '[Bağımsız] SpO2 ve solunum sayısı kesintisiz pulse oksimetre ile izlenecek.'
                ],
                evaluationStatus: 'Kısmen Ulaşıldı (SpO2 %94).'
            }
        ]
    },
    {
        id: 'ped_febrile_seizure',
        title: '👶 Febril Konvülsiyon & Yüksek Ateş Bakım Planı',
        category: 'pediatri',
        description: 'Yüksek ateş nedeniyle nöbet riski taşıyan çocuk hastalarda soğuk uygulama, antipiretik ve nöbet emniyeti.',
        tags: ['Pediatri', 'Ateş', 'Febril Konvülsiyon', 'Nöbet'],
        patientInfo: {
            name: 'Ali V.',
            age: 3,
            gender: 'Erkek',
            diagnosis: 'Yüksek Ateş + Febril Konvülsiyon Öyküsü',
            room: 'Pediatri Acil / Servis 201',
            vitals: { ates: 39.3, tansiyonSystolic: 95, tansiyonDiastolic: 60, nabiz: 136, solunum: 30, spo2: 97, agri: 2 }
        },
        carePlans: [
            {
                diagnosisId: 'hipertermi',
                diagnosisTitle: '00007 - Hipertermi (Yüksek Ateş)',
                etiology: 'Enfeksiyöz sürece bağlı vücut sıcaklığı termoregülasyon merkezinin uyarılmasına bağlı olarak',
                symptoms: 'Vücut sıcaklığının 39.3°C olması, sıcak ve kızarık cilt, huzursuzluk ile gösterilen',
                noc: [
                    'Vücut sıcaklığı 30-45 dakika içinde 37.5°C altına düşürülecek.'
                ],
                nic: [
                    '[Bağımsız] Hastanın üzerindeki kalın giysiler çıkarılacak, oda sıcaklığı 21-22°C\'de sabitlenecek.',
                    '[Bağımsız] Aksiller ve kasık bölgelerine ılık kompres (28-30°C ılık su ile) uygulanacak (soğuk su kullanılmayacak).',
                    '[Bağımlı] Hekim istemine uygun antipiretik (Parasetamol IV/Şurup) zamanında verilecek.',
                    '[Bağımsız] Ateş takibi 15-30 dakikalık aralıklarla yapılacaktır.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı (Ateş 37.1°C).'
            },
            {
                diagnosisId: 'travma_riski',
                diagnosisTitle: '00038 - Travma Riski (Nöbet Emniyeti)',
                etiology: 'Yüksek ateşe bağlı febril konvülsiyon (nöbet) gelişme riskine bağlı olarak',
                symptoms: '39.3°C ateş ve geçirilmiş febril nöbet öyküsü ile tanımlanan (Risk Tanısı)',
                noc: [
                    'Nöbet anında hastada travma, yaralanma veya aspirasyon gelişmeyecek.'
                ],
                nic: [
                    '[Bağımsız] Yatak kenarlıkları kaldırılacak ve yumuşak koruyucu süngerlerle kaplanacak.',
                    '[Bağımsız] Nöbet anında hasta hemen sol yan (koma) pozisyonuna getirilecek, ağzına sert cisim sokulmayacak.',
                    '[Bağımlı] Nöbet 5 dakikayı aşarsa hekim istemli rektal Diazepam uygulamasına hazır bulunulacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı (Nöbet gözlenmedi).'
            }
        ]
    },

    // =========================================================================
    // 2. KADIN DOĞUM & LOHUSALIK ŞABLONLARI
    // =========================================================================
    {
        id: 'ob_postpartum_care',
        title: '🤰 Doğum Sonrası (Lohusalık) Erken Dönem Bakım Planı',
        category: 'kadin_dogum',
        description: 'Sezaryen veya normal vajinal doğum yapan lohusalarda uterin involüsyon, lokia, kanama riski ve ağrı takibi.',
        tags: ['Kadın Doğum', 'Lohusalık', 'Postpartum', 'Lokia'],
        patientInfo: {
            name: 'Ayşe T.',
            age: 28,
            gender: 'Kadın',
            diagnosis: 'Primer Sezaryen Sonrası Postpartum 1. Gün',
            room: 'Kadın Doğum Servisi 402',
            vitals: { ates: 37.2, tansiyonSystolic: 115, tansiyonDiastolic: 75, nabiz: 82, solunum: 18, spo2: 98, agri: 5 }
        },
        carePlans: [
            {
                diagnosisId: 'kanama_riski',
                diagnosisTitle: '00206 - Kanamaya Bağlı Etkisiz Doku Perfüzyonu Riski',
                etiology: 'Uterin atoni, plasenta ayrılma alanı ve cerrahi travmaya bağlı olarak',
                symptoms: 'Doğum sonrası lohusalık süreci ve cerrahi insizyon bulunması ile tanımlanan (Risk Tanısı)',
                noc: [
                    'Uterus sert ve göbek hizasında (involüsyonda) tutulacak.',
                    'Lokia miktarı normal sınırlar içerisinde (saatte 1 pedden az) seyredecek.'
                ],
                nic: [
                    '[Bağımsız] Fundus yüksekliği ve sertliği saat başı eksternal masaj yapılarak kontrol edilecek.',
                    '[Bağımsız] Lokia miktarı (ped tartımı), rengi (rubra) ve pıhtı varlığı 2 saatte bir izlenecek.',
                    '[Bağımlı] Hekim istemine uygun Oksitosin IV infüzyonu uterin kasılmaları sağlamak için uygulanacak.',
                    '[Bağımsız] Mesane doluluğu uterus kasılmasını engelleyeceğinden hastanın idrara çıkması veya kateterizasyon kontrol edilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı (Uterus sert, kanama normal).'
            },
            {
                diagnosisId: 'akut_agri',
                diagnosisTitle: '00132 - Akut Ağrı',
                etiology: 'Sezaryen insizyonu ve postpartum uterin kramplara (afterpains) bağlı olarak',
                symptoms: 'Ağrı skorunun 5/10 olması ve insizyon hassasiyeti ile gösterilen',
                noc: [
                    'Hastanın ağrı skoru 2\'nin altına inecek, emzirme ve mobilizasyonu kolaylaşacak.'
                ],
                nic: [
                    '[Bağımsız] Hastaya emzirme esnasında insizyon bölgesini yastıkla destekleme tekniği gösterilecek.',
                    '[Bağımlı] Hekim istemli anne sütüne geçmeyen analjezik (Parasetamol IV/Oral) zamanında verilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı (Ağrı skoru 2/10).'
            }
        ]
    },
    {
        id: 'ob_breastfeeding',
        title: '🤰 Etkisiz Emzirme & Anne Sütü Desteği Bakım Planı',
        category: 'kadin_dogum',
        description: 'İlk kez anne olan lohusalarda emzirme güçlüğü, meme ucu çatlağı ve anne sütü azlığı kaygısı bakımı.',
        tags: ['Kadın Doğum', 'Emzirme', 'Anne Sütü', 'Laktasyon'],
        patientInfo: {
            name: 'Merve Y.',
            age: 25,
            gender: 'Kadın',
            diagnosis: 'Postpartum 2. Gün + Etkisiz Emzirme',
            room: 'Lohusalık Servisi 406',
            vitals: { ates: 37.0, tansiyonSystolic: 120, tansiyonDiastolic: 80, nabiz: 76, solunum: 16, spo2: 99, agri: 2 }
        },
        carePlans: [
            {
                diagnosisId: 'etkisiz_emzirme',
                diagnosisTitle: '00104 - Etkisiz Emzirme',
                etiology: 'Yanlış kavrama (latch-on) tekniği ve annenin emzirme deneyimsizliğine bağlı olarak',
                symptoms: 'Bebeğin meme ucunu tam kavrayamaması, sürekli ağlaması ve meme ucunda hassasiyet ile gösterilen',
                noc: [
                    'Anne bebeğini doğru teknikle (areolayı kavratarak) emzirebilecek.',
                    'Bebek emzirme sonrası sakinleşip uykuya geçecek.'
                ],
                nic: [
                    '[Bağımsız] Annenin bebeği kavrama tekniği, pozisyonu (beşik tutuşu/futbol tutuşu) emzirme anında birebir gözlemlenecek.',
                    '[Bağımsız] Bebek memeye tutturulurken sadece meme ucu değil, areolanın büyük kısmının ağza girmesi sağlanacak.',
                    '[Bağımsız] Meme ucu çatlaklarını önlemek için emzirme sonrası meme ucuna anne sütü sürülüp kuruması sağlanacak.',
                    '[İşbirlikli] Laktasyon ve emzirme danışmanı ile birlikte anneye pratik teknik eğitimi verilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı (Kavrama tekniği başarılı).'
            }
        ]
    },
    {
        id: 'ob_preeclampsia',
        title: '🤰 Preeklampsi (Gebelik Hipertansiyonu) Bakım Planı',
        category: 'kadin_dogum',
        description: 'Gebelikte tansiyon yüksekliği, proteinüri ve ödem gelişen riskli gebelerde maternal ve fetal emniyet takibi.',
        tags: ['Kadın Doğum', 'Preeklampsi', 'Hipertansiyon', 'Maternal Risk'],
        patientInfo: {
            name: 'Fatma B.',
            age: 32,
            gender: 'Kadın',
            diagnosis: 'Şiddetli Preeklampsi (34. Gebelik Haftası)',
            room: 'Perinatoloji Servisi 410',
            vitals: { ates: 36.8, tansiyonSystolic: 165, tansiyonDiastolic: 105, nabiz: 92, solunum: 20, spo2: 97, agri: 1 }
        },
        carePlans: [
            {
                diagnosisId: 'sivi_volum_fazlaligi',
                diagnosisTitle: '00026 - Sıvı Volüm Fazlalığı (Ödem & Proteinüri)',
                etiology: 'Vasküler permabilite artışı ve böbrek filtrasyon bozulmasına bağlı olarak',
                symptoms: 'Pretibiyal +3 ödem, yüzde şişlik ve idrarda 3+ proteinüri ile gösterilen',
                noc: [
                    'Kan basıncı hedef sınırlara (< 140/90 mmHg) çekilecek.',
                    'Eklampsi nöbeti gelişmeyecek.'
                ],
                nic: [
                    '[Bağımsız] Kan basıncı ve nabız 2 saatte bir takip edilecek; baş ağrısı, görme bozukluğu ve epigastrik ağrı sorgulanacak.',
                    '[Bağımlı] Hekim istemli Magnezyum Sülfat (MgSO4) yükleme ve idame infüzyonu eklampsi profilaksisi için uygulanacak.',
                    '[Bağımsız] MgSO4 toksisite takibi için derin tendon refleksi (patella), solunum sayısı (>12/dk) ve saatlik idrar çıkışı izlenecek.',
                    '[Bağımsız] Hasta sessiz, loş ve düşük uyararanlı odaya alınarak sol yan yatış pozisyonunda tutulacak.'
                ],
                evaluationStatus: 'Kısmen Ulaşıldı (TA: 145/92 mmHg).'
            }
        ]
    },

    // =========================================================================
    // 3. PSİKİYATRİ & RUH SAĞLIĞI ŞABLONLARI
    // =========================================================================
    {
        id: 'psy_depression',
        title: '🧘 Major Depresyon & Öz Bakım Eksikliği Bakım Planı',
        category: 'psikiatri',
        description: 'Psikiyatri servisinde major depresif bozukluk, anerji, öz bakım ihmali ve benlik saygısında düşme yaşayan hastalar.',
        tags: ['Psikiyatri', 'Depresyon', 'Öz Bakım', 'Ruh Sağlığı'],
        patientInfo: {
            name: 'Kemal S.',
            age: 45,
            gender: 'Erkek',
            diagnosis: 'Major Depresif Bozukluk (Yataklı Takip)',
            room: 'Psikiyatri Servisi 501',
            vitals: { ates: 36.6, tansiyonSystolic: 118, tansiyonDiastolic: 76, nabiz: 68, solunum: 15, spo2: 99, agri: 0 }
        },
        carePlans: [
            {
                diagnosisId: 'oz_bakim_eksikligi',
                diagnosisTitle: '00108 - Öz Bakım Eksikliği (Banyo/Giyinme)',
                etiology: 'Motivasyon kaybı, şiddetli anerji ve depresif duyguduruma bağlı olarak',
                symptoms: 'Öz bakımını ve kişisel hijyenini ihmal etme, kirli giysiler ve isteksizlik ile gösterilen',
                noc: [
                    'Hasta günlük öz bakım aktivitelerini (duş, taranma, diş fırçalama) rehberlikle gerçekleştirecek.'
                ],
                nic: [
                    '[Bağımsız] Öz bakım adımları küçük, basit parçalara bölünerek hastaya adım adım rehberlik edilecek.',
                    '[Bağımsız] Hastanın her küçük öz bakım başarısı olumlu geri bildirim ile pekiştirilecek.',
                    '[İşbirlikli] Uğraş terapisti ve psikolog ile işbirliği yapılarak hastanın günlük rutin programı oluşturulacak.',
                    '[Bağımlı] Hekim istemli Antidepresan ilaçların (SSRI) ağızdan alımı gözetim altında sağlanacak.'
                ],
                evaluationStatus: 'Kısmen Ulaşıldı (Öz bakım desteğe yanıt veriyor).'
            },
            {
                diagnosisId: 'benlik_saygisi_dusuklugu',
                diagnosisTitle: '00119 - Benlik Saygısında Düşme',
                etiology: 'Değersizlik, suçluluk duyguları ve bilişsel çarpıtmalara bağlı olarak',
                symptoms: '"Ben hiçbir işe yaramam" şeklinde kendisini olumsuz değerlendirme ile gösterilen',
                noc: [
                    'Hasta olumlu kişisel özelliklerini ifade edebilecek.'
                ],
                nic: [
                    '[Bağımsız] Terapötik dinleme ve koşulsuz kabul ile hastaya zaman ayrılacak.',
                    '[Bağımsız] Hastanın geçmişteki başarıları ve güçlü yönleri fark ettirilecek.'
                ],
                evaluationStatus: 'Kısmen Ulaşıldı.'
            }
        ]
    },
    {
        id: 'psy_anxiety',
        title: '🧘 Şiddetli Anksiyete & Panik Bozukluğu Bakım Planı',
        category: 'psikiatri',
        description: 'Panik atak ve şiddetli anksiyete krizinde solunum kontrolü, gevşeme egzersizleri ve emniyet sağlama.',
        tags: ['Psikiyatri', 'Anksiyete', 'Panik', 'Gevşeme'],
        patientInfo: {
            name: 'Deniz A.',
            age: 29,
            gender: 'Kadın',
            diagnosis: 'Panik Bozukluk + Akut Anksiyete Krizi',
            room: 'Psikiyatri Günübirlik 505',
            vitals: { ates: 36.7, tansiyonSystolic: 142, tansiyonDiastolic: 90, nabiz: 118, solunum: 26, spo2: 99, agri: 1 }
        },
        carePlans: [
            {
                diagnosisId: 'siddetli_anksiyete',
                diagnosisTitle: '00146 - Şiddetli Anksiyete',
                etiology: 'Bilinçdışı çatışmalar, sempatik sinir sistemi uyarılması ve kontrol kaybı korkusuna bağlı olarak',
                symptoms: 'Taşikardi (118/dk), hiperventilasyon, tremor ve ölecekmiş hissi beyanı ile gösterilen',
                noc: [
                    'Anksiyete düzeyi hafife çekilecek, vital bulgular (nabız/solunum) normale dönecek.'
                ],
                nic: [
                    '[Bağımsız] Panik anında hastanın yanında kalınarak sakince "Buradasınız ve güvendesiniz" mesajı verilecek.',
                    '[Bağımsız] Diyafram solunumu ve 4-7-8 derin nefes alma tekniği yaptırılarak hiperventilasyon engellenecek.',
                    '[Bağımsız] Hasta gürültülü ve kalabalık ortamdan alınarak sessiz bir odaya geçirilecek.',
                    '[Bağımlı] Hekim istemli Anksiyolitik (Diazepam/Alprazolam) tedavisi kriz anında uygulanacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı (Anksiyete yatıştı, Nabız: 78/dk).'
            }
        ]
    },
    {
        id: 'psy_bipolar_mania',
        title: '🧘 Bipolar Bozukluk (Mani Dönemi) Bakım Planı',
        category: 'psikiatri',
        description: 'Mani dönemindeki bipolar hastalarda psikomotor ajitasyon, uyku ihtiyacında azalma ve güvenlik takibi.',
        tags: ['Psikiyatri', 'Bipolar', 'Mani', 'Uyku', 'Güvenlik'],
        patientInfo: {
            name: 'Burak K.',
            age: 38,
            gender: 'Erkek',
            diagnosis: 'Bipolar I Bozukluk (Manik Atak)',
            room: 'Psikiyatri Servisi 508',
            vitals: { ates: 36.9, tansiyonSystolic: 130, tansiyonDiastolic: 85, nabiz: 102, solunum: 22, spo2: 98, agri: 0 }
        },
        carePlans: [
            {
                diagnosisId: 'uyku_oruntusu_bozulma',
                diagnosisTitle: '00095 - Uyku Örüntüsünde Bozulma',
                etiology: 'Manik döneme bağlı artmış enerjik durum ve merkezi sinir sistemi hiperaktivitesine bağlı olarak',
                symptoms: 'Günde 2 saatten az uyuma ama kendisini çok enerjik hissetme şeklinde gösterilen',
                noc: [
                    'Hastanın gece kesintisiz en az 5-6 saat uyuması sağlanacak.'
                ],
                nic: [
                    '[Bağımsız] Çevresel uyararanlar (ışık, ses, hareketlilik) akşam saatlerinde azaltılacak.',
                    '[Bağımsız] Ayakta yenebilen (finger food) besinlerle kalori açığı kapatılacak.',
                    '[Bağımlı] Hekim istemli Duygudurum Dengeleyici (Lityum) ve Antipsikotik ilaçlar düzenli içirilecek.'
                ],
                evaluationStatus: 'Kısmen Ulaşıldı.'
            }
        ]
    },

    // =========================================================================
    // 4. CERRAHİ & AMELİYAT ŞABLONLARI
    // =========================================================================
    {
        id: 'post_op_care',
        title: '🏥 Cerrahi Sonrası (Post-Op) Bakım Planı',
        category: 'cerrahi',
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
                    '[Bağımsız] Ağrı şiddeti (0-10 NRS ölçeği ile) 2 saatte bir değerlendirilecek.',
                    '[Bağımlı] Hekim istemine uygun IV analjezik zamanında infüze edilecek ve etkisi izlenecek.',
                    '[Bağımsız] İnsizyon bölgesi öksürük ve hareket esnasında yastık ile desteklenecek.',
                    '[Bağımsız] Hastanın rahat edebileceği pozisyon (yarı-Fowler/dizler bükük) sağlanacak.'
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
                    '[Bağımsız] Cerrahi pansuman steril teknikle değiştirilecek.',
                    '[Bağımsız] İnsizyon hattı enfeksiyon yönünden kontrol edilecek.',
                    '[Bağımsız] El hijyeni sağlanacak.',
                    '[Bağımlı] Profilaktik antibiyotik tedavisi uygulanacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı (Yara yeri temiz ve kuru).'
            }
        ]
    },

    // =========================================================================
    // 5. DAHİLİYE & GENEL TIP ŞABLONLARI
    // =========================================================================
    {
        id: 'koah_respiratory',
        title: '🫁 KOAH ve Solunum Sıkıntısı Bakım Planı',
        category: 'dahiliye',
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
                    '[Bağımsız] SpO2 takibi sürekli yapılacak.',
                    '[Bağımlı] Hekim istemine uygun olarak 2 L/dk Oksijen verilecek.',
                    '[Bağımsız] High-Fowler pozisyonu verilecek.',
                    '[Bağımlı] Nebülizatör tedavisi uygulanacak.'
                ],
                evaluationStatus: 'Kısmen Ulaşıldı (SpO2 %93).'
            }
        ]
    },
    {
        id: 'diabetic_ketoacidosis',
        title: '🩸 Tip 1 Diyabet & Hipoglisemi / Hiperglisemi Bakım Planı',
        category: 'dahiliye',
        description: 'Diyabetik hastalarda kan şekeri regülasyonu, insülin tedavisi ve diyabet eğitimi.',
        tags: ['Dahiliye', 'Endokrin', 'Diyabet', 'İnsülin'],
        patientInfo: {
            name: 'Selin B.',
            age: 34,
            gender: 'Kadın',
            diagnosis: 'Tip 1 Diyabet + Kan Şekeri Regülasyon Bozukluğu',
            room: 'Dahiliye Servisi 102',
            vitals: { ates: 36.8, tansiyonSystolic: 120, tansiyonDiastolic: 75, nabiz: 80, solunum: 16, spo2: 98, agri: 0 }
        },
        carePlans: [
            {
                diagnosisId: 'kan_glukoz_dengesizligi',
                diagnosisTitle: '00179 - Kan Glukoz Düzeyinde Dengesizlik Riski',
                etiology: 'Yetersiz insülin üretimi veya beslenme yetersizliğine bağlı olarak',
                symptoms: 'Açlık kan şekerinin 280 mg/dL çıkması ile gösterilen',
                noc: [
                    'Kan glukoz düzeyi 90-140 mg/dL aralığında sabitlenecek.'
                ],
                nic: [
                    '[Bağımsız] Açlık ve tok kan şekerleri 4 saatte bir glukometre ile takip edilecek.',
                    '[Bağımlı] Hekim istemli Subkutan Regüler İnsülin dozaj cetveline göre uygulanacak.',
                    '[İşbirlikli] Diyetisyen ile karbohidrat sayımı diyeti planlanacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı (AKŞ: 118 mg/dL).'
            }
        ]
    },

    // =========================================================================
    // 6. NÖROLOJİ & YOĞUN BAKIM ŞABLONLARI
    // =========================================================================
    {
        id: 'stroke_neurology',
        title: '🧠 İnme (SVO) Nörolojik Bakım Planı',
        category: 'noroloji',
        description: 'Serebrovasküler olay geçiren hastalarda GKS takibi, aspirasyon riski ve taraf felci bakımı.',
        tags: ['Nörolojik', 'İnme', 'SVO', 'Hemipleji'],
        patientInfo: {
            name: 'Hasan R.',
            age: 71,
            gender: 'Erkek',
            diagnosis: 'Akut İskemik İnme (Sağ Hemipleji)',
            room: 'Nöroloji Servisi 502',
            vitals: { ates: 37.0, tansiyonSystolic: 160, tansiyonDiastolic: 95, nabiz: 76, solunum: 19, spo2: 95, agri: 2 }
        },
        carePlans: [
            {
                diagnosisId: 'doku_perfuzyonu_beyin',
                diagnosisTitle: '00201 - Etkisiz Serebral Doku Perfüzyonu Riski',
                etiology: 'Beyin damarlarında tıkanıklık ve iskemiye bağlı olarak',
                symptoms: 'GKS 12/15 ve sağ taraf plejisi ile tanımlanan (Risk Tanısı)',
                noc: [
                    'Nörolojik tablo stabil tutulacak, GKS düşmeyecek.'
                ],
                nic: [
                    '[Bağımsız] GKS ve pupil ışık refleksi 2 saatte bir izlenecek.',
                    '[Bağımsız] Yatak başı 30 derece yükseltilecek (venöz dönüşü kolaylaştırmak için).',
                    '[Bağımlı] Hekim istemli Antiagregan/Antikoagülan tedavi verilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı (GKS: 14/15).'
            }
        ]
    }
];

/**
 * Hemşirelik Bakım Rehberim - Klinik Hazır Bakım Planı Şablonları (20 Detaylı Vaka & Her Vaka İçin En Az 10 Bakım Planı)
 * Dahiliye, Cerrahi, Nöroloji, Pediatri, Kadın Doğum & Lohusalık ve Psikiyatri Branş Şablonları
 * Her şablon başlığında ilişkili Ana Tanı ve Yan Tanılar (Differential / Secondary Diagnoses) eksiksiz yer almaktadır.
 */

window.CLINICAL_TEMPLATES = [
    // =========================================================================
    // 1. PEDİATRİ & ÇOCUK SAĞLIĞI ŞABLONLARI
    // =========================================================================
    {
        id: 'ped_jaundice',
        title: '👶 Yenidoğan Sarılığı (Hiperbilirubinemi) Bakım Planı',
        category: 'pediatri',
        description: 'Fototerapi alan yenidoğanlarda serum bilirubin yükselmesi, dehidratasyon riski, göz/cilt bütünlüğü ve emzirme takibi (10 Detaylı Bakım Planı).',
        tags: ['Pediatri', 'Yenidoğan', 'Sarılık', 'Fototerapi', 'Kramer'],
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
                etiology: 'Karaciğer enzim yetersizliği ve bilirubin konjugasyon eksikliğine bağlı olarak',
                symptoms: 'Ciltte ve skleralarda sarılık (Kramer 4 zonu) ve Total Bilirubin 17.4 mg/dL olması ile gösterilen',
                noc: ['Serum total bilirubin düzeyi < 12 mg/dL seviyesine düşürülecek.', 'Fototerapi komplikasyonu (döküntü, göz zedelenmesi) gelişmeyecek.'],
                nic: [
                    '🟢 [Bağımsız] Bebeğin cilt ve sklera sarılığı 4 saatte bir Kramer skalasına göre değerlendirilecek.',
                    '🔴 [Bağımlı] Hekim istemine uygun olarak sürekli tekli/çiftli Fototerapi ünitesi başlatılacak.',
                    '🟢 [Bağımsız] Fototerapi esnasında bebeğin gözleri steril koruyucu pedler ile kapatılacak ve bebek beziyle genital bölge korunacak.',
                    '🟡 [İşbirlikli] Bilirubin atılımını (gaita ve idrar çıkışını) hızlandırmak için 2 saatte bir anne sütü ile besleme desteklenecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı (Bilirubin 10.8 mg/dL\'ye geriledi).'
            },
            {
                diagnosisId: 'sivi_volum_eksikligi_riski',
                diagnosisTitle: '00028 - Sıvı Volüm Eksikliği Riski',
                etiology: 'Fototerapi lambalarının oluşturduğu ısı artışı ve insensibl sıvı kaybına bağlı olarak',
                symptoms: 'Fototerapi uygulaması ve sık sulu sarı gaita çıkışı ile tanımlanan (Risk Tanısı)',
                noc: ['Hasta dehidrate olmayacak, cilt turgoru normal kalacak.', 'Ön fontanel çöküklüğü gelişmeyecek.'],
                nic: [
                    '🟢 [Bağımsız] Bebek her beslenme öncesi ve sonrası tartılarak günlük kilo takibi yapılacak.',
                    '🟢 [Bağımsız] Cilt turgoru, mukozaların nemliliği ve ön fontanel 4 saatte bir fiziki muayene ile kontrol edilecek.',
                    '🟡 [İşbirlikli] Diyetisyen ve anne işbirliği ile sıvı ihtiyacını karşılamak üzere sık emzirme seansları düzenlenecek.',
                    '🔴 [Bağımlı] Gerekli hallerde hekim istemli IV hidrasyon sıvısı infüze edilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı (Tartı stabil, hidrasyon iyi).'
            },
            {
                diagnosisId: 'doku_butunlugu_riski',
                diagnosisTitle: '00047 - Cilt Bütünlüğünde Bozulma Riski (Yan Tanı)',
                etiology: 'Fototerapi ışınları ve fotodiyare kaynaklı perianal irritasyona bağlı olarak',
                symptoms: 'Perianal bölgede hafif kızarıklık ve sulu dışkılama ile tanımlanan (Risk Tanısı)',
                noc: ['Perianal bölgede dermatit/pişik gelişmeyecek.', 'Cilt bütünlüğü tam olarak korunacak.'],
                nic: [
                    '🟢 [Bağımsız] Bebek bezi her dışkılama sonrası geciktirilmeden ılık suyla temizlenip kurulanacak.',
                    '🟢 [Bağımsız] Perianal bölgeye koruyucu Çinko Oksit bariyer krem uygulanacak.',
                    '🟢 [Bağımsız] Fototerapi esnasında bebeğin pozisyonu 2 saatte bir değiştirilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı (Cilt bütünlüğü tam).'
            },
            {
                diagnosisId: 'goz_yaralanmasi_riski',
                diagnosisTitle: '00035 - Göz Yaralanması Riski (Yan Tanı)',
                etiology: 'Fototerapi ünitesinin yüksek yoğunluklu mavi ışık fotonlarına bağlı olarak',
                symptoms: 'Fototerapi ışığı altında bulunma ile tanımlanan (Risk Tanısı)',
                noc: ['Retina ve korneal yaralanma gelişmeyecek.', 'Göz pedleri kaymayacak.'],
                nic: [
                    '🟢 [Bağımsız] Steril göz bantları bebeğin burun deliklerini tıkamayacak şekilde sabitlenecek.',
                    '🟢 [Bağımsız] Beslenme aralarında göz pedleri çıkarılarak göz çapaklanması steril izotonik ile temizlenecek.',
                    '🟢 [Bağımsız] Göz pedinin kayıp kaymadığı saatlik olarak kontrol edilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı (Gözler korundu).'
            },
            {
                diagnosisId: 'etkisiz_emzirme',
                diagnosisTitle: '00104 - Etkisiz Emzirme (Yan Tanı)',
                etiology: 'Hiperbilirubineminin getirdiği uykululuk hali ve emme emforunun azalmasına bağlı olarak',
                symptoms: 'Bebeğin memede çabuk uyuyakalması ve zayıf emme refleksi ile gösterilen',
                noc: ['Bebek efektif şekilde memeyi kavrayacak.', 'Beslenme süreleri en az 15-20 dakika sürecek.'],
                nic: [
                    '🟢 [Bağımsız] Bebek emzirmeden önce hafifçe uyandırılacak (ayak tabanı masajı, bez değişimi).',
                    '🟡 [İşbirlikli] Laktasyon danışmanı ile anneye emzirme pozisyonları gösterilecek.',
                    '🔴 [Bağımlı] Yetersiz beslenme durumunda hekim istemiyle sağılmış anne sütü enjektör/kadeh ile verilecek.'
                ],
                evaluationStatus: 'Kısmen Ulaşıldı (Emme emforu artıyor).'
            },
            {
                diagnosisId: 'termoregulasyon_bozulmasi',
                diagnosisTitle: '00008 - Etkisiz Termoregülasyon Riski (Yan Tanı)',
                etiology: 'Fototerapi cihazının ısısı veya bebeğin kıyafetsiz kalmasına bağlı olarak',
                symptoms: 'Fototerapi lambası altında olma ve soyunuk kalma ile tanımlanan (Risk Tanısı)',
                noc: ['Bebeğin aksiller vücut sıcaklığı 36.5 - 37.2 °C aralığında sabit kalacak.'],
                nic: [
                    '🟢 [Bağımsız] Vücut sıcaklığı 2 saatte bir dijital termometre ile aksiller ölçülecek.',
                    '🟢 [Bağımsız] Fototerapi kuvöz/ısıtıcı yatak sıcaklığı bebek vücut ısısına göre ayarlanacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı (Ateş 36.8°C).'
            },
            {
                diagnosisId: 'ebeveyn_anksiyetesi',
                diagnosisTitle: '00063 - Ebeveyn Anksiyetesi (Yan Tanı)',
                etiology: 'Yenidoğanın hastaneye yatışı, ışık tedavisi ve bebeğin gözlerinin kapalı olmasına bağlı olarak',
                symptoms: 'Annenin sürekli ağlaması ve "bebeğimin beynine zarar verir mi?" şeklinde endişeli sorular sorması ile gösterilen',
                noc: ['Ebeveynler sarılık sürecini ve fototerapinin amacını anladıklarını ifade edecek.'],
                nic: [
                    '🟢 [Bağımsız] Anne ve babaya fototerapinin tamamen güvenli bir ışık tedavisi olduğu açıklanacak.',
                    '🟢 [Bağımsız] Annenin bebekle kanguru bakımı ve teması desteklenecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı (Anne rahatladı).'
            },
            {
                diagnosisId: 'uyku_oruntusu_bozulma',
                diagnosisTitle: '00161 - Uyku Örüntüsünde Bozulma (Yan Tanı)',
                etiology: 'Sık kan alma, kan bilirubin takipleri ve fototerapi ışığına bağlı olarak',
                symptoms: 'Bebeğin sık sıçraması ve huzursuz ağlamaları ile gösterilen',
                noc: ['Bebek beslenme aralarında dinlendirici uyku uyuyacak.'],
                nic: [
                    '🟢 [Bağımsız] Kan alma ve kan gazı işlemleri beslenme saatlerine denk getirilecek.',
                    '🟢 [Bağımsız] Kuvöz çevresi gereksiz gürültü ve ışık uyararanlarından arındırılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'bilgi_eksikligi',
                diagnosisTitle: '00126 - Bilgi Eksikliği (Yan Tanı)',
                etiology: 'İlk bebek deneyimi ve sarılık tedavisi hakkında bilgi sahibi olmamaya bağlı olarak',
                symptoms: 'Taburculuk sonrası bebek bakımında tereddüt yaşama beyanı ile gösterilen',
                noc: ['Ebeveynler evde sarılık takibi ve tehlike belirtilerini sayabilecek.'],
                nic: [
                    '🟢 [Bağımsız] Taburculuk öncesi anneye evde güneş ışığı faydası, sık emzirme ve sarılık artış belirtileri anlatılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'enfeksiyon_riski',
                diagnosisTitle: '00004 - Enfeksiyon Riski (Yan Tanı)',
                etiology: 'Göbek kordonunun henüz düşmemiş olması ve venöz kan alma girişimlerine bağlı olarak',
                symptoms: 'Invaziv girişim varlığı ile tanımlanan (Risk Tanısı)',
                noc: ['Göbek kordonu enfeksiyonkapmayacak, kızarıklık/akıntı gelişmeyecek.'],
                nic: [
                    '🟢 [Bağımsız] Göbek kordonu bakımı steril teknikle yapılacak ve kuru tutulacak.',
                    '🟢 [Bağımsız] Bebeğe temas öncesi eller antiseptik ile yıkanacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            }
        ]
    },
    {
        id: 'ped_dehydration',
        title: '👶 Pediatrik Akut İshal & Dehidratasyon Bakım Planı',
        category: 'pediatri',
        description: 'Rotavirüs veya gastroenterit kaynaklı ishal, kusma ve sıvı-elektrolit dengesi takibi (10 Detaylı Bakım Planı).',
        tags: ['Pediatri', 'Gastroenterit', 'Dehidratasyon', 'İshal', 'ORS'],
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
                symptoms: 'Göz kürelerinde çöküklük, cilt turgorunda azalma ve mukozalarda kuruluk ile gösterilen',
                noc: ['Hastanın sıvı-elektrolit dengesi normale dönecek.', 'İdrar çıkışı yaşa uygun (> 1-2 mL/kg/saat) tutulacak.'],
                nic: [
                    '🟢 [Bağımsız] Dehidratasyon bulguları (gözyaşı, mukoza nemi, kapiller dolum süresi) 2 saatte bir değerlendirilecek.',
                    '🔴 [Bağımlı] Hekim istemine uygun IV izotonik sıvı infüzyonu ve elektrolit tedavisi açılacak.',
                    '🟡 [İşbirlikli] Diyetisyen önerisi doğrultusunda Oral Dehidratasyon Sıvısı (ORS) azar azar içirilecek.',
                    '🟢 [Bağımsız] Aldığı-Çıkardığı Sıvı Takibi (AÇT) bezi tartılarak mililitre cinsinden kaydedilecek.'
                ],
                evaluationStatus: 'Kısmen Ulaşıldı (Hidrasyon düzeliyor).'
            },
            {
                diagnosisId: 'ishal',
                diagnosisTitle: '00013 - İshal (Diyare)',
                etiology: 'Gastrointestinal sistem enfeksiyonu ve artmış bağırsak motilitesine bağlı olarak',
                symptoms: 'Sulu, kötü kokulu gaita ve hiperaktif bağırsak sesleri ile gösterilen',
                noc: ['Gaita sıklığı ve kıvamı şekilliye dönecek.', 'Anal bölgede dermatit/pişik gelişmeyecek.'],
                nic: [
                    '🟢 [Bağımsız] Her dışkılama sonrası perianal bölge ılık suyla temizlenecek ve bariyer krem uygulanacak.',
                    '🟡 [İşbirlikli] Diyetisyen kontrolünde pirinç lapası, muz ve elma püresinden oluşan diyet uygulanacak.',
                    '🔴 [Bağımlı] Hekim istemli probiyotik saşe tedavisi besine karıştırılarak verilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'hipertermi',
                diagnosisTitle: '00007 - Hipertermi (Yüksek Ateş) (Yan Tanı)',
                etiology: 'Viral gastroenterit enfeksiyonuna bağlı termoregülasyon merkezinin uyarılması ile',
                symptoms: 'Vücut sıcaklığının 38.4°C olması ve halsizlik ile gösterilen',
                noc: ['Vücut sıcaklığı 37.5 °C altına gerileyecek.'],
                nic: [
                    '🟢 [Bağımsız] Çocuğun giysileri hafifletilecek, kasıklara ılık kompres uygulanacak.',
                    '🔴 [Bağımlı] Hekim istemli Parasetamol şurup/suppozituar uygulanacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı (Ateş 37.1°C).'
            },
            {
                diagnosisId: 'cilt_butunlugu_bozulma',
                diagnosisTitle: '00046 - Cilt Bütünlüğünde Bozulma (Yan Tanı)',
                etiology: 'Asidik sulu gaitanın perianal cildi tahriş etmesine bağlı olarak',
                symptoms: 'Perianal bölgede eritem, pişik ve dokunmayla ağrı ile gösterilen',
                noc: ['Perianal lezyonlar gerileyecek, cilt bütünlüğü sağlanacak.'],
                nic: [
                    '🟢 [Bağımsız] Alt temizliğinde ıslak mendil yerine ılık pamuklu su kullanılacak.',
                    '🟢 [Bağımsız] Bölge açık bırakılarak havalandırılacak ve çinko içerikli krem sürülecek.'
                ],
                evaluationStatus: 'Kısmen Ulaşıldı.'
            },
            {
                diagnosisId: 'beslenme_bozulmasi',
                diagnosisTitle: '00002 - Beslenmede Bozulma: Gereksinimden Az (Yan Tanı)',
                etiology: 'Bulantı, kusma ve iştahsızlığa bağlı olarak',
                symptoms: 'Son 2 günde öğün reddi ve kilo kaybı ile gösterilen',
                noc: ['Çocuk bulantısız şekilde az az ve sık beslenebilecek.'],
                nic: [
                    '🟢 [Bağımsız] Kusmayı tetiklememek için az miktarda berrak sıvılar azar azar verilecek.',
                    '🟡 [İşbirlikli] Diyetisyenle çocuğun sevdiği BRAT (Muz, Pirinç, Elma, Tost) diyeti planlanacak.'
                ],
                evaluationStatus: 'Kısmen Ulaşıldı.'
            },
            {
                diagnosisId: 'akut_agri',
                diagnosisTitle: '00132 - Akut Ağrı (Yan Tanı)',
                etiology: 'Artmış bağırsak peristaltizmi ve abdominal kramplara bağlı olarak',
                symptoms: 'FLACC ağrı skorunun 3/10 olması ve bacaklarını karnına çekerek ağlaması ile gösterilen',
                noc: ['Ağrı skoru 1\'in altına inecek, çocuk rahatlayacak.'],
                nic: [
                    '🟢 [Bağımsız] Çocuğa hafif karnına dairesel masaj yapılacak.',
                    '🟢 [Bağımsız] Anne kucağında sakinleştirici pozisyon sağlanacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'yorgunluk',
                diagnosisTitle: '00093 - Yorgunluk (Yan Tanı)',
                etiology: 'Sıvı-elektrolit kaybı ve uykusuzluğa bağlı olarak',
                symptoms: 'Halsizlik, sürekli uyuma isteği ve lökosit/halsizlik bulguları ile gösterilen',
                noc: ['Çocuğun aktivite seviyesi ve canlılığı normale dönecek.'],
                nic: [
                    '🟢 [Bağımsız] Çevresel uyararanlar azaltılarak dinlendirici uyku sağlanacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'anksiyete_cocuk',
                diagnosisTitle: '00146 - Anksiyete / Yabancı Korkusu (Yan Tanı)',
                etiology: 'Hastaneye yatış ve iv damar yolu açılması travmasına bağlı olarak',
                symptoms: 'Beyaz önlüklü personeli görünce şiddetle ağlama ile gösterilen',
                noc: ['Çocuk hekim/hemşire müdahalelerinde daha uyumlu olacak.'],
                nic: [
                    '🟢 [Bağımsız] Tüm müdahaleler oyun terapisi eşliğinde ve annenin yanında yapılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'dusme_riski',
                diagnosisTitle: '00155 - Düşme Riski (Yan Tanı)',
                etiology: 'Dehidratasyona bağlı postural hipotansiyon ve halsizliğe bağlı olarak',
                symptoms: '2 yaşında ve halsiz olması ile tanımlanan (Risk Tanısı)',
                noc: ['Hastada düşme veya yaralanma gelişmeyecek.'],
                nic: [
                    '🟢 [Bağımsız] Yatak kenarlıkları sürekli kilitli ve yukarıda tutulacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'bilgi_eksikligi',
                diagnosisTitle: '00126 - Bilgi Eksikliği (Yan Tanı)',
                etiology: 'İshalde ORS kullanımı ve hijyen kuralları hakkında eksik bilgiye bağlı olarak',
                symptoms: 'Ailenin "çocuğa hiç su vermeyelim mi?" sorusu ile gösterilen',
                noc: ['Aile ORS hazırlamayı ve dehidratasyon uyarı bulgularını öğrenecek.'],
                nic: [
                    '🟢 [Bağımsız] Anneye ORS hazırlığı, el yıkama ve ne zaman acile gelineceği anlatılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            }
        ]
    },
    {
        id: 'ped_bronchiolitis',
        title: '👶 Pediatrik Bronşiyolit & Solunum Sıkıntısı Bakım Planı',
        category: 'pediatri',
        description: 'Süt çocuklarında RSV virüsüne bağlı bronşiyolit, wheezing, retraksiyon ve nazal aspirasyon bakımı (10 Detaylı Bakım Planı).',
        tags: ['Pediatri', 'Bronşiyolit', 'RSV', 'Solunum', 'Wheezing'],
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
                noc: ['Solunum yolları açık tutulacak, sekresyonlar aspire edilecek.', 'SpO2 düzeyi oda havasında %95 üzerine çıkacak.'],
                nic: [
                    '🟢 [Bağımsız] Yatak başı High-Fowler (45-60°) pozisyona getirilecek.',
                    '🟢 [Bağımsız] Beslenme öncesinde burun deliklerine serum fizyolojik damlatılıp aspire edilecek.',
                    '🔴 [Bağımlı] Hekim istemine uygun soğuk buhar nebül ve Salbutamol uygulaması yapılacak.',
                    '🟢 [Bağımsız] SpO2 ve solunum sayısı kesintisiz izlenecek.'
                ],
                evaluationStatus: 'Kısmen Ulaşıldı (SpO2 %94).'
            },
            {
                diagnosisId: 'etkisiz_solunum_oruntusu',
                diagnosisTitle: '00032 - Etkisiz Solunum Örüntüsü',
                etiology: 'Havayolu direncinin artması ve solunum kaslarının yorulmasına bağlı olarak',
                symptoms: 'Takipne (52/dk), burun kanadı solunumu ve interkostal çekilmeler ile gösterilen',
                noc: ['Solunum sayısı yaşa uygun seviyeye (30-40/dk) gerileyecek.'],
                nic: [
                    '🟢 [Bağımsız] Bebek sık sık kucağa alınıp dik pozisyonda tutulacak.',
                    '🔴 [Bağımlı] Hekim istemine uygun nemlendirilmiş Oksijen (2 L/dk) verilecek.'
                ],
                evaluationStatus: 'Kısmen Ulaşıldı (Solunum 42/dk).'
            },
            {
                diagnosisId: 'gaz_degisimi',
                diagnosisTitle: '00030 - Gaz Değişiminde Bozulma (Yan Tanı)',
                etiology: 'Alveoler ventilasyon-perfüzyon uyumsuzluğuna bağlı olarak',
                symptoms: 'SpO2 %91 olması ve huzursuzluk ile gösterilen',
                noc: ['SpO2 > %95 seviyesinde sabitlenecek.'],
                nic: [
                    '🟢 [Bağımsız] Pulse oksimetre probu yeri 4 saatte bir değiştirilecek.',
                    '🔴 [Bağımlı] Kan gazı takibi hekim istemine uygun takip edilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'sivi_volum_eksikligi_riski',
                diagnosisTitle: '00028 - Sıvı Volüm Eksikliği Riski (Yan Tanı)',
                etiology: 'Hızlı soluk alıp vermeye bağlı artmış insensibl kayıp ve ememeye bağlı olarak',
                symptoms: 'Takipne ve iştahsızlık ile tanımlanan (Risk Tanısı)',
                noc: ['Dehidratasyon gelişmeyecek, ıslak bez sayısı günde 5-6 olacak.'],
                nic: [
                    '🟢 [Bağımsız] Bebek yorulmaması için sık aralıklarla az az emzirilecek.',
                    '🔴 [Bağımlı] Gerekirse IV izotonik idame sıvısı takılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'beslenme_bozulmasi',
                diagnosisTitle: '00002 - Beslenmede Bozulma: Gereksinimden Az (Yan Tanı)',
                etiology: 'Dispne ve emme sırasında nefessiz kalma korkusuna bağlı olarak',
                symptoms: 'Emme reddi ve kilo alamama ile gösterilen',
                noc: ['Bebek günlük kalori ihtiyacını karşılayacak.'],
                nic: [
                    '🟢 [Bağımsız] Emzirmeden 10 dk önce mutlaka nazal aspirasyon yapılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'uyku_oruntusu_bozulma',
                diagnosisTitle: '00161 - Uyku Örüntüsünde Bozulma (Yan Tanı)',
                etiology: 'Öksürük krizleri ve solunum güçlüğüne bağlı olarak',
                symptoms: 'Gece boyu sık uyanma ve huzursuz ağlama ile gösterilen',
                noc: ['Bebek beslenme aralarında kesintisiz uyuyacak.'],
                nic: [
                    '🟢 [Bağımsız] Odanın nem oranı %40-50 arasında tutulacak.'
                ],
                evaluationStatus: 'Kısmen Ulaşıldı.'
            },
            {
                diagnosisId: 'yorgunluk',
                diagnosisTitle: '00093 - Yorgunluk (Yan Tanı)',
                etiology: 'Artmış solunum iş yüküne bağlı olarak',
                symptoms: 'Zayıf ağlama ve kas hipotonisi ile gösterilen',
                noc: ['Solunum eforu azalacak, bebek dinlenebilecek.'],
                nic: [
                    '🟢 [Bağımsız] Tüm bakım ve tetkik girişimleri tek seferde kümelendirilerek yapılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'hipertermi',
                diagnosisTitle: '00007 - Hipertermi (Yan Tanı)',
                etiology: 'RSV viral enfeksiyonuna bağlı olarak',
                symptoms: 'Ateşin 37.8°C olması ile gösterilen',
                noc: ['Vücut ısısı normal sınırlara inecek.'],
                nic: [
                    '🟢 [Bağımsız] İnce pamuklu kıyafetler giydirilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'ebeveyn_anksiyetesi',
                diagnosisTitle: '00063 - Ebeveyn Anksiyetesi (Yan Tanı)',
                etiology: 'Bebeğin hırıldaması ve tıkanmasından korkmaya bağlı olarak',
                symptoms: 'Annenin tedirginliği ile gösterilen',
                noc: ['Anne sakin kalıp bebeğe destek olabilecek.'],
                nic: [
                    '🟢 [Bağımsız] Anneye soğuk buhar ve aspirasyon teknikleri anlatılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'bilgi_eksikligi',
                diagnosisTitle: '00126 - Bilgi Eksikliği (Yan Tanı)',
                etiology: 'RSV bulaşıcılığı ve evde nebül kullanımı konusunda bilgi eksikliğine bağlı olarak',
                symptoms: 'Taburculuk soruları ile gösterilen',
                noc: ['Ebeveyn evde nebülüzatör kullanımını uygulayabilecek.'],
                nic: [
                    '🟢 [Bağımsız] Taburculuk eğitimi ve el hijyeni vurgulanacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            }
        ]
    },
    {
        id: 'ped_febrile_seizure',
        title: '👶 Febril Konvülsiyon & Yüksek Ateş Bakım Planı',
        category: 'pediatri',
        description: 'Yüksek ateş nedeniyle nöbet riski taşıyan çocuk hastalarda soğuk uygulama, antipiretik ve nöbet emniyeti (10 Detaylı Bakım Planı).',
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
                symptoms: 'Vücut sıcaklığının 39.3°C olması, sıcak ve kızarık cilt ile gösterilen',
                noc: ['Vücut sıcaklığı 30-45 dakika içinde 37.5°C altına düşürülecek.'],
                nic: [
                    '🟢 [Bağımsız] Hastanın üzerindeki kalın giysiler çıkarılacak, oda sıcaklığı 21-22°C\'de sabitlenecek.',
                    '🟢 [Bağımsız] Aksiller ve kasık bölgelerine ılık kompres (28-30°C) uygulanacak.',
                    '🔴 [Bağımlı] Hekim istemine uygun antipiretik (Parasetamol IV/Şurup) zamanında verilecek.',
                    '🟢 [Bağımsız] Ateş takibi 15-30 dakikalık aralıklarla yapılacaktır.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı (Ateş 37.1°C).'
            },
            {
                diagnosisId: 'travma_riski',
                diagnosisTitle: '00038 - Travma Riski (Nöbet Emniyeti)',
                etiology: 'Yüksek ateşe bağlı febril konvülsiyon (nöbet) gelişme riskine bağlı olarak',
                symptoms: '39.3°C ateş ve geçirilmiş febril nöbet öyküsü ile tanımlanan (Risk Tanısı)',
                noc: ['Nöbet anında hastada travma, yaralanma veya aspirasyon gelişmeyecek.'],
                nic: [
                    '🟢 [Bağımsız] Yatak kenarlıkları kaldırılacak ve yumuşak koruyucu süngerlerle kaplanacak.',
                    '🟢 [Bağımsız] Nöbet anında hasta hemen sol yan (koma) pozisyonuna getirilecek.',
                    '🔴 [Bağımlı] Nöbet 5 dakikayı aşarsa hekim istemli rektal Diazepam uygulanacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı (Nöbet gözlenmedi).'
            },
            {
                diagnosisId: 'aspirasyon_riski',
                diagnosisTitle: '00039 - Aspirasyon Riski (Yan Tanı)',
                etiology: 'Nöbet sırasında bilinç bulanıklığı ve tükürük birikimine bağlı olarak',
                symptoms: 'Febril nöbet geçirme riski ile tanımlanan (Risk Tanısı)',
                noc: ['Havayolu açık tutulacak, aspirasyon gelişmeyecek.'],
                nic: [
                    '🟢 [Bağımsız] Yatak başında aspire cihazı ve puar hazır bulundurulacak.',
                    '🟢 [Bağımsız] Nöbet anında hastanın ağzına sert cisim/kaşık sokulmayacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'gaz_degisimi_riski',
                diagnosisTitle: '00030 - Gaz Değişiminde Bozulma Riski (Yan Tanı)',
                etiology: 'Nöbet esnasındaki olası apne ve solunum durmasına bağlı olarak',
                symptoms: 'Nöbet riski varlığı ile tanımlanan (Risk Tanısı)',
                noc: ['SpO2 > %95 tutulacak.'],
                nic: [
                    '🔴 [Bağımlı] Nöbet anında maske ile Oksijen desteği verilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'ebeveyn_korkusu',
                diagnosisTitle: '00146 - Ebeveyn Korkusu ve Şiddetli Anksiyetesi (Yan Tanı)',
                etiology: 'Çocuğun nöbet geçirmesine tanıklık etme ve ölüm korkusuna bağlı olarak',
                symptoms: 'Ailenin panik halinde ağlaması ile gösterilen',
                noc: ['Aile nöbet anında yapılması gereken ilkyardımı kavrayacak.'],
                nic: [
                    '🟢 [Bağımsız] Aileye sakin kalınması ve sol yan pozisyonu verilmesi gerektiği anlatılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'sivi_volum_eksikligi_riski',
                diagnosisTitle: '00028 - Sıvı Volüm Eksikliği Riski (Yan Tanı)',
                etiology: 'Yüksek ateşe bağlı terleme ve artmış perspirasyon kaybına bağlı olarak',
                symptoms: '39.3°C ateş ve terleme ile gösterilen',
                noc: ['Çocuk dehidrate olmayacak.'],
                nic: [
                    '🟢 [Bağımsız] Bol ılık sıvı gıdalar (su, çorba, komposto) içirilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'uyku_oruntusu_bozulma',
                diagnosisTitle: '00095 - Uyku Örüntüsünde Bozulma (Yan Tanı)',
                etiology: 'Ateş yüksekliği ve acil müdahalelere bağlı olarak',
                symptoms: 'Huzursuzluk ve uyuyamama ile gösterilen',
                noc: ['Çocuk dinlendirici uyku uyuyacak.'],
                nic: [
                    '🟢 [Bağımsız] Sakin ve serin bir oda ortamı sağlanacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'yorgunluk',
                diagnosisTitle: '00155 - Yorgunluk (Yan Tanı)',
                etiology: 'Yüksek ateş ve kas titremelerine bağlı olarak',
                symptoms: 'Ateş düştükten sonra halsizlik ile gösterilen',
                noc: ['Çocuğun enerjisi toparlanacak.'],
                nic: [
                    '🟢 [Bağımsız] Yatak istirahati teşvik edilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'enfeksiyon_riski',
                diagnosisTitle: '00004 - Enfeksiyon Riski (Yan Tanı)',
                etiology: 'Ateşe neden olan tonsillit/otit enfeksiyonuna bağlı olarak',
                symptoms: 'Boğazda kızarıklık ve ateş ile gösterilen',
                noc: ['Enfeksiyon kontrol altına alınacak.'],
                nic: [
                    '🔴 [Bağımlı] Hekim istemli antibiyotik tedavisi zamanında verilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'bilgi_eksikligi',
                diagnosisTitle: '00126 - Bilgi Eksikliği (Yan Tanı)',
                etiology: 'Ateş düşürücülerin doğru dozları ve nöbet anı müdahalesi hakkında bilgi eksikliğine bağlı olarak',
                symptoms: 'Ailenin soruları ile gösterilen',
                noc: ['Aile doğru antipiretik dozlarını ve nöbet ilk yardımını öğrenecek.'],
                nic: [
                    '🟢 [Bağımsız] Aileye yazılı ve sözlü ateş yönetim rehberi verilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
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
        description: 'Sezaryen veya normal vajinal doğum yapan lohusalarda uterin involüsyon, kanama riski, ağrı ve emzirme takibi (10 Detaylı Bakım Planı).',
        tags: ['Kadın Doğum', 'Lohusalık', 'Postpartum', 'Lokia', 'Sezaryen'],
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
                noc: ['Uterus sert ve göbek hizasında (involüsyonda) tutulacak.', 'Lokia miktarı normal sınırlar içerisinde seyredecek.'],
                nic: [
                    '🟢 [Bağımsız] Fundus yüksekliği ve sertliği saat başı eksternal masaj yapılarak kontrol edilecek.',
                    '🟢 [Bağımsız] Lokia miktarı (ped tartımı), rengi (rubra) ve pıhtı varlığı 2 saatte bir izlenecek.',
                    '🔴 [Bağımlı] Hekim istemine uygun Oksitosin IV infüzyonu uterin kasılmaları sağlamak için uygulanacak.',
                    '🟢 [Bağımsız] Mesane doluluğu uterus kasılmasını engelleyeceğinden idrar çıkışı kontrol edilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı (Uterus sert, kanama normal).'
            },
            {
                diagnosisId: 'akut_agri',
                diagnosisTitle: '00132 - Akut Ağrı',
                etiology: 'Sezaryen insizyonu ve postpartum uterin kramplara (afterpains) bağlı olarak',
                symptoms: 'Ağrı skorunun 5/10 olması ve insizyon hassasiyeti ile gösterilen',
                noc: ['Hastanın ağrı skoru 2\'nin altına inecek, emzirme ve mobilizasyonu kolaylaşacak.'],
                nic: [
                    '🟢 [Bağımsız] Hastaya emzirme esnasında insizyon bölgesini yastıkla destekleme tekniği gösterilecek.',
                    '🔴 [Bağımlı] Hekim istemli anne sütüne geçmeyen analjezik (Parasetamol IV/Oral) zamanında verilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı (Ağrı skoru 2/10).'
            },
            {
                diagnosisId: 'enfeksiyon_riski',
                diagnosisTitle: '00004 - Enfeksiyon Riski (Yan Tanı)',
                etiology: 'Cerrahi insizyon yeri ve plasentanın ayrıldığı alana bağlı olarak',
                symptoms: 'Insizyon yeri varlığı ile tanımlanan (Risk Tanısı)',
                noc: ['Pansuman temiz kalacak, loşia kokusuz olacak.'],
                nic: [
                    '🟢 [Bağımsız] Steril cerrahi pansuman takibi ve perine hijyeni yapılacak.',
                    '🔴 [Bağımlı] Hekim istemli profilaktik antibiyotik verilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'etkisiz_emzirme',
                diagnosisTitle: '00104 - Etkisiz Emzirme (Yan Tanı)',
                etiology: 'İlk doğum tecrübesizliği ve ameliyat ağrısı nedeniyle pozisyon verememeye bağlı olarak',
                symptoms: 'Bebeğin memeyi kavrayamaması ile gösterilen',
                noc: ['Anne bebeğini doğru kavrama tekniği ile emzirebilecek.'],
                nic: [
                    '🟢 [Bağımsız] Annenin yan yatış pozisyonunda emzirmesine yardım edilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'kabizlik_riski',
                diagnosisTitle: '00016 - Kabızlık Riski (Yan Tanı)',
                etiology: 'Karın kaslarının gevşemesi, analjezikler ve insizyon ağrısı korkusuna bağlı olarak',
                symptoms: 'Ameliyat sonrası 2 gündür gaita çıkaramama ile tanımlanan (Risk Tanısı)',
                noc: ['Lohusa 3. günde ağrısız gaita yapacak.'],
                nic: [
                    '🟢 [Bağımsız] Erken mobilizasyon teşvik edilecek, lifli beslenme önerilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'uyku_oruntusu_bozulma',
                diagnosisTitle: '00095 - Uyku Örüntüsünde Bozulma (Yan Tanı)',
                etiology: 'Bebek emzirme seansları ve hastane ortamına bağlı olarak',
                symptoms: 'Gece kesintili uyuma ile gösterilen',
                noc: ['Anne bebek uyuduğunda dinlenebilecek.'],
                nic: [
                    '🟢 [Bağımsız] Odadaki ziyaretçi sayısı kısıtlanarak annenin dinlenmesi sağlanacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'yorgunluk',
                diagnosisTitle: '00093 - Yorgunluk (Yan Tanı)',
                etiology: 'Doğum eylemi ve uykusuzluğa bağlı olarak',
                symptoms: 'Halsizlik ve enerjisizlik beyanı ile gösterilen',
                noc: ['Lohusanın enerjisi düzelecek.'],
                nic: [
                    '🟢 [Bağımsız] Bebek bakımında aile desteği organize edilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'dusme_riski',
                diagnosisTitle: '00155 - Düşme Riski (Yan Tanı)',
                etiology: 'Spinal anestezi sonrası bacaklarda his kaybı ve postural hipotansiyona bağlı olarak',
                symptoms: 'İlk ayağa kalkma anı ile tanımlanan (Risk Tanısı)',
                noc: ['Mobilizasyon esnasında düşme gelişmeyecek.'],
                nic: [
                    '🟢 [Bağımsız] İlk ayağa kalkış 2 hemşire eşliğinde yavaşça kademeli yaptırılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'rol_performansi',
                diagnosisTitle: '00125 - Annelik Rolüne Uyumda Güçlük (Yan Tanı)',
                etiology: 'Yeni ebeveynlik sorumluluğu ve kaygıya bağlı olarak',
                symptoms: 'Bebeği tutarken korkma ile gösterilen',
                noc: ['Anne güvenle bebek bakımını üstlenecek.'],
                nic: [
                    '🟢 [Bağımsız] Anneye göbek bakımı ve banyo eğitimi gösterilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'bilgi_eksikligi',
                diagnosisTitle: '00126 - Bilgi Eksikliği (Yan Tanı)',
                etiology: 'Lohusalık hijyeni ve tehlike işaretleri hakkında bilgi eksikliğine bağlı olarak',
                symptoms: 'Taburculuk soruları ile gösterilen',
                noc: ['Lohusa loşia takibini öğrenecek.'],
                nic: [
                    '🟢 [Bağımsız] Taburculuk öncesi yazılı lohusalık rehberi teslim edilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            }
        ]
    },
    {
        id: 'ob_breastfeeding',
        title: '🤰 Etkisiz Emzirme & Anne Sütü Desteği Bakım Planı',
        category: 'kadin_dogum',
        description: 'İlk kez anne olan lohusalarda emzirme güçlüğü, meme ucu çatlağı ve anne sütü azlığı kaygısı (10 Detaylı Bakım Planı).',
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
                symptoms: 'Bebeğin meme ucunu tam kavrayamaması ve meme ucunda hassasiyet ile gösterilen',
                noc: ['Anne bebeğini doğru teknikle (areolayı kavratarak) emzirebilecek.'],
                nic: [
                    '🟢 [Bağımsız] Beşik ve futbol tutuşu pozisyonları anneye gösterilecek.',
                    '🟢 [Bağımsız] Bebeğin areolanın büyük kısmını kavraması sağlanacak.',
                    '🟡 [İşbirlikli] Laktasyon danışmanı ile anneye birebir danışmanlık verilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı (Kavrama tekniği başarılı).'
            },
            {
                diagnosisId: 'akut_agri',
                diagnosisTitle: '00132 - Akut Ağrı (Meme Ucu Hassasiyeti) (Yan Tanı)',
                etiology: 'Yanlış kavramaya bağlı meme ucu çatlakları ve travmaya bağlı olarak',
                symptoms: 'Ağrı skorunun 4/10 olması ve meme başı fissürleri ile gösterilen',
                noc: ['Meme başı iyileşecek, ağrısız emzirme sağlanacak.'],
                nic: [
                    '🟢 [Bağımsız] Emzirme sonrası meme ucuna kendi sütü sürülerek kurutulacak.',
                    '🔴 [Bağımlı] Hekim/Laktasyon uzmanı istemli Lanolin krem uygulanacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'kesintiye_ugramis_emzirme',
                diagnosisTitle: '00105 - Kesintiye Uğramış Emzirme Riski (Yan Tanı)',
                etiology: 'Meme ucu acısı nedeniyle emzirmekten kaçınmaya bağlı olarak',
                symptoms: 'Anne emzirmeyi erteleme eğiliminde (Risk Tanısı)',
                noc: ['Emzirme kesintiye uğramayacak.'],
                nic: [
                    '🟢 [Bağımsız] Silikon meme ucu koruyucuları geçici süre denenecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'enfeksiyon_riski',
                diagnosisTitle: '00004 - Enfeksiyon Riski (Mastit) (Yan Tanı)',
                etiology: 'Meme kanallarında süt birikimi (staz) ve meme başı çatlaklarına bağlı olarak',
                symptoms: 'Memede dolgunluk ve çatlak varlığı ile tanımlanan (Risk Tanısı)',
                noc: ['Mastit ve meme apsesi gelişmeyecek.'],
                nic: [
                    '🟢 [Bağımsız] Memelerin her emzirmede tamamen boşaltılması sağlanacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'anksiyete',
                diagnosisTitle: '00146 - Anksiyete (Sütün Yetmediği Kaygısı) (Yan Tanı)',
                etiology: 'Bebeğin sık ağlaması ve sütün az geldiği düşüncesine bağlı olarak',
                symptoms: 'Annenin tedirginliği ile gösterilen',
                noc: ['Anne sütünün yeterliliğini bez sayısından takip etmeyi öğrenecek.'],
                nic: [
                    '🟢 [Bağımsız] Günde 5-6 ıslak bezin sütün yettiğinin en büyük kanıtı olduğu anlatılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'bebek_beslenme_riski',
                diagnosisTitle: '00002 - Bebekte Yetersiz Beslenme Riski (Yan Tanı)',
                etiology: 'Etkisiz emzirmeye bağlı olarak',
                symptoms: 'Kilo kaybı riski ile tanımlanan (Risk Tanısı)',
                noc: ['Bebek fizyolojik kilo kaybı sınırında kalacak.'],
                nic: [
                    '🟢 [Bağımsız] Günlük bebek tartı takibi yapılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'yorgunluk',
                diagnosisTitle: '00093 - Yorgunluk (Yan Tanı)',
                etiology: 'Gece 2 saatte bir emzirme seanslarına bağlı olarak',
                symptoms: 'Uykusuzluk ve bitkinlik ile gösterilen',
                noc: ['Anne gün içinde dinlenme zamanları bulacak.'],
                nic: [
                    '🟢 [Bağımsız] Eş desteği ve aile yardımı teşvik edilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'benlik_saygisi',
                diagnosisTitle: '00120 - Benlik Saygısında Düşme (Yan Tanı)',
                etiology: 'Bebeğini hemen emziremediği için yetersizlik hissine bağlı olarak',
                symptoms: '"İyi bir anne olamadım" beyanı ile gösterilen',
                noc: ['Anne benlik güvenini kazanacak.'],
                nic: [
                    '🟢 [Bağımsız] Annenin her çabası takdir edilip desteklenecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'ebeveynlik_catismasi',
                diagnosisTitle: '00153 - Ebeveynlik Rolünde Çatışma (Yan Tanı)',
                etiology: 'Çevreden gelen karmaşık emzirme tavsiyelerine bağlı olarak',
                symptoms: 'Kafa karışıklığı ile gösterilen',
                noc: ['Anne bilimsel laktasyon rehberliğini benimseyecek.'],
                nic: [
                    '🟢 [Bağımsız] Yanlış inançlar (emzik/biberon kullanımı) düzeltilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'bilgi_eksikligi',
                diagnosisTitle: '00126 - Bilgi Eksikliği (Yan Tanı)',
                etiology: 'Süt artırıcı diyet ve sağma pompası kullanımı hakkında bilgi eksikliğine bağlı olarak',
                symptoms: 'Sorular sorma ile gösterilen',
                noc: ['Anne laktasyon ilkelerini öğrenecek.'],
                nic: [
                    '🟢 [Bağımsız] Bol su tüketimi ve sağma teknikleri anlatılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            }
        ]
    },
    {
        id: 'ob_preeclampsia',
        title: '🤰 Preeklampsi (Gebelik Hipertansiyonu) Bakım Planı',
        category: 'kadin_dogum',
        description: 'Gebelikte tansiyon yüksekliği, proteinüri ve ödem gelişen riskli gebelerde maternal/fetal emniyet (10 Detaylı Bakım Planı).',
        tags: ['Kadın Doğum', 'Preeklampsi', 'Hipertansiyon', 'Maternal Risk', 'MgSO4'],
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
                noc: ['Kan basıncı hedef sınırlara (< 140/90 mmHg) çekilecek.', 'Eklampsi nöbeti gelişmeyecek.'],
                nic: [
                    '🟢 [Bağımsız] Kan basıncı ve nabız 2 saatte bir takip edilecek; baş ağrısı/görme bozukluğu sorgulanacak.',
                    '🔴 [Bağımlı] Hekim istemli Magnezyum Sülfat (MgSO4) infüzyonu uygulanacak.',
                    '🟢 [Bağımsız] MgSO4 toksisite takibi için derin tendon refleksi ve idrar çıkışı (>30 mL/saat) izlenecek.',
                    '🟢 [Bağımsız] Hasta sessiz, loş odaya alınarak sol yan yatış pozisyonunda tutulacak.'
                ],
                evaluationStatus: 'Kısmen Ulaşıldı (TA: 145/92 mmHg).'
            },
            {
                diagnosisId: 'serebral_perfuzyon_riski',
                diagnosisTitle: '00201 - Etkisiz Serebral Doku Perfüzyonu Riski (Yan Tanı)',
                etiology: 'Serebral vazospazm ve şiddetli hipertansiyona bağlı olarak',
                symptoms: '165/105 mmHg tansiyon ve şiddetli frontal baş ağrısı ile gösterilen',
                noc: ['Serebral kanama veya nöbet gelişmeyecek.'],
                nic: [
                    '🔴 [Bağımlı] Antihipertansif (Labetalol / Hidralazin) hekim orderına göre infüze edilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'travma_riski_eklampsi',
                diagnosisTitle: '00038 - Travma Riski (Eklampsi Nöbeti) (Yan Tanı)',
                etiology: 'Serebral irritasyon ve nöbet gelişme riskine bağlı olarak',
                symptoms: 'Şiddetli preeklampsi tablosu ile tanımlanan (Risk Tanısı)',
                noc: ['Nöbet anında hasta travma almayacak.'],
                nic: [
                    '🟢 [Bağımsız] Yatak kenarlıkları kaldırılacak, Kalsiyum Glukonat (antidot) hazır tutulacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'fetal_perfuzyon_riski',
                diagnosisTitle: '00209 - Fetal Doku Perfüzyonunda Bozulma Riski (Yan Tanı)',
                etiology: 'Plasental vazospazm ve üteroplasental kan akım azalmasına bağlı olarak',
                symptoms: 'Preeklampsi teşhisi ile tanımlanan (Risk Tanısı)',
                noc: ['Fetal kalp sesleri (FKS) 120-160/dk aralığında stabil seyredecek.'],
                nic: [
                    '🟢 [Bağımsız] NST (Nontres Test) ve FKS takibi 4 saatte bir yapılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'akut_agri',
                diagnosisTitle: '00132 - Akut Ağrı (Epigastrik Ağrı) (Yan Tanı)',
                etiology: 'Karaciğer kapsül gerilimi (HELLP sendromu riski) ve baş ağrısına bağlı olarak',
                symptoms: 'Sağ üst kadran hassasiyeti ile gösterilen',
                noc: ['Ağrı skoru kontrol altına alınacak.'],
                nic: [
                    '🔴 [Bağımlı] Karaciğer enzimleri (ALT/AST) ve trombosit sayımı hekim istemli izlenecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'siddetli_anksiyete',
                diagnosisTitle: '00146 - Şiddetli Anksiyete (Yan Tanı)',
                etiology: 'Erken doğum riski ve yoğun bakım ihtimaline bağlı olarak',
                symptoms: 'Gebe kadının korkulu beyanları ile gösterilen',
                noc: ['Hastanın anksiyetesi yatışacak.'],
                nic: [
                    '🟢 [Bağımsız] Sakin iletişim kurulup perineal/fetal durum hakkında bilgi verilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'dusme_riski',
                diagnosisTitle: '00155 - Düşme Riski (Yan Tanı)',
                etiology: 'MgSO4 tedavisine bağlı kas güçsüzlüğü ve baş dönmesine bağlı olarak',
                symptoms: 'Kesin yatak istirahati orderı ile tanımlanan (Risk Tanısı)',
                noc: ['Hastada düşme vakası yaşanmayacak.'],
                nic: [
                    '🟢 [Bağımsız] Hasta yatak dışına çıkarılmayacak, ördek/sürgü verilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'uyku_oruntusu_bozulma',
                diagnosisTitle: '00095 - Uyku Örüntüsünde Bozulma (Yan Tanı)',
                etiology: 'Sık manşon şişirmesi ve vital bulgu takiplerine bağlı olarak',
                symptoms: 'Kesintili uyku ile gösterilen',
                noc: ['Gündüz dinlenme periyotları sağlanacak.'],
                nic: [
                    '🟢 [Bağımsız] Gece takipleri hastayı minimal uyandıracak şekilde yapılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'oz_bakim_eksikligi',
                diagnosisTitle: '00108 - Öz Bakım Eksikliği (Yan Tanı)',
                etiology: 'Kesin yatak istirahati zorunluluğuna bağlı olarak',
                symptoms: 'Hijyen ve banyo gereksinimini tek başına karşılayamama ile gösterilen',
                noc: ['Öz bakımı hemşire desteğiyle tam karşılanacak.'],
                nic: [
                    '🟢 [Bağımsız] Yatak içi silme banyosu ve kişisel bakımı yapılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'bilgi_eksikligi',
                diagnosisTitle: '00126 - Bilgi Eksikliği (Yan Tanı)',
                etiology: 'Preeklampsi tehlike sinyalleri (görme bulanıklığı, sinek uçuşması) hakkında bilgi eksikliğine bağlı olarak',
                symptoms: 'Soru sorma ile gösterilen',
                noc: ['Gebe uyarıcı semptomları anında bildirecek.'],
                nic: [
                    '🟢 [Bağımsız] Görmede bulanıklık veya ışık çakması olduğunda hemen hemşire çağırması söylenecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
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
        description: 'Psikiyatri servisinde major depresif bozukluk, anerji, öz bakım ihmali ve benlik saygısı desteği (10 Detaylı Bakım Planı).',
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
                symptoms: 'Öz bakımını ve kişisel hijyenini ihmal etme, kirli giysiler ile gösterilen',
                noc: ['Hasta günlük öz bakım aktivitelerini rehberlikle gerçekleştirecek.'],
                nic: [
                    '🟢 [Bağımsız] Öz bakım adımları küçük, basit parçalara bölünerek hastaya adım adım rehberlik edilecek.',
                    '🟢 [Bağımsız] Hastanın her küçük öz bakım başarısı olumlu geri bildirim ile pekiştirilecek.',
                    '🟡 [İşbirlikli] Uğraş terapisti ve psikolog ile hastanın günlük rutin programı oluşturulacak.',
                    '🔴 [Bağımlı] Hekim istemli Antidepresan (SSRI) ilaçların gözetim altında içilmesi sağlanacak.'
                ],
                evaluationStatus: 'Kısmen Ulaşıldı (Öz bakım desteğe yanıt veriyor).'
            },
            {
                diagnosisId: 'benlik_saygisi_dusuklugu',
                diagnosisTitle: '00119 - Benlik Saygısında Düşme',
                etiology: 'Değersizlik, suçluluk duyguları ve bilişsel çarpıtmalara bağlı olarak',
                symptoms: '"Ben hiçbir işe yaramam" şeklinde kendisini olumsuz değerlendirme ile gösterilen',
                noc: ['Hasta olumlu kişisel özelliklerini ifade edebilecek.'],
                nic: [
                    '🟢 [Bağımsız] Terapötik dinleme ve koşulsuz kabul ile hastaya zaman ayrılacak.',
                    '🟢 [Bağımsız] Hastanın geçmişteki başarıları ve güçlü yönleri fark ettirilecek.'
                ],
                evaluationStatus: 'Kısmen Ulaşıldı.'
            },
            {
                diagnosisId: 'intihar_riski',
                diagnosisTitle: '00150 - Kendine Zarar Verme / İntihar Riski (Yan Tanı)',
                etiology: 'Şiddetli umutsuzluk, çaresizlik ve depresif ruh haline bağlı olarak',
                symptoms: 'Geleceğe dair umutsuzluk beyanı ile tanımlanan (Risk Tanısı)',
                noc: ['Hasta kendine zarar verme girişiminde bulunmayacak.'],
                nic: [
                    '🟢 [Bağımsız] Kesici, delici ve boğucu cisimler hastanın odasından uzaklaştırılacak.',
                    '🟢 [Bağımsız] Hasta yakın takibe alınarak intihar düşünceleri direkt sorulacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'uyku_oruntusu_bozulma',
                diagnosisTitle: '00095 - Uyku Örüntüsünde Bozulma (Yan Tanı)',
                etiology: 'Ruminasyon, kaygı ve depresif uykusuzluğa bağlı olarak',
                symptoms: 'Gece 3\'te uyanıp tekrar uyuyamama ile gösterilen',
                noc: ['Hasta gece en az 6 saat uyuyabilecek.'],
                nic: [
                    '🟢 [Bağımsız] Gündüz uyuması engellenip salonda aktiviteye katılımı sağlanacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'beslenme_bozulmasi',
                diagnosisTitle: '00002 - Beslenmede Bozulma: Gereksinimden Az (Yan Tanı)',
                etiology: 'İştahsızlık ve anerjiye bağlı olarak',
                symptoms: 'Kilo kaybı ve yemek reddi ile gösterilen',
                noc: ['Hasta günlük porsiyonunun en az %70\'ini tüketecek.'],
                nic: [
                    '🟢 [Bağımsız] Sevdiği yiyecekler az az ve sık aralıklarla sunulacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'sosyal_izolasyon',
                diagnosisTitle: '00053 - Sosyal İzolasyon (Yan Tanı)',
                etiology: 'İçedönüklük ve insanlarla iletişim kurma isteksizliğine bağlı olarak',
                symptoms: 'Odadan çıkmama ve grup etkinliklerine katılmama ile gösterilen',
                noc: ['Hasta servisteki grup sohbetine 15 dk katılabilecek.'],
                nic: [
                    '🟢 [Bağımsız] Birebir iletişimle aşamalı olarak grup etkinliklerine davet edilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'etkisiz_basa_cikma',
                diagnosisTitle: '00069 - Etkisiz Başa Çıkma (Yan Tanı)',
                etiology: 'Stresörlerle başa çıkma mekanizmalarının yetersiz kalmasına bağlı olarak',
                symptoms: 'Sorunlar karşısında pasif kalma ile gösterilen',
                noc: ['Hasta olumlu başa çıkma tekniklerini ifade edecek.'],
                nic: [
                    '🟢 [Bağımsız] Problem çözme becerileri üzerine konuşulacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'yorgunluk',
                diagnosisTitle: '00093 - Yorgunluk (Yan Tanı)',
                etiology: 'Psikomotor yavaşlama ve anerjiye bağlı olarak',
                symptoms: 'Yataktan kalkamama ile gösterilen',
                noc: ['Hasta gün içi hafif yürüyüş yapabilecek.'],
                nic: [
                    '🟢 [Bağımsız] Günlük küçük fiziksel hedefler konulacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'kabizlik',
                diagnosisTitle: '00016 - Kabızlık (Yan Tanı)',
                etiology: 'Hareketsizlik ve antidepresan ilaç yan etkilerine bağlı olarak',
                symptoms: '3 günde bir dışkılama ile gösterilen',
                noc: ['Bağırsak boşaltımı normale dönecek.'],
                nic: [
                    '🟢 [Bağımsız] Bol su tüketimi ve yürüyüş desteklenecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'bilgi_eksikligi',
                diagnosisTitle: '00126 - Bilgi Eksikliği (Yan Tanı)',
                etiology: 'Antidepresanların etkisinin 2-3 haftada çıkacağı hakkında bilgi eksikliğine bağlı olarak',
                symptoms: '"İlaçlar işe yaramıyor" beyanı ile gösterilen',
                noc: ['Hasta ilaç etki süresini öğrenecek.'],
                nic: [
                    '🟢 [Bağımsız] Antidepresanların düzenli kullanım önemi anlatılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            }
        ]
    },
    {
        id: 'psy_anxiety',
        title: '🧘 Şiddetli Anksiyete & Panik Bozukluğu Bakım Planı',
        category: 'psikiatri',
        description: 'Panik atak ve anksiyete krizinde solunum kontrolü, gevşeme egzersizleri ve güvenlik sağlama (10 Detaylı Bakım Planı).',
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
                symptoms: 'Taşikardi (118/dk), hiperventilasyon, tremor ve ölecekmiş hissi ile gösterilen',
                noc: ['Anksiyete düzeyi hafife çekilecek, vital bulgular normale dönecek.'],
                nic: [
                    '🟢 [Bağımsız] Panik anında hastanın yanında kalınarak "Güvendesiniz" mesajı verilecek.',
                    '🟢 [Bağımsız] Diyafram solunumu ve 4-7-8 nefes alma tekniği yaptırılacak.',
                    '🟢 [Bağımsız] Hasta gürültülü ortamdan alınarak sessiz odaya geçirilecek.',
                    '🔴 [Bağımlı] Hekim istemli Anksiyolitik (Diazepam/Alprazolam) tedavisi kriz anında uygulanacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı (Anksiyete yatıştı, Nabız: 78/dk).'
            },
            {
                diagnosisId: 'etkisiz_solunum_oruntusu',
                diagnosisTitle: '00032 - Etkisiz Solunum Örüntüsü (Yan Tanı)',
                etiology: 'Panik atağa bağlı hiperventilasyona bağlı olarak',
                symptoms: 'Hızlı ve yüzeysel solunum (26/dk), ellerde uyuşma ile gösterilen',
                noc: ['Solunum sayısı 14-18/dk aralığına gerileyecek.'],
                nic: [
                    '🟢 [Bağımsız] Hastayla birlikte yavaş ve derin nefes alma egzersizi yapılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'korku',
                diagnosisTitle: '00148 - Korku (Yan Tanı)',
                etiology: 'Kalp krizi geçirme veya felç olma algısına bağlı olarak',
                symptoms: '"Kalbim duracak" beyanı ile gösterilen',
                noc: ['Hasta fiziksel belirtilerin anksiyete kökenli olduğunu kabul edecek.'],
                nic: [
                    '🟢 [Bağımsız] EKG ve vital bulguların normal olduğu hastaya gösterilerek güvence verilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'uyku_oruntusu_bozulma',
                diagnosisTitle: '00095 - Uyku Örüntüsünde Bozulma (Yan Tanı)',
                etiology: 'Gece panik atak geçirme korkusuna bağlı olarak',
                symptoms: 'Uykuya dalmakta güçlük ile gösterilen',
                noc: ['Hasta uyku öncesi gevşeme tekniklerini uygulayacak.'],
                nic: [
                    '🟢 [Bağımsız] Uyku öncesi ılık bitki çayı ve progresif kas gevşemesi yaptırılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'etkisiz_basa_cikma',
                diagnosisTitle: '00069 - Etkisiz Başa Çıkma (Yan Tanı)',
                etiology: 'Anksiyete stresörleri karşısında çaresiz hissetmeye bağlı olarak',
                symptoms: 'Kaçınma davranışları ile gösterilen',
                noc: ['Hasta anksiyete anında güvenli alan tekniklerini kullanacak.'],
                nic: [
                    '🟢 [Bağımsız] Bilişsel davranışçı teknikler (düşünceyi durdurma) öğretilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'sosyal_izolasyon',
                diagnosisTitle: '00053 - Sosyal İzolasyon (Agorafobi) (Yan Tanı)',
                etiology: 'Kalabalık yerlerde panik atak geçirme korkusuna bağlı olarak',
                symptoms: 'Evden çıkmak istememe ile gösterilen',
                noc: ['Hasta kademeli olarak sosyal alanlara çıkabilecek.'],
                nic: [
                    '🟢 [Bağımsız] Dereceli maruz bırakma planı psikolog işbirliğiyle çizilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'benlik_saygisi',
                diagnosisTitle: '00119 - Benlik Saygısında Düşme (Yan Tanı)',
                etiology: 'Panik atakları kontrol edemediği için utanç duymaya bağlı olarak',
                symptoms: 'Kendini zayıf görme ile gösterilen',
                noc: ['Hasta panik atağın bir hastalık olduğunu ve tedavi edilebilirliğini kavrayacak.'],
                nic: [
                    '🟢 [Bağımsız] Hastaya psiko-eğitim verilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'akut_agri',
                diagnosisTitle: '00132 - Akut Ağrı (Göğüs Sıkışması) (Yan Tanı)',
                etiology: 'Anksiyeteye bağlı göğüs kaslarının kasılmasına bağlı olarak',
                symptoms: 'Göğüste baskı hissi ile gösterilen',
                noc: ['Göğüs kaslarındaki gerilim çözülecek.'],
                nic: [
                    '🟢 [Bağımsız] Omuz ve göğüs bölgesine esneme ve gevşeme yaptırılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'yorgunluk',
                diagnosisTitle: '00093 - Yorgunluk (Yan Tanı)',
                etiology: 'Sempatik sistemin sürekli aktif olmasına bağlı bedensel tükenmişliğe bağlı olarak',
                symptoms: 'Atak sonrası halsizlik ile gösterilen',
                noc: ['Bedensel dinlenme sağlanacak.'],
                nic: [
                    '🟢 [Bağımsız] Atak sonrası hastanın dinlenmesine izin verilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'bilgi_eksikligi',
                diagnosisTitle: '00126 - Bilgi Eksikliği (Yan Tanı)',
                etiology: 'Panik atak fizyolojisi ve nefes teknikleri hakkında bilgi eksikliğine bağlı olarak',
                symptoms: 'Sorular sorma ile gösterilen',
                noc: ['Hasta panik atak anındaki beden tepkilerini öğrenecek.'],
                nic: [
                    '🟢 [Bağımsız] Panik atağın ölümcül olmadığı görsel materyallerle anlatılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            }
        ]
    },
    {
        id: 'psy_bipolar_mania',
        title: '🧘 Bipolar Bozukluk (Mani Dönemi) Bakım Planı',
        category: 'psikiatri',
        description: 'Mani dönemindeki bipolar hastalarda ajitasyon, uyku ihtiyacında azalma ve emniyet takibi (10 Detaylı Bakım Planı).',
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
                noc: ['Hastanın gece kesintisiz en az 5-6 saat uyuması sağlanacak.'],
                nic: [
                    '🟢 [Bağımsız] Çevresel uyararanlar (ışık, ses) akşam saatlerinde azaltılacak.',
                    '🟢 [Bağımsız] Ayakta yenebilen (finger food) yüksek kalorili besinlerle beslenecek.',
                    '🔴 [Bağımlı] Hekim istemli Duygudurum Dengeleyici (Lityum) ve Antipsikotik ilaçlar verilecek.'
                ],
                evaluationStatus: 'Kısmen Ulaşıldı.'
            },
            {
                diagnosisId: 'siddet_uygulama_riski',
                diagnosisTitle: '00138 - Diğerlerine Yönelik Şiddet Riski (Yan Tanı)',
                etiology: 'Psikomotor ajitasyon, dürtüsellik ve aşırı uyarılabilirliğe bağlı olarak',
                symptoms: 'Yüksek sesle bağırma ve sınır tanımama ile tanımlanan (Risk Tanısı)',
                noc: ['Hasta çevresindekilere veya personele zarar vermeyecek.'],
                nic: [
                    '🟢 [Bağımsız] Hasta ile net, kısa ve sakin cümlelerle iletişim kurulacak.',
                    '🟢 [Bağımsız] Tartışmalı ortamlardan uzak tutulacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'beslenme_bozulmasi',
                diagnosisTitle: '00002 - Beslenmede Bozulma: Gereksinimden Az (Yan Tanı)',
                etiology: 'Yerinde duramama ve oturup yemek yemeyi reddetmeye bağlı olarak',
                symptoms: 'Kilo kaybı ve sürekli gezinme ile gösterilen',
                noc: ['Günlük kalori alımı sağlanacak.'],
                nic: [
                    '🟢 [Bağımsız] Yürürken yenebilecek sandviç, muz, meyve suları sunulacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'travma_riski',
                diagnosisTitle: '00155 - Travma ve Düşme Riski (Yan Tanı)',
                etiology: 'Aşırı hızlı hareket etme ve tehlikeleri öngörememeye bağlı olarak',
                symptoms: 'Koşuşturma ile gösterilen',
                noc: ['Yaralanma gelişmeyecek.'],
                nic: [
                    '🟢 [Bağımsız] Servis koridorlarındaki kaygan veya sert engeller kaldırılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'dusunce_surecleri_bozulma',
                diagnosisTitle: '00201 - Düşünce Süreçlerinde Bozulma (Yan Tanı)',
                etiology: 'Fikir uçuşması ve büyüklük (grandiöz) hezeyanlarına bağlı olarak',
                symptoms: '"Ben cumhurbaşkanıyım, milyon dolarlarım var" şeklinde beyanlar ile gösterilen',
                noc: ['Hasta gerçeklikle bağını koruyacak.'],
                nic: [
                    '🟢 [Bağımsız] Hezeyanları ile tartışılmayacak ama onaylanmayıp gerçeklik vurgulanacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'sosyal_etkilesim_bozulma',
                diagnosisTitle: '00053 - Sosyal Etkileşimde Bozulma (Yan Tanı)',
                etiology: 'Baskılı konuşma ve başkalarının kişisel alanına müdahaleye bağlı olarak',
                symptoms: 'Diğer hastaları rahatsız etme ile gösterilen',
                noc: ['Hasta kişilerarası sınırları koruyacak.'],
                nic: [
                    '🟢 [Bağımsız] Bireysel uğraş aktivitelerine yönlendirilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'sivi_volum_eksikligi_riski',
                diagnosisTitle: '00028 - Sıvı Volüm Eksikliği Riski (Yan Tanı)',
                etiology: 'Sürekli hareket halinde olup su içmeyi unutmaya bağlı olarak',
                symptoms: 'Hiperaktivite ile tanımlanan (Risk Tanısı)',
                noc: ['Sıvı dengesi korunacak.'],
                nic: [
                    '🟢 [Bağımsız] Eline sık sık kapalı su şişeleri verilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'oz_bakim_eksikligi',
                diagnosisTitle: '00108 - Öz Bakım Eksikliği (Yan Tanı)',
                etiology: 'Dikkat dağınıklığı ve giyimde aşırı süslü/uyumsuz seçimlere bağlı olarak',
                symptoms: 'Uyumsuz kıyafetler ile gösterilen',
                noc: ['Mevsime uygun düzgün giyinecek.'],
                nic: [
                    '🟢 [Bağımsız] Kıyafet seçenekleri 2 sade alternatif ile sınırlandırılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'etkisiz_basa_cikma',
                diagnosisTitle: '00069 - Etkisiz Başa Çıkma (Yan Tanı)',
                etiology: 'Hastalık anozognozisine (hastalığını kabul etmeme) bağlı olarak',
                symptoms: '"Ben hasta değilim" beyanı ile gösterilen',
                noc: ['İlaç uyumu sağlanacak.'],
                nic: [
                    '🟢 [Bağımsız] İlaç içimi yuttuğu gözle görülerek sağlanacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'bilgi_eksikligi',
                diagnosisTitle: '00126 - Bilgi Eksikliği (Lityum Kullanımı) (Yan Tanı)',
                etiology: 'Lityum zehirlenme belirtileri hakkında bilgi eksikliğine bağlı olarak',
                symptoms: 'Sorular sorma ile gösterilen',
                noc: ['Hasta Lityum kan düzeyi takibini öğrenecek.'],
                nic: [
                    '🟢 [Bağımsız] Bol tuz/su dengesi ve kan verme takvimi anlatılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
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
        description: 'Genel cerrahi (Apandektomi / Kolesistektomi vb.) geçiren hastalarda akut ağrı, enfeksiyon, mobilizasyon ve insizyon bakımı (10 Detaylı Bakım Planı).',
        tags: ['Cerrahi', 'Post-Op', 'Ağrı', 'Enfeksiyon', 'İnsizyon'],
        patientInfo: {
            name: 'Ahmet Y.',
            age: 52,
            gender: 'Erkek',
            diagnosis: 'Post-Op Apandektomi (1. Gün)',
            room: 'Cerrahi Servis 304',
            vitals: { ates: 37.6, tansiyonSystolic: 135, tansiyonDiastolic: 85, nabiz: 88, solunum: 18, spo2: 97, agri: 6 }
        },
        carePlans: [
            {
                diagnosisId: 'akut_agri',
                diagnosisTitle: '00132 - Akut Ağrı',
                etiology: 'Cerrahi insizyon ve doku travmasına bağlı olarak',
                symptoms: 'Ağrı skorunun 6/10 olması ve insizyon bölgesinde hassasiyet ile gösterilen',
                noc: ['Hastanın ağrı skoru 3\'ün altına indirilecek.', 'Hasta mobilize olurken ağrısının hafiflediğini ifade edecek.'],
                nic: [
                    '🟢 [Bağımsız] Ağrı şiddeti (0-10 NRS) 2 saatte bir değerlendirilecek.',
                    '🔴 [Bağımlı] Hekim istemine uygun IV analjezik zamanında infüze edilecek.',
                    '🟢 [Bağımsız] İnsizyon bölgesi öksürük ve hareket esnasında yastık ile desteklenecek.',
                    '🟢 [Bağımsız] Yarı-Fowler pozisyonu sağlanacak.'
                ],
                evaluationStatus: 'Kısmen Ulaşıldı (Analjezik sonrası ağrı skoru 3\'e geriledi).'
            },
            {
                diagnosisId: 'enfeksiyon_riski',
                diagnosisTitle: '00004 - Enfeksiyon Riski',
                etiology: 'Cerrahi insizyon, doku bütünlüğünde bozulma ve iv kateter bulunmasına bağlı olarak',
                symptoms: 'Cerrahi yara ve invaziv hat varlığı ile tanımlanan (Risk Tanısı)',
                noc: ['Yara yerinde enfeksiyon belirtileri gelişmeyecek.', 'Hastanın ateşi 37.5 °C altında kalacak.'],
                nic: [
                    '🟢 [Bağımsız] Cerrahi pansuman steril teknikle değiştirilecek.',
                    '🟢 [Bağımsız] İnsizyon hattı enfeksiyon yönünden kontrol edilecek.',
                    '🔴 [Bağımlı] Profilaktik antibiyotik tedavisi uygulanacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı (Yara yeri temiz ve kuru).'
            },
            {
                diagnosisId: 'cilt_butunlugu_bozulma',
                diagnosisTitle: '00046 - Cilt Bütünlüğünde Bozulma (Yan Tanı)',
                etiology: 'Cerrahi kesi ve insizyon hattına bağlı olarak',
                symptoms: 'Sütür hattı ve cerrahi kesi varlığı ile gösterilen',
                noc: ['Yara kenarları birbiriyle yaklaşacak, primer iyileşme sağlanacak.'],
                nic: [
                    '🟢 [Bağımsız] Yara yeri gerilmesini önlemek için ani hareketlerden kaçınılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'fiziksel_mobilite_bozulma',
                diagnosisTitle: '00085 - Fiziksel Mobilitede Bozulma (Yan Tanı)',
                etiology: 'Cerrahi ağrı ve dikişlerin açılma korkusuna bağlı olarak',
                symptoms: 'Yataktan kalkmada tereddüt ile gösterilen',
                noc: ['Hasta ameliyat sonrası erken dönemde koridorda yürüyecek.'],
                nic: [
                    '🟢 [Bağımsız] Erken mobilizasyonun trombozu ve gazı önlediği anlatılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'sivi_volum_eksikligi_riski',
                diagnosisTitle: '00028 - Sıvı Volüm Eksikliği Riski (Yan Tanı)',
                etiology: 'Ameliyat öncesi NPO kalma ve intraoperatif kan/sıvı kaybına bağlı olarak',
                symptoms: 'Ağız kuruluğu ile gösterilen',
                noc: ['Sıvı bilançosu dengede olacak.'],
                nic: [
                    '🔴 [Bağımlı] Hekim istemli IV Serum Fizyolojik / İzotonik verilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'kabizlik_riski',
                diagnosisTitle: '00016 - Kabızlık / Paralitik İleus Riski (Yan Tanı)',
                etiology: 'Anestezi maddeleri, opioid analjezikler ve bağırsak manipülasyonuna bağlı olarak',
                symptoms: 'Bağırsak seslerinin yavaşlaması ile tanımlanan (Risk Tanısı)',
                noc: ['Gaz ve gaita çıkışı gerçekleşecek.'],
                nic: [
                    '🟢 [Bağımsız] Bağırsak sesleri 4 kadranda dinlenecek, gaz çıkarılması sorgulanacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'etkisiz_solunum_temizligi_riski',
                diagnosisTitle: '00031 - Etkisiz Solunum Yolu Temizliği Riski (Yan Tanı)',
                etiology: 'Genel anesteziye bağlı sekresyon birikimi ve öksürürken ağrı hissetmeye bağlı olarak',
                symptoms: 'Yüzeysel soluma ile tanımlanan (Risk Tanısı)',
                noc: ['Akciğer sesleri açık olacak, atelektazi gelişmeyecek.'],
                nic: [
                    '🟢 [Bağımsız] Trifold (Triflo) solunum egzersiz cihazı 1 saatte 10 kez yaptırılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'bulanti',
                diagnosisTitle: '00134 - Bulanti (Yan Tanı)',
                etiology: 'Anestezi gazları ve cerrahi strese bağlı olarak',
                symptoms: 'Mide bulantısı beyanı ile gösterilen',
                noc: ['Bulantı hissi geçecek, kusma olmayacak.'],
                nic: [
                    '🔴 [Bağımlı] Hekim istemli Antiemetik (Metoklopramid/Ondansetron) uygulanacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'oz_bakim_eksikligi',
                diagnosisTitle: '00108 - Öz Bakım Eksikliği (Yan Tanı)',
                etiology: 'Ameliyat sonrası halsizlik ve IV kateter kısıtlamasına bağlı olarak',
                symptoms: 'Kişisel bakımını tek başına yapamama ile gösterilen',
                noc: ['Öz bakımı destekle tamamlanacak.'],
                nic: [
                    '🟢 [Bağımsız] Yatak içi giyinme ve hijyen desteği sunulacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'bilgi_eksikligi',
                diagnosisTitle: '00126 - Bilgi Eksikliği (Yan Tanı)',
                etiology: 'Evde yara bakımı, banyo zamanı ve dikiş aldırma günü hakkında bilgi eksikliğine bağlı olarak',
                symptoms: 'Sorular sorulması ile gösterilen',
                noc: ['Hasta evde pansuman kurallarını öğrenecek.'],
                nic: [
                    '🟢 [Bağımsız] Taburculuk yara bakım brosürü verilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
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
        description: 'Akut KOAH alevlenmesi yaşayan hastalarda gaz değişimi bozulması, dispne, sekresyon ve oksijen tedavisi (10 Detaylı Bakım Planı).',
        tags: ['Dahiliye', 'Solunum', 'KOAH', 'Dispne', 'Oksijen'],
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
                noc: ['SpO2 düzeyi hedef %92-94 aralığında tutulacak.', 'Solunum hızı 20/dk altına düşecek.'],
                nic: [
                    '🟢 [Bağımsız] SpO2 takibi sürekli yapılacak.',
                    '🔴 [Bağımlı] Hekim istemine uygun olarak Düşük Akımlı (2 L/dk) Oksijen verilecek.',
                    '🟢 [Bağımsız] High-Fowler pozisyonu verilecek.',
                    '🔴 [Bağımlı] Nebülizatör (Salbutamol + İpratropiyum) tedavisi uygulanacak.'
                ],
                evaluationStatus: 'Kısmen Ulaşıldı (SpO2 %93).'
            },
            {
                diagnosisId: 'solunum_yolu_kapanmasi',
                diagnosisTitle: '00031 - Etkisiz Solunum Yolu Temizliği (Yan Tanı)',
                etiology: 'Koyu mukus sekresyonu ve etkisiz öksürüğe bağlı olarak',
                symptoms: 'Ronkus ve balgam çıkarmada zorlanma ile gösterilen',
                noc: ['Balgam rahat çıkarılacak, akciğer sesleri netleşecek.'],
                nic: [
                    '🟢 [Bağımsız] Büzük dudak (pursed-lip) solunumu ve derin öksürme egzersizi yaptırılacak.',
                    '🔴 [Bağımlı] Mukolitik şurup/nebül uygulanacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'etkisiz_solunum_oruntusu',
                diagnosisTitle: '00032 - Etkisiz Solunum Örüntüsü (Yan Tanı)',
                etiology: 'Bronkokonstrüksiyon ve solunum kaslarının yorulmasına bağlı olarak',
                symptoms: 'Yere yardımcı solunum kaslarının katılımı ile gösterilen',
                noc: ['Solunum ritmi ve derinliği düzelecek.'],
                nic: [
                    '🟢 [Bağımsız] Diyafram solunumu teşvik edilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'aktivite_toleranssizligi',
                diagnosisTitle: '00092 - Aktivite Toleranssızlığı (Yan Tanı)',
                etiology: 'Oksijenasyon yetersizliği ve kronik dispneye bağlı olarak',
                symptoms: 'Yürürken tıkanma ile gösterilen',
                noc: ['Hasta lavaboya dispnesiz yürüyebilecek.'],
                nic: [
                    '🟢 [Bağımsız] Aktivite aralarında dinlenme molaları verilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'beslenme_bozulmasi',
                diagnosisTitle: '00002 - Beslenmede Bozulma: Gereksinimden Az (Yan Tanı)',
                etiology: 'Yemek yerken soluksuz kalma ve iştahsızlığa bağlı olarak',
                symptoms: 'Zayıflama ve öğün yarım bırakma ile gösterilen',
                noc: ['Kilo kaybı duracak.'],
                nic: [
                    '🟢 [Bağımsız] Az az, gaz yapmayan 5-6 küçük öğün düzenlenecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'uyku_oruntusu_bozulma',
                diagnosisTitle: '00095 - Uyku Örüntüsünde Bozulma (Yan Tanı)',
                etiology: 'Gece gelen dispne krizleri ve öksürüğe bağlı olarak',
                symptoms: 'Yatakta dik oturarak uyuma zorunluluğu ile gösterilen',
                noc: ['Gece kesintisiz uyku sağlanacak.'],
                nic: [
                    '🟢 [Bağımsız] Yatak başı gece boyu yüksek tutulacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'enfeksiyon_riski',
                diagnosisTitle: '00004 - Enfeksiyon Riski (Akciğer Enfeksiyonu) (Yan Tanı)',
                etiology: 'Bronşlarda sekresyon stazı ve sigara öyküsüne bağlı olarak',
                symptoms: 'Balgam renginde koyulaşma riski ile tanımlanan (Risk Tanısı)',
                noc: ['Purulan balgam ve ateş gelişmeyecek.'],
                nic: [
                    '🔴 [Bağımlı] Hekim istemli antibiyotik tedavisi uygulanacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'anksiyete',
                diagnosisTitle: '00146 - Anksiyete (Nefessiz Kalma Korkusu) (Yan Tanı)',
                etiology: 'Boğulma hissi ve kronik hastalığa bağlı olarak',
                symptoms: 'Dispne anında panikleme ile gösterilen',
                noc: ['Hasta kriz anında sakin kalabilecek.'],
                nic: [
                    '🟢 [Bağımsız] Güven verici tavırla solunum kontrolü yaptırılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'oz_bakim_eksikligi',
                diagnosisTitle: '00108 - Öz Bakım Eksikliği (Yan Tanı)',
                etiology: 'Efor dispnesi ve yorgunluğa bağlı olarak',
                symptoms: 'Banyo ve giyinmede yardım isteme ile gösterilen',
                noc: ['Öz bakımı efora göre desteklenecek.'],
                nic: [
                    '🟢 [Bağımsız] Banyo esnasında sandalye ve oksijen takviyesi sağlanacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'bilgi_eksikligi',
                diagnosisTitle: '00126 - Bilgi Eksikliği (Yan Tanı)',
                etiology: 'Evde O2 konsantratörü ve puffer (fısfıs) kullanımı konusunda bilgi eksikliğine bağlı olarak',
                symptoms: 'İlaçları yanlış çekme ile gösterilen',
                noc: ['Hasta Inhaler cihaz tekniğini doğru uygulayacak.'],
                nic: [
                    '🟢 [Bağımsız] Inhaler chamber (hazne) kullanımı uygulamalı gösterilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            }
        ]
    },
    {
        id: 'diabetic_ketoacidosis',
        title: '🩸 Tip 1 & Tip 2 Diyabet / Diyabetik Ketoasidoz Bakım Planı',
        category: 'dahiliye',
        description: 'Diyabetik hastalarda kan şekeri regülasyonu, insülin tedavisi, sıvı replasmanı ve ayak bakımı (10 Detaylı Bakım Planı).',
        tags: ['Dahiliye', 'Endokrin', 'Diyabet', 'İnsülin', 'Glukometre'],
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
                noc: ['Kan glukoz düzeyi 90-140 mg/dL aralığında sabitlenecek.'],
                nic: [
                    '🟢 [Bağımsız] Açlık ve tok kan şekerleri 4 saatte bir glukometre ile takip edilecek.',
                    '🔴 [Bağımlı] Hekim istemli Subkutan Regüler İnsülin dozaj cetveline göre uygulanacak.',
                    '🟡 [İşbirlikli] Diyetisyen ile karbohidrat sayımı diyeti planlanacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı (AKŞ: 118 mg/dL).'
            },
            {
                diagnosisId: 'sivi_volum_eksikligi',
                diagnosisTitle: '00027 - Sıvı Volüm Eksikliği (Yan Tanı)',
                etiology: 'Hiperglisemiye bağlı ozmotik diürez ve poliüriye bağlı olarak',
                symptoms: 'Sık idrara çıkma, poliüri ve polidipsi (aşırı susama) ile gösterilen',
                noc: ['Sıvı-elektrolit dengesi düzelecek.'],
                nic: [
                    '🟢 [Bağımsız] Aldığı-Çıkardığı Sıvı Takibi (AÇT) yapılacak.',
                    '🔴 [Bağımlı] IV İzotonik sıvı replasmanı açılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'elektrolit_dengesizligi_riski',
                diagnosisTitle: '00198 - Elektrolit Dengesinde Bozulma Riski (Yan Tanı)',
                etiology: 'İnsülin infüzyonu ile Potasyumun hücre içine kaymasına bağlı olarak',
                symptoms: 'Hipokalemi riski ile tanımlanan (Risk Tanısı)',
                noc: ['Serum potasyumu (K) 3.5 - 5.0 mEq/L aralığında kalacak.'],
                nic: [
                    '🔴 [Bağımlı] Serum elektrolit takibi hekim orderına göre yapılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'diyabetik_ayak_riski',
                diagnosisTitle: '00047 - Cilt Bütünlüğünde Bozulma Riski (Diyabetik Ayak) (Yan Tanı)',
                etiology: 'Periferik nöropati ve mikrovasküler dolaşım bozukluğuna bağlı olarak',
                symptoms: 'Ayaklarda his azalması ile tanımlanan (Risk Tanısı)',
                noc: ['Ayaklarda lezyon, nasır ve ülser gelişmeyecek.'],
                nic: [
                    '🟢 [Bağımsız] Ayaklar günlük ılık suyla yıkanıp parmak araları kurulanacak.',
                    '🟢 [Bağımsız] Pamuklu çorap ve yumuşak ortopedik ayakkabı önerilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'enfeksiyon_riski',
                diagnosisTitle: '00004 - Enfeksiyon Riski (Yan Tanı)',
                etiology: 'Hiperglisemik ortamın barier ve lökosit fonksiyonlarını baskılamasına bağlı olarak',
                symptoms: 'İdrar yolu enfeksiyonu riski ile tanımlanan (Risk Tanısı)',
                noc: ['Enfeksiyon bulgusu gözlenmeyecek.'],
                nic: [
                    '🟢 [Bağımsız] Tam idrar tahlili takibi yapılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'beslenme_bozulmasi',
                diagnosisTitle: '00002 - Beslenmede Bozulma: Gereksinimden Az (Yan Tanı)',
                etiology: 'Karbonhidrat metabolizma bozukluğuna bağlı olarak',
                symptoms: 'Polifaji (çabuk acıkma) ama kilo kaybı ile gösterilen',
                noc: ['Diyabetik ara ve ana öğün uyumu sağlanacak.'],
                nic: [
                    '🟡 [İşbirlikli] Diyetisyenle 3 ana 3 ara öğün takvimi uygulanacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'dusme_riski',
                diagnosisTitle: '00155 - Düşme Riski (Yan Tanı)',
                etiology: 'Olası hipoglisemi ataklarında baş dönmesi ve terlemeye bağlı olarak',
                symptoms: 'Hipoglisemi riski ile tanımlanan (Risk Tanısı)',
                noc: ['Hipoglisemi geliştiğinde hasta hemen müdahale edecek.'],
                nic: [
                    '🟢 [Bağımsız] Yatak başında 3 kesme şeker / meyve suyu hazır bulundurulacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'yorgunluk',
                diagnosisTitle: '00093 - Yorgunluk (Yan Tanı)',
                etiology: 'Hücresel düzeyde glukoz kullanım bozukluğuna bağlı olarak',
                symptoms: 'Halsizlik ve çabuk yorulma ile gösterilen',
                noc: ['Hastanın enerjisi normale dönecek.'],
                nic: [
                    '🟢 [Bağımsız] Düzenli yürüyüş ve egzersiz programı çizilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'etkisiz_saglik_yonetimi',
                diagnosisTitle: '00069 - Etkisiz Sağlık Yönetimi (Yan Tanı)',
                etiology: 'İnsülin saatlerini aksatma ve diyet ihlallerine bağlı olarak',
                symptoms: 'HbA1c oranının %9.2 çıkması ile gösterilen',
                noc: ['Hasta HbA1c hedefini < %7.0 yapacak.'],
                nic: [
                    '🟢 [Bağımsız] Diyabet hemşiresi tarafından insülin eğitimi verilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'bilgi_eksikligi',
                diagnosisTitle: '00126 - Bilgi Eksikliği (Yan Tanı)',
                etiology: 'İnsülin enjeksiyon bölgelerini değiştirme (lipodistrofi) hakkında bilgi eksikliğine bağlı olarak',
                symptoms: 'Sürekli aynı göbek bölgesine yapma ile gösterilen',
                noc: ['Hasta rotasyon haritasını doğru uygulayacak.'],
                nic: [
                    '🟢 [Bağımsız] Göbek, kol ve uyluk rotasyon şeması hastaya öğretilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
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
        description: 'Serebrovasküler olay geçiren hastalarda GKS takibi, aspirasyon, disfaji ve hemipleji bakımı (10 Detaylı Bakım Planı).',
        tags: ['Nörolojik', 'İnme', 'SVO', 'Hemipleji', 'Disfaji'],
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
                noc: ['Nörolojik tablo stabil tutulacak, GKS düşmeyecek.'],
                nic: [
                    '🟢 [Bağımsız] GKS ve pupil ışık refleksi 2 saatte bir izlenecek.',
                    '🟢 [Bağımsız] Yatak başı 30 derece yükseltilecek (venöz dönüşü kolaylaştırmak için).',
                    '🔴 [Bağımlı] Hekim istemli Antiagregan/Antikoagülan (Aspirin/Enoksaparin) verilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı (GKS: 14/15).'
            },
            {
                diagnosisId: 'yutma_guclugu',
                diagnosisTitle: '00103 - Yutma Güçlüğü (Disfaji) (Yan Tanı)',
                etiology: 'Kranial sinir tutulumu ve bulber motor kas felcine bağlı olarak',
                symptoms: 'Yutkunma sırasında öksürme ve gıda birikimi ile gösterilen',
                noc: ['Hasta aspirasyon olmadan beslenecek.'],
                nic: [
                    '🟢 [Bağımsız] Ağızdan besleme öncesi su yutma testi (Water swallow test) yapılacak.',
                    '🔴 [Bağımlı] Yutma refleksi yoksa hekim istemli NGT (Nazogastrik Tüp) takılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'aspirasyon_riski',
                diagnosisTitle: '00039 - Aspirasyon Riski (Yan Tanı)',
                etiology: 'Yutma refleksi kaybı ve salgı kontrolünün bozulmasına bağlı olarak',
                symptoms: 'Disfaji ile tanımlanan (Risk Tanısı)',
                noc: ['Aspirasyon pnomonisi gelişmeyecek.'],
                nic: [
                    '🟢 [Bağımsız] Beslenme esnasında yatak başı 90 derece dik tutulacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'fiziksel_mobilite_bozulma',
                diagnosisTitle: '00085 - Fiziksel Mobilitede Bozulma (Yan Tanı)',
                etiology: 'Sağ taraf hemiplejisi ve motor fonksiyon kaybına bağlı olarak',
                symptoms: 'Sağ kol ve bacakta güçsüzlük (0/5) ile gösterilen',
                noc: ['Eklem kontraktürleri gelişmeyecek.'],
                nic: [
                    '🟡 [İşbirlikli] Fizyoterapist ile pasif ROM (eklem hareket) egzersizleri 3 kez yaptırılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'sozel_iletisim_bozulma',
                diagnosisTitle: '00051 - Sözel İletişimde Bozulma (Afazi) (Yan Tanı)',
                etiology: 'Sol beyin yarım küresindeki Broca/Wernicke konuşma merkezi iskemisine bağlı olarak',
                symptoms: 'Kelime bulmakta zorlanma veya motor afazi ile gösterilen',
                noc: ['Hasta isteklerini iletişim kartları ile belirtecek.'],
                nic: [
                    '🟢 [Bağımsız] Görsel resimli iletişim panoları kullanılacak, sabırla dinlenecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'cilt_butunlugu_bozulma_riski',
                diagnosisTitle: '00047 - Cilt Bütünlüğünde Bozulma Riski (Yan Tanı)',
                etiology: 'Yatağa bağımlılık ve felçli tarafta hissedememeye bağlı olarak',
                symptoms: 'Braden skoru 12 (Yüksek risk) ile tanımlanan (Risk Tanısı)',
                noc: ['Sakrum ve topuklarda bası yarası açılmayacak.'],
                nic: [
                    '🟢 [Bağımsız] 2 saatte bir sağ/sol yan ve sırtüstü pozisyon değişimi yapılacak.',
                    '🟢 [Bağımsız] Havalı yatak kullanılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'oz_bakim_eksikligi',
                diagnosisTitle: '00108 - Öz Bakım Eksikliği (Yan Tanı)',
                etiology: 'Hemipleji ve baskın tarafı kullanamamaya bağlı olarak',
                symptoms: 'Yemek ve hijyende tam bağımlılık ile gösterilen',
                noc: ['Öz bakımı tam ve zamanında karşılanacak.'],
                nic: [
                    '🟢 [Bağımsız] Yatak banyosu ve ağız bakımı 8 saatte bir yapılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'kabizlik',
                diagnosisTitle: '00016 - Kabızlık (Yan Tanı)',
                etiology: 'İmmobilizasyon ve bağırsak peristaltizm yavaşlamasına bağlı olarak',
                symptoms: 'Defekasyon olmaması ile gösterilen',
                noc: ['Düzenli bağırsak boşaltımı olacak.'],
                nic: [
                    '🟢 [Bağımsız] Abdominal masaj ve bol enteral sıvı takviyesi verilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'dusme_riski',
                diagnosisTitle: '00155 - Düşme Riski (Yan Tanı)',
                etiology: 'Denge kaybı, taraf ihmali (neglect) ve kas güçsüzlüğüne bağlı olarak',
                symptoms: 'Hemipleji ile tanımlanan (Risk Tanısı)',
                noc: ['Düşme olayı yaşanmayacak.'],
                nic: [
                    '🟢 [Bağımsız] Yatak kenarlıkları kilitli tutulacak, felçli tarafına yaklaşırken dikkat edilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            },
            {
                diagnosisId: 'bilgi_eksikligi',
                diagnosisTitle: '00126 - Bilgi Eksikliği (Yan Tanı)',
                etiology: 'İnme rehabilitasyonu ve evde hasta bakımı hakkında aile bilgisi eksikliğine bağlı olarak',
                symptoms: 'Ailenin bakım kaygısı ile gösterilen',
                noc: ['Hasta yakınları pozisyon verme ve NGT beslemeyi öğrenecek.'],
                nic: [
                    '🟢 [Bağımsız] Aileye hasta taşıma, pozisyonlama ve NGT rehberi verilecek.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı.'
            }
        ]
    }
];

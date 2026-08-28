/**
 * Hemşirelik Bakım Rehberim - NANDA-I Hemşirelik Tanıları, NIC ve NOC Veritabanı (Standard Global Script)
 * Kapsamlı Klinik & Akademik Veri Havuzu (45+ NANDA-I Tanısı)
 */

window.NANDA_CATEGORIES = [
    { id: 'solunum', name: '🫁 Solunum ve Oksijenasyon', color: '#3b82f6' },
    { id: 'dolasim', name: '❤️ Dolaşım ve Perfüzyon', color: '#ef4444' },
    { id: 'beslenme', name: '🥗 Beslenme ve Metabolizma', color: '#10b981' },
    { id: 'bosaltim', name: '💧 Boşaltım ve Sıvı-Elektrolit', color: '#06b6d4' },
    { id: 'agri', name: '⚡ Ağrı ve Konfor', color: '#f59e0b' },
    { id: 'guvenlik', name: '🛡️ Güvenlik ve Enfeksiyon', color: '#8b5cf6' },
    { id: 'hareket', name: '🏃 Aktivite, Hareket ve Öz Bakım', color: '#ec4899' },
    { id: 'psikososyal', name: '🧠 Psikososyal ve İletişim', color: '#6366f1' },
    { id: 'cilt', name: '🩺 Cilt ve Doku Bütünlüğü', color: '#14b8a6' }
];

window.NANDA_DOMAINS = [
    { id: 'domain1', name: 'Domain 1: Sağlığı Geliştirme' },
    { id: 'domain2', name: 'Domain 2: Beslenme' },
    { id: 'domain3', name: 'Domain 3: Boşaltım ve Değişim' },
    { id: 'domain4', name: 'Domain 4: Aktivite / Dinlenme' },
    { id: 'domain5', name: 'Domain 5: Algılama / Biliş' },
    { id: 'domain6', name: 'Domain 6: Kendini Algılama' },
    { id: 'domain7', name: 'Domain 7: Rol İlişkileri' },
    { id: 'domain8', name: 'Domain 8: Cinsellik' },
    { id: 'domain9', name: 'Domain 9: Başa Çıkma / Stres Toleransı' },
    { id: 'domain10', name: 'Domain 10: Yaşam İlkeleri' },
    { id: 'domain11', name: 'Domain 11: Güvenlik / Koruma' },
    { id: 'domain12', name: 'Domain 12: Rahatlık / Konfor' },
    { id: 'domain13', name: 'Domain 13: Büyüme / Gelişme' }
];

window.NANDA_DIAGNOSES = [
    // =========================================================================
    // 1. SOLUNUM VE OKSİJENASYON
    // =========================================================================
    {
        id: 'gaz_degisimi',
        code: '00030',
        title: 'Gaz Değişiminde Bozulma',
        category: 'solunum',
        triggerVitals: { spo2Max: 93, solunumMin: 22 },
        definition: 'Alveoler-kapiller zarda oksijenasyon ve/veya karbondioksit atılımında fazlalık ya da eksiklik durumu.',
        etiology: ['Alveoler-kapiller zar değişiklikleri', 'Havalandırma-perfüzyon uyumsuzluğu', 'Akciğerlerde sekresyon birikimi', 'Bronşial obstrüksiyon (spazm)'],
        symptoms: ['Hipoksemi (SpO2 < %92)', 'Takipne (Solunum > 20/dk)', 'Dudaklarda siyanoz', 'Huzursuzluk ve konfüzyon', 'Dispne'],
        noc: ['Hastanın SpO2 değeri %95 ve üzerinde tutulacak.', 'Solunum hızı normal sınırlarda (12-20/dk) olacak.', 'Siyanoz gözlenmeyecek.'],
        nic: ['SpO2 ve Solunum hızı takip edilecek.', 'Hekim istemine uygun Oksijen tedavisi verilecek.', 'High-Fowler pozisyonu verilecek.', 'Derin solunum ve öksürme egzersizleri yaptırılacak.']
    },
    {
        id: 'solunum_yolu_kapanmasi',
        code: '00031',
        title: 'Etkisiz Solunum Yolu Temizliği',
        category: 'solunum',
        triggerVitals: { solunumMin: 24 },
        definition: 'Solunum yolunun açık tutulması için sekresyonların veya tıkanıklıkların temizlenememesi durumu.',
        etiology: ['Koyu ve yapışkan solunum sekresyonları', 'Sigara kullanımı ve irritanlar', 'Öksürme refleksinin zayıflaması', 'Yapay solunum yolu (Trakeostomi/Entüvasyon)'],
        symptoms: ['Etkisiz öksürük', 'Solunum seslerinde ronküs ve raller', 'Balgam çıkarmada güçlük', 'Dispneik solunum'],
        noc: ['Solunum yolları açık tutulacak, rahat balgam çıkarılması sağlanacak.', 'Ek solunum sesi duyulmayacak.'],
        nic: ['Etkili öksürme teknikleri gösterilecek.', 'Nebülizatör/buhar tedavisi uygulanacak.', 'Gerektiğinde steril aspirasyon yapılacak.', 'Sıvı alımı artırılacak.']
    },
    {
        id: 'solunum_oruntusu_bozulma',
        code: '00032',
        title: 'Etkisiz Solunum Örüntüsü',
        category: 'solunum',
        triggerVitals: { solunumMin: 26 },
        definition: 'İnspirasyon ve/veya ekspirasyonun yeterli havalandırmayı sağlamada yetersiz kalması.',
        etiology: ['Nöromüsküler bozukluklar', 'Solunum kası yorgunluğu', 'Göğüs duvarı deformitesi', 'Anksiyete ve hiperventilasyon'],
        symptoms: ['Takipne veya bradipne', 'Yardımcı solunum kaslarının kullanımı', 'Ortopne', 'Burun kanadı solunumu'],
        noc: ['Solunum sayısı ve ritmi normal sınırlara (12-20/dk) gelecek.'],
        nic: ['Hastaya solunum egzersizleri (triflo) yaptırılacak.', 'Yarı-Fowler/Fowler pozisyonu sağlanacak.', 'Kan gazları ve vital bulgular takip edilecek.']
    },
    {
        id: 'aspirasyon_riski',
        code: '00039',
        title: 'Aspirasyon Riski',
        category: 'solunum',
        triggerVitals: {},
        definition: 'Gastrointestinal sekresyonların, sıvı veya katı gıdaların solunum yollarına kaçma riski.',
        etiology: ['Nörolojik hasar ve yutma güçlüğü (Disfaji)', 'Bilinç düzeyinde azalma (GKS ≤ 8)', 'NG tüp veya PEG bulunması', 'Gastroözofageal reflü'],
        symptoms: ['Risk tanısıdır (Öksürme/boğulma refleksi zayıflığı, yutma güçlüğü).'],
        noc: ['Akciğerlere sıvı veya besin aspirasyonu gelişmeyecek.', 'Solunum sesleri temiz tutulacak.'],
        nic: ['Beslenme esnasında yatak başı 45-90° yükseltilecek.', 'Oral gıdalar püre kıvamında verilecek.', 'Yatak başında aspiratör hazır bulundurulacak.']
    },
    {
        id: 'ventilator_ayrilma_tepki',
        code: '00034',
        title: 'Mekanik Ventilatörden Ayrılmaya Dysfonksiyonel Tepki',
        category: 'solunum',
        triggerVitals: {},
        definition: 'Mekanik ventilasyon desteğinin azaltılması veya sonlandırılması sürecine hastanın uyum sağlayamaması.',
        etiology: ['Solunum kas yetersizliği', 'Uzamış mekanik ventilasyon süreci', 'Anksiyete ve korku', 'Yetersiz beslenme ve yorgunluk'],
        symptoms: ['Weaning denemesinde takipne', 'SpO2 düşüşü', 'Ajitasyon ve huzursuzluk', 'Yardımcı solunum kası kullanımı'],
        noc: ['Hasta ventilatörden başarıyla ayrılacak ve spontan solunuma geçecek.'],
        nic: ['Weaning protokolü kademeli uygulanacak.', 'Hasta bilgilendirilecek ve sakinleştirilecek.', 'Weaning sırasında yatak başı yükseltilecek ve vital takibi yapılacak.']
    },

    // =========================================================================
    // 2. DOLAŞIM VE PERFÜZYON
    // =========================================================================
    {
        id: 'dolasim_perfuzyon_bozulma',
        code: '00204',
        title: 'Etkisiz Periferik Doku Perfüzyonu',
        category: 'dolasim',
        triggerVitals: { tansiyonSystolicMax: 90, nabizMin: 110 },
        definition: 'Periferik kan dolaşımının azalması sonucunda doku beslenmesinin ve oksijenasyonunun bozulması.',
        etiology: ['Arteriyel tıkanıklık veya ateroskleroz', 'Venöz yetmezlik', 'Diyabetik vasküler bozukluklar', 'Sigara kullanımı'],
        symptoms: ['Periferik nabızların zayıflaması/alınamaması', 'Kapiller dolum süresi > 3 sn', 'Ekstremitelerde soğukluk, solukluk veya siyanoz', 'Yürüme ile gelen bacak ağrısı (Kladikasyo)'],
        noc: ['Periferik nabızlar güçlü alınacak, kapiller dolum < 2 sn olacak.', 'Ekstremiteler sıcak ve pembe tutulacak.'],
        nic: ['Bilateral pedal nabız ve kapiller dolum kontrolü yapılacak.', 'Sıkı bandaj/çoraplar engellenecek.', 'Ekstremiteler sıcak tutulacak, doğrudan sıcak su torbası vurulmayacak.']
    },
    {
        id: 'serebral_doku_perfuzyonu_bozulma',
        code: '00201',
        title: 'Etkisiz Serebral Doku Perfüzyonu Riski',
        category: 'dolasim',
        triggerVitals: {},
        definition: 'Serebral doku dolaşımının azalması sonucunda beyin dokusunda iskemi gelişme riski.',
        etiology: ['Serebrovasküler Olay (İnme / SVO)', 'İntrakraniyal basınç artışı (İBAA)', 'Karotis arter darlığı', 'Beyin anevrizması'],
        symptoms: ['Risk tanısıdır (Nörolojik kayıp, GKS düşüklüğü, konuşma/motor güçlüğü).'],
        noc: ['GKS skoru stabil kalacak, nörolojik kayıp ilerlemeyecek.', 'Pupil reaksiyonları simetrik kalacak.'],
        nic: ['GKS ve pupil takibi 1-2 saatte bir yapılacak.', 'Yatak başı 30° yükseltilecek.', 'Valsalva manevrası ve ıkınma engellenecek (laksatif verilecek).']
    },
    {
        id: 'kardiyak_debi_azalma',
        code: '00029',
        title: 'Kardiyak Debide Azalma',
        category: 'dolasim',
        triggerVitals: { nabizMin: 110, tansiyonSystolicMax: 90 },
        definition: 'Kalbin dokuların metabolik gereksinimlerini karşılamada pompaladığı kan miktarının yetersiz kalması.',
        etiology: ['Miyokard infarktüsü (Kriz)', 'Kalp yetmezliği', 'Kardiyak ritim bozuklukları (Aritmi)', 'Kapak hastalıkları'],
        symptoms: ['Taşikardi veya bradikardi', 'Hipotansiyon', 'Göğüs ağrısı ve dispne', 'Oligüri (< 30 mL/saat)', 'Periferik ödem'],
        noc: ['Kardiyak çıktı ve doku perfüzyonu yeterli seviyede tutulacak.', 'Vital bulgular stabil kalacak.'],
        nic: ['EKG monitörizasyonu ve vital bulgular takip edilecek.', 'Aldığı-Çıkardığı Sıvı Takibi (AÇT) saatlik yapılacak.', 'Fiziksel ve ruhsal istirahat sağlanacak.']
    },
    {
        id: 'kardiyak_doku_perfuzyonu_riski',
        code: '00200',
        title: 'Etkisiz Kardiyak Doku Perfüzyonu Riski (Miyokard İskemi Riski)',
        category: 'dolasim',
        triggerVitals: {},
        definition: 'Koroner kan akımının azalması sonucunda miyokard dokusunda beslenme yetersizliği ve iskemi riski.',
        etiology: ['Koroner arter hastalığı', 'Hipertansiyon', 'Sigara kullanımı ve yüksek kolesterol', 'Spazm'],
        symptoms: ['Risk tanısıdır (Göğüste baskı hissi, yayılım gösteren ağrı).'],
        noc: ['Göğüs ağrısı gelişmeyecek, troponin ve EKG bulguları stabil kalacak.'],
        nic: ['Göğüs ağrısı takibi (PQRST skalası) yapılacak.', 'Hekim istemiyle O2 ve Nitrogliserin uygulanacak.', 'Stres ve ağır efordan kaçınılacak.']
    },
    {
        id: 'sok_riski',
        code: '00205',
        title: 'Şok Riski',
        category: 'dolasim',
        triggerVitals: { tansiyonSystolicMax: 90, nabizMin: 115 },
        definition: 'Hücresel düzeyde yetersiz oksijenasyon ve doku perfüzyon kaybına yol açabilecek şok tablosu gelişme riski.',
        etiology: ['Aşırı kanama / Hipo volemi', 'Sepsis (Şiddetli enfeksiyon)', 'Kardiyojenik bozukluklar', 'Anafilaksi'],
        symptoms: ['Risk tanısıdır (Hipotansiyon, filiform nabız, soğuk terleme).'],
        noc: ['Hasta şok tablosuna girmeyecek, hemodinamik parametreler stabil tutulacak.'],
        nic: ['Vital bulgular (Tansiyon, Nabız, SpO2) 15-30 dakikada bir kaydedilecek.', 'Damar yolu açık tutulacak, IV sıvı resüsitasyonuna başlanacak.', 'İdrar çıkışı saatlik izlenecek.']
    },

    // =========================================================================
    // 3. BESLENME VE METABOLİZMA
    // =========================================================================
    {
        id: 'beslenme_yetersizligi',
        code: '00002',
        title: 'Beslenmede Bozulma: Gereksinimden Az Beslenme',
        category: 'beslenme',
        triggerVitals: {},
        definition: 'Metabolik gereksinimleri karşılamak için yetersiz besin alımı durumu.',
        etiology: ['İştahsızlık ve bulantı', 'Yutma/çiğneme güçlüğü (Disfaji)', 'Kronik hastalıklar (Kanser, KOAH)', 'Gastrointestinal emilim bozukluğu'],
        symptoms: ['Vücut ağırlığında %10\'dan fazla kayıp', 'Düşük albümin / hemoglobin değerleri', 'Kas erimesi ve halsizlik', 'Kuru ve cansız cilt'],
        noc: ['Hastanın kalori alımı desteklenecek, kilosu stabil tutulacak veya artacak.'],
        nic: ['Diyetisyen işbirliği ile yüksek kalorili/proteinli diyet düzenlenecek.', 'Sık ve az öğünler planlanacak.', 'Yemek öncesi oral bakım verilecek.']
    },
    {
        id: 'beslenme_fazlaligi_riski',
        code: '00001',
        title: 'Beslenmede Bozulma: Gereksinimden Fazla Beslenme (Obezite / Fazla Kilo)',
        category: 'beslenme',
        triggerVitals: {},
        definition: 'Metabolik gereksinimlerin üzerinde besin tüketilmesi sonucunda yağ birikimi.',
        etiology: ['Hareketsiz yaşam tarzı', 'Kötü beslenme alışkanlıkları', 'Hormonal/Metabolik bozukluklar'],
        symptoms: ['VKİ > 25 kg/m²', 'Bel çevresinde artış'],
        noc: ['Hasta ideal kilo aralığına ulaşmak için uygun diyete başlayacak.'],
        nic: ['Beslenme günlüğü tutulacak.', 'Egzersiz programı teşvik edilecek.']
    },
    {
        id: 'hipertermi',
        code: '00007',
        title: 'Hipertermi (Yüksek Ateş)',
        category: 'beslenme',
        triggerVitals: { atesMin: 38.0 },
        definition: 'Vücut sıcaklığının termoregülatör set noktasının üzerine çıkması durumu.',
        etiology: ['Bakteriyel veya viral enfeksiyonlar', 'Dehidratasyon', 'Aşırı sıcak ortam', 'Anestezi komplikasyonu'],
        symptoms: ['Vücut sıcaklığı > 38.0°C', 'Ciltte sıcaklık ve kızarıklık', 'Taşikardi ve hızlı solunum', 'Halsizlik ve titreme'],
        noc: ['Vücut sıcaklığı 36.5 - 37.5 °C aralığına düşürülecek.'],
        nic: ['Antipiretik ilaçlar (Parasetamol vb.) uygulanacak.', 'Ilık kompres ve banyo yaptırılacak.', 'Hastanın giysileri inceltilecek.', 'Bol sıvı alımı desteklenecek.']
    },
    {
        id: 'hipotermi',
        code: '00006',
        title: 'Hipotermi (Düşük Beden Sıcaklığı)',
        category: 'beslenme',
        triggerVitals: { atesMax: 35.5 },
        definition: 'Vücut sıcaklığının termoregülatör kapasitenin altına (35.5°C altında) düşmesi.',
        etiology: ['Soğuk ortama maruz kalma', 'Uzun süren cerrahi ameliyatlar', 'İleri yaş', 'Yetersiz giyinme'],
        symptoms: ['Beden sıcaklığı < 35.5°C', 'Titreme ve soluk/soğuk cilt', 'Bradikardi'],
        noc: ['Vücut sıcaklığı 36.5°C üzerine çıkarılacak.'],
        nic: ['Isıtıcı battaniye / radyant ısıtıcı kullanılacak.', 'Ilık IV sıvılar verilecek.', 'Oda sıcaklığı artırılacak.']
    },
    {
        id: 'bulanti',
        code: '00178',
        title: 'Bulantı',
        category: 'beslenme',
        triggerVitals: {},
        definition: 'Epigastriumda veya karında hissedilen kusma arzusu yaratan rahatsız edici duygu.',
        etiology: ['Kemoterapi / Radyoterapi', 'Anestezi ve post-op etki', 'Gastrointestinal tahriş', 'Kafa içi basınç artışı'],
        symptoms: ['Hasta beyanı', 'Tükürük salgısında artış', 'Kusma refleksi', 'İştahsızlık'],
        noc: ['Bulantı hissi hafifleyecek veya geçecek.', 'Oral alım sürdürülebilecek.'],
        nic: ['Hekim istemine uygun antiemetik uygulanacak.', 'Kuru gıdalar (kraker, tost) önerilecek.', 'Kötü kokular ortamdan uzaklaştırılacak.']
    },
    {
        id: 'glikoz_unstabilite_riski',
        code: '00179',
        title: 'Kan Glikoz Düzeyinde Unstabilite Riski (Kan Şekeri Düzensizliği)',
        category: 'beslenme',
        triggerVitals: {},
        definition: 'Kan glikoz düzeylerinde normal sınırların (70-140 mg/dL) dışına çıkma riski.',
        etiology: ['Diyabet (Tip 1 veya Tip 2)', 'Düzensiz beslenme / öğün atlama', 'İnsülin / oral antidiyabetik kullanımı', 'Enfeksiyon ve stres'],
        symptoms: ['Risk tanısıdır (Hipoglisemi/Hiperglisemi semptomları).'],
        noc: ['Açlık ve tok kan glikoz değerleri hedef sınırlarda kalacak.'],
        nic: ['Kan şekeri takibi (AKŞ/TKŞ) 4-6 saatte bir yapılacak.', 'İnsülin ve diyabet ilaçları saatinde uygulanacak.', 'Hipoglisemi belirtilerine (soğuk terleme, titreme) karşı glikoz tab hazırlanacak.']
    },
    {
        id: 'yutma_guculugu',
        code: '00103',
        title: 'Yutma Güçlüğü (Disfaji)',
        category: 'beslenme',
        triggerVitals: {},
        definition: 'Oral, farengeal veya özofageal yapılardaki işlev bozukluğuna bağlı lokma veya sıvıların yutulmasında zorlanma.',
        etiology: ['Serebrovasküler olay (İnme)', 'Parkinson / ALS / MS', 'Baş-boyun kanserleri veya radyoterapi'],
        symptoms: ['Yutma sırasında öksürme/boğulma hissi', 'Ağızda yemek biriktirme', 'Gıdaların genizden gelmesi'],
        noc: ['Besin ve sıvılar aspirasyon yaşanmadan güvenle yutulacak.'],
        nic: ['Kıvam artırıcılar ile sıvılar püre haline getirilecek.', 'Dik oturur pozisyonda yavaş beslenecek.', 'Konuşma/Yutma terapisti ile işbirliği yapılacak.']
    },

    // =========================================================================
    // 4. BOŞALTIM VE SIVI-ELEKTROLİT
    // =========================================================================
    {
        id: 'sivi_volum_eksikligi',
        code: '00027',
        title: 'Sıvı Volüm Eksikliği (Dehidratasyon)',
        category: 'bosaltim',
        triggerVitals: { tansiyonSystolicMax: 95, nabizMin: 105 },
        definition: 'Vasküler, hücresel veya dokular arası sıvıda azalma durumu.',
        etiology: ['Aşırı diyare ve kusma', 'Aşırı terleme veya yüksek ateş', 'Yetersiz sıvı alımı', 'Dirençli poliüri'],
        symptoms: ['Hipotansiyon', 'Taşikardi', 'Kuru mukozalar ve cilt turgorunda azalma', 'Oligüri (< 30 mL/saat)', 'Aşırı susuzluk hissi'],
        noc: ['Sıvı-elektrolit dengesi sağlanacak, cilt turgoru normale dönecek.'],
        nic: ['Aldığı-Çıkardığı Sıvı Takibi (AÇT) hassas kaydedilecek.', 'IV izotonik sıvılar verilecek.', 'Günlük kilo takibi yapılacak.']
    },
    {
        id: 'sivi_volum_fazlaligi',
        code: '00026',
        title: 'Sıvı Volüm Fazlalığı (Hipervolemi / Ödem)',
        category: 'bosaltim',
        triggerVitals: { tansiyonSystolicMin: 140 },
        definition: 'Vücutta sıvı tutulumunun ve izotonik sıvı birikiminin artması durumu.',
        etiology: ['Böbrek yetmezliği', 'Kalp yetmezliği', 'Karaciğer sirozu', 'Aşırı IV sıvı yüklemesi'],
        symptoms: ['Pretibial ve periferik ödem (+2/+4)', 'Hipertansiyon', 'Akciğerde bazalde raller', 'Jübüler ven dolgunluğu', 'Hızlı kilo alımı'],
        noc: ['Ödem gerileyecek, akciğer sesleri açık olacak, ideal kilo korunacak.'],
        nic: ['Sıvı kısıtlaması uygulanacak.', 'Hekim istemine uygun diüretik verilecek.', 'Günlük kilo ve ödem takibi yapılacak.']
    },
    {
        id: 'idrar_eliminasyon_bozulma',
        code: '00016',
        title: 'İdrar Eliminasyonunda Bozulma',
        category: 'bosaltim',
        triggerVitals: {},
        definition: 'İdrar yapma işlevinde rahatsızlık, zorlanma veya bozukluk yaşanması.',
        etiology: ['Üriner sistem enfeksiyonu (ÜSE)', 'Prostat hiperplazisi (BPH)', 'Nörojenik mesane'],
        symptoms: ['Dizüri (Ağrılı idrar)', 'Polinüri / Sık idrara çıkma', 'Noktüri (Gece idrarı)', 'Sıkışma hissi'],
        noc: ['Ağrısız ve normal sıklıkta idrar yapma sağlanacak.'],
        nic: ['İdrar kültürü ve tam idrar tetkiki (TİT) takibi yapılacak.', 'Sıvı alımı artırılacak.', 'Sıcak uygulama desteği verilecek.']
    },
    {
        id: 'uriner_retansiyon',
        code: '00023',
        title: 'Üriner Retansiyon (İdrar Yapamama / Globed Vezikal)',
        category: 'bosaltim',
        triggerVitals: {},
        definition: 'Mesanenin tam olarak boşaltılamaması ve idrar birikimi.',
        etiology: ['Üretra tıkanıklığı / Prostat', 'Post-operatif anestezi etkisi', 'Spinal kord yaralanması'],
        symptoms: ['Suprapubik bölgede hassasiyet ve dolgunluk (Glob)', 'Hiç idrar yapamama', 'Huzursuzluk'],
        noc: ['Mesane tam olarak boşalacak.'],
        nic: ['Mesane ultrasonu (Bladder Scan) yapılacak.', 'Steril foley kateterizasyon uygulanacak.']
    },
    {
        id: 'konstipasyon',
        code: '00011',
        title: 'Konstipasyon (Kabızlık)',
        category: 'bosaltim',
        triggerVitals: {},
        definition: 'Gaita çıkarmanın zorlaşması, sıklığının azalması ve sert gaita kıvamı.',
        etiology: ['Hareketsizlik ve yatağa bağımlılık', 'Yetersiz lifli gıda ve sıvı alımı', 'Opioid / analjezik kullanımı'],
        symptoms: ['Haftada 2\'den az gaita', 'Sert ve kuru gaita', 'Karında distansiyon ve gaz ağrısı'],
        noc: ['Normal sıklıkta ve yumuşak kıvamda bağırsak boşaltımı sağlanacak.'],
        nic: ['Lifli gıdalar ve bol sıvı tüketimi teşvik edilecek.', 'Mobilizasyon artırılacak.', 'Gerekirse laksatif / lavman uygulanacak.']
    },
    {
        id: 'diyare',
        code: '00013',
        title: 'Diyare (İshal)',
        category: 'bosaltim',
        triggerVitals: {},
        definition: 'Günde 3\'ten fazla sulu ve şekilsiz gaita çıkarma durumu.',
        etiology: ['Gastroenterit / Enfeksiyon', 'Antibiyotik kullanımı (C. difficile)', 'Enteral beslenme tüpleri'],
        symptoms: ['Sulu ve sık gaita', 'Kramp şeklinde karın ağrısı', 'Perianal irritasyon'],
        noc: ['Gaita kıvamı ve sıklığı normale dönecek, dehidratasyon gelişmeyecek.'],
        nic: ['Perianal bölge temizliği ve pişik kremi uygulanacak.', 'Oral rehidratasyon sıvıları verilecek.', 'Gaita kültürü alınacak.']
    },
    {
        id: 'elektrolit_dengesizligi_riski',
        code: '00195',
        title: 'Elektrolit Dengesizliği Riski',
        category: 'bosaltim',
        triggerVitals: {},
        definition: 'Serum elektrolit düzeylerinde (Potasyum, Sodyum, Kalsiyum vb.) değişim riski.',
        etiology: ['Böbrek yetmezliği', 'Dirençli kusma/diyare', 'Diüretik tedavisi'],
        symptoms: ['Risk tanısıdır (Kramplar, aritmi, konfuzyon).'],
        noc: ['Serum potasyum, sodyum değerleri normal sınırlar içinde tutulacak.'],
        nic: ['Laboratuvar sonuçları (K, Na, Ca, Mg) yakından takip edilecek.', 'Elektrolit replasman tedavisi uygulanacak.']
    },

    // =========================================================================
    // 5. AĞRI VE KONFOR
    // =========================================================================
    {
        id: 'akut_agri',
        code: '00132',
        title: 'Akut Ağrı',
        category: 'agri',
        triggerVitals: { agriMin: 4 },
        definition: 'Aniden veya yavaşça başlayan, hafiften şiddetliye değişen ve 3 aydan kısa süren rahatsız edici duyusal deneyim.',
        etiology: ['Cerrahi insizyon ve yara dokusu', 'Travma ve kırıklar', 'İnvaziv tıbbi girişimler (Dren, kateter)', 'Kas spazmı'],
        symptoms: ['Ağrı beyanı (NRS > 3)', 'Yüz buruşturma ve koruyucu pozisyon', 'Tansiyon ve nabız yükselmesi', 'Huzursuzluk ve terleme'],
        noc: ['Hastanın ağrı skoru 3\'ün altına indirilecek, hasta rahatladığını ifade edecek.'],
        nic: ['Analjezik ilaçlar (Hekim istemine uygun) zamanında verilecek.', 'Pozisyon desteği ve yastık desteği sağlanacak.', 'Gevşeme egzersizleri ve dikkati başka yöne çekme uygulanacak.']
    },
    {
        id: 'kronik_agri',
        code: '00133',
        title: 'Kronik Ağrı',
        category: 'agri',
        triggerVitals: {},
        definition: '3 aydan uzun süren ve yaşam kalitesini olumsuz etkileyen sürekli ağrı.',
        etiology: ['Romatoid artrit / Osteoartrit', 'Kanser süreçleri', 'Kronik bel fıtığı / Nöropati'],
        symptoms: ['3 aydan uzun ağrı öyküsü', 'Depresif ruh hali ve yorgunluk', 'Sosyal izolasyon'],
        noc: ['Hasta ağrı ile baş etme yöntemlerini öğrenecek ve günlük aktivitelerini sürdürecek.'],
        nic: ['Düzenli analjezik merdiveni uygulanacak.', 'Sıcak/soğuk kompres ve masaj yapılacak.', 'Psikolojik destek sağlanacak.']
    },
    {
        id: 'konfor_bozulma',
        code: '00214',
        title: 'Konfor Bozukluğu',
        category: 'agri',
        triggerVitals: {},
        definition: 'Fiziksel, psikososyal veya çevresel alanlarda rahatlık ve huzur hissinin azalması.',
        etiology: ['Hastane ortamı ve gürültü', 'Kaşıntı ve bulantı', 'Yatağa bağımlılık'],
        symptoms: ['Hasta memnuniyetsizliği beyanı', 'Ağlama veya huzursuzluk'],
        noc: ['Hasta fiziksel ve ruhsal olarak rahatladığını ifade edecek.'],
        nic: ['Çevre koşulları (Işık, ısı, gürültü) düzenlenecek.', 'Cilt bakımı ve masaj yapılacak.']
    },

    // =========================================================================
    // 6. GÜVENLİK VE ENFEKSİYON
    // =========================================================================
    {
        id: 'enfeksiyon_riski',
        code: '00004',
        title: 'Enfeksiyon Riski',
        category: 'guvenlik',
        triggerVitals: { atesMin: 37.8 },
        definition: 'Patojen organizmaların vücuda girmesi ve hastalık oluşturma riskinin artması.',
        etiology: ['İnvaziv hatlar (Santral IV kateter, foley sonda, diren)', 'Cerrahi yara insizyonu', 'İmmünosüpresyon (Düşük lökosit/WBC)', 'Kronik hastalıklar'],
        symptoms: ['Risk tanısıdır (Yara yerinde kızarıklık, subfebril ateş, yüksek WBC).'],
        noc: ['Hastada enfeksiyon gelişmeyecek, yara yeri temiz iyileşecek.'],
        nic: ['Steril pansuman teknikleri uygulanacak.', 'Tüm girişimlerde el hijyeni sağlanacak.', 'Kateter bakımları günlük yapılacak.']
    },
    {
        id: 'dusme_riski',
        code: '00155',
        title: 'Düşme Riski',
        category: 'guvenlik',
        triggerVitals: {},
        definition: 'Fiziksel yaralanmaya neden olabilecek kazara düşme olayına maruz kalma riski.',
        etiology: ['İleri yaş (>65)', 'Denge ve yürüme bozukluğu', 'Sedatif / hipnotik ilaç kullanımı', 'Görme bozukluğu', 'Konfüzyon'],
        symptoms: ['Risk tanısıdır (İtaki Düşme Skoru ≥ 5, Braden Skoru düşüklüğü).'],
        noc: ['Hasta yatış süresince düşme olayı yaşamayacak.'],
        nic: ['Yatak kenarlıkları her iki tarafta kaldırılacak.', 'Yatak en düşük seviyeye indirilecek ve kilitlenecek.', 'Yatak başına "Kırmızı Yonca / Düşme Riski" etiketi asılacak.', 'Çağrı zili hastanın ulaşabileceği yere konulacak.']
    },
    {
        id: 'cerrahi_saha_enfeksiyonu_riski',
        code: '00217',
        title: 'Cerrahi Saha Enfeksiyonu Riski',
        category: 'guvenlik',
        triggerVitals: {},
        definition: 'Ameliyat insizyon bölgesinde patojen mikroorganizma üreme riski.',
        etiology: ['Cerrahi müdahale', 'Yara drenleri', 'Yetersiz beslenme / Diyabet'],
        symptoms: ['Risk tanısıdır (İnsizyon hattı).'],
        noc: ['İnsizyon hattı aseptik kalacak, purulan akıntı gelişmeyecek.'],
        nic: ['Pansumanlar steril teknikle değiştirilecek.', 'Dren takibi yapılacaktır.']
    },
    {
        id: 'oral_mukoza_bozulma',
        code: '00045',
        title: 'Oral Mukoza Bütünlüğünde Bozulma (Stomatit / Mukozit)',
        category: 'guvenlik',
        triggerVitals: {},
        definition: 'Ağız içi dokularda yaralar, iltihap veya hücresel hasar.',
        etiology: ['Kemoterapi / Radyoterapi', 'Nötrofili / Düşük bağışıklık', 'NG tüp / Entüvasyon', 'Yetersiz oral ağız bakımı'],
        symptoms: ['Ağız içinde ülserler ve kızarıklık', 'Ağızlı beslenmede ağrı', 'Kötü ağız kokusu'],
        noc: ['Oral mukoza nemli ve yarasız tutulacak.'],
        nic: ['Günde 3-4 kez klorheksidin gargara / ağız bakımı yaptırılacak.', 'Yumuşak diş fırçası kullanılacak.']
    },

    // =========================================================================
    // 7. AKTİVİTE, HAREKET VE ÖZ BAKIM
    // =========================================================================
    {
        id: 'fiziksel_hareket_bozuklugu',
        code: '00085',
        title: 'Fiziksel Mobilitede Bozulma',
        category: 'hareket',
        triggerVitals: {},
        definition: 'Bireyin vücudunu veya bir ya da daha fazla ekstremitesini bağımsız olarak hareket ettirmede kısıtlanma.',
        etiology: ['Cerrahi girişim veya travma', 'Nörolojik felç (Hemipleji / Parapleji)', 'Şiddetli ağrı ve halsizlik', 'Kas zayıflığı / Atrofi'],
        symptoms: ['Hareket etmede kısıtlılık', 'Yardımsız ayağa kalkamama', 'Eklemlerde kısıtlı hareket açıklığı (ROM)'],
        noc: ['Hasta mobilizasyon seviyesini artıracak, eklem kontraktürü gelişmeyecek.'],
        nic: ['Erken mobilizasyon planlanacak.', 'Pasif/Aktif Eklem Hareket (ROM) egzersizleri yaptırılacak.', 'Yürüteç veya baston desteği sağlanacak.']
    },
    {
        id: 'oz_bakim_eksikligi_banyo',
        code: '00108',
        title: 'Öz Bakım Eksikliği: Banyo ve Hijyen',
        category: 'hareket',
        triggerVitals: {},
        definition: 'Kendi banyo yapma ve öz hijyen aktivitelerini gerçekleştirmede yetersizlik.',
        etiology: ['Yatağa bağımlılık', 'Halsizlik ve kas zayıflığı', 'Ağrı'],
        symptoms: ['Vücut temizliğini yapamama beyanı', 'Kötü hijyen durumu'],
        noc: ['Hastanın hijyenik banyo ve kişisel temizliği sağlanacak.'],
        nic: ['Yatak banyosu verilecek.', 'Ağız ve saç bakımı tamamlanacak.']
    },
    {
        id: 'oz_bakim_eksikligi_giyinme',
        code: '00109',
        title: 'Öz Bakım Eksikliği: Giyinme ve Süslenme',
        category: 'hareket',
        triggerVitals: {},
        definition: 'Kendi giysilerini giyme ve çıkarma becerisinde kısıtlanma.',
        etiology: ['Ekstremite felci / zayıflığı', 'Kırık / Alçı varlığı'],
        symptoms: ['Düğme ilikleyememe, kıyafet giyememe'],
        noc: ['Hasta giyinme sürecinde desteklenecek.'],
        nic: ['Geniş ve rahat kıyafetler seçilecek, giyinmede yardım edilecek.']
    },
    {
        id: 'aktivite_intoleransi',
        code: '00092',
        title: 'Aktivite İntoleransı (Çabuk Yorulma)',
        category: 'hareket',
        triggerVitals: { nabizMin: 110, solunumMin: 24 },
        definition: 'İstenen günlük aktiviteleri tamamlamak veya sürdürmek için fizyolojik/psikolojik enerjinin yetersiz kalması.',
        etiology: ['Anemi (Düşük Hgb)', 'Kalp yetmezliği / KOAH', 'Uzun süreli yatak istirahati'],
        symptoms: ['Aktivite sonrası aşırı yorgunluk', 'Eforla gelen dispne ve taşikardi', 'Hipotansiyon'],
        noc: ['Aktivite toleransı artacak, aktivite sırasında vital bulgular stabil kalacak.'],
        nic: ['Aktiviteler arasına dinlenme periyotları konulacak.', 'Mobilizasyon kademeli artırılacak.']
    },
    {
        id: 'uyku_biciminde_bozulma',
        code: '00096',
        title: 'Uyku Biçiminde Bozulma (İnsomnia)',
        category: 'hareket',
        triggerVitals: {},
        definition: 'Uyku miktarında ve kalitesinde rahatsızlığa ve yaşam kalitesi kaybına neden olan kısıtlanma.',
        etiology: ['Şiddetli ağrı ve öksürük', 'Hastane ortamı, gürültü ve ışık', 'Anksiyete ve hastalık stresi'],
        symptoms: ['Gece sık uyanma', 'Sabah yorgun ve dinlenmemiş kalkma', 'Gündüz uyuklama'],
        noc: ['Kesintisiz 6-8 saat uyku sağlanacak, hasta dinlenmiş hissedecek.'],
        nic: ['Gece hemşirelik bakımları tek seferde birleştirilerek uyku bölünmeyecek.', 'Gece oda ışığı ve gürültüsü minimuma indirilecek.']
    },

    // =========================================================================
    // 8. PSİKOSOSYAL VE İLETİŞİM
    // =========================================================================
    {
        id: 'anksiyete',
        code: '00146',
        title: 'Anksiyete (Kaygı)',
        category: 'psikososyal',
        triggerVitals: { nabizMin: 100 },
        definition: 'Olası veya belirsiz bir tehlikeye verilen içsel endişe, gerginlik ve korku duygusu.',
        etiology: ['Cerrahi ameliyat korkusu', 'Kötü tanı/hastalık öğrenme', 'Yoğun bakım / hastane ortamı'],
        symptoms: ['Endişeli görünüm', 'Taşikardi ve titreme', 'Aşırı soru sorma', 'Uykusuzluk'],
        noc: ['Hastanın anksiyete düzeyi hafifleyecek, sakinleşecek.'],
        nic: ['Empatik ve sakince iletişim kurulacak.', 'Ameliyat/tedavi süreçleri detaylı açıklanacak.', 'Ailesi ile görüşmesi sağlanacak.']
    },
    {
        id: 'bilgi_eksikligi',
        code: '00120',
        title: 'Bilgi Eksikliği (Hastalık / İlaç / Taburculuk Bakımı)',
        category: 'psikososyal',
        triggerVitals: {},
        definition: 'Belirli bir konu veya sağlık durumu ile ilgili bilişsel bilginin eksikliği.',
        etiology: ['Yeni konulan tanı', 'Karmaşık ilaç tedavisi', 'Daha önce ameliyat olmamış olma'],
        symptoms: ['Sık soru sorma', 'Yanlış bilgi beyanı', 'Tedaviye uyumsuzluk'],
        noc: ['Hasta hastalığı ve tedavisi hakkında yeterli bilgiye ulaştığını ifade edecek.'],
        nic: ['Taburculuk eğitim broşürü verilecek.', 'İlaç saatleri ve dozları öğretilecek.', 'Anlatılanlar hastaya tekrar ettirilecek.']
    },
    {
        id: 'sozel_iletisim_bozuklugu',
        code: '00051',
        title: 'Sözel İletişimde Bozulma (Afazi / Disatri)',
        category: 'psikososyal',
        triggerVitals: {},
        definition: 'Sembolleri kullanma, işleme ve iletme yeteneğinde azalma veya kayıp.',
        etiology: ['İnme (SVO) ve sol beyin hasarı', 'Entüvasyon / Trakeostomi', 'Demans'],
        symptoms: ['Konuşamama (Afazi)', 'Kelimeleri yuvarlama (Disatri)', 'İsteklerini ifade edememe'],
        noc: ['Hasta alternatif iletişim yöntemleri ile isteklerini aktarabilecek.'],
        nic: ['İletişim panosu / resimli kartlar kullanılacak.', 'Evet/Hayır şeklinde cevaplanabilecek kapalı sorular sorulacak.', 'Sabırla dinlenecek.']
    },
    {
        id: 'umutsuzluk',
        code: '00126',
        title: 'Umutsuzluk',
        category: 'psikososyal',
        triggerVitals: {},
        definition: 'Bireyin kişisel seçimlerinin veya çözümlerinin olmadığını düşündüğü karamsar ruh hali.',
        etiology: ['Kronik/Terminal hastalık tanısı', 'Uzamış hastane yatışı'],
        symptoms: ['Göz temasından kaçınma', 'Kayıtsızlık ve iştahsızlık'],
        noc: ['Hasta geleceğe dair olumlu hedefler belirleyecek.'],
        nic: ['Aktif dinleme yapılacak, psikiyatri/psikolog konsültasyonu istenecek.']
    },

    // =========================================================================
    // 9. CİLT VE DOKU BÜTÜNLÜĞÜ
    // =========================================================================
    {
        id: 'cilt_butunlugu_bozulma',
        code: '00046',
        title: 'Doku / Cilt Bütünlüğünde Bozulma',
        category: 'cilt',
        triggerVitals: {},
        definition: 'Doku ve cilt katmanlarında hücresel düzeyde hasar, aşınma veya açılma durumu.',
        etiology: ['Uzun süreli basınç (Yatağa bağımlılık)', 'Sürtünme ve yırtılma', 'Ciltte nem ve inkontinans', 'Cerrahi insizyon / Yaralanma'],
        symptoms: ['Epidermis/Dermis tabakasında açılma', 'Bası yarası (Evre I-IV)', 'Eritem ve ödem', 'Yara yerinde akıntı veya ağrı'],
        noc: ['Cilt bütünlüğü yeniden sağlanacak, yara epitelize ve granüle olacak.'],
        nic: ['2 saatte bir düzenli pozisyon değiştirilecek.', 'Steril yara pansumanı uygulanacak.', 'Cilt nemden korunacak ve bariyer krem sürülecek.', 'Havalı yatak kurulacak.']
    },
    {
        id: 'cilt_butunlugu_bozulma_riski',
        code: '00047',
        title: 'Cilt Bütünlüğünde Bozulma Riski (Bası Yarası Riski)',
        category: 'cilt',
        triggerVitals: {},
        definition: 'Doku ve cilt katmanlarında hasar gelişme riski.',
        etiology: ['İmmobilite (Yatağa/sandalyeye bağımlılık)', 'Braden Riski Skoru ≤ 14', 'İdrar/Gaita inkontinansı', 'Zayıf beslenme'],
        symptoms: ['Risk tanısıdır (Braden Skoru düşüklüğü).'],
        noc: ['Ciltte bası yarası veya kızarıklık gelişmeyecek.'],
        nic: ['Braden riski takibi yapılacak.', 'Kemik çıkıntıları silikon pedlerle desteklenecek.', 'Havalı yatak kullanılacak.']
    },
    {
        id: 'basi_yarasi',
        code: '00249',
        title: 'Basınç Ülseri / Bası Yarası (Evre I - IV)',
        category: 'cilt',
        triggerVitals: {},
        definition: 'Kemik çıkıntıları üzerindeki dokularda basınç ve yırtılmaya bağlı lokalize yaralanma.',
        etiology: ['Hareketsizlik', 'Beslenme yetersizliği', 'Sürekli nem'],
        symptoms: ['Bası noktalarında kızarıklık / nekroz / delik yara'],
        noc: ['Bası yarası evresi küçülecek ve iyileşecek.'],
        nic: ['Yara bakım uzmanı konsültasyonu istenecek.', 'Rutin pozisyon ve özel hidrokolloid pansuman yapılacak.']
    }
];

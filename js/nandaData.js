/**
 * Hemşirelik Bakım Rehberim - NANDA-I Hemşirelik Tanıları, NIC, NOC & Bilimsel Rasyonel Veritabanı
 * NANDA-I Taksonomisine Uyumlu Akademik & Klinik Zengin Veri Havuzu (50+ Detaylı Tanı)
 * Her tanı için: Tanım, Etiyoloji, Belirtiler, NOC, NIC, Girişim Rasyonelleri & Öğrenci Notları
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
        domain: 'domain3',
        domainName: 'Domain 3: Boşaltım ve Değişim',
        className: 'Sınıf 4: Solunum İşlevi',
        triggerVitals: { spo2Max: 93, solunumMin: 22 },
        definition: 'Alveoler-kapiller zarda oksijenasyon ve/veya karbondioksit atılımında fazlalık ya da eksiklik durumu.',
        etiology: [
            'Alveoler-kapiller zar değişiklikleri (ödem, fibrozis)',
            'Havalandırma-perfüzyon (V/Q) uyumsuzluğu',
            'Akciğerlerde koyu ve yoğun sekresyon birikimi',
            'Bronşial obstrüksiyon (bronkospazm, hava yolu daralması)',
            'Atelektazi ve alveoler kollaps'
        ],
        symptoms: [
            'Arteriyel hipoksemi (SpO2 < %92, PaO2 < 80 mmHg)',
            'Takipne (Solunum hızı > 20/dakika) ve dispne',
            'Dudaklar, tırnak yatakları ve mukozalarda siyanoz',
            'Serebral hipoksiye bağlı huzursuzluk, anksiyete ve konfüzyon',
            'Hiperkapni (PaCO2 > 45 mmHg) ve baş ağrısı'
        ],
        noc: [
            'Hastanın SpO2 değeri hedef %95 ve üzerinde tutulacak.',
            'Arteriyel kan gazı (AKG) değerleri (pH, PaO2, PaCO2) normal fizyolojik sınırlara gelecek.',
            'Solunum hızı ve derinliği normal sınırlarda (12-20/dk) seyredecek.',
            'Dudak ve tırnak yataklarındaki siyanoz gerileyecek.'
        ],
        nic: [
            'SpO2, solunum hızı, ritmi ve derinliği en az 2 saatte bir izlenecek.',
            'Hekim istemine uygun Oksijen tedavisi (kanül/maske) uygulanacak ve nemlendirici kap kullanılacak.',
            'Yatak başı High-Fowler (60-90°) pozisyonuna getirilecek.',
            'Derin solunum ve etkili öksürme egzersizleri (triflo) saat başı yaptırılacak.',
            'Arteriyel Kan Gazı (AKG) laboratuvar sonuçları takip edilecek ve hekime bilgi verilecek.'
        ],
        rationales: [
            'High-Fowler pozisyonu diyaframın aşağı inmesini sağlayarak akciğer ekspansiyonunu ve vital kapasiteyi maksimuma çıkarır.',
            'Ekjenik O2 desteği doku perfüzyonunu ve alveoler PaO2 basıncını artırarak hücresel hipoksiyi önler.',
            'Derin solunum egzersizleri alveollerin açık kalmasını sağlar, sürfaktan salgısını uyarır ve atelektaziyi engeller.',
            'AKG takibi ventilasyon ve asit-baz dengesindeki değişiklikleri değerlendirmek için altın standarttır.'
        ],
        studentNotes: 'Öğrenci Notu: Bakım planı formuna yazarken Fizik Muayene verisi olarak göğüs sesleri (raller/ronküs), SpO2 değeri ve solunum sayısını tam yazınız. Subjektif veri olarak hastanın "Nefes darlığı çekiyorum" beyanını eklemeyi unutmayınız.',
        relatedDiseases: ['KOAH', 'Pnömoni', 'Akut Akciğer Ödemi', 'ARDS', 'COVID-19', 'Atelektazi']
    },
    {
        id: 'solunum_yolu_kapanmasi',
        code: '00031',
        title: 'Etkisiz Solunum Yolu Temizliği',
        category: 'solunum',
        domain: 'domain11',
        domainName: 'Domain 11: Güvenlik / Koruma',
        className: 'Sınıf 2: Fiziksel Yaralanma',
        triggerVitals: { solunumMin: 24 },
        definition: 'Solunum yolunun açık tutulması için trakeobronşiyal sekresyonların veya tıkanıklıkların temizlenememesi durumu.',
        etiology: [
            'Koyu, yapışkan ve aşırı mukus sekresyonu',
            'Sigara kullanımı, irritan gazlar veya alerjenler',
            'Şiddetli yara ağrısına bağlı etkisiz öksürük refleksi',
            'Yapay solunum yolu bulunması (Trakeostomi, Endotrakeal tüp)',
            'Nöromüsküler zayıflık ve refleks kaybı'
        ],
        symptoms: [
            'Etkisiz veya zayıf öksürük',
            'Oskültasyonda ronküsküs, kaba raller ve hırıltı duyulması',
            'Balgam çıkarmada güçlük ve aşırı ekspektorasyon ihtiyacı',
            'Dispneik, hırıltılı ve yardımcı kas katılımlı solunum',
            'Ajitasyon ve huzursuzluk'
        ],
        noc: [
            'Solunum yolları açık tutulacak, sekresyonlar kolayca ekspoze edilecek.',
            'Akciğer oskültasyonunda ek solunum sesi (ronküs/ral) duyulmayacak.',
            'Solunum sayısı normal ritim ve frekansta (12-20/dk) tutulacak.'
        ],
        nic: [
            'Hastaya etkili öksürme ve huffing (derin nefes alıp kuvvetle üfleme) tekniği öğretilecek.',
            'Hekim istemine uygun olarak nebulizatör ile mukolitik/bronkodilatör verilecek.',
            'Kontrendikasyon yoksa günlük sıvı alımı 2000-2500 mL\'ye çıkarılacak.',
            'Yatak başı yükseltilecek, hastaya göğüs fizyoterapisi (perküsyon/postüral drenaj) uygulanacak.',
            'Gerektiğinde steril teknikle aspirasyon (oral/endotrakeal) yapılacak.'
        ],
        rationales: [
            'Bol hidrasyon trakeobronşiyal sekresyonların viskozitesini azaltarak balgamın yumuşamasını ve kolay atılmasını sağlar.',
            'Nebulize mukolitikler sekresyonların disülfit bağlarını kırarak akışkanlığını artırır.',
            'Steril aspirasyon hava yolunu tıkayan sekresyonları mekanik olarak uzaklaştırarak asfiksi riskini engeller.'
        ],
        studentNotes: 'Öğrenci Notu: Balgamın rengi (yeşil/sarı/şeffaf), kıvamı ve miktarı mutlaka hemşirelik notunda belirtilmelidir.',
        relatedDiseases: ['Bronşit', 'Bronşiektazi', 'Kistik Fibrozis', 'Post-Op Akciğer Komplikasyonları']
    },
    {
        id: 'solunum_oruntusu_bozulma',
        code: '00032',
        title: 'Etkisiz Solunum Örüntüsü',
        category: 'solunum',
        domain: 'domain4',
        domainName: 'Domain 4: Aktivite / Dinlenme',
        className: 'Sınıf 4: Kardiyovasküler / Pulmoner Yanıtlar',
        triggerVitals: { solunumMin: 26 },
        definition: 'İnspirasyon ve/veya ekspirasyonun yeterli havalandırmayı (ventilasyon) sağlamada yetersiz kalması durumu.',
        etiology: [
            'Nöromüsküler bozukluklar ve solunum kas yorgunluğu',
            'Şiddetli abdominal veya torasik ağrı (insizyon ağrısı)',
            'Göğüs duvarı deformitesi veya travma (Flail chest)',
            'Şiddetli anksiyete, panik atak ve hiperventilasyon',
            'Obezite ve abdominal distansiyona bağlı diyafram basısı'
        ],
        symptoms: [
            'Takipne (Solunum > 24/dk) veya Bradipne (Solunum < 10/dk)',
            'Yardımcı solunum kaslarının (sternokleidomastoid, interkostal) kullanımı',
            'Ortopne ve burun kanadı solunumu',
            'Yüzeyel solunum veya anormal solunum derinliği',
            'Göğüs ekspansiyonunda simetri bozukluğu'
        ],
        noc: [
            'Solunum sayısı, ritmi ve derinliği normal sınırlara (12-20/dk) dönecek.',
            'Yardımcı solunum kaslarının kullanımı ortadan kalkacak.',
            'Hasta rahat nefes aldığını ifade edecek.'
        ],
        nic: [
            'Hastanın solunum hızı, derinliği ve toraks ekspansiyonu takip edilecek.',
            'Hastaya Yarı-Fowler veya Fowler pozisyonu verilecek.',
            'Solunum egzersizleri ve diyafragmatik solunum öğretilecek.',
            'Anksiyeteyi azaltmak için hasta ile sakin, güven verici iletişim kurulacak.',
            'Hekim istemine uygun analjezik verilerek ağrı kontrol altına alınacak.'
        ],
        rationales: [
            'Ağrının dindirilmesi kısıtlı ve yüzeyel solunumu engelleyerek hastanın derin ve düzenli nefes alabilmesini sağlar.',
            'Diyafragmatik solunum ventilasyon verimini artırır ve solunum kaslarının enerji tüketimini azaltır.'
        ],
        studentNotes: 'Öğrenci Notu: Solunum sayısı sayılırken hastanın fark etmemesi için nabız tutuyormuş gibi yaparak saymak en doğru ölçüm tekniğidir.',
        relatedDiseases: ['Pnömotoraks', 'Toraks Travması', 'Guillain-Barré', 'Şiddetli Anksiyete']
    },
    {
        id: 'aspirasyon_riski',
        code: '00039',
        title: 'Aspirasyon Riski',
        category: 'solunum',
        domain: 'domain11',
        domainName: 'Domain 11: Güvenlik / Koruma',
        className: 'Sınıf 2: Fiziksel Yaralanma',
        triggerVitals: {},
        definition: 'Gastrointestinal sekresyonların, orofarengeal sıvıların, katı veya sıvı besinlerin solunum yollarına kaçma riski.',
        etiology: [
            'Nörolojik hasar ve yutma işlev bozukluğu (Disfaji)',
            'Bilinç düzeyinde azalma (Glasgow Koma Skoru ≤ 8)',
            'Gastroözofageal reflü ve mide boşalmasında gecikme',
            'Nasogastrik (NG) tüp veya PEG bulunması',
            'Öksürme ve öğürme refleksinin zayıflaması/kaybı',
            'Entüvasyon tüpünün çekilmesi (Post-ekstüvasyon dönemi)'
        ],
        symptoms: [
            'Risk tanısıdır. (Risk faktörleri: Yutma güçlüğü, boğulma/öksürme refleksi zayıflığı, bilinç bulanıklığı, NG tüp varlığı).'
        ],
        noc: ['Akciğerlere sıvı veya besin aspirasyonu gelişmeyecek.', 'Solunum sesleri temiz tutulacak, raller duyulmayacak.'],
        nic: [
            'Beslenme ve ilaç uygulaması esnasında yatak başı 45-90° yükseltilecek ve beslenmeden sonra 45 dk bu pozisyonda tutulacak.',
            'Oral beslenme öncesi öğürme ve yutma refleksi değerlendirilecek.',
            'Gıdalar hastanın yutabileceği püre kıvamında hazırlanacak, sıvılar koyulaştırıcı ile verilecek.',
            'Yatak başında çalışır durumda aspiratör ve kateter hazır bulundurulacak.',
            'Tüple beslenen hastalarda besleme öncesi mide rezidüel hacmi kontrol edilecek.'
        ],
        rationales: [
            'Yatak başının yükseltilmesi yerçekimi etkisiyle mide içeriğinin özofagusa ve trakeye kaçmasını engeller.',
            'Aspirasyon pnömonisi mortalitesi yüksek bir komplikasyondur; koruyucu önlemler kritik hayati önem taşır.'
        ],
        studentNotes: 'Öğrenci Notu: Risk tanılarında "gösterilen" (belirti) kısmı yazılmaz; sadece "... risk faktörüne bağlı aspirasyon riski" şeklinde ifade edilir.',
        relatedDiseases: ['SVO / İnme', 'Parkinson', 'Demans', 'Kafa Travması', 'Entübe Hastalar']
    },
    {
        id: 'ventilator_ayrilma_tepki',
        code: '00034',
        title: 'Mekanik Ventilatörden Ayrılmaya Dysfonksiyonel Tepki',
        category: 'solunum',
        domain: 'domain4',
        domainName: 'Domain 4: Aktivite / Dinlenme',
        className: 'Sınıf 4: Kardiyovasküler / Pulmoner Yanıtlar',
        triggerVitals: {},
        definition: 'Mekanik ventilasyon desteğinin kademeli olarak azaltılması veya sonlandırılması sürecine hastanın fizyolojik/psikolojik uyum sağlayamaması.',
        etiology: [
            'Solunum kaslarında atrofi ve yorgunluk',
            'Uzamış mekanik ventilasyon süreci (>7 gün)',
            'Ayrılma (Weaning) korkusu ve yoğun anksiyete',
            'Yetersiz kalori ve protein alımına bağlı halsizlik',
            'Uyku bozukluğu ve hemodinamik unstabilite'
        ],
        symptoms: [
            'Weaning denemesinde solunum sayısının > 30/dk çıkması',
            'SpO2 değerinde ani düşüş (%90 altı)',
            'Ajitasyon, terleme, Taşikardi ve hipertansiyon',
            'Yardımcı solunum kaslarının kullanımı ve abdominal paradoks'
        ],
        noc: ['Hasta mekanik ventilatörden başarıyla ayrılacak ve spontan solunuma geçecek.'],
        nic: [
            'Weaning protokolü hastanın dinlenmiş olduğu sabah saatlerinde uygulanacak.',
            'İşlem öncesi hastaya süreç sakince anlatılarak anksiyetesi yatıştırılacak.',
            'Weaning sırasında SpO2, EKG, Tansiyon ve Solunum takibi kesintisiz yapılacak.',
            'Hastaya Yarı-Fowler pozisyonu verilecek ve yatak başında kalınacak.'
        ],
        rationales: ['Sabah saatlerinde solunum kasları ve metabolik rezervler en yüksek seviyededir.'],
        studentNotes: 'Yoğun bakım stajlarında weaning protokol takibini formunuza eklemek yüksek puan kazandırır.',
        relatedDiseases: ['Yoğun Bakım Hastaları', 'Kronik Solunum Yetmezliği', 'Uzamış Entüvasyon']
    },

    // =========================================================================
    // 2. DOLAŞIM VE PERFÜZYON
    // =========================================================================
    {
        id: 'dolasim_perfuzyon_bozulma',
        code: '00204',
        title: 'Etkisiz Periferik Doku Perfüzyonu',
        category: 'dolasim',
        domain: 'domain4',
        domainName: 'Domain 4: Aktivite / Dinlenme',
        className: 'Sınıf 4: Kardiyovasküler / Pulmoner Yanıtlar',
        triggerVitals: { tansiyonSystolicMax: 90, nabizMin: 110 },
        definition: 'Periferik kan dolaşımının azalması sonucunda doku beslenmesinin ve oksijenasyonunun bozulması durumu.',
        etiology: [
            'Arteriyel tıkanıklık veya aterosklotik plaklar',
            'Venöz yetmezlik ve kapakçık bozuklukları',
            'Diyabetik mikrovasküler ve makrovasküler hasar',
            'Sigara kullanımı (vazokonstriksiyon)',
            'Uzun süreli immobilite ve derin ven trombozu (DVT)'
        ],
        symptoms: [
            'Periferik nabızların (Dorsalis pedis, Tibialis posterior) zayıflaması veya alınamaması',
            'Kapiller dolum süresinin 3 saniyenin üzerine çıkması',
            'Ekstremitelerde soğukluk, solukluk, siyanoz veya mermerleşme',
            'Yürüme ile gelen bacak ağrısı (Arteriyel Kladikasyo)',
            'Yavaş iyileşen veya iyileşmeyen periferik ülserler'
        ],
        noc: [
            'Periferik pedal nabızlar bilateral güçlü (+2/+3) alınacak.',
            'Kapiller dolum süresi < 2 saniye olacak.',
            'Ekstremiteler sıcak, pembe ve ö demsiz tutulacak.'
        ],
        nic: [
            'Bilateral periferik nabızlar, cilt sıcaklığı, rengi ve kapiller dolum 4 saatte bir kontrol edilecek.',
            'Bacakları sıkan dar çorap ve giysiler engellenecek, kan akımı desteklenecek.',
            'Arteriyel yetmezlikte bacaklar kalp seviyesinden hafif aşağıda, venöz yetmezlikte yukarıda tutulacak.',
            'Cilt bütünlüğü günlük taranacak ve doğrudan sıcak su torbası uygulamaktan kaçınılacak (yanık riski).'
        ],
        rationales: [
            'Diyabetik ve vasküler hastalarda nöropati nedeniyle duyu kaybı olduğundan sıcak uygulamalar derin doku yanıklarına yol açabilir.'
        ],
        studentNotes: 'Öğrenci Notu: Nabız değerlendirmesinde 0: Alınamıyor, +1: Zayıf, +2: Normal, +3: Sıçrayıcı şeklinde derecelendirmeyi unutmayınız.',
        relatedDiseases: ['Periferik Arter Hastalığı (PAH)', 'Diyabetik Ayak', 'DVT', 'Raynaud Sendromu']
    },
    {
        id: 'serebral_doku_perfuzyonu_bozulma',
        code: '00201',
        title: 'Etkisiz Serebral Doku Perfüzyonu Riski',
        category: 'dolasim',
        domain: 'domain4',
        domainName: 'Domain 4: Aktivite / Dinlenme',
        className: 'Sınıf 4: Kardiyovasküler / Pulmoner Yanıtlar',
        triggerVitals: {},
        definition: 'Serebral doku dolaşımının azalması sonucunda beyin hücresel oksijenasyonunda bozulma ve iskemi gelişme riski.',
        etiology: [
            'Serebrovasküler Olay (İskemik veya Hemorajik İnme / SVO)',
            'İntrakraniyal basınç artışı (İBAA) ve beyin ödemi',
            'Karotis arter darlığı veya beyin anevrizması',
            'Kafa travması ve epidural/subdural hematom'
        ],
        symptoms: ['Risk tanısıdır (Fokal nörolojik defisitler, GKS düşüşü, pupil reaksiyonsuzluğu).'],
        noc: ['GKS skoru stabil kalacak (15/15), nörolojik kayıp ilerlemeyecek.', 'Pupil boyutları simetrik ve ışığa duyarlı kalacak.'],
        nic: [
            'GKS ve pupil ışık refleksi takibi saatlik yapılacak.',
            'Yatak başı venöz dönüşü kolaylaştırmak için 30° yükseltilecek, baş nötral pozisyonda tutulacak.',
            'Valsalva manevrası, ıkınma ve öksürme engellenecek (laksatif verilecek).',
            'Hipertermi ve hipertansiyon yakından izlenecek ve hekime bildirilecek.'
        ],
        rationales: ['Yatak başının 30° yükseltilmesi intrakraniyal basıncı düşürürken serebral perfüzyon basıncını korur.'],
        studentNotes: 'Nöroloji/BEYİN CERRAHİ stajlarında GKS takibi tablosunu bakım planı arkasına ekleyiniz.',
        relatedDiseases: ['İnme / SVO', 'Serebral Anevrizma', 'Kafa Travması', 'İntrakraniyal Kitle']
    },
    {
        id: 'kardiyak_debi_azalma',
        code: '00029',
        title: 'Kardiyak Debide Azalma',
        category: 'dolasim',
        domain: 'domain4',
        domainName: 'Domain 4: Aktivite / Dinlenme',
        className: 'Sınıf 4: Kardiyovasküler / Pulmoner Yanıtlar',
        triggerVitals: { nabizMin: 110, tansiyonSystolicMax: 90 },
        definition: 'Kalbin vücut dokularının metabolik gereksinimlerini karşılamada pompaladığı kan miktarının (kardiyak çıktı) yetersiz kalması.',
        etiology: [
            'Miyokardiyal kontraktilite bozukluğu (Miyokard İnfarktüsü, Kardiyomiyopati)',
            'Atriyoventriküler ritim bozuklukları (Atriyal Fibrilasyon, Taşikardi, Bradikardi)',
            'Kapak hastalıkları (Mitral/Aort darlığı veya yetmezliği)',
            'Kardiyak preload (ön yük) veya afterload (art yük) değişiklikleri'
        ],
        symptoms: [
            'Hipotansiyon (Sistolik < 90 mmHg) ve Taşikardi',
            'Göğüs ağrısı, dispne ve ortopne',
            'Böbrek perfüzyon azalmasına bağlı Oligüri (< 30 mL/saat)',
            'Periferik ödem, jübüler ven dolgunluğu',
            'Halsizlik, soğuk terleme ve soluk cilt'
        ],
        noc: [
            'Kardiyak debi ve doku perfüzyonu yeterli seviyede tutulacak.',
            'Vital bulgular (Tansiyon, Nabız) hastanın bazal sınırlarında seyredecek.',
            'İdrar çıkışı > 0.5 mL/kg/saat olacak.'
        ],
        nic: [
            'EKG monitörizasyonu, Tansiyon, Nabız ve SpO2 sürekli izlenecek.',
            'Aldığı-Çıkardığı Sıvı Takibi (AÇT) saatlik kaydedilecek.',
            'Fiziksel ve psikolojik istirahat sağlanacak, yatak istirahati verilecek.',
            'Hekim istemine uygun pozitif inotrop (Dobutamin, Dopamin) ve diüretik tedavisi infüze edilecek.'
        ],
        rationales: ['İstrirahate alınma kalp kasının oksijen tüketimini ve iş yükünü azaltır.'],
        studentNotes: 'Kardiyoloji stajında AÇT bilançosu ve günlük kilo takibi en kritik hemşirelik izlem parametresidir.',
        relatedDiseases: ['Kalp Yetmezliği', 'Akut Miyokard İnfarktüsü (AMI)', 'Kardiyojenik Şok']
    },
    {
        id: 'kardiyak_doku_perfuzyonu_riski',
        code: '00200',
        title: 'Etkisiz Kardiyak Doku Perfüzyonu Riski',
        category: 'dolasim',
        domain: 'domain4',
        domainName: 'Domain 4: Aktivite / Dinlenme',
        className: 'Sınıf 4: Kardiyovasküler / Pulmoner Yanıtlar',
        triggerVitals: {},
        definition: 'Koroner kan akımının azalması sonucunda miyokard dokusunda oksijenasyon yetersizliği ve iskemi gelişme riski.',
        etiology: [
            'Koroner arter hastalığı ve plak rüptürü',
            'Hipertansiyon ve sol ventrikül hipertrofisi',
            'Sigara kullanımı, hiperlipidemi ve diyabet',
            'Koroner arter spazmı'
        ],
        symptoms: ['Risk tanısıdır (Göğüste sıkışma, sol kola yayılan ağrı riski).'],
        noc: ['Miyokard iskemisi ve göğüs ağrısı gelişmeyecek.', 'Troponin ve EKG bulguları stabil kalacak.'],
        nic: [
            'Göğüs ağrısı takibi PQRST ölçeğine göre yapılacak.',
            'Göğüs ağrısı anında hasta hemen yatağa alınacak ve hekim istemiyle O2 ve Dilaltı Nitrogliserin verilecek.',
            '12 derivasyonlu EKG çekilecek.'
        ],
        rationales: ['Nitrogliserin koroner arterleri dilate ederek miyokarda giden kan akımını artırır ve iskemiyi çözer.'],
        studentNotes: 'Göğüs ağrısı tanımlarken PQRST (P: Provokes, Q: Quality, R: Region, S: Severity, T: Time) metodunu mutlaka kullanın.',
        relatedDiseases: ['Angina Pektoris', 'Koroner Arter Hastalığı', 'Stent/Bypass Hastaları']
    },
    {
        id: 'sok_riski',
        code: '00205',
        title: 'Şok Riski',
        category: 'dolasim',
        domain: 'domain11',
        domainName: 'Domain 11: Güvenlik / Koruma',
        className: 'Sınıf 2: Fiziksel Yaralanma',
        triggerVitals: { tansiyonSystolicMax: 90, nabizMin: 115 },
        definition: 'Hücresel düzeyde yetersiz oksijenasyon ve doku perfüzyon kaybına yol açabilecek şok tablosu gelişme riski.',
        etiology: [
            'Aşırı akut kanama veya sıvı kaybı (Hipovolemik Şok)',
            'Şiddetli sistemik enfeksiyon (Saptik Şok)',
            'Miyokard pompalama yetersizliği (Kardiyojenik Şok)',
             me severe alerjik reaksiyon (Anafilaktik Şok)'
        ],
        symptoms: ['Risk tanısıdır (Hipotansiyon, filiform nabız, soğuk yapışkan terleme).'],
        noc: ['Hemodinamik stabilite korunacak, hasta şok tablosuna girmeyecek.'],
        nic: [
            'Vital bulgular 15-30 dakikada bir kaydedilecek.',
            'Çift geni kalibreli IV damar yolu açılacak, izotonik kristaloid IV sıvı yüklemesine başlanacak.',
            'Saatlik idrar takibi için foley sonda takılacak.'
        ],
        rationales: ['Şokta organ perfüzyonunun ilk göstergesi idrar çıkışıdır; idrarın < 0.5 mL/kg/saat olması renal iskemi işaretidir.'],
        studentNotes: 'Acil ve Yoğun Bakım stajlarında şok belirtilerini erken tanımak hayati puan kazandırır.',
        relatedDiseases: ['Ağır Travma', 'GİB Kanama', 'Sepsis', 'Anafilaksi']
    },
    {
        id: 'kanamaya_bagli_hipovolemi_riski',
        code: '00206',
        title: 'Kanamaya Bağlı Hipovolemi Riski',
        category: 'dolasim',
        domain: 'domain11',
        domainName: 'Domain 11: Güvenlik / Koruma',
        className: 'Sınıf 2: Fiziksel Yaralanma',
        triggerVitals: {},
        definition: 'İntravasküler kan hacminin hızlı kaybına bağlı olarak dolaşım yetersizliği gelişme riski.',
        etiology: ['Cerrahi operasyon ve damar kesis', 'Gastrointestinal kanama (Üst/Alt GİK)', 'Travma ve organ rüptürü', 'Antikoagülan kullanımı'],
        symptoms: ['Risk tanısıdır (Drenlerden aşırı kanlı akıntı, hemoglobin düşüşü).'],
        noc: ['Kanama kontrol altına alınacak, Hemoglobin/Hematokrit değerleri stabil kalacak.'],
        nic: [
            'Cerrahi pansumanlar ve drenler kanama yönünden sık kontrol edilecek.',
            'Tam Kan Sayımı (CBC) ve koagülasyon tetkikleri izlenecek.',
            'Hekim istemine uygun Kan Transfüzyonu (ES/TDP) uygulanacak ve transfüzyon reaksiyonları izlenecek.'
        ],
        rationales: ['Kan ürünleri verilirken ilk 15 dakika yavaş infüze edilmeli ve hasta başında kalınmalıdır.'],
        studentNotes: 'Kan transfüzyonu hemşirelik uygulamalarında çift hemşire kontrolü ile yapılmalıdır.',
        relatedDiseases: ['Post-Op Hastalar', 'Peptik Ülser Kanaması', 'Travma Hastaları']
    },

    // =========================================================================
    // 3. BESLENME VE METABOLİZMA
    // =========================================================================
    {
        id: 'beslenme_yetersizligi',
        code: '00002',
        title: 'Beslenmede Bozulma: Gereksinimden Az Beslenme',
        category: 'beslenme',
        domain: 'domain2',
        domainName: 'Domain 2: Beslenme',
        className: 'Sınıf 1: Sindirim / Emilim',
        triggerVitals: {},
        definition: 'Metabolik gereksinimleri karşılamak için yetersiz besin alımı durumu.',
        etiology: [
            'Şiddetli iştahsızlık (Anoreksiya) ve bulantı/kusma',
            'Yutma ve çiğneme güçlüğü (Disfaji)',
            'Gastrointestinal emilim bozukluğu (Malabsorbsiyon)',
            'Hipermetabolik durumlar (Kanser, Ağır Enfeksiyon, Yanık)',
            'Sosyoekonomik yetersizlik veya psikososyal problemler'
        ],
        symptoms: [
            'İdeal vücut ağırlığının %10 veya daha altında olması',
            'Serum Albümin (< 3.5 g/dL) ve Prealbümin düşüklüğü',
            'Belirgin kas erimesi (atropi), kemik çıkıntılarının belirginleşmesi',
            'Ciltte kuruluk, saç dökülmesi, yaraların geç iyileşmesi',
            'Yorgunluk ve halsizlik beyanı'
        ],
        noc: [
            'Hastanın günlük kalori ve protein alımı diyet hedeflerine ulaşacak.',
            'Kilo kaybı duracak ve kilo artışı sağlanacak.',
            'Serum albümin seviyeleri normal aralığa gelecektir.'
        ],
        nic: [
            'Diyetisyen ile işbirliği yapılarak hastanın sevdiği yüksek kalorili/proteinli besinler planlanacak.',
            'Yemek öncesi ağız bakımı verilerek tat alma artırılacak.',
            'Sık ve az öğünler (3 ana, 3 ara öğün) şeklinde beslenme teşvik edilecek.',
            'Hekim istemine uygun enteral/parenteral beslenme ve oral solüsyon takviyeleri verilecek.',
            'Haftalık kilo takibi yapılacak.'
        ],
        rationales: [
            'Yemek öncesi oral bakımla ağız içi kötü tat ve koku giderilerek iştah uyarılır.',
            'Proteinden zengin diyet doku onarımını ve bağışıklık sistemini destekler.'
        ],
        studentNotes: 'Öğrenci Notu: Hastanın günlük aldığı kaloriyi ve tükettiği porsiyon yüzdesini (%25, %50, %75) hemşirelik gözlem formuna kaydedin.',
        relatedDiseases: ['Kanser', 'Kaşeksi', 'Anoreksiya Nervoza', 'Gastrointestinal Cerrahiler']
    },
    {
        id: 'beslenme_fazlaligi_riski',
        code: '00001',
        title: 'Beslenmede Bozulma: Gereksinimden Fazla Beslenme',
        category: 'beslenme',
        domain: 'domain2',
        domainName: 'Domain 2: Beslenme',
        className: 'Sınıf 1: Sindirim / Emilim',
        triggerVitals: {},
        definition: 'Metabolik gereksinimlerin üzerinde besin tüketilmesi sonucunda vücutta aşırı yağ birikimi.',
        etiology: ['Hareketsiz yaşam tarzı (Sedanter yaşam)', 'Yüksek kalorili ve işlenmiş gıda tüketimi', 'Metabolik/Hormonal bozukluklar (Hipotiroidi, Cushing)'],
        symptoms: ['Vücut Kitle İndeksi (VKİ) > 25-30 kg/m²', 'Bel çevresinde artış (Erkek > 102 cm, Kadın > 88 cm)'],
        noc: ['Hasta kilo verme hedeflerini belirleyecek ve sağlıklı beslenme alışkanlığı kazanacak.'],
        nic: ['Beslenme günlüğü tutulması sağlanacak.', 'Fiziksel aktivite programı teşvik edilecek.', 'Diyetisyen konsültasyonu istenilecek.'],
        rationales: ['Kademeli kilo kaybı kalıcı metabolik düzelme sağlar.'],
        studentNotes: 'Dahiliye stajlarında VKİ hesaplamasını formunuza ekleyin.',
        relatedDiseases: ['Obezite', 'Metabolik Sendrom', 'Tip 2 Diyabet']
    },
    {
        id: 'hipertermi',
        code: '00007',
        title: 'Hipertermi (Yüksek Ateş)',
        category: 'beslenme',
        domain: 'domain11',
        domainName: 'Domain 11: Güvenlik / Koruma',
        className: 'Sınıf 6: Termoregülasyon',
        triggerVitals: { atesMin: 38.0 },
        definition: 'Vücut sıcaklığının hipotalamik set noktasının üzerine çıkması ve termoregülasyonun yetersiz kalması durumu.',
        etiology: [
            'Bakteriyel, viral veya fungal enfeksiyonlar',
            'Aşırı sıvı kaybı ve dehidratasyon',
            'Sıcak çarpması veya yüksek çevresel sıcaklık',
            'Anesteziye bağlı malign hipertermi',
            'İlaç reaksiyonları'
        ],
        symptoms: [
            'Vücut sıcaklığının > 38.0°C olması (Aksiller/Timpanik)',
            'Ciltte sıcaklık, kızarıklık ve flushed görünüm',
            'Taşikardi (Ateşin her 1°C artışında nabız ~10 atım artar) ve Takipne',
            'Halsizlik, iştahsızlık, baş ağrısı ve titreme',
            'Ağır vakalarda febril konvülsiyon veya konfüzyon'
        ],
        noc: [
            'Vücut sıcaklığı 36.5 - 37.5 °C hedef aralığına düşürülecek.',
            'Nabız ve solunum sayıları normal sınırlara gelecek.',
            'Sıvı-elektrolit dengesi korunacak.'
        ],
        nic: [
            'Vücut sıcaklığı 30-60 dakikada bir ölçülüp kaydedilecek.',
            'Hekim istemine uygun antipiretik (Parasetamol IV/Oral) verilecek.',
            'Hastanın üzerindeki fazla giysiler ve örtüler çıkarılacak.',
            'Büyük damarların geçtiği bölgelere (koltuk altı, kasık, boyun) ılık ıslak kompres uygulanacak (Soğuk su/buz kullanılmaz).',
            'Kontrendikasyon yoksa bol oral sıvı alımı desteklenecek.'
        ],
        rationales: [
            'Buzlu veya çok soğuk su uygulamak vazokonstriksiyona neden olarak ısı atılımını engeller ve titremeyi tetikleyerek iç sıcaklığı artırır; ılık kompres tercih edilmelidir.'
        ],
        studentNotes: 'Öğrenci Notu: Ateş düşürüldükten 30-45 dakika sonra kontrol ateş ölçümünü yapıp forma yazmayı unutmayınız.',
        relatedDiseases: ['Sepsis', 'Pnömoni', 'Üriner Sistem Enfeksiyonu', 'Malign Hipertermi']
    },
    {
        id: 'hipotermi',
        code: '00006',
        title: 'Hipotermi (Düşük Beden Sıcaklığı)',
        category: 'beslenme',
        domain: 'domain11',
        domainName: 'Domain 11: Güvenlik / Koruma',
        className: 'Sınıf 6: Termoregülasyon',
        triggerVitals: { atesMax: 35.5 },
        definition: 'Vücut sıcaklığının termoregülatör kapasitenin altına (35.5°C altında) düşmesi durumu.',
        etiology: ['Soğuk ortama maruz kalma', 'Uzun süren cerrahi ameliyatlar ve açık batın operasyonları', 'İleri yaş ve geriatrik kırılganlık', 'Alkol/Madde kullanımı'],
        symptoms: ['Vücut sıcaklığı < 35.5°C', 'Şiddetli titreme (Hafif hipotermi) veya titremenin durması (Ağır hipotermi)', 'Bradikardi, soğuk ve soluk cilt'],
        noc: ['Vücut sıcaklığı > 36.5°C üzerine çıkarılacak.'],
        nic: [
            'Isıtıcı battaniye (Bair Hugger) veya radyant ısıtıcı kullanılacak.',
            'Ilık IV sıvılar infüze edilecek.',
            'Oda sıcaklığı yükseltilecek ve hastanın giysileri kurulacak.'
        ],
        rationales: ['Cerrahi sonrası hipotermi yara iyileşmesini geciktirir ve kanama riskini artırır.'],
        studentNotes: 'Ameliyathane ve Post-Op uyanma odası stajlarında hastaların ısıtılmasını aksatmayınız.',
        relatedDiseases: ['Post-Op Hastalar', 'Yenidoğanlar', 'Donma / Maruziyet']
    },
    {
        id: 'bulanti',
        code: '00178',
        title: 'Bulantı',
        category: 'beslenme',
        domain: 'domain12',
        domainName: 'Domain 12: Rahatlık / Konfor',
        className: 'Sınıf 1: Fiziksel Rahatlık',
        triggerVitals: {},
        definition: 'Boğazda, epigastriumda veya karında hissedilen kusma arzusu yaratan rahatsız edici duygu.',
        etiology: [
            'Kemoterapi veya Radyoterapi uygulamaları',
            'Genel anestezi ve post-operatif etki',
            'Gastrointestinal irritasyon, gastrit, ülser',
            'Kafa içi basınç artışı veya vestibüler bozukluklar'
        ],
        symptoms: [
            'Hasta tarafından ifade edilen kusma hissi',
            'Tükürük salgısında (salivasyon) artış ve sık yutkunma',
            'İştahsızlık ve gıdalardan tiksinme',
            'Solukluk ve soğuk terleme'
        ],
        noc: [
            'Bulantı hissi hafifleyecek veya tamamen geçecek.',
            'Hasta oral gıda ve sıvı alımını tolere edebilecek.'
        ],
        nic: [
            'Hekim istemine uygun antiemetik (Ondansetron, Metoklopramid) uygulanacak.',
            'Kötü koku ve yemek kokuları ortamdan uzaklaştırılacak.',
            'Az az, sık sık ve kuru gıdalar (kraker, galeta, tost) verilecek.',
            'Kusma esnasında aspirasyonu önlemek için baş yana çevrilecek.'
        ],
        rationales: ['Kuru ve nişastalı gıdalar mide asidini absorbe ederek bulantı hissini baskılar.'],
        studentNotes: 'Öğrenci Notu: Post-Op hastalarda antiemetik uygulamadan önce bağırsak seslerinin dinlendiğini belirtiniz.',
        relatedDiseases: ['Post-Op Hastalar', 'Onkoloji Hastaları', 'Gastroenterit']
    },
    {
        id: 'glikoz_unstabilite_riski',
        code: '00179',
        title: 'Kan Glikoz Düzeyinde Unstabilite Riski',
        category: 'beslenme',
        domain: 'domain2',
        domainName: 'Domain 2: Beslenme',
        className: 'Sınıf 4: Metabolizma',
        triggerVitals: {},
        definition: 'Kan glikoz düzeylerinde normal fizyolojik sınırların (70-140 mg/dL) dışına çıkma ve dalgalanma riski.',
        etiology: [
            'Tip 1 veya Tip 2 Diyabet öyküsü',
            'Düzensiz beslenme, öğün atlama veya yetersiz karbonhidrat alımı',
            'İnsülin veya oral antidiyabetik ilaç dozaj hataları',
            'Cerrahi stres, enfeksiyon ve kortikosteroid kullanımı'
        ],
        symptoms: ['Risk tanısıdır (Hipoglisemi: terleme, titreme, çarpıntı / Hiperglisemi: polidipsi, poliüri).'],
        noc: ['Açlık ve tok kan glikoz değerleri hedef sınırlarda (70-140 mg/dL) tutulacak.'],
        nic: ['Kan şekeri takibi (AKŞ/TKŞ/Kapiller) hekim istemine uygun sıklıkta yapılacak.', 'İnsülin uygulamaları saatinde ve doğru teknikle yapılacak.', 'Hipoglisemiye karşı yatak başında glikoz tablet veya meyve suyu hazır bulundurulacak.'],
        rationales: ['Kapiller kan şekeri takibi anlık glisemi değişikliklerini yakalayarak erken müdahaleye olanak tanır.'],
        studentNotes: 'İnsülin enjeksiyon alanlarının rotasyonunu hasta eğitim notunuza yazın.',
        relatedDiseases: ['Diyabet (Tip 1/2)', 'Diyabetik Ketoasidoz (DKA)', 'GDM']
    },
    {
        id: 'yutma_guculugu',
        code: '00103',
        title: 'Yutma Güçlüğü (Disfaji)',
        category: 'beslenme',
        domain: 'domain2',
        domainName: 'Domain 2: Beslenme',
        className: 'Sınıf 1: Sindirim / Emilim',
        triggerVitals: {},
        definition: 'Oral, farengeal veya özofageal yapılardaki işlev bozukluğuna bağlı lokma veya sıvıların ağızdan mideye geçişinde zorlanma.',
        etiology: ['Serebrovasküler olay (İnme)', 'Parkinson, ALS, MS gibi nörodejeneratif hastalıklar', 'Baş-boyun kanserleri ve radyoterapi'],
        symptoms: ['Yutma sırasında öksürme, boğulma hissi ve yaşlı ses tonu', 'Ağızda yemek biriktirme (Pocketing)', 'Gıdaların genizden gelmesi'],
        noc: ['Besin ve sıvılar aspirasyon yaşanmadan güvenle yutulacak.'],
        nic: [
            'Sıvılar koyulaştırıcı jel ile püre kıvamına getirilecek.',
            'Beslenme esnasında 90° dik oturulacak ve "Çene Göğse Değdirme" (Chin-tuck) manevrası yaptırılacak.',
            'Yutma terapisti ve diyetisyen ile işbirliği yapılacak.'
        ],
        rationales: ['Chin-tuck manevrası airway girişini daraltarak gıdaların trakeye kaçmasını önler.'],
        studentNotes: 'Nöroloji stajında disfajili hastanın oral alımını kontrol etmeden su bile vermeyin.',
        relatedDiseases: ['İnme / SVO', 'Parkinson', 'Baş-Boyun Cerrahisi']
    },

    // =========================================================================
    // 4. BOŞALTIM VE SIVI-ELEKTROLİT
    // =========================================================================
    {
        id: 'sivi_volum_eksikligi',
        code: '00027',
        title: 'Sıvı Volüm Eksikliği (Dehidratasyon)',
        category: 'bosaltim',
        domain: 'domain2',
        domainName: 'Domain 2: Beslenme',
        className: 'Sınıf 5: Hidrasyon',
        triggerVitals: { tansiyonSystolicMax: 95, nabizMin: 105 },
        definition: 'Vasküler, hücresel veya dokular arası alandaki sıvıda azalma (su ve elektrolit kaybı) durumu.',
        etiology: [
            'Aşırı diyare (ishal) ve kusma',
            'Aşırı terleme, yüksek ateş veya diüretik kullanımı',
            'Yetersiz sıvı alımı ve susuzluk hissi kaybı',
            'Geniş yanıklar ve açık yara drenajları',
            'Dirençli poliüri (Diyabet)'
        ],
        symptoms: [
            'Hipotansiyon ve Taşikardi',
            'Kuru mukozalar, dilde pas görünümü ve cilt turgorunda azalma (cilt çadırlaşması)',
            'Oligüri (< 30 mL/saat) ve koyu renkli konsantre idrar',
            'Aşırı susuzluk hissi ve göz kürelerinde çökme',
            'Hematokrit ve BUN değerlerinde yükselme'
        ],
        noc: [
            'Sıvı-elektrolit dengesi yeniden sağlanacak.',
            'Cilt turgor ve tonusu normale dönecek, mukozalar nemli olacak.',
            'İdrar miktarı ve özgül ağırlığı normal seviyelere gelecek.'
        ],
        nic: [
            'Aldığı-Çıkardığı Sıvı Takibi (AÇT) hassas olarak saatlik kaydedilecek.',
            'Hekim istemine uygun IV izotonik sıvılar (0.9% NaCl, RL) zamanında verilecek.',
            'Günlük kilo takibi aynı saatte ve aynı giysilerle yapılacak.',
            'Cilt turgoru ve ağız içi mukozası her vardiyada değerlendirilecek.'
        ],
        rationales: [
            'Günlük kilo takibi akut sıvı değişimlerinin en güvenilir ve duyarlı göstergesidir (1 kg kilo kaybı 1 litre sıvı kaybına denktir).'
        ],
        studentNotes: 'Öğrenci Notu: Cilt turgorunu değerlendirirken yaşlı hastalarda el üstü yerine sternum üzerindeki cildi hafifçe kaldırıp kontrol ediniz.',
        relatedDiseases: ['Gastroenterit', 'Yanıklar', 'Aşırı Diüretik Kullanımı', 'Diyabetik Ketoasidoz']
    },
    {
        id: 'sivi_volum_fazlaligi',
        code: '00026',
        title: 'Sıvı Volüm Fazlalığı (Hipervolemi / Ödem)',
        category: 'bosaltim',
        domain: 'domain2',
        domainName: 'Domain 2: Beslenme',
        className: 'Sınıf 5: Hidrasyon',
        triggerVitals: { tansiyonSystolicMin: 140 },
        definition: 'Vücutta izotonik sıvı tutulumunun ve intravasküler/interstisyel sıvı miktarının artması durumu.',
        etiology: [
            'Akut veya Kronik Böbrek Yetersizliği',
            'Kongestif Kalp Yetmezliği',
            'Karaciğer Sirozu ve Hipoalbüminemi',
            'Aşırı IV sıvı veya sodyum yüklemesi'
        ],
        symptoms: [
            'Pretibial ve sakral bölgede godet bırakan ödem (+2/+4)',
            'Hipertansiyon ve Jübüler ven dolgunluğu (JVD)',
            'Akciğer oskültasyonunda bazallerde raller',
            'Dispne, ortopne ve hızlı kilo alımı',
            'Serum sodyumunda seyreltme hiponatremisi'
        ],
        noc: [
            'Ödem gerileyecek ve cilt normale dönecek.',
            'Akciğer sesleri açık olacak, raller kaybolacak.',
            'Sıvı dengesi sağlanacak.'
        ],
        nic: [
            'Sıvı ve sodyum kısıtlaması (hekim istemine uygun) sıkı uygulanacak.',
            'Hekim istemine uygun diüretik (Furosemid) verilecek ve yanıtı izlenecek.',
            'Günlük kilo ve sakral/pretibial ödem takibi yapılacak.',
            'Yatak başı 30-45° yükseltilecek.'
        ],
        rationales: ['Diüretikler böbreklerden sodyum ve su atılımını artırarak damar içi aşırı volümü rahatlatır.'],
        studentNotes: 'Ödem derecelendirmesi: +1 (2mm çökme), +2 (4mm çökme), +3 (6mm çökme), +4 (8mm çökme) olarak forma kaydedilir.',
        relatedDiseases: ['Böbrek Yetmezliği', 'Kalp Yetmezliği', 'Siroz']
    },
    {
        id: 'idrar_eliminasyon_bozulma',
        code: '00016',
        title: 'İdrar Eliminasyonunda Bozulma',
        category: 'bosaltim',
        domain: 'domain3',
        domainName: 'Domain 3: Boşaltım ve Değişim',
        className: 'Sınıf 1: Üriner İşlev',
        triggerVitals: {},
        definition: 'İdrar yapma işlevinde rahatsızlık, ağrı, zorlanma veya sıklık bozukluğu yaşanması.',
        etiology: ['Üriner Sistem Enfeksiyonu (ÜSE)', 'Benign Prostat Hiperplazisi (BPH)', 'Nörojenik mesane'],
        symptoms: ['Dizüri (Ağrılı idrar yapma)', 'Polakiüri (Sık idrara çıkma)', 'Noktüri (Gece idrarı)', 'Sıkışma (Urgency) hissi'],
        noc: ['Ağrısız, rahat ve normal sıklıkta idrar yapma sağlanacak.'],
        nic: [
            'Tam İdrar Tetkiki (TİT) ve İdrar Kültürü takibi yapılacak.',
            'Sıvı alımı (kontrendikasyon yoksa) artırılacak.',
            'Perine hijyeni ve bakımı sağlanacak.'
        ],
        rationales: ['Bol sıvı alımı üriner kanalı yıkayarak bakteriyel yükü azaltır.'],
        studentNotes: 'Üroloji ve Dahiliye stajında TİT ve idrar rengi (berrak/bulanık/hematürik) not edilmelidir.',
        relatedDiseases: ['Sistit', 'Üretrit', 'BPH', 'Nörojenik Mesane']
    },
    {
        id: 'uriner_retansiyon',
        code: '00023',
        title: 'Üriner Retansiyon (Glob Vezikal)',
        category: 'bosaltim',
        domain: 'domain3',
        domainName: 'Domain 3: Boşaltım ve Değişim',
        className: 'Sınıf 1: Üriner İşlev',
        triggerVitals: {},
        definition: 'Mesanenin tam olarak boşaltılamaması ve idrarın mesanede birikmesi durumu.',
        etiology: ['Üretral obstrüksiyon (Prostat)', 'Post-operatif anestezi ve spinal blok etki', 'Spinal kord yaralanması'],
        symptoms: ['Suprapubik bölgede hassasiyet, şişlik ve dolgunluk (Glob)', 'Hiç idrar yapamama veya damla damla yapma', 'Huzursuzluk ve şiddetli sıkışma ağrısı'],
        noc: ['Mesane tam olarak boşalacak, suprapubik rahatlama sağlanacak.'],
        nic: [
            'Mesane Ultrasonu (Bladder Scan) ile mesane sıvı hacmi ölçülecek.',
            'Musluk suyu sesi açma, ılık su ile perine yıkama gibi reflex uyarıcı teknikler denenecek.',
            'İşeme gerçekleşmezse steril foley/prezervatif kateterizasyon uygulanacak.'
        ],
        rationales: ['Mesane aşırı gerildiğinde detresör kas lifleri zedelenir; zamanında drenaj kas hasarını engeller.'],
        studentNotes: 'Steril foley kateter takılması sırasında asepsi kurallarını aksatmayınız.',
        relatedDiseases: ['Post-Op Hastalar', 'BPH', 'Spinal Kord Travması']
    },
    {
        id: 'konstipasyon',
        code: '00011',
        title: 'Konstipasyon (Kabızlık)',
        category: 'bosaltim',
        domain: 'domain3',
        domainName: 'Domain 3: Boşaltım ve Değişim',
        className: 'Sınıf 2: Gastrointestinal İşlev',
        triggerVitals: {},
        definition: 'Gaita çıkarmanın zorlaşması, sıklığının azalması ve sert, kuru gaita kıvamı durumu.',
        etiology: [
            'İmmobilite ve yatağa bağımlılık',
            'Yetersiz lifli gıda ve sıvı tüketimi',
            'Opioid analjezik ve antikolinerjik ilaç kullanımı',
            'Mahremiyet eksikliği ve tuvalet ihtiyacını erteleme'
        ],
        symptoms: [
            'Haftada 2 veya daha az gaita çıkarma',
            'Sert, kuru ve parça parça gaita (Bristol Tip 1-2)',
            'Gaita çıkarırken aşırı ıkınma ve rektal dolgunluk',
            'Karında distansiyon, gaz ve kramp ağrısı'
        ],
        noc: ['Normal sıklıkta, yumuşak kıvamda ve ıkınmadan bağırsak boşaltımı sağlanacak.'],
        nic: [
            'Diyette lif oranı yüksek gıdalar (kuru kayısı, erik, kepekli besinler) artırılacak.',
            'Bol sıvı alımı (2000 mL/gün) teşvik edilecek.',
            'Erken mobilizasyon ve yürüyüş yaptırılacak.',
            'Hekim istemiyle laksatif veya lavman uygulanacak.'
        ],
        rationales: ['Diyet lifi gaita hacmini ve su tutma kapasitesini artırarak peristaltizmi uyarır.'],
        studentNotes: 'Bristol Gaita Skalasını kullanarak bağırsak hareketlerini gözlemlerinize yazabilirsiniz.',
        relatedDiseases: ['Post-Op Dönem', 'Opioid Kullanan Hastalar', 'Geriatrik Hastalar']
    },
    {
        id: 'diyare',
        code: '00013',
        title: 'Diyare (İshal)',
        category: 'bosaltim',
        domain: 'domain3',
        domainName: 'Domain 3: Boşaltım ve Değişim',
        className: 'Sınıf 2: Gastrointestinal İşlev',
        triggerVitals: {},
        definition: 'Günde 3 veya daha fazla sulu, şekilsiz ve gevşek gaita çıkarma durumu.',
        etiology: ['Gastrointestinal enfeksiyonlar (Salmonella, Rotavirüs)', 'Uzun süreli antibiyotik kullanımı (C. difficile riski)', 'Enteral beslenme tüpleri ve hiperosmolar mamalar'],
        symptoms: ['Sulu ve sık gaita', 'Kramp şeklinde karın ağrısı ve hiperaktif bağırsak sesleri', 'Perianal irritasyon ve kızarıklık'],
        noc: ['Gaita kıvamı ve sıklığı normale dönecek, sıvı-elektrolit kaybı önlenecek.'],
        nic: [
            'Perianal bölge temizliği her dışkılama sonrası ılık suyla yapılıp bariyer krem sürülecek.',
            'Oral rehidratasyon sıvıları verilip elektrolit takibi yapılacak.',
            'Gaita kültürü ve Clostridium difficile toksin testi için numune alınacak.'
        ],
        rationales: ['Sık sulu dışkılama perianal cilt dermatiti ve maserasyonuna neden olur; koruyucu kremler şarttır.'],
        studentNotes: 'Antibiyotik ilişkili diyarelerde izole önlemleri almayı unutmayın.',
        relatedDiseases: ['Gastroenterit', 'C. Difficile Enfeksiyonu', 'IBD']
    },

    // =========================================================================
    // 5. AĞRI VE KONFOR
    // =========================================================================
    {
        id: 'akut_agri',
        code: '00132',
        title: 'Akut Ağrı',
        category: 'agri',
        domain: 'domain12',
        domainName: 'Domain 12: Rahatlık / Konfor',
        className: 'Sınıf 1: Fiziksel Rahatlık',
        triggerVitals: { agriMin: 4 },
        definition: 'Aniden veya yavaşça başlayan, hafiften şiddetliye değişen ve 3 aydan kısa süren rahatsız edici duyusal ve duygusal deneyim.',
        etiology: [
            'Cerrahi insizyon ve doku travması',
            'Kemik kırıkları ve kas spazmları',
            'İnvaziv tıbbi girişimler (Dren, kateter, biyopsi)',
            'Enflamasyon ve doku iskemisi'
        ],
        symptoms: [
            'Ağrı beyanı (NRS / VAS skala skoru ≥ 4/10)',
            'Yüz buruşturma, ağlama, koruyucu beden pozisyonu alma',
            'Sempatik uyarılmaya bağlı Tansiyon ve Nabız yükselmesi',
            'Huzursuzluk, terleme ve yüzeysel solunum'
        ],
        noc: [
            'Hastanın ağrı skoru 3/10 ve altına indirilecek.',
            'Hasta mobilize olurken ve derin nefes alırken ağrısının hafiflediğini ifade edecek.',
            'Vital bulgular ağrıya bağlı yükselmeden normale dönecek.'
        ],
        nic: [
            'Ağrı şiddeti (0-10 NRS ölçeği ile) 2 saatte bir ve analjezik sonrası 30. dakikada değerlendirilecek.',
            'Hekim istemine uygun IV/Oral analjezikler (Opioid/Non-opioid) zamanında verilecek ve etki/yan etki izlenecek.',
            'İnsizyon bölgesi öksürük ve hareket esnasında yastık ile desteklenecek (splinting).',
            'Gevşeme teknikleri, dikkati başka yöne çekme ve rahat pozisyon (yarı-Fowler) sağlanacak.'
        ],
        rationales: [
            'Analjeziklerin düzenli zamanlı verilmesi ağrı pik yapmadan engellenmesini sağlar ve toplam ilaç ihtiyacını azaltır.',
            'Cerrahi insizyonun yastıkla desteklenmesi doku gerilimini azaltarak ağrıyı hafifletir.'
        ],
        studentNotes: 'Öğrenci Notu: Ağrı değerlendirmesini mutlaka NRS (Numeric Rating Scale) ile sayısal değer belirterek formunuza ekleyin.',
        relatedDiseases: ['Post-Op Cerrahi Hastaları', 'Kırık / Travma', 'Akut Apandisit']
    },
    {
        id: 'kronik_agri',
        code: '00133',
        title: 'Kronik Ağrı',
        category: 'agri',
        domain: 'domain12',
        domainName: 'Domain 12: Rahatlık / Konfor',
        className: 'Sınıf 1: Fiziksel Rahatlık',
        triggerVitals: {},
        definition: '3 aydan uzun süren, sürekli veya yineleyen, yaşam kalitesini ve günlük aktiviteleri olumsuz etkileyen ağrı.',
        etiology: ['Osteoartrit / Romatoid Artrit', 'Kanser süreçleri ve metastazlar', 'Kronik bel fıtığı veya nöropati (Diyabetik nöropati)'],
        symptoms: ['3 aydan uzun süren ağrı öyküsü', 'Depresif ruh hali, yorgunluk ve uyku bozukluğu', 'Sosyal izolasyon ve hareket kısıtlılığı'],
        noc: ['Hasta ağrı ile baş etme yöntemlerini uygulayacak ve günlük aktivitelerini sürdürecek.'],
        nic: [
            'DSÖ Analjezik Merdivenine uygun ilaç tedavisi takip edilecek.',
            'Sıcak/soğuk kompres ve masaj gibi non-farmakolojik yöntemler uygulanacak.',
            'Psikolojik destek ve algoloji konsültasyonu sağlanacak.'
        ],
        rationales: ['Kronik ağrıda multimodal yaklaşım (ilaç + fizyo-terapi + psikolojik) en etkili yöntemdir.'],
        studentNotes: 'Fizik Tedavi ve Onkoloji stajlarında kronik ağrılı hastanın yaşam kalitesi puanını değerlendirin.',
        relatedDiseases: ['Kanser', 'Romatoid Artrit', 'Kronik Bel Ağrısı']
    },
    {
        id: 'konfor_bozulma',
        code: '00214',
        title: 'Konfor Bozukluğu',
        category: 'agri',
        domain: 'domain12',
        domainName: 'Domain 12: Rahatlık / Konfor',
        className: 'Sınıf 1: Fiziksel Rahatlık',
        triggerVitals: {},
        definition: 'Fiziksel, psikososyal, çevresel veya kültürel alanlarda rahatlık, huzur ve iyilik hissinin kısıtlanması.',
        etiology: ['Hastane ortamı, gürültü ve ışık', 'Bulantı, kaşıntı ve ağrı', 'Yatağa bağımlılık'],
        symptoms: ['Hasta memnuniyetsizliği beyanı', 'Huzursuzluk ve ağlama'],
        noc: ['Hasta fiziksel ve ruhsal olarak rahatladığını ifade edecek.'],
        nic: [
            'Çevre koşulları (gece gürültüsü, oda sıcaklığı, ışık) düzenlenecek.',
            'Cilt bakımı, masaj ve rahat pozisyon desteği verilecek.'
        ],
        rationales: ['Konforlu bir hastane ortamı stres hormonlarını (kortizol) düşürerek iyileşmeyi hızlandırır.'],
        studentNotes: 'Gece nöbeti stajlarında koridor gürültüsünü azaltmak hasta konforu için şarttır.',
        relatedDiseases: ['Yatan Tüm Hastalar', 'Yoğun Bakım Hastaları']
    },

    // =========================================================================
    // 6. GÜVENLİK VE ENFEKSİYON
    // =========================================================================
    {
        id: 'enfeksiyon_riski',
        code: '00004',
        title: 'Enfeksiyon Riski',
        category: 'guvenlik',
        domain: 'domain11',
        domainName: 'Domain 11: Güvenlik / Koruma',
        className: 'Sınıf 1: Enfeksiyon',
        triggerVitals: { atesMin: 37.8 },
        definition: 'Patojen organizmaların (bakteri, virüs, mantar) vücuda girmesi ve hastalık oluşturma riskinin artması durumu.',
        etiology: [
            'İnvaziv girişimler ve hatlar (Santral/Periferik IV kateter, Foley sonda, cerrahi drenler)',
            'Doku bütünlüğünde bozulma (Cerrahi insizyon, bası yarası, açık travma)',
            'İmmünosüpresyon (Nötropeni, Kemoterapi, Kortikosteroid kullanımı)',
            'Kronik Hastalıklar (Diyabet, Böbrek Yetmezliği)'
        ],
        symptoms: ['Risk tanısıdır (Risk faktörleri: İnvaziv hat varlığı, cerrahi yara, düşük WBC veya lökositoz).'],
        noc: [
            'Hastada sistemik veya lokal enfeksiyon gelişmeyecek.',
            'Vücut sıcaklığı ve WBC (Lökosit) değerleri normal sınırlarda kalacak.',
            'İnvaziv kateter giriş yerleri ve yara çevresi temiz, kuru kalacak.'
        ],
        nic: [
            'Tüm hasta bakım ve girişimlerinde El Hijyeni ("5 Endikasyon") kuralına uyulacak.',
            'Pansumanlar ve kateter bakımları steril teknikle yapılacak.',
            'İnvaziv hatlar gereksiz uzatılmayacak, en kısa sürede çekilecek.',
            'Hekim istemine uygun profilaktik antibiyotik zamanında uygulanacak.'
        ],
        rationales: [
            'El yıkama hastane enfeksiyonlarını (nosokomiyal) önlemede en etkili ve ucuz yöntemdir.',
            'Gereksiz Foley sonda ve IV kateterlerin çekilmesi enfeksiyon kaynağını ortadan kaldırır.'
        ],
        studentNotes: 'Öğrenci Notu: Stajda kateter bakım tarihi ve pansuman saatini hasta dosyasından kontrol edip forma işleyiniz.',
        relatedDiseases: ['Cerrahi Hastaları', 'Yoğun Bakım Hastaları', 'Onkoloji / Kemoterapi']
    },
    {
        id: 'dusme_riski',
        code: '00155',
        title: 'Düşme Riski',
        category: 'guvenlik',
        domain: 'domain11',
        domainName: 'Domain 11: Güvenlik / Koruma',
        className: 'Sınıf 2: Fiziksel Yaralanma',
        triggerVitals: {},
        definition: 'Fiziksel yaralanmaya veya hasara neden olabilecek kazara düşme olayına maruz kalma riski.',
        etiology: [
            'İleri yaş (> 65 yaş)',
            'Denge ve yürüme bozukluğu, kas zayıflığı',
            'Sedatif, hipnotik, diüretik ve antihipertansif ilaç kullanımı',
            'Konfüzyon, oryantasyon bozukluğu ve demans',
            'Görme kaybı ve ıslak/kaygan zeminler'
        ],
        symptoms: ['Risk tanısıdır (Risk faktörleri: İtaki Düşme Skoru ≥ 5 veya Hendrich Skoru yüksekliği).'],
        noc: ['Hasta hastanede yatış süresince hiçbir düşme olayı yaşamayacak.'],
        nic: [
            'Yatak kenarlıklar çift taraflı kaldırılacak ve kilitli tutulacak.',
            'Yatak en düşük seviyeye indirilecek ve frenleri kilitlenecek.',
            'Yatak başına "Kırmızı Düşme Riski" uyarısı asılacak.',
            'Çağrı zili hastanın kolay ulaşabileceği yere konulacak ve kullanımı öğretilecek.',
            'Gece oda içi gece lambası açık bırakılacak.'
        ],
        rationales: ['Yatak kenarlıklarının kaldırılması ve düşük seviyeye alınması yüksekten düşme travmasını engeller.'],
        studentNotes: 'İtaki Düşme Riski Ölçeğini her hasta değerlendirmesinde güncelleyin.',
        relatedDiseases: ['Geriatrik Hastalar', 'Nöroloji / Ortopedi Hastaları', 'Sedasyon Alan Hastalar']
    },
    {
        id: 'cerrahi_saha_enfeksiyonu_riski',
        code: '00217',
        title: 'Cerrahi Saha Enfeksiyonu Riski',
        category: 'guvenlik',
        domain: 'domain11',
        domainName: 'Domain 11: Güvenlik / Koruma',
        className: 'Sınıf 1: Enfeksiyon',
        triggerVitals: {},
        definition: 'Ameliyat yapılan insizyon bölgesinde patojen mikroorganizma üreme ve enfeksiyon gelişme riski.',
        etiology: ['Cerrahi müdahale ve açık yara varlığı', 'Yara drenleri', 'Yetersiz beslenme veya kontrolsüz diyabet'],
        symptoms: ['Risk tanısıdır (Cerrahi insizyon hattı).'],
        noc: ['İnsizyon hattı aseptik kalacak, purulan akıntı veya kızarıklık gelişmeyecek.'],
        nic: [
            'Cerrahi pansuman ilk 24-48 saat steril muhafaza edilecek.',
            'Dren akıntı miktarı ve rengi kaydedilecek.'
        ],
        rationales: ['Steril pansuman yara yüzeyini ekzojen patojenlerden korur.'],
        studentNotes: 'Cerrahi stajında yara pansumanı değişimi sırasında steril eldiven kullanmayı unutmayın.',
        relatedDiseases: ['Tüm Cerrahi Ameliyat Hastaları']
    },

    // =========================================================================
    // 7. AKTİVİTE, HAREKET VE ÖZ BAKIM
    // =========================================================================
    {
        id: 'fiziksel_hareket_bozuklugu',
        code: '00085',
        title: 'Fiziksel Mobilitede Bozulma',
        category: 'hareket',
        domain: 'domain4',
        domainName: 'Domain 4: Aktivite / Dinlenme',
        className: 'Sınıf 2: Aktivite / Egzersiz',
        triggerVitals: {},
        definition: 'Bireyin vücudunu veya bir ya da daha fazla ekstremitesini bağımsız olarak hareket ettirmede kısıtlanması durumu.',
        etiology: [
            'Cerrahi girişim, kırıklar veya ortopedik immobilizasyon',
            'Nörolojik motor kayıplar (Hemipleji, Parapleji, Parazi)',
            'Şiddetli ağrı ve eklem sertliği',
            'Kas zayıflığı, atrofi ve aktivite intoleransı'
        ],
        symptoms: [
            'Yardımsız ayağa kalkamama ve yürüyememe',
            'Eklemlerde kısıtlı hareket açıklığı (ROM)',
            'Yatak içinde pozisyon değiştirmede zorlanma',
            'Yürüteç, baston veya tekerlekli sandalye ihtiyacı'
        ],
        noc: [
            'Hasta mobilizasyon seviyesini artıracak.',
            'Eklem kontraktürü ve kas atrofisi gelişmeyecek.',
            'Yardımcı araçlarla güvenli mobilizasyon sağlanacak.'
        ],
        nic: [
            'Tolerans ölçüsünde erken mobilizasyon ve kademeli ayağa kaldırma planlanacak.',
            'Günde 3 kez Pasif / Aktif Eklem Hareket (ROM) egzersizleri yaptırılacak.',
            'Fizyoterapist ile işbirliği yapılacak.',
            'Mobilizasyon öncesi analjezik verilerek ağrı kontrol altına alınacak.'
        ],
        rationales: [
            'Erken mobilizasyon derin ven trombozu, atelektazi ve kas atrofisi komplikasyonlarını engeller.'
        ],
        studentNotes: 'Ortopedi ve Nöroloji stajlarında ROM egzersizlerini hastaya yaptırıp forma işleyiniz.',
        relatedDiseases: ['Kalça Kırığı', 'İnme / SVO', 'Post-Op Ortopedi']
    },
    {
        id: 'oz_bakim_eksikligi_banyo',
        code: '00108',
        title: 'Öz Bakım Eksikliği: Banyo ve Hijyen',
        category: 'hareket',
        domain: 'domain4',
        domainName: 'Domain 4: Aktivite / Dinlenme',
        className: 'Sınıf 5: Öz Bakım',
        triggerVitals: {},
        definition: 'Kendi banyo yapma, vücut temizliği ve öz hijyen aktivitelerini gerçekleştirmede yetersizlik durumu.',
        etiology: ['Yatağa bağımlılık', 'Şiddetli halsizlik ve kas zayıflığı', 'Ağrı ve IV hatlar'],
        symptoms: ['Vücut temizliğini yapamama beyanı', 'Kötü hijyen durumu ve vücut kokusu'],
        noc: ['Hastanın hijyenik banyo ve kişisel temizlik gereksinimi karşılanacak.'],
        nic: [
            'Yatak banyosu silme banyosu şeklinde verilecek.',
            'Oral bakım (ağız çalkalama/gargara) ve saç bakımı sağlanacak.'
        ],
        rationales: ['Cilt temizliği bakteri yükünü azaltır ve hasta konforunu artırır.'],
        studentNotes: 'Yatak banyosu yaptırırken mahremiyete özen gösterip paravan çekiniz.',
        relatedDiseases: ['Yoğun Bakım Hastaları', 'İmmobil Hastalar']
    },
    {
        id: 'oz_bakim_eksikligi_giyinme',
        code: '00109',
        title: 'Öz Bakım Eksikliği: Giyinme ve Süslenme',
        category: 'hareket',
        domain: 'domain4',
        domainName: 'Domain 4: Aktivite / Dinlenme',
        className: 'Sınıf 5: Öz Bakım',
        triggerVitals: {},
        definition: 'Kendi giysilerini giyme, çıkarma ve dış görünümünü sürdürme becerisinde kısıtlanma.',
        etiology: ['Ekstremite felci veya kırığı', 'Omuz/Kol hareket kısıtlılığı'],
        symptoms: ['Düğme ilikleyememe, kıyafet giyememe beyanı'],
        noc: ['Hasta giyinme sürecinde desteklenecek.'],
        nic: ['Geniş ve önü açık rahat kıyafetler seçilecek, giyinmede yardım edilecek.'],
        rationales: ['Bağımsızlığı teşvik etmek benlik saygısını korur.'],
        studentNotes: 'Hemiplejik hastada giyinirken önce felçli kol giydirilir.',
        relatedDiseases: ['İnme', 'Kırıklar', 'Demans']
    },
    {
        id: 'aktivite_intoleransi',
        code: '00092',
        title: 'Aktivite İntoleransı (Çabuk Yorulma)',
        category: 'hareket',
        domain: 'domain4',
        domainName: 'Domain 4: Aktivite / Dinlenme',
        className: 'Sınıf 4: Kardiyovasküler / Pulmoner Yanıtlar',
        triggerVitals: { nabizMin: 110, solunumMin: 24 },
        definition: 'İstenen günlük aktiviteleri tamamlamak veya sürdürmek için fizyolojik veya psikolojik enerjinin yetersiz kalması.',
        etiology: ['Anemi (Düşük Hgb)', 'Kalp yetmezliği / KOAH', 'Uzun süreli yatak istirahati'],
        symptoms: ['Aktivite sonrası aşırı yorgunluk ve halsizlik', 'Eforla gelen dispne ve Taşikardi', 'Aktivite esnasında Tansiyon dalgalanması'],
        noc: ['Aktivite toleransı artacak, vital bulgular aktivitede stabil kalacak.'],
        nic: [
            'Aktiviteler arasına dinlenme periyotları konulacak.',
            'Mobilizasyon kademeli olarak artırılacak.'
        ],
        rationales: ['Dinlenme aralıkları doku oksijen borcunu ödemesini sağlar.'],
        studentNotes: 'Aktivite öncesi ve sonrası nabız/tansiyon değerlerini forma yazınız.',
        relatedDiseases: ['Anemi', 'KOAH', 'Kalp Yetmezliği']
    },
    {
        id: 'uyku_biciminde_bozulma',
        code: '00096',
        title: 'Uyku Biçiminde Bozulma (İnsomnia)',
        category: 'hareket',
        domain: 'domain4',
        domainName: 'Domain 4: Aktivite / Dinlenme',
        className: 'Sınıf 1: Uyku / Dinlenme',
        triggerVitals: {},
        definition: 'Uyku miktarında ve kalitesinde rahatsızlığa ve yaşam kalitesi kaybına neden olan zamansal kısıtlanma.',
        etiology: ['Şiddetli ağrı, öksürük veya nefes darlığı', 'Hastane ortamı gürültüsü, ışık ve sık hemşirelik bakımları', 'Anksiyete ve hastalık stresi'],
        symptoms: ['Gece sık uyanma', 'Sabah yorgun ve dinlenmemiş kalkma', 'Gündüz uyuklama ve göz halkaları'],
        noc: ['Kesintisiz 6-8 saat uyku sağlanacak, hasta dinlenmiş hissedecek.'],
        nic: [
            'Gece hemşirelik bakımları tek seferde birleştirilerek uyku bölünmeyecek.',
            'Gece oda ışığı ve gürültüsü minimuma indirilecek.'
        ],
        rationales: ['Kümelenmiş bakım (clustered care) hastaya kesintisiz REM uykusu sağlar.'],
        studentNotes: 'Gece nöbeti stajlarında hastanın uyku süresini gözlemlerinize yazın.',
        relatedDiseases: ['Hastahanede Yatan Hastalar', 'Anksiyete', 'Ağrılı Hastalar']
    },

    // =========================================================================
    // 8. PSİKOSOSYAL VE İLETİŞİM
    // =========================================================================
    {
        id: 'anksiyete',
        code: '00146',
        title: 'Anksiyete (Kaygı)',
        category: 'psikososyal',
        domain: 'domain9',
        domainName: 'Domain 9: Başa Çıkma / Stres Toleransı',
        className: 'Sınıf 2: Başa Çıkma Yanıtları',
        triggerVitals: { nabizMin: 100 },
        definition: 'Olası veya belirsiz bir tehlikeye verilen içsel endişe, gerginlik, korku ve otonomik sinir sistemi uyarılma duygusu.',
        etiology: [
            'Yaklaşan cerrahi ameliyat ve anestezi korkusu',
            'Kötü tanı veya kronik hastalık öğrenme',
            'Yoğun bakım ve alışılmadık hastane ortamı',
            'Beden imajında ve rol işlevlerinde kayıp şüphesi'
        ],
        symptoms: [
            'Endişeli ve gergin görünüm, huzursuzluk',
            'Taşikardi, titreme, avuç içi terlemesi',
            'Aşırı soru sorma veya içe kapanma',
            'Uykusuzluk ve odaklanma güçlüğü'
        ],
        noc: [
            'Hastanın anksiyete düzeyi hafifleyecek.',
            'Hasta duygularını ve korkularını rahatça ifade edebilecek.',
            'Sakinleşme tekniklerini kullanacak.'
        ],
        nic: [
            'Empatik, sakin ve güven verici bir tutumla iletişim kurulacak.',
            'Ameliyat ve tedavi süreçleri hastanın anlayacağı dille detaylı açıklanacak.',
            'Derin nefes ve gevşeme egzersizleri yaptırılacak.',
            'Ailesi ve yakınları ile görüşmesi teşvik edilecek.'
        ],
        rationales: [
            'Bilinmeyen durumlar anksiyeteyi artırır; bilgilendirme belirsizliği gidererek kontrol hissi verir.'
        ],
        studentNotes: 'Öğrenci Notu: Ameliyat öncesi (pre-op) hasta eğitimini anksiyete tanısı altında belirtiniz.',
        relatedDiseases: ['Pre-Op Ameliyat Hastaları', 'Kanser Tanısı Alanlar', 'Yoğun Bakım']
    },
    {
        id: 'bilgi_eksikligi',
        code: '00120',
        title: 'Bilgi Eksikliği',
        category: 'psikososyal',
        domain: 'domain5',
        domainName: 'Domain 5: Algılama / Biliş',
        className: 'Sınıf 4: Biliş',
        triggerVitals: {},
        definition: 'Belirli bir konu veya sağlık durumu ile ilgili bilişsel bilginin eksikliği veya yetersizliği.',
        etiology: ['Yeni konulan tanı (Diyabet, Hipertansiyon)', 'Karmaşık ilaç tedavisi ve enjeksiyonlar', 'Daha önce ameliyat veya hastane deneyiminin olmaması'],
        symptoms: ['Sık soru sorma', 'Yanlış bilgi beyanı ve hatalı uygulama', 'Tedavi planına uyumsuzluk'],
        noc: ['Hasta hastalığı, ilaçları ve taburculuk bakımı hakkında yeterli bilgiye ulaştığını ifade edecek.'],
        nic: [
            'Taburculuk ve hastalık eğitim broşürü hazırlanıp verilecek.',
            'İlaç saatleri, dozları ve yan etkileri öğretilecek.',
            'Öğretilen bilgiler hastaya tekrar ettirilerek geri bildirim alınacak (Teach-back yöntemi).'
        ],
        rationales: ['Teach-back tekniği bilginin doğru anlaşıldığını doğrulamada en etkili akademik yoldur.'],
        studentNotes: 'Taburculuk eğitimi broşürünü bakım planınızın ekine koyabilirsiniz.',
        relatedDiseases: ['Yeni Tanı Alan Diyabetik', 'Hipertansif Hastalar', 'Taburcu Olacak Hastalar']
    },
    {
        id: 'sozel_iletisim_bozuklugu',
        code: '00051',
        title: 'Sözel İletişimde Bozulma (Afazi / Disatri)',
        category: 'psikososyal',
        domain: 'domain5',
        domainName: 'Domain 5: Algılama / Biliş',
        className: 'Sınıf 5: İletişim',
        triggerVitals: {},
        definition: 'Sembolleri (kelimeleri) kullanma, işleme ve iletme yeteneğinde azalma, gecikme veya kayıp durumu.',
        etiology: ['Serebrovasküler Olay (İnme / SVO)', 'Trakeostomi / Entüvasyon', 'Demans ve Alzheimer'],
        symptoms: ['Konuşamama (Ekspresif Afazi)', 'Kelimeleri yuvarlama (Disatri)', 'İsteklerini ifade edememe ve ajitasyon'],
        noc: ['Hasta alternatif iletişim yöntemleri ile ihtiyaçlarını aktarabilecek.'],
        nic: [
            'Resimli iletişim panosu veya harf kartları kullanılacak.',
            'Evet/Hayır şeklinde cevaplanabilecek kapalı uçlu sorular sorulacak.',
            'Konuşurken hastanın yüzüne bakılacak, sabırla dinlenecek.'
        ],
        rationales: ['Görsel iletişim panoları konuşma engeli olan hastanın ajitasyonunu belirgin şekilde düşürür.'],
        studentNotes: 'Nöroloji stajında iletişim panosunu hasta başında kullanın.',
        relatedDiseases: ['İnme / SVO', 'Trakeostomili Hastalar', 'Demans']
    },
    {
        id: 'umutsuzluk',
        code: '00126',
        title: 'Umutsuzluk',
        category: 'psikososyal',
        domain: 'domain6',
        domainName: 'Domain 6: Kendini Algılama',
        className: 'Sınıf 1: Benlik Kavramı',
        triggerVitals: {},
        definition: 'Bireyin kişisel seçimlerinin veya çözümlerinin olmadığını düşündüğü karamsar ruh hali.',
        etiology: ['Kronik/Terminal hastalık tanısı', 'Uzamış hastane yatışı ve tedavi başarısızlığı'],
        symptoms: ['Göz temasından kaçınma', 'Kayıtsızlık, iştahsızlık ve pasiflik'],
        noc: ['Hasta geleceğe dair olumlu hedefler belirleyecek ve tedaviye katılım sağlayacak.'],
        nic: ['Aktif dinleme yapılacak, psikiyatri/psikolog konsültasyonu istenecek.'],
        rationales: ['Empatik dinleme hastanın kendisini değerli hissetmesini sağlar.'],
        studentNotes: 'Psikiyatri stajında empati notlarınızı forma ekleyin.',
        relatedDiseases: ['Terminal Kanser', 'Depresyon', 'Kronik Diyaliz Hastaları']
    },

    // =========================================================================
    // 9. CİLT VE DOKU BÜTÜNLÜĞÜ
    // =========================================================================
    {
        id: 'cilt_butunlugu_bozulma',
        code: '00046',
        title: 'Doku / Cilt Bütünlüğünde Bozulma',
        category: 'cilt',
        domain: 'domain11',
        domainName: 'Domain 11: Güvenlik / Koruma',
        className: 'Sınıf 2: Fiziksel Yaralanma',
        triggerVitals: {},
        definition: 'Epidermis, dermis veya daha derin dokularda (subkutan, kas, kemik) hücresel düzeyde hasar, aşınma veya açılma durumu.',
        etiology: [
            'Uzun süreli basınç ve immobilite (Yatağa bağımlılık)',
            'Sürtünme (Friction) ve yırtılma (Shear) kuvvetleri',
            'Ciltte aşırı nem ve inkontinans (İdrar/Gaita dermatiti)',
            'Cerrahi insizyon, drenler veya invaziv kesiler',
            'Yetersiz beslenme ve hipoalbüminemi'
        ],
        symptoms: [
            'Cilt katmanlarında açılma, ülserasyon veya laserasyon',
            'Bası yarası varlığı (Evre I - IV)',
            'Eritem (kızarıklık), ödem, lokal sıcaklık ve ağrı',
            'Yara yerinde seröz veya purulan akıntı'
        ],
        noc: [
            'Cilt bütünlüğü yeniden sağlanacak, yara epitelize ve granüle olacak.',
            'Yara enfeksiyonu gelişmeyecek.',
            'Yara alanı boyutu küçülecek.'
        ],
        nic: [
            '2 saatte bir düzenli pozisyon (sağ yan, sol yan, sırtüstü) değiştirilecek ve zaman çizelgesi tutulacak.',
            'Steril yara pansumanı (hekim/yara bakım hemşiresi istemine uygun) yapılacak.',
            'Cilt nemden korunacak, pişik ve bariyer kremler uygulanacak.',
            'Havalı yatak (havalı yatak sistemi) kurulacak.',
            'Kemik çıkıntıları (topuklar, sakrum, trokanter) silikon pedler ve yastıklarla desteklenecek.'
        ],
        rationales: [
            '2 saatlik pozisyon değişimi kapiller kapatma basıncını (32 mmHg) rahatlatarak doku iskemisini engeller.',
            'Bariyer kremler idrar ve gaitanın asidik yapısının cildi masere etmesini önler.'
        ],
        studentNotes: 'Öğrenci Notu: Yaranın genişliğini (cm), derinliğini, drenaj rengini ve kokusunu hemşirelik gözleminize eklemeyi unutmayınız.',
        relatedDiseases: ['Yatağa Bağımlı Hastalar', 'Post-Op Yara', 'Diyabetik Ayak']
    },
    {
        id: 'cilt_butunlugu_bozulma_riski',
        code: '00047',
        title: 'Cilt Bütünlüğünde Bozulma Riski',
        category: 'cilt',
        domain: 'domain11',
        domainName: 'Domain 11: Güvenlik / Koruma',
        className: 'Sınıf 2: Fiziksel Yaralanma',
        triggerVitals: {},
        definition: 'Doku ve cilt katmanlarında hasar ve bası yarası gelişme riski.',
        etiology: [
            'İmmobilite (Yatağa veya sandalyeye bağımlılık)',
            'Braden Bası Yarası Risk Skoru ≤ 14 olması',
            'İdrar/Gaita inkontinansı ve sürekli nem',
            'Zayıf beslenme ve zayıf turgor'
        ],
        symptoms: ['Risk tanısıdır (Risk faktörleri: Düşük Braden Skoru, immobilite, nem).'],
        noc: ['Ciltte bası yarası veya kızarıklık gelişmeyecek, cilt sağlam kalacak.'],
        nic: [
            'Braden riski puanlaması günlük yapılacak.',
            'Pozisyon değişimi 2 saatte bir aksatılmadan uygulanacak.',
            'Cilt kuru ve temiz tutulacak, masaj kemik çıkıntılarına yapılmayacak (doku hasarı riski).'
        ],
        rationales: ['Kızarmış kemik çıkıntılarına masaj yapmak alt dokudaki mikrodamarları yırtarak bası yarasını hızlandırır.'],
        studentNotes: 'Cilt değerlendirmesinde "Basmakla solan kızarıklık (Evre 1)" tespit edilirse hemen havalı yatak kurulmalıdır.',
        relatedDiseases: ['Felçli Hastalar', 'Yoğun Bakım Hastaları', 'Geriatrik Yatalak Hastalar']
    },
    {
        id: 'basi_yarasi',
        code: '00249',
        title: 'Basınç Ülseri / Bası Yarası (Evre I - IV)',
        category: 'cilt',
        domain: 'domain11',
        domainName: 'Domain 11: Güvenlik / Koruma',
        className: 'Sınıf 2: Fiziksel Yaralanma',
        triggerVitals: {},
        definition: 'Kemik çıkıntıları üzerindeki dokularda basınç, sürtünme ve yırtılmaya bağlı lokalize yaralanma.',
        etiology: ['Uzun süreli hareketsizlik', 'Beslenme yetersizliği', 'Sürekli nem ve inkontinans'],
        symptoms: ['Bası noktalarında kızarıklık, nekroz, kavite veya delik yara'],
        noc: ['Bası yarası evresi küçülecek ve yara epitelizasyonu sağlanacak.'],
        nic: [
            'Yara bakım uzmanı konsültasyonu istenilecek.',
            'Hidrokolloid / Köpük pansuman malzemeleri kullanılacak.',
            'Diyetisyen işbirliği ile yüksek protein desteği sağlanacak.'
        ],
        rationales: ['Nemli yara iyileşmesi ortamı epitel hücre göçünü 2 kat hızlandırır.'],
        studentNotes: 'Evre I-IV bası yaralarının resimli skalasını staj dosyanıza ekleyebilirsiniz.',
        relatedDiseases: ['Yoğun Bakım Hastaları', 'Omurilik Yaralanması Hastaları']
    }
];

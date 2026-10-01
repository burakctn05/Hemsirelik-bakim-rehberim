/**
 * Hemşirelik Rehberi - Blog & Klinik Eğitim İçerik Veritabanı
 * Tüm içerikler klinik hemsirelik literatürüne ve NANDA-I standartlarına uygundur.
 */
window.BLOG_DATA = [
    {
        id: 'hemsirelik-bakim-plani-nedir',
        slug: 'hemsirelik-bakim-plani-nedir',
        title: 'Hemşirelik Bakım Planı Nedir? Adım Adım Nasıl Hazırlanır?',
        category: 'Temel Bilgiler',
        readTime: '6 dk',
        date: '1 Ekim 2026',
        author: 'Hemşire Burak ÇETİN',
        authorTitle: 'Klinik Karar Destek Uzmanı',
        authorAvatar: '👨‍⚕️',
        summary: 'Hemşirelik bakım planı hazırlamanın 5 temel adımı (ADPIE/Hemşirelik Süreci), NANDA tanı yapısı, ölçülebilir NOC hedefleri ve etkili NIC girişimleri rehberi.',
        coverBadge: '📌 Başlangıç Rehberi',
        content: `
            <div class="blog-article-intro">
                <p class="lead-text">
                    <strong>Hemşirelik bakım planı</strong>, bir hastanın biyolojik, psikolojik ve sosyal gereksinimlerini sistematik bir şekilde değerlendiren, hemşirelik tanılarını koyan ve bu tanılara yönelik kanıta dayalı girişimleri planlayan bilimsel bir rehberdir.
                </p>
                <p>
                    Hemşirelik bakım planı sadece stajlarda teslim edilen bir ödev değil; hastanın bakım kalitesini artıran, sağlık ekibi arasındaki iletişimi standartlaştıran ve hemşirelik mesleğinin otonomisini sağlayan en temel araçtır.
                </p>
            </div>

            <div class="blog-callout blog-callout-info">
                <h4>💡 Hemşirelik Süreci (ADPIE) Nedir?</h4>
                <p>
                    Uluslararası standartlarda hemşirelik bakımı 5 temel aşamadan oluşur: <strong>A</strong>ssessment (Veri Toplama), <strong>D</strong>iagnosis (Tanılama), <strong>P</strong>lanning (Planlama), <strong>I</strong>mplementation (Uygulama), ve <strong>E</strong>valuation (Değerlendirme).
                </p>
            </div>

            <h2>Hemşirelik Bakım Planı Hazırlamanın 5 Temel Adımı</h2>

            <h3>1. Adım: Veri Toplama (Anamnez ve Fizik Muayene)</h3>
            <p>
                Bakım planının temeli doğru ve eksiksiz veri toplamaktır. Veriler iki ana kategoride toplanır:
            </p>
            <table class="blog-table">
                <thead>
                    <tr>
                        <th>Veri Türü</th>
                        <th>Açıklama</th>
                        <th>Örnek</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Subjektif Veriler (S)</strong></td>
                        <td>Hastanın veya yakınının ifade ettiği kişisel hissedilen durumlar.</td>
                        <td>"Ameliyat yerim çok ağrıyor", "Nefes darlığı hissediyorum"</td>
                    </tr>
                    <tr>
                        <td><strong>Objektif Veriler (O)</strong></td>
                        <td>Hemşirenin gözlemlediği, ölçtüğü veya laboratuvarda tespit ettiği bulgular.</td>
                        <td>Tansiyon: 140/90 mmHg, Kan Glikozu: 210 mg/dL, İnsizyon bölgesinde kızarıklık</td>
                    </tr>
                </tbody>
            </table>

            <h3>2. Adım: Hemşirelik Tanısı Koyma (NANDA-I Yapısı)</h3>
            <p>
                Toplanan veriler doğrultusunda hastanın mevcut veya olası sağlık sorunları belirlenir. NANDA-I standardına göre tanılar <strong>PES / ETOD</strong> formülü ile ifade edilir:
            </p>
            <div class="blog-formula-box">
                <span class="formula-label">NANDA Tanı Formülü:</span>
                <code>[Problem (NANDA Tanısı)] + [Etiyoloji (Neden/İlişkili Faktör)] + [Semptom (Belirti ve Bulgular)]</code>
            </div>
            <p><strong>Doğru Örnek:</strong> <em>Ameliyat insizyonuna bağlı (Etiyoloji) akut ağrı (Problem); hastanın ağrısını 8/10 olarak ifade etmesi ve yüz buruşturması ile kanıtlanmıştır (Belirti/Bulgu).</em></p>

            <h3>3. Adım: Hedef ve Beklenen Sonuçların Belirlenmesi (NOC)</h3>
            <p>
                Belirlenen tanıya yönelik hastadan beklenen iyileşme hedefleri yazılır. Hedefler mutlaka <strong>SMART</strong> kriterlerine uygun olmalıdır (Spesifik, Ölçülebilir, Ulaşılabilir, Gerçekçi ve Zaman Sınırlı).
            </p>
            <ul>
                <li>❌ <strong>Hatalı Hedef:</strong> "Hastanın ağrısı geçecek." (Ölçülebilir değil)</li>
                <li>✅ <strong>Doğru Hedef (NOC):</strong> "Hasta, analjezik uygulamasından sonraki 45 dakika içinde ağrı puanının 3 veya altına düştüğünü ifade edecek."</li>
            </ul>

            <h3>4. Adım: Hemşirelik Girişimlerinin Planlanması (NIC)</h3>
            <p>
                Hedeflere ulaşmak için hemşirenin yapacağı bağımsız, yarı bağımlı ve bağımlı girişimler listelenir. Her girişimin arkasında bilimsel bir <strong>gerekçe (rasyonel)</strong> bulunmalıdır.
            </p>
            <ul>
                <li><strong>Girişim:</strong> Hastaya semikoşul (yarım oturur) pozisyon verilmesi.</li>
                <li><strong>Gerekçe:</strong> Diyaframın aşağı inmesini sağlayarak akciğer ekspansiyonunu artırır ve dispneyi azaltır.</li>
            </ul>

            <h3>5. Adım: Değerlendirme Aşaması (Evaluation)</h3>
            <p>
                Planlanan girişimler uygulandıktan sonra hastanın hedefe ulaşıp ulaşmadığı değerlendirilir:
            </p>
            <ul>
                <li><strong>Hedefe Ulaşıldı:</strong> Ağrı puanı 2/10'a düştü, bakım planı sonlandırıldı.</li>
                <li><strong>Kısmen Ulaşıldı:</strong> Ağrı puanı 5/10, girişimler gözden geçirilecek.</li>
                <li><strong>Hedefe Ulaşılamadı:</strong> Hekime bilgi verildi, yeni tanı eklendi.</li>
            </ul>

            <div class="blog-cta-card">
                <div class="cta-content">
                    <h3>🚀 Bakım Planınızı 2 Dakikada Hazırlayın!</h3>
                    <p>NANDA-I tanıları, NIC girişimleri ve NOC hedefleri içeren otomatik bakım planı sihirbazımızı ücretsiz kullanabilirsiniz.</p>
                    <button class="btn btn-primary btn-lg" onclick="switchTab('builder')">
                        Bakım Planı Oluşturucuya Git →
                    </button>
                </div>
            </div>
        `
    },
    {
        id: 'nanda-hemsirelik-tanilari-nedir',
        slug: 'nanda-hemsirelik-tanilari-nedir',
        title: 'NANDA Hemşirelik Tanıları Nedir? En Çok Kullanılan Tanılar',
        category: 'Temel Bilgiler',
        readTime: '7 dk',
        date: '1 Ekim 2026',
        author: 'Hemşire Burak ÇETİN',
        authorTitle: 'Klinik Karar Destek Uzmanı',
        authorAvatar: '👨‍⚕️',
        summary: 'NANDA-I hemşirelik tanıları sınıflandırma sistemi, tıbbi teşhisten farkı ve klinik stajlarda en sık karşılaşılan NANDA tanıları listesi.',
        coverBadge: '📚 Sözlük Rehberi',
        content: `
            <div class="blog-article-intro">
                <p class="lead-text">
                    <strong>NANDA-I (North American Nursing Diagnosis Association International)</strong>, hemşirelerin klinik değerlendirme sonucunda koyduğu hemşirelik tanılarını küresel düzeyde standartlaştıran uluslararası bir terminolojidir.
                </p>
            </div>

            <h2>Tıbbi Teşhis ile Hemşirelik Tanısı Arasındaki Fark Nedir?</h2>
            <p>
                Pek çok hemşirelik öğrencisinin karıştırdığı en temel nokta tıbbi teşhis ile hemşirelik tanısı arasındaki farktır:
            </p>
            <table class="blog-table">
                <thead>
                    <tr>
                        <th>Özellik</th>
                        <th>Tıbbi Teşhis (Medikal Tanı)</th>
                        <th>Hemşirelik Tanısı (NANDA)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Odak Noktası</strong></td>
                        <td>Hastalık süreci ve patoloji.</td>
                        <td>Hastanın hastalığa veya yaşamsal sürece verdiği tepki.</td>
                    </tr>
                    <tr>
                        <td><strong>Değişkenlik</strong></td>
                        <td>Hastalık iyileşene kadar sabit kalır (Örn: Diyabet).</td>
                        <td>Hastanın durumuna göre günlük veya saatlik değişebilir.</td>
                    </tr>
                    <tr>
                        <td><strong>Örnek</strong></td>
                        <td>Miyokard İnfarktüsü (MI)</td>
                        <td>Akut Ağrı, Etkisiz Doku Perfüzyon Riski, Anksiyete</td>
                    </tr>
                </tbody>
            </table>

            <h2>Klinik Stajlarda En Sık Kullanılan NANDA Tanıları Listesi</h2>

            <div class="blog-diagnosis-grid">
                <div class="diag-card">
                    <span class="diag-tag">Solunum Alanı</span>
                    <h4>Solunum Yolu Temizliğinde Etkisizlik</h4>
                    <p><strong>İlişkili Faktörler:</strong> Mukus birikimi, ekspektorasyon güçlüğü, cerrahi ağrı.</p>
                </div>
                <div class="diag-card">
                    <span class="diag-tag">Konfor Alanı</span>
                    <h4>Akut Ağrı</h4>
                    <p><strong>İlişkili Faktörler:</strong> Biyolojik/fiziksel yaralanma etkenleri, cerrahi kesi, travma.</p>
                </div>
                <div class="diag-card">
                    <span class="diag-tag">Güvenlik Alanı</span>
                    <h4>Enfeksiyon Riski</h4>
                    <p><strong>İlişkili Faktörler:</strong> İnvaziv hatlar (IV kateter, dikey dren), kronik hastalık, immünsüpresyon.</p>
                </div>
                <div class="diag-card">
                    <span class="diag-tag">Güvenlik Alanı</span>
                    <h4>Düşme Riski</h4>
                    <p><strong>İlişkili Faktörler:</strong> 65 yaş üstü olma, kas zayıflığı, sedatif kullanımı, hipotansiyon.</p>
                </div>
                <div class="diag-card">
                    <span class="diag-tag">Fiziksel Bütünlük</span>
                    <h4>Doku Bütünlüğünde Bozulma</h4>
                    <p><strong>İlişkili Faktörler:</strong> Hareketsizlik, basınç, nem, beslenme yetersizliği (Basınç yaraları).</p>
                </div>
                <div class="diag-card">
                    <span class="diag-tag">Sıvı-Elektrolit</span>
                    <h4>Sıvı Hacim Eksikliği</h4>
                    <p><strong>İlişkili Faktörler:</strong> Aşırı sıvı kaybı (kusma, diyare, kanama), yetersiz sıvı alımı.</p>
                </div>
            </div>

            <h2>NANDA Tanısı Koyarken Yapılan En Yaygın Hatalar</h2>
            <ol>
                <li><strong>Tıbbi teşhisi etiyoloji olarak kullanmak:</strong> "Diyabete bağlı kan şekeri yüksekliği" yanlış bir tanı ifadesidir. Doğrusu: "Beslenme uyumsuzluğuna ve insülin direncine bağlı kararsız kan glikoz düzeyi riski" olmalıdır.</li>
                <li><strong>Girişimi tanı olarak yazmak:</strong> "IV sıvı tedavisi uygulanması" bir tanı değil, hemşirelik girişimidir.</li>
                <li><strong>Kanıt (belirti) eklememek:</strong> Mevcut tanılarda "ile kanıtlanmıştır" kısmını eksik bırakmak puan kaybına sebep olur.</li>
            </ol>

            <div class="blog-cta-card">
                <div class="cta-content">
                    <h3>📖 Tüm NANDA Tanılarını İnceleyin</h3>
                    <p>Sitemizdeki NANDA Sözlüğü sekmesinden 200'den fazla tanıyı arayabilir, etiyoloji ve belirtilerine hızlıca ulaşabilirsiniz.</p>
                    <button class="btn btn-secondary btn-lg" onclick="switchTab('dictionary')">
                        NANDA Sözlüğüne Git →
                    </button>
                </div>
            </div>
        `
    },
    {
        id: 'cerrahi-hastasinda-hemsirelik-bakim-plani-ornegi',
        slug: 'cerrahi-hastasinda-hemsirelik-bakim-plani-ornegi',
        title: 'Cerrahi Hastasında Hemşirelik Bakım Planı Örneği',
        category: 'Vaka Örnekleri',
        readTime: '8 dk',
        date: '1 Ekim 2026',
        author: 'Hemşire Burak ÇETİN',
        authorTitle: 'Klinik Karar Destek Uzmanı',
        authorAvatar: '👨‍⚕️',
        summary: 'Genel cerrahi kliniğinde yatan post-op hasta vakası üzerinden hazırlanmış eksiksiz NANDA, NIC ve NOC hemşirelik bakım planı örneği.',
        coverBadge: '🏥 Vaka Örneği',
        content: `
            <div class="blog-article-intro">
                <p class="lead-text">
                    Cerrahi hastalarında hemşirelik bakımı; ameliyat öncesi (pre-op) hazırlık, ameliyat sırası (intra-op) güvenlik ve ameliyat sonrası (post-op) komplikasyonların önlenmesini kapsar.
                </p>
            </div>

            <h2>Vaka Senaryosu: Abdominal Cerrahi Geçiren Hasta</h2>
            <div class="blog-case-box">
                <p><strong>Hasta Adı / Yaşı:</strong> M.K. / 48 Yaş (Erkek)</p>
                <p><strong>Klinik Teşhis:</strong> Akut Kolesistektomi (Safra Kesesi Ameliyatı) - Post-Op 1. Gün</p>
                <p><strong>Mevcut Bulgular:</strong> Sağ üst kadran insizyon bölgesinde ağrı (VAS: 7/10). Sağ alt kadranda 1 adet hemovac dren mevcut. Yaşam bulguları: TA: 135/85 mmHg, Nabız: 92/dk, Ateş: 37.8°C, SpO2: %96. Hasta yataktan kalkmak istemiyor, hareketle ağrısının arttığını belirtiyor.</p>
            </div>

            <h2>Cerrahi Bakım Planı Tablosu</h2>

            <div class="blog-care-plan-sample">
                <div class="plan-row">
                    <div class="plan-col col-diag">
                        <span class="badge-plan-tag">Hemşirelik Tanısı</span>
                        <h4>1. Akut Ağrı</h4>
                        <p><strong>Etiyoloji:</strong> Cerrahi insizyon ve doku travmasına bağlı</p>
                        <p><strong>Belirtiler:</strong> Ağrı puanının 7/10 olması, koruyucu pozisyon alma, hareket etmekten kaçınma.</p>
                    </div>
                    <div class="plan-col col-noc">
                        <span class="badge-plan-tag">Hedef (NOC)</span>
                        <p>Hasta analjezik uygulamasını takiben 1 saat içinde ağrı puanının 3/10 veya altına düştüğünü ifade edecek.</p>
                    </div>
                    <div class="plan-col col-nic">
                        <span class="badge-plan-tag">Girişimler (NIC)</span>
                        <ul>
                            <li>Ağrı şiddeti VAS skalası ile 4 saatte bir değerlendirilecek.</li>
                            <li>Hekim istemine uygun analjezik (IV) uygulanacak ve etkisi 30 dk sonra değerlendirilecek.</li>
                            <li>Öksürürken veya hareket ederken yara bölgesini yastıkla desteklemesi öğretilecek (splinting).</li>
                            <li>Yarı oturur pozisyon verilecek.</li>
                        </ul>
                    </div>
                    <div class="plan-col col-eval">
                        <span class="badge-plan-tag">Değerlendirme</span>
                        <p>Analjezik sonrası VAS puanı 2/10'a düştü. Hasta rahat nefes alıp verdiğini belirtti. (Hedefe Ulaşıldı)</p>
                    </div>
                </div>

                <div class="plan-row">
                    <div class="plan-col col-diag">
                        <span class="badge-plan-tag">Hemşirelik Tanısı</span>
                        <h4>2. Enfeksiyon Riski</h4>
                        <p><strong>Etiyoloji:</strong> Cerrahi insizyon hattı ve invaziv dren bulunmasına bağlı</p>
                    </div>
                    <div class="plan-col col-noc">
                        <span class="badge-plan-tag">Hedef (NOC)</span>
                        <p>Taburculuğa kadar hastanın insizyon bölgesinde ve dren çevresinde enfeksiyon bulgusu (kızarıklık, ısı artışı, purulan akıntı) gözlenmeyecek.</p>
                    </div>
                    <div class="plan-col col-nic">
                        <span class="badge-plan-tag">Girişimler (NIC)</span>
                        <ul>
                            <li>Pansuman takibi 8 saatte bir yapılacak, sızıntı durumunda aseptik koşullarda yenilenecek.</li>
                            <li>Dren torbası boşaltılırken steril eldiven ve aseptik teknik kullanılacak.</li>
                            <li>Vücut sıcaklığı 4 saatte bir takip edilecek.</li>
                            <li>Laboratuvar bulguları (WBC, CRP) izlenecek.</li>
                        </ul>
                    </div>
                    <div class="plan-col col-eval">
                        <span class="badge-plan-tag">Değerlendirme</span>
                        <p>İnsizyon hattı temiz ve kuru. Ateş: 36.7°C, WBC: 7.800/mm³. Enfeksiyon bulgusu yok. (Hedef Devam Ediyor)</p>
                    </div>
                </div>
            </div>

            <h2>Cerrahi Hemşireliğinde Altın Kurallar</h2>
            <ul>
                <li><strong>Ateş Takibi:</strong> Post-op ilk 24-48 saatteki hafif ateş genellikle atelektaziye (akciğer sönmesi) bağlıdır; hastaya triflo veya derin nefes-öksürme egzersizleri yaptırılmalıdır.</li>
                <li><strong>Erken Mobilizasyon:</strong> Kontrendikasyon yoksa hasta ilk 24 saat içinde ayağa kaldırılmalıdır (Derin ven trombozu ve ileus riskini önler).</li>
            </ul>

            <div class="blog-cta-card">
                <div class="cta-content">
                    <h3>📋 Cerrahi Hazır Bakım Planı Şablonları</h3>
                    <p>Farklı cerrahi ameliyat türlerine uygun hazır bakım planı şablonlarını incelemek için tıklayın.</p>
                    <button class="btn btn-primary btn-lg" onclick="switchTab('templates')">
                        Hazır Şablonlara Git →
                    </button>
                </div>
            </div>
        `
    },
    {
        id: 'diyabetik-hastada-nanda-bakim-plani-ornegi',
        slug: 'diyabetik-hastada-nanda-bakim-plani-ornegi',
        title: 'Diyabetik Hastada NANDA Bakım Planı Örneği',
        category: 'Vaka Örnekleri',
        readTime: '8 dk',
        date: '1 Ekim 2026',
        author: 'Hemşire Burak ÇETİN',
        authorTitle: 'Klinik Karar Destek Uzmanı',
        authorAvatar: '👨‍⚕️',
        summary: 'Tip 2 Diyabet tanılı bir hastanın hiperglisemi, diyabetik ayak riski ve öz bakım yönetimi için NANDA-I standartlarında hazırlanmış bakım planı vaka çalışması.',
        coverBadge: '🩺 Kronik Bakım',
        content: `
            <div class="blog-article-intro">
                <p class="lead-text">
                    Diyabet (Diabetes Mellitus), sürekli hemşirelik takibi, hasta eğitimi ve kan şekeri regülasyonu gerektiren kronik bir metabolizma hastalığıdır.
                </p>
            </div>

            <h2>Vaka Senaryosu: Tip 2 Diyabet Hastası</h2>
            <div class="blog-case-box">
                <p><strong>Hasta Adı / Yaşı:</strong> S.A. / 58 Yaş (Kadın)</p>
                <p><strong>Anamnez:</strong> 10 yıldır Tip 2 DM hastası. Dahiliye servisine hiperglisemi ve sağ ayak tabanında uyuşma şikayetiyle yatırıldı.</p>
                <p><strong>Laboratuvar Bulguları:</strong> Açlık Kan Şekeri (AKŞ): 265 mg/dL, HbA1c: %9.8, Tansiyon: 145/90 mmHg. Diyetine uymadığını ve ilaçlarını düzensiz kullandığını belirtmektedir.</p>
            </div>

            <h2>Diyabetik Hasta Bakım Planı Tablosu</h2>

            <div class="blog-care-plan-sample">
                <div class="plan-row">
                    <div class="plan-col col-diag">
                        <span class="badge-plan-tag">Hemşirelik Tanısı</span>
                        <h4>1. Kararsız Kan Glikoz Düzeyi Riski</h4>
                        <p><strong>Etiyoloji:</strong> İnsülin direnci, diyet uyumsuzluğu ve düzensiz ilaç kullanımına bağlı</p>
                        <p><strong>Belirtiler:</strong> AKŞ: 265 mg/dL, HbA1c: %9.8, poliüri ve polidipsi şikayeti.</p>
                    </div>
                    <div class="plan-col col-noc">
                        <span class="badge-plan-tag">Hedef (NOC)</span>
                        <p>Hastanın 24 saat içinde kapiller kan şekeri (AKŞ) 80-130 mg/dL, tokluk kan şekeri &lt;180 mg/dL aralığında seyredecek.</p>
                    </div>
                    <div class="plan-col col-nic">
                        <span class="badge-plan-tag">Girişimler (NIC)</span>
                        <ul>
                            <li>Kan şekeri takibi (KDA) ana ve ara öğün öncesi/sonrası 4 kez yapılacak ve kaydedilecek.</li>
                            <li>Hekim istemine göre kristalize insülin skalanması uygulanacak.</li>
                            <li>Diyetisyen işbirliği ile diyabetik diyet uyumu desteklenecek.</li>
                            <li>Hipoglisemi ve hiperglisemi belirtileri hakkında hasta bilgilendirilecek.</li>
                        </ul>
                    </div>
                    <div class="plan-col col-eval">
                        <span class="badge-plan-tag">Değerlendirme</span>
                        <p>24 saatlik KDA takibinde ortalama kan şekeri 140 mg/dL'ye geriledi. (Hedefe Ulaşıldı)</p>
                    </div>
                </div>

                <div class="plan-row">
                    <div class="plan-col col-diag">
                        <span class="badge-plan-tag">Hemşirelik Tanısı</span>
                        <h4>2. Doku Bütünlüğünde Bozulma Riski (Diyabetik Ayak)</h4>
                        <p><strong>Etiyoloji:</strong> Periferik nöropati, mikrovasküler tutulum ve doku perfüzyonunda azalmaya bağlı</p>
                    </div>
                    <div class="plan-col col-noc">
                        <span class="badge-plan-tag">Hedef (NOC)</span>
                        <p>Hastanın ayaklarında ve parmak aralarında lezyon, nasır veya ülser gelişmeyecek.</p>
                    </div>
                    <div class="plan-col col-nic">
                        <span class="badge-plan-tag">Girişimler (NIC)</span>
                        <ul>
                            <li>Ayaklar her gün ılık suyla yıkanıp parmak araları iyice kurulanacak.</li>
                            <li>Tırnak kesimi düz ve köşeler yuvarlatılmadan yapılacak.</li>
                            <li>Çıplak ayakla yürümemesi, pamuklu çorap ve uygun ortopedik ayakkabı giymesi eğitilecek.</li>
                        </ul>
                    </div>
                    <div class="plan-col col-eval">
                        <span class="badge-plan-tag">Değerlendirme</span>
                        <p>Ayak muayenesinde yeni lezyon saptanmadı, hasta ayak bakımı kurallarını gösterdi. (Hedefe Ulaşıldı)</p>
                    </div>
                </div>
            </div>

            <div class="blog-cta-card">
                <div class="cta-content">
                    <h3>📊 VKİ ve Klinik Hesaplayıcılar</h3>
                    <p>Diyabetik hastalarınızın Vücut Kitle İndeksini (VKİ) ve klinik sıvı dengesini pratik araçlarımızla hemen hesaplayın.</p>
                    <button class="btn btn-primary btn-lg" onclick="switchTab('calculators')">
                        Klinik Hesaplayıcılara Git →
                    </button>
                </div>
            </div>
        `
    },
    {
        id: 'stajda-bakim-plani-hazirlama-ipuclari',
        slug: 'stajda-bakim-plani-hazirlama-ipuclari',
        title: 'Hemşirelik Öğrencileri İçin Stajda Bakım Planı Hazırlama İpuçları',
        category: 'Staj & Eğitim',
        readTime: '6 dk',
        date: '1 Ekim 2026',
        author: 'Hemşire Burak ÇETİN',
        authorTitle: 'Klinik Karar Destek Uzmanı',
        authorAvatar: '👨‍⚕️',
        summary: 'Klinik stajlarda öğretim elemanlarından tam puan alacak hemşirelik bakım planı hazırlama taktikleri, sık yapılan hatalar ve zaman yönetimi rehberi.',
        coverBadge: '🎓 Öğrenci Dostu',
        content: `
            <div class="blog-article-intro">
                <p class="lead-text">
                    Hemşirelik fakültesi ve sağlık bilimleri öğrencilerinin staj dönemlerindeki en büyük stres kaynaklarından biri her hafta teslim edilen <strong>bakım planı ödevleridir</strong>.
                </p>
                <p>
                    Doğru stratejiyi ve mantığı kavradığınızda bakım planı hazırlamak saatler süren bir iş yükü olmaktan çıkar, tam puan aldığınız keyifli bir deneyime dönüşür.
                </p>
            </div>

            <h2>Hocalardan Tam Puan Kazandıracak 5 Altın Kural</h2>

            <h3>1. Etiyolojiye (Etod) Asla Tıbbi Teşhisi Yazmayın!</h3>
            <p>
                Stajlarda en çok puan kırılan hata tıbbi teşhisi etiyolojiye eklemektir. Hoca bakım planınızı incelerken "Diyabete bağlı ağrı" yazısını gördüğü an notunuzu kırar.
            </p>
            <ul>
                <li>❌ <strong>Yanlış:</strong> Hareketsizliğe ve hipertansiyona bağlı düşme riski.</li>
                <li>✅ <strong>Doğru:</strong> Kas zayıflığına, postüral hipotansiyona ve sedatif ilaç kullanımına bağlı düşme riski.</li>
            </ul>

            <h3>2. NOC Hedefleriniz Zamanlı ve Ölçülebilir Olsun</h3>
            <p>
                "Hasta iyileşecek" veya "Ağrısı geçecek" gibi ucu açık ifadeler hedeflerde kabul edilmez. Şunları ekleyin:
            </p>
            <ul>
                <li>Ne zaman? (Örn: 2 saat içinde / 24 saat içinde / taburculuk anında)</li>
                <li>Hangi ölçekle? (Örn: VAS puanı &lt;3 olacak, Tansiyon &lt;130/80 mmHg kalacak)</li>
            </ul>

            <h3>3. Girişimlere Mutlaka Hemşirelik Gerekçesi (Rasyonel) Ekleme</h3>
            <p>
                Hocalar sadece ne yapacağınızı değil, <strong>neden yaptığınızı</strong> bilip bilmediğinizi test eder. Girişimin yanına "Çünkü..." cümlesini veya bilimsel mekanizmasını ekleyin.
            </p>

            <h3>4. Hastanın Başucunda Anamnezi Eksiksiz Alın</h3>
            <p>
                Klinikte hastayla 10 dakika sohbet edip anamnez almak, saatlerce masa başında ezbere veri uydurmaktan çok daha kolaydır. Yaşam bulgularını ve laboratuvar sonuçlarını güncel kaydedin.
            </p>

            <h3>5. Değerlendirme Aşamasına Gerçekçi İfadeler Yazın</h3>
            <p>
                "Hedefe ulaşıldı" diyorsanız kanıtını yazın. Örn: <em>"Yapılan 30 dakikalık yürüyüş ve analjezik sonrası hastanın VAS ağrı puanı 2/10'a düştü. Hedefe ulaşıldı."</em>
            </p>

            <h2>Bakım Planı Ödevi İçin Zaman Yönetimi Taktikleri</h2>
            <div class="blog-tips-grid">
                <div class="tip-card">
                    <div class="tip-num">1</div>
                    <h4>Hastayı Erken Seçin</h4>
                    <p>Stajın ilk günü 2-3 tanısı ve bulgusu net olan hastaları hedefleyin.</p>
                </div>
                <div class="tip-card">
                    <div class="tip-num">2</div>
                    <h4>NANDA Sözlüğü Kullanın</h4>
                    <p>Sitemizdeki dijital arama çubuğu ile tanılara ve girişimlere saniyeler içinde erişin.</p>
                </div>
                <div class="tip-card">
                    <div class="tip-num">3</div>
                    <h4>Otomatik Oluşturucuyu Deneyin</h4>
                    <p>Sitemizdeki Sihirbazı kullanarak plan taslağını dakikalar içinde oluşturup çıktı alın.</p>
                </div>
            </div>

            <div class="blog-cta-card">
                <div class="cta-content">
                    <h3>🎓 Staj Yükünüzü Hafifletin!</h3>
                    <p>Hemşirelik Bakım Rehberim akıllı sistemi ile akademik formatta renkli PDF çıktılarınızı anında hazırlayın.</p>
                    <button class="btn btn-primary btn-lg" onclick="switchTab('builder')">
                        Hemen Bakım Planı Başlat →
                    </button>
                </div>
            </div>
        `
    }
];

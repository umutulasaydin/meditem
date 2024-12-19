


function changeLanguage(lang) {

    pageName = window.location.pathname.split("/").pop();
    if (pageHandlers[pageName]) {
        console.log(pageHandlers[pageName])
        pageHandlers[pageName](handleItem[pageName][lang]);
    }
    const currentLangElements = document.querySelectorAll(".current-lang");
    currentLangElements.forEach((element) => {
        element.textContent = lang.charAt(0).toUpperCase() + lang.slice(1).toUpperCase();;
    });
    const elements = document.querySelectorAll("[data-key]");
    elements.forEach((element) => {
        const key = element.getAttribute("data-key");
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("language") || "tr";
    changeLanguage(savedLanguage);

});

function generateBlogSlides(blogs) {

    // Select the container where slides will be added

    const container = document.getElementById("swiper");

    if (!container) {
        console.error(`Container with selector swiper not found.`);
        return;
    }

    container.innerHTML = "";

    // Iterate through the blogs array and generate slides
    Object.keys(blogs).forEach(blog => {
        // Create a new slide element
        const slide = document.createElement("div");
        slide.className = "swiper-slide";

        const contentExcerpt = typeof blogs[blog].content === "string"
            ? blogs[blog].content.substring(0, 150) + "..."
            : "Content not available";

        // Set the inner HTML of the slide
        slide.innerHTML = `
            <article class="post type-post panel overflow-hidden vstack gap-3">
                <figure class="featured-image m-0 rounded ratio ratio-4x3 rounded-1-5 uc-transition-toggle overflow-hidden">
                    <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                        src="${blogs[blog].image}" alt="${blogs[blog].title}">
                    <a href="blog-details.html?id=${blog}" class="position-cover" data-caption="${blogs[blog].title}"></a>
                </figure>
                <div class="panel vstack gap-1">
                    <a class="text-none" href="blog-details.html?id=${blog}">
                        <h3 class="post-title h5 xl:h4 m-0 ltr:pe-4 rtl:ps-4">
                            <span>${blogs[blog].title}</span>
                        </h3>
                    </a>
                    <p class="post-excrept fs-7 xl:fs-6 opacity-70">${contentExcerpt}...</p>
                    <a href="blog-details.html?id=${blog}" class="uc-link dark:text-secondary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2">
                        <span data-key="buton_5"></span>
                        <i class="position-relative icon unicon-arrow-up-right fw-bold rtl:-rotate-90 translate-y-px"></i>
                    </a>
                </div>
            </article>
        `;

        // Append the slide to the container
        container.appendChild(slide);
    });
}

function generateBlogPages(blogs) {

    // Select the container where slides will be added

    const container = document.getElementById("blog-wrapper");

    if (!container) {
        console.error(`Container with selector wrapper not found.`);
        return;
    }

    container.innerHTML = "";
    first = true;

    // Iterate through the blogs array and generate slides
    Object.keys(blogs).forEach(blog => {
        // Create a new slide element

        const contentExcerpt = typeof blogs[blog].content === "string"
            ? blogs[blog].content.substring(0, 150) + "..."
            : "Content not available";


        const blog_cont = document.createElement("div");
        if (first) {
            blog_cont.className = "col-12"

            blog_cont.innerHTML = `
            <article class="post type-post panel rounded-3 p-3 bg-secondary dark:bg-gray-800">
                <div class="panel row child-cols-12 md:child-cols-6 items-center g-3">
                    <div>
                        <figure class="featured-image m-0 rounded ratio ratio-4x3 rounded lg:rounded-2 uc-transition-toggle overflow-hidden">
                            <img class="media-cover image uc-transition-scale-up uc-transition-opaque" src="${blogs[blog].image}" alt="${blogs[blog].title}">
                            <a href="blog-details.html?id=${blog}" class="position-cover" data-caption="${blogs[blog].title}"></a>
                        </figure>
                    </div>
                    <div>
                        <div class="vstack items-center gap-2 lg:gap-3">
                            <a class="post-category text-primary fw-normal text-none fw-bold fs-7 bg-primary text-white py-narrow px-1 rounded">${blogs[blog].tag}</a>
                            <h3 class="h4 xl:h2 m-0 text-center m-0 lg:w-500px lg:m-auto">
                                <a class="text-none" href="blog-details.html?id=${blog}">${blogs[blog].title}</a>
                            </h3>
                            <ul class="post-meta nav-x ft-tertiary justify-center fs-7 gap-1">
                                <li>
                                    <div class="hstack gap-narrow ft-tertiary">
                                        <div class="text-none fw-bold text-dark dark:text-white">${blogs[blog].writer}</div>
                                    </div>
                                </li>
                                <li class="opacity-50">•</li>
                                <li>
                                    <div class="post-date hstack gap-narrow">
                                        <span>${blogs[blog].date}</span>
                                    </div>
                                </li>
                            </ul>
                            <p class="fs-6 lg:fs-5 lg:w-500px lg:mx-auto text-center md:d-none lg:d-block">${contentExcerpt}</p>
                            <a class="btn btn-text text-primary border-bottom d-inline-flex fs-7 lg:fs-6 sm:mt-2" href="blog-details.html?id=${blog}" data-key="blog_continue"></a>
                        </div>
                    </div>
                </div>
            </article>
            `
            first = false;
        }

        else {
            blog_cont.innerHTML = `
                <article class="post type-post panel vstack gap-3 rounded-3 p-2 pb-3 bg-secondary dark:bg-gray-800">
                    <a class="position-absolute top-0 ltr:start-0 rtl:end-0 m-3 fs-7 fw-bold text-none z-1 bg-primary text-white py-narrow px-1"  style="border-radius: 8px">${blogs[blog].tag}</a>
                    <figure class="featured-image m-0 rounded ratio ratio-3x2 rounded-2 uc-transition-toggle overflow-hidden">
                        <img class="media-cover image uc-transition-scale-up uc-transition-opaque" src="${blogs[blog].image}" alt="${blogs[blog].title}">
                        <a href="blog-details.html?id=${blog}" class="position-cover" data-caption="${blogs[blog].title}"></a>
                    </figure>
                    <header class="panel vstack items-center gap-1 lg:gap-2 px-2">
                        <h3 class="h5 xl:h4 m-0 text-center m-0">
                            <a class="text-none" href="blog-details.html?id=${blog}">${blogs[blog].title}</a>
                        </h3>
                        <ul class="post-meta nav-x ft-tertiary justify-center gap-1 fs-7 text-gray-400 dark:text-gray-300 d-none lg:d-flex">
                            <li>
                                <div class="hstack gap-narrow ft-tertiary">
                                    <a class="text-none fw-bold text-dark dark:text-white">${blogs[blog].writer}</a>
                                </div>
                            </li>
                            <li class="opacity-50">•</li>
                            <li>
                                <div class="post-date hstack gap-narrow">
                                    <span>${blogs[blog].date}</span>
                                </div>
                            </li>
                        </ul>
                    </header>
                    <a class="btn btn-text text-primary border-bottom d-inline-flex fs-7 lg:fs-6 sm:mt-2" href="blog-details.html?id=${blog}" data-key="blog_continue"></a>
                </article>
            `
        }




        // Append the slide to the container
        container.appendChild(blog_cont);
    });
}

function generateBlogDetail(blogs) {
    id = new URLSearchParams(window.location.search).get("id");
    if (blogs[id] === undefined) {
        window.location.href = "404.html";
    }
    title = document.getElementById('title')
    title.textContent = blogs[id].title

    image = document.getElementById('image')
    image.innerHTML = `<img class="media-cover image uc-transition-scale-up uc-transition-opaque" src="${blogs[id].image}" alt="${blogs[id].title}">`

    content = document.getElementById('content')
    content.textContent = blogs[id].content
}

function generateProducts(products) {
    id = new URLSearchParams(window.location.search).get("id");
    exist = false

    const container = document.getElementById("products");
    

    if (!container) {
        console.error(`Container with selector products not found.`);
        return;
    }

    header = document.getElementById("header")
    
    const title = Object.values(markas).find(marka => marka.id === parseInt(id,10))?.name
    if (title) {
        header.textContent = title;
    }
    else {
        header.setAttribute("data-key", "tum");
    }
    

    container.innerHTML = "";
    
    Object.keys(products).forEach(product => {

        if (products[product].marka_id === parseInt(id,10) ||  parseInt(id,10) === 0) {
            product_cont = document.createElement("div");
            product_cont.innerHTML = `
                <article class="product type-product panel">
                    <div class="vstack gap-2">
                        <div class="panel">
                            <figure
                                class="featured-image m-0 rounded ratio ratio-3x4 overflow-hidden uc-transition-toggle overflow-hidden">
                                <img class="media-cover image uc-transition-scale-up uc-transition-opaque"
                                    src="${products[product].image}" alt="${products[product].title}">
                                <a href="product-detail.html?id=${products[product].id}" class="position-cover"
                                    data-caption="${products[product].title}"></a>
                            </figure>
                        </div>
                        <div class="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                            <h5 class="h6 md:h5 m-0"><a class="text-none" href="product-detail.html?id=${products[product].id}">${products[product].title}</a></h5>
                            <a class="btn btn-text text-none text-primary border-bottom fs-7 lg:fs-6 mt-1 pb-narrow"
                                href="product-detail.html?id=${products[product].id}" #uc-cart-panel" data-uc-toggle="" data-key="urun_ayrinti"></a>
                        </div>
                    </div>
                </article>
            `
            exist = true
            container.appendChild(product_cont);
        }
    }
    )
    if (!exist) {
        window.location.href = "404.html";
    }
}

const translations = {
    tr: {
        footer_1: "Meditem © 2024, Tüm hakları saklıdır.",
        footer_link_1: "Hızlı Linkler",
        footer_link_2: "Firmalar",
        footer_link_3: "Neredeyiz?",
        anaSayfa: "Ana Sayfa",
        hakkimizda: "Hakkımızda",
        urunler: "Ürünler",
        blog: "Blog",
        iletisim: "İletişim",
        tema: "Tema Seç:",
        language: "Dil Seç:",
        baslik_1: "Sağlıkta İleri Teknolojilerle Güvenli Çözümler",
        buton_1: "Firmamızı Keşfedin",
        baslik_2: "Sağlık Sektörü İçin İleri Teknolojik Çözümler",
        icerik_1: "Tıbbi teknolojileri daha erişilebilir hale getirmeye odaklanıyoruz ve nihai amacımız, sağlık hizmetlerinin verimliliğini arttırmak ve hasta sonuçlarını iyileştirmektir.",
        option_1: "Satış",
        option_2: "Teknik Servis",
        option_3: "Proje Yönetimi",
        option_1_baslik: "Medikal çözümlere hızlı erişim",
        option_1_icerik: "Genel Cerrahi, Kadın Doğum, Üroloji ve Plastik Cerrahi alanlarında yenilikçi çözümler sunuyoruz. Geniş ürün portföyümüz ile her ihtiyaca yönelik medikal cihazlar sağlarken, kaliteli hizmet anlayışımızla müşteri memnuniyetini ön planda tutuyoruz. Hızlı tedarik süreçlerimiz ve uzman ekibimizle projelerinizi desteklemeye hazırız.",
        option_2_baslik: "Cihazlarınız her zaman güvende",
        option_2_icerik: "Medikal cihazlarınız için kapsamlı ve güvenilir teknik servis hizmetleri sunuyoruz. Kart tamiri gibi hassas işlemlerden, performans artırıcı özelleştirilmiş çözümlere kadar geniş bir yelpazede destek sağlıyoruz. Deneyimli ekibimiz, cihazlarınızın maksimum performansla ve uzun ömürlü çalışmasını garanti eder.",
        option_3_baslik: "Projelerinize profesyonel dokunuş",
        option_3_icerik: "Medikal projelerinizin her aşamasında yanınızdayız. İhtiyaç analizi, stratejik planlama ve uygulama süreçlerinde alanında uzman ekibimizle maksimum verimlilik sağlıyoruz. Sektör bilgimiz ve teknik uzmanlığımız sayesinde projelerinizi zamanında, bütçe dostu ve yüksek kaliteyle hayata geçiriyoruz.",
        baslik_3: "İleri Teknoloji Ürünlerimiz",
        icerik_3: "Sağlık sektöründeki en son teknolojiyi kullanarak, kaliteli ve güvenilir ürünlerle sağlık hizmetlerinde mükemmelliği hedefliyoruz.",
        buton_2: "Firmalarımızın Tüm Ürünlerini Keşfedin",
        buton_3: "Ürünleri Gör",
        marka_1_icerik: "Minimal invaziv cerrahi için yenilikçi ve güvenilir çözümler sunar.",
        marka_2_icerik: "Tek kullanımlık Bronkoskopi çözümleri ile hasta güvenliği ve verimliliği artırır.",
        marka_3_icerik: "Plastik ve Estetik cerrahi alanında yüksek teknoloji cihazlarıyla öncü bir marka.",
        marka_4_icerik: "Mesh çözümleriyle cerrahi başarıyı bir adım öteye taşıyor.",
        marka_5_icerik: "Elektrokoter cihazlarında güvenilirlik ve yüksek performansın adresi.",
        marka_6_icerik: "Hasta izleme ve yaşam destek ekipmanlarında global standartlarda çözümler sunar.",
        baslik_4: "Blog Yazılarımız",
        buton_5: "Blogu Oku",
        icerik_4: "Röportajlar, sektördeki en iyi uygulamalar ve haberler.",
        buton_4: "Tüm Yazıları Gör",
        hakkinda: "MEDITEM Health Solutions: Sağlıkta Yenilikçi Çözümler",
        hakkinda_icerik_1: "2024 yılında kurulan MEDITEM Health Solutions, sağlık sektöründe uzun yıllara dayanan deneyimimizle, yenilikçi çözümleri bir araya getiren bir firma olarak öne çıkmaktadır. Genel Cerrahi, Jinekoloji, Pediatri, Üroloji ve Plastik Cerrahi gibi birçok tıbbi uzmanlık alanında, hasta bakımını iyileştirmeyi ve sağlık profesyonellerinin ihtiyaçlarını karşılamayı amaçlayan ürünler sunuyoruz.",
        hakkinda_icerik_2: "Sağlık teknolojisi sektöründeki geniş bilgi birikimimiz ve tecrübemizle, iş ortaklarımıza ve müşterilerimize en yüksek standartlarda hizmet sağlamaktayız. İleri teknolojiye olan bağlılığımız, verimli ve güvenilir çözümler üreterek hastaların ve sağlık çalışanlarının hayatlarını kolaylaştırmamıza olanak tanıyor.",
        hakkinda_icerik_3: "MEDITEM Health Solutions olarak, sağlık teknolojileri alanında fark yaratan, sektörde lider bir firma olmayı hedefliyoruz. Sağlık sektörüne olan katkılarımızla, sadece bugünü değil, geleceği de şekillendirmeye kararlıyız.",
        hakkinda_header_1: "Misyonumuz",
        hakkinda_icerik_4: "MEDITEM Health Solutions, sağlık sektöründe kaliteli, yenilikçi ve güvenilir çözümler sunarak, sağlık hizmetlerinin verimliliğini ve hasta bakımının kalitesini sürekli olarak iyileştirmeyi hedefler. Teknolojiye dayalı çözümlerimiz, sağlık profesyonellerinin iş süreçlerini optimize ederken, aynı zamanda hasta güvenliğini ve tedavi başarısını artırmayı amaçlar. Sektördeki derin tecrübemizle, sağlık alanındaki zorluklara etkili ve sürdürülebilir çözümler sunmayı taahhüt ediyoruz.",
        hakkinda_header_2: "Vizyonumuz",
        hakkinda_icerik_5: "MEDITEM Health Solutions, sağlık teknolojileri alanında lider bir inovasyon gücü olmayı ve sektördeki tüm paydaşlar için değer yaratmayı amaçlamaktadır. Geliştirdiğimiz çözümlerle, sağlık profesyonellerine güvenli, etkili ve verimli araçlar sunarak, hastaların yaşam kalitesini artırmayı hedefliyoruz. Sağlık hizmetlerinin dijital dönüşümünü yönlendiren bir öncü olarak, sürekli gelişen bir sektör için güçlü, sürdürülebilir ve etkili çözümler sunmayı vizyon edinmiştir.",
        hakkinda_header_3: "Değerlerimiz",
        blog_header: "Blog",
        blog_continue: "Okumaya devam edin",
        header_404: "Sayfa Bulunamadı",
        content_404: "Aradığınız sayfa maalesef mevcut değil. Lütfen tekrar deneyin veya ana sayfaya dönün.",
        redirect_404: "Ana Sayfaya Dön",
        urun_detay: "Ürünleri Gör",
        urun_ayrinti: "Ürün Detayını Göster",
        tum: "Tüm"
    },
    en: {
        footer_1: "Meditem © 2024, All rights reserved.",
        anaSayfa: "Ana Sayfa2",
        hakkimizda: "Hakkımızda",
        urunler: "Ürünler",
        blog: "Blog",
        iletisim: "İletişim",
        tema: "Tema Seç:",
        language: "Dil Seç:",
        baslik_1: "Sağlıkta İleri Teknolojilerle Güvenli Çözümler",
        buton_1: "Firmamızı Keşfedin",
        baslik_2: "Sağlık Sektörü İçin İleri Teknolojik Çözümler",
        icerik_1: "Tıbbi teknolojileri daha erişilebilir hale getirmeye odaklanıyoruz ve nihai amacımız, sağlık hizmetlerinin verimliliğini arttırmak ve hasta sonuçlarını iyileştirmektir.",
        icerik_4: "Interviews, industry best practices and news.",
    },
    de: {
        anaSayfa: "Ana Sayfa3",
        hakkimizda: "Hakkımızda",
        urunler: "Ürünler",
        blog: "Blog",
        iletisim: "İletişim",
        tema: "Tema Seç:",
        language: "Dil Seç:",
        baslik_1: "Sağlıkta İleri Teknolojilerle Güvenli Çözümler",
        buton_1: "Firmamızı Keşfedin",
        baslik_2: "Sağlık Sektörü İçin İleri Teknolojik Çözümler",
        icerik_1: "Tıbbi teknolojileri daha erişilebilir hale getirmeye odaklanıyoruz ve nihai amacımız, sağlık hizmetlerinin verimliliğini arttırmak ve hasta sonuçlarını iyileştirmektir.",
    },
    fr: {
        anaSayfa: "Ana Sayfa4",
        hakkimizda: "Hakkımızda",
        urunler: "Ürünler",
        blog: "Blog",
        iletisim: "İletişim",
        tema: "Tema Seç:",
        language: "Dil Seç:",
        baslik_1: "Sağlıkta İleri Teknolojilerle Güvenli Çözümler",
        buton_1: "Firmamızı Keşfedin",
        baslik_2: "Sağlık Sektörü İçin İleri Teknolojik Çözümler",
        icerik_1: "Tıbbi teknolojileri daha erişilebilir hale getirmeye odaklanıyoruz ve nihai amacımız, sağlık hizmetlerinin verimliliğini arttırmak ve hasta sonuçlarını iyileştirmektir.",
    },
    ch: {
        anaSayfa: "Ana Sayfa5",
        hakkimizda: "Hakkımızda",
        urunler: "Ürünler",
        blog: "Blog",
        iletisim: "İletişim",
        tema: "Tema Seç:",
        language: "Dil Seç:",
        baslik_1: "Sağlıkta İleri Teknolojilerle Güvenli Çözümler",
        buton_1: "Firmamızı Keşfedin",
        baslik_2: "Sağlık Sektörü İçin İleri Teknolojik Çözümler",
        icerik_1: "Tıbbi teknolojileri daha erişilebilir hale getirmeye odaklanıyoruz ve nihai amacımız, sağlık hizmetlerinin verimliliğini arttırmak ve hasta sonuçlarını iyileştirmektir.",
    },
    ar: {
        anaSayfa: "Ana Sayfa6",
        hakkimizda: "Hakkımızda",
        urunler: "Ürünler",
        blog: "Blog",
        iletisim: "İletişim",
        tema: "Tema Seç:",
        language: "Dil Seç:",
        baslik_1: "Sağlıkta İleri Teknolojilerle Güvenli Çözümler",
        buton_1: "Firmamızı Keşfedin",
        baslik_2: "Sağlık Sektörü İçin İleri Teknolojik Çözümler",
        icerik_1: "Tıbbi teknolojileri daha erişilebilir hale getirmeye odaklanıyoruz ve nihai amacımız, sağlık hizmetlerinin verimliliğini arttırmak ve hasta sonuçlarını iyileştirmektir.",

    }
}

const blogs = {
    tr: {
        blog_1: {
            title: "Meditem Health Solutions ve Çevreye Duyarlı Gelecek: Elektrikli Araç Kullanımı",
            content: `Günümüz dünyasında çevresel sorunlar, yalnızca bireylerin değil, kurumların da öncelikli sorumluluk alanlarından biri haline gelmiştir. Meditem Health Solutions olarak, yalnızca sağlık sektöründe öncü olmayı değil, aynı zamanda çevresel sorumluluklarımızı da yerine getirmeyi görev biliyoruz. Bu doğrultuda şirket araç filomuzda elektrikli araçlar (EV'ler)kullanarak, karbon ayak izimizi azaltma yolunda önemli bir adım atıyoruz.
Elektrikli araçların çevre üzerindeki etkisi, çeşitli bilimsel araştırmalarla açıkça ortaya konmuştur. Nature Communications dergisinde yayımlanan bir çalışmaya göre, elektrikli araç kullanımının yaygınlaşması, küresel sıcaklık artışını 2040 yılına kadar 0,5°C azaltabilir. Bu, gezegenimizin geleceği açısından hayati bir fark yaratabilir. Meditem olarak, bu tür çözümleri benimsemekle sadece sektörel değil, çevresel liderlikte de örnek olmayı amaçlıyoruz.
Elektrikli Araçların Çevresel Önemi
Dünya Sağlık Örgütü (WHO) verilerine göre, hava kirliliği her yıl milyonlarca insanın hayatını olumsuz etkiliyor ve fosil yakıtlı araçlar bu kirliliğin ana kaynaklarından birini oluşturuyor. Elektrikli araçlar ise sıfır emisyon ile çalışarak, çevre kirliliği sorununa yenilikçi bir çözüm sunuyor. Ayrıca, ABD Çevre Koruma Ajansı’nın (EPA) raporlarına göre, bir elektrikli araç yılda ortalama 4.6 metrik ton daha az karbon salınımına neden oluyor. Meditem olarak bu çevresel faydaları destekliyor ve şirket araç filomuzun tamamını elektrikli araçlardan oluşturmayı hedefliyoruz.
Türkiye ve Elektrikli Araç Kullanımı
Türkiye'de büyükşehirlerde hava kalitesinin artırılmasına yönelik yapılan bir araştırma, elektrikli araç kullanımının hava kirliliğini %30 oranında azaltabileceğini gösteriyor (Boğaziçi Üniversitesi, 2023). Bu tür bilimsel bulgular, sürdürülebilir bir gelecek için attığımız adımların ne denli önemli olduğunu bir kez daha kanıtlıyor. Şirket olarak, sadece bireysel tercihlerimizle değil, aynı zamanda sektörde çevresel farkındalığı artırmaya yönelik çalışmalarımızla da fark yaratmayı hedefliyoruz.
Meditem’in Çevreye Katkısı
Elektrikli araç kullanımımızla:
	•	Karbon salınımını azaltıyoruz: Sıfır emisyonla çalışan araçlarımız, çevreye olan zararı minimuma indiriyor.
	•	Enerji tasarrufuna katkıda bulunuyoruz: Yenilenebilir enerji kaynaklarıyla uyumlu şarj istasyonları kurarak sürdürülebilirliği destekliyoruz.
	•	Temiz ve sessiz bir çevre sağlıyoruz: Elektrikli araçlarımız, sessiz çalışarak gürültü kirliliğini azaltıyor.
Sürdürülebilir Geleceğe Bir Adım Daha
Meditem Health Solutions olarak, geleceğin sağlık çözümleri kadar çevre dostu teknolojilerin de savunucusuyuz. Elektrikli araç kullanımımız, bu anlayışımızın bir yansımasıdır. Nature Communications gibi bilimsel yayınların da ortaya koyduğu üzere, sürdürülebilir ulaşım, gezegenimizin geleceği için hayati bir öneme sahiptir. Bizler, çevreye duyarlı bu yaklaşımı benimseyerek sadece bugünü değil, geleceği de iyileştirmeyi hedefliyoruz.
Daha sağlıklı bir dünya için teknoloji ve çevre dostu çözümleri bir araya getiren Meditem Health Solutions, sorumluluklarının bilincinde bir şekilde ilerlemeye devam ediyor.`,
            image: "./assets/images/blog/img-01.jpg",
            date: "Ara 18, 2024",
            tag: "Elektrikli Araç",
            writer: "Mert Nazmi Temizel"
        },
        blog_2: {
            title: "Geleceğin Sağlık Sektörüne Yön Verecek 5 Teknoloji",
            content: `Sağlık sektörü, teknolojinin hızla ilerlemesiyle köklü bir dönüşüm geçiriyor. Modern tıp, yalnızca hastalıkları tedavi etmekten ziyade, onları önlemek ve sağlık hizmetlerini daha erişilebilir hale getirmek için gelişmiş araçlar sunuyor. Teknoloji, sağlık sistemlerinin daha etkin çalışmasını sağlarken, aynı zamanda hasta deneyimlerini iyileştirmek ve sağlık profesyonellerine destek olmak için yenilikçi çözümler sunuyor. Bu yazıda, sağlık sektöründe devrim yaratma potansiyeline sahip beş teknolojiyi inceleyeceğiz.
1. Yapay Zeka ve Makine Öğrenimi
Yapay zeka (AI) ve makine öğrenimi, sağlık hizmetlerini dönüştüren en önemli teknolojiler arasında yer alıyor. AI, büyük miktardaki veriyi analiz ederek hızlı ve doğru teşhisler yapılmasını sağlıyor. Örneğin, radyoloji görüntülerinde küçük tümörlerin tespitinde insan gözünden daha hassas olabiliyor. Bunun yanı sıra, makine öğrenimi algoritmaları, hastaların sağlık verilerini analiz ederek kişiselleştirilmiş tedavi planları oluşturuyor. AI ayrıca ilaç keşif sürecini hızlandırarak yeni tedavi yöntemlerinin geliştirilmesine olanak tanıyor.
2. Robotik Cerrahi
Robotik cerrahi, cerrahların daha hassas ve kontrollü operasyonlar gerçekleştirmesine olanak tanıyor. Robotik sistemler, minimal invaziv cerrahi için mükemmel bir çözüm sunuyor ve bu da hasta iyileşme süresini kısaltıyor. Özellikle onkoloji ve kardiyovasküler cerrahi gibi hassasiyet gerektiren alanlarda kullanılan bu sistemler, enfeksiyon riskini azaltarak hasta sonuçlarını iyileştiriyor. Uzaktan cerrahi yetenekleri de giderek gelişiyor, bu da coğrafi engelleri aşmayı mümkün kılıyor.
3. Giyilebilir Sağlık Teknolojileri
Giyilebilir cihazlar, bireylerin kendi sağlık durumlarını gerçek zamanlı olarak takip etmesine olanak tanıyor. Akıllı saatlerden biyosensörlere kadar geniş bir yelpazede yer alan bu cihazlar, kalp atış hızı, kan basıncı ve uyku düzeni gibi önemli biyometrik verileri izliyor. Kronik hastalıkların yönetiminde önemli bir rol oynayan bu teknolojiler, aynı zamanda doktorların hastalarını uzaktan takip etmelerini de sağlıyor. Giyilebilir cihazlar, erken uyarı sistemleri sayesinde ciddi sağlık sorunlarının önlenmesine de yardımcı oluyor.
4. Genomik ve Kişiselleştirilmiş Tıp
Genomik araştırmalar, bireylerin genetik yapısına dayalı kişiselleştirilmiş tedavi yöntemlerinin geliştirilmesini sağlıyor. Genetik testler, bireylerin belirli hastalıklara yatkınlıklarını belirlemeye yardımcı oluyor ve böylece erken müdahale imkanı sunuyor. Kanser tedavisinde kullanılan hedefe yönelik tedavi yöntemleri, genomik verilerin etkin kullanımının başarılı örnekleri arasında yer alıyor. Bu teknoloji, hastalara özel tedavi planları oluşturarak sağlık hizmetlerini daha etkili hale getiriyor.
5. TeleTıp ve Uzaktan Sağlık Hizmetleri
TeleTıp, sağlık hizmetlerine erişimi kolaylaştıran bir diğer yenilikçi teknoloji. Hastalar, uzaktan doktorlarına danışarak zaman ve maliyet tasarrufu sağlıyor. Pandemi döneminde büyük bir ivme kazanan bu teknoloji, özellikle kırsal bölgelerde yaşayan bireyler için büyük bir çözüm sunuyor. TeleTıp, sadece danışmanlık hizmetleriyle sınırlı kalmayarak, uzaktan izleme cihazlarıyla entegre çalışarak daha kapsamlı bir sağlık hizmeti sunuyor.
Gelecekte bu teknolojilerin daha da gelişmesi ve yaygınlaşmasıyla, sağlık sektöründe büyük değişimlerin gerçekleşmesi bekleniyor. Her bir yenilik, hem hasta hem de sağlık profesyonelleri için hayatı kolaylaştırmayı ve sağlık sistemlerini daha verimli hale getirmeyi hedefliyor.`,
            image: "./assets/images/blog/img-02.jpg",
            date: "Ara 18, 2024",
            tag: "Teknoloji",
            writer: "Mert Nazmi Temizel"
        },
        blog_3: {
            title: "Sağlık Sektöründe Otomasyon ve Yapay Zekanın Rolü",
            content: `Günümüzde sağlık sektörü, teknolojik yeniliklerin öncülüğünde büyük bir dönüşüm geçiriyor. Otomasyon ve yapay zeka (YZ), bu değişimin temel itici güçleri arasında yer alıyor. Bu iki teknoloji, hasta bakımından idari süreçlere, tanı koymadan tedaviye kadar her alanda sağlık hizmetlerini yeniden tanımlıyor. Araştırmalar, otomasyonun ve yapay zekanın, hasta sonuçlarını iyileştirirken maliyetleri önemli ölçüde düşürdüğünü gösteriyor (Kaynak: Harvard Business Review).
Otomasyonun Sağlık Sektörüne Katkıları
1. Hasta Süreçlerinde Verimlilik Artışı
Hastane içindeki operasyonların otomasyonu, hasta kabul, randevu planlaması ve dosya yönetimi gibi süreçlerde verimlilik sağlıyor. Örneğin, otomatik hasta kayıt sistemleri, personelin manuel girişlerle kaybettiği zamanı azaltarak sağlık çalışanlarının hastalarına daha fazla odaklanmasına olanak tanıyor (Kaynak: HIMSS Analytics).
Bunun yanı sıra, ilaç dağıtım sistemlerinin otomasyonu, yanlış ilaç verme gibi hataları önemli ölçüde azaltıyor. Yapılan bir araştırma, bu sistemlerin kullanıldığı hastanelerde ilaç hatalarının %80 oranında azaldığını ortaya koyuyor (Kaynak: Journal of Patient Safety).
2. Laboratuvar ve Tanı Süreçlerinin Geliştirilmesi
Laboratuvar otomasyonu, analiz süreçlerinin hızlanmasını ve hata oranlarının düşmesini sağlıyor. Özellikle yoğun hasta trafiği olan sağlık merkezlerinde, bu sistemler hayat kurtarıcı bir rol üstleniyor.
Gelecek Vaadi: Otomasyon teknolojilerinin ilerlemesiyle birlikte, patoloji ve genetik analiz süreçlerinin dakikalar içinde sonuçlanması mümkün hale gelecek. Örneğin, Roche Diagnostics gibi firmaların geliştirdiği ileri otomasyon çözümleri, laboratuvar sonuçlarının doğruluğunu %99’un üzerine çıkarmayı hedefliyor (Kaynak: Roche Diagnostics).

Yapay Zekanın Sağlık Alanındaki Uygulamaları
1. Teşhis ve Erken Tespit
Yapay zeka, tıbbi görüntüleme sistemleriyle entegre çalışarak kanser, kalp hastalıkları ve nörolojik bozukluklar gibi ciddi hastalıkların erken teşhisinde çığır açıyor. Örneğin, bir çalışmada, yapay zekanın meme kanseri teşhisindeki doğruluk oranının %95’e ulaştığı görülmüştür (Kaynak: Nature Medicine).
2. Kişiselleştirilmiş Tedavi Planları
YZ, hasta verilerini analiz ederek kişiye özel tedavi planları sunuyor. Özellikle genetik verilerin analizi, hangi tedavilerin hangi hastalar için daha etkili olabileceğini belirlemekte büyük bir rol oynuyor. IBM Watson, bu alandaki öncü sistemlerden biri olarak, klinik verileri analiz ederek onkoloji hastaları için optimize edilmiş tedavi seçenekleri sunuyor (Kaynak: IBM Watson Health).
3. Uzaktan Hasta Takibi ve Tele-Sağlık
Yapay zeka destekli tele-sağlık çözümleri, sağlık çalışanlarının hastalarını uzaktan izlemelerine olanak tanıyor. Bu, özellikle kronik hastalıkların yönetiminde etkili bir araç. Örneğin, kronik obstrüktif akciğer hastalığı (KOAH) olan bireylerde yapay zeka destekli sistemlerin kullanılması, atakların önlenmesinde %60’a varan başarı oranları sunuyor (Kaynak: American Thoracic Society).

Otomasyon ve Yapay Zekanın Sağlık Personeline Etkisi
Otomasyon ve yapay zeka, sağlık çalışanlarının üzerindeki iş yükünü azaltarak onların daha karmaşık ve insani yönleri ağır basan görevlere odaklanmasını sağlıyor. Örneğin, Avrupa’da yapılan bir çalışmada, yapay zekanın doktorların hasta başına harcadıkları zamanı %40 oranında artırdığı belirtilmiştir (Kaynak: European Journal of Health Economics).
Ancak bu teknolojilerin sağlık sektöründe başarılı bir şekilde kullanılabilmesi için uygun eğitim ve altyapının sağlanması gerekiyor. Özellikle etik ve veri gizliliği gibi konularda dikkatli olunmalı.

Gelecek Perspektifi
Otomasyon ve yapay zeka teknolojileri, sağlık sektöründe hâlâ keşfedilmeyi bekleyen büyük bir potansiyele sahip. Gelecekte, bu teknolojilerin şu alanlarda daha fazla etkili olması bekleniyor:
	•	Tam Entegre Hastane Sistemleri: Tüm operasyonel süreçlerin dijital olarak birbirine bağlanmasıyla hastaneler daha hızlı ve verimli çalışacak.
	•	Tahmine Dayalı Sağlık Hizmetleri: Yapay zeka, hastalıkları henüz semptomlar ortaya çıkmadan tespit ederek koruyucu sağlık hizmetlerini mümkün kılacak (Kaynak: Mayo Clinic Proceedings).
	•	Erişilebilirlik ve Eşitlik: Otomasyon, kaliteli sağlık hizmetlerinin dünya genelinde daha erişilebilir olmasını sağlayacak. Özellikle kırsal bölgelerde yaşayan hastalar, bu teknolojiler sayesinde uzman sağlık hizmetlerine daha kolay erişebilecek.

SonuçOtomasyon ve yapay zeka, sağlık hizmetlerinde devrim yaratmaya devam ediyor. Ancak bu teknolojilerin tam potansiyeline ulaşabilmesi için dikkatli bir entegrasyon süreci, uygun düzenlemeler ve sürekli eğitim şart. Etik bir yaklaşımla kullanıldığında, bu teknolojiler sadece sağlık hizmetlerini değil, tüm insan yaşamını iyileştirme potansiyeline sahiptir.`,
            image: "./assets/images/blog/img-03.jpg",
            date: "Ara 18, 2024",
            tag: "Yapay Zeka",
            writer: "Mert Nazmi Temizel"
        },
        blog_4: {
            title: "Nanoteknolojinin Sağlık Sektörüne Etkileri: Geleceğin Tıbbını Şekillendiren Çözümler",
            content: `Nanoteknoloji, atom ve molekül düzeyinde yenilikçi teknolojilerle yaşamın her alanında olduğu gibi sağlık sektöründe de çığır açıyor. Bu teknoloji, yalnızca teşhis ve tedavi süreçlerini geliştirmekle kalmıyor, aynı zamanda daha az invaziv yöntemlerle hastaların yaşam kalitesini artırıyor. Özellikle kişiselleştirilmiş tıp, nano-ilaçlar, doku mühendisliği ve akıllı cihazlar alanında önemli ilerlemeler sağlanmıştır.
Nanoteknoloji ile Geliştirilen Tıbbi Malzemeler ve Tedavi Yaklaşımları
	•	Antibakteriyel ve Biyouyumlu MalzemelerNanoteknolojinin birincil uygulamalarından biri, tıbbi cihaz ve malzemelerde antibakteriyel özellikler geliştirmektir. Örneğin, gümüş nanoparçacıkların cerrahi aletlerde ve yara örtülerinde kullanımı enfeksiyon risklerini önemli ölçüde azaltmaktadır. Nature Biotechnology dergisine göre, nanosilver kaplamaların cerrahi müdahalelerde enfeksiyon oranını %40'tan fazla düşürdüğü kanıtlanmıştır.
	•	Nano-Diagnoz TeknolojileriGeleneksel tıbbi teşhis yöntemlerinin aksine, nanoteknoloji ile geliştirilen cihazlar, hastalıkları erken safhalarda, moleküler seviyede tespit edebilir. Örneğin:
	•	Kanser Tespiti: Altın nanoparçacıklar, kanserli hücrelerin çok düşük konsantrasyonlarda bile tespit edilmesine olanak tanır.
	•	Nanobiyosensörler: Kanda, idrarda veya dokularda bulunan hastalık biyobelirteçlerini algılamak için kullanılır.
Johns Hopkins Üniversitesi’nin bir çalışmasında, nano-diagnostik araçlarının kanser teşhisinde doğruluk oranını %95'in üzerine çıkardığı belirtilmiştir.
	•	Hedefe Yönelik İlaç Taşıma SistemleriNanoteknoloji sayesinde, ilaçlar doğrudan hedeflenen hücrelere taşınarak yan etkiler minimize edilirken etkinlik artırılmaktadır. Örneğin:
	•	Liposomal İlaçlar: Kanser tedavisinde kullanılan nano-ilaçlar, sağlıklı dokulara zarar vermeden tümörleri hedef alır.
	•	Akıllı İlaç Sistemleri: Çevresel değişikliklere (pH, sıcaklık) duyarlı nanoparçacıklar, yalnızca gerektiği yerde ve zamanda ilaç salınımı sağlar.
FDA (Amerikan Gıda ve İlaç Dairesi), birçok nano-ilaç formülasyonunu onaylamış olup, bu ilaçların geleneksel tedavilere göre %30 daha az yan etkiye neden olduğunu rapor etmiştir.
Nano-Doku ve Organ Mühendisliği
Nanoteknoloji, yapay organ üretiminde ve doku mühendisliğinde yeni kapılar açmaktadır. Nanoliflerden oluşan biyomateryaller, hasarlı dokuların yenilenmesini hızlandırır ve vücudun bu malzemeleri reddetme olasılığını azaltır.
	•	3D Baskı ile Doku Üretimi: Nanoteknoloji kullanılarak üretilen biyobaskılar, özellikle yanık tedavisinde ve organ naklinde devrim yaratmaktadır.
	•	Kök Hücre Mühendisliği: Nanoparçacıklar, kök hücrelerin hedef dokulara yönlendirilmesinde kullanılmaktadır.
Harvard Üniversitesi'nde yapılan bir araştırmada, nanolif bazlı iskelelerin hasarlı kalp dokusunu onarmada başarı sağladığı ve iyileşme sürecini %50 oranında hızlandırdığı gözlemlenmiştir.
Nanoteknoloji ile Yeni Tedavi Yöntemleri
	•	Fototermal Terapi: Altın nanoparçacıklar, kanser hücrelerine yerleştirilerek lazerle ısıtılır ve hücrelerin yok edilmesi sağlanır.
	•	Nanorobotlar: Gelecekte, kan dolaşımında hareket eden nanorobotlar ile tümörlerin yok edilmesi ve tıkanıklıkların açılması mümkün hale gelebilir.
	•	Nanoimmünoterapi: Nanoteknoloji, bağışıklık sistemini kansere karşı güçlendirmek için yeni yöntemler sunmaktadır.
Nanoteknolojinin Sağlık Sektörüne Getirdiği Avantajlar
	•	Daha Az İnvaziv Yöntemler: Geleneksel yöntemlere göre hastalar için daha az acılı ve daha hızlı iyileşme süreçleri sağlar.
	•	Maliyet ve Zaman Tasarrufu: Nano-diagnostik ve nano-ilaçlar sayesinde teşhis ve tedavi süreçleri daha kısa sürede ve daha düşük maliyetle gerçekleştirilir.
	•	Kişiselleştirilmiş Tıp: Hastanın genetik yapısına göre özel olarak tasarlanan tedaviler, daha etkili sonuçlar sunar.
Sonuç: Sağlıkta Geleceği Yeniden Şekillendiren Teknoloji
Nanoteknoloji, sağlık sektöründe hem teşhis hem de tedavi süreçlerini yeniden tanımlamaktadır. Daha hassas, etkili ve kişiselleştirilmiş çözümler sunarak hem hastaların hem de sağlık profesyonellerinin hayatını kolaylaştırmaktadır.
Sağlıkta nanoteknolojinin yaygınlaşmasıyla birlikte, bilim insanları ve teknoloji geliştiricileri bu alandaki fırsatları daha da genişletmek için çalışmaktadır. Yatırımların artması ve daha fazla yenilikçi ürünün piyasaya sürülmesiyle, bu teknolojinin sağlıkta devrim yaratmaya devam edeceği açıktır.
Kaynaklar:
	•	Nature Biotechnology
	•	Johns Hopkins University Research
	•	FDA Nanotechnology Reports
	•	Harvard Medical School Innovations`,
            image: "./assets/images/blog/img-04.jpg",
            date: "Ara 18, 2024",
            tag: "Nanoteknoloji",
            writer: "Mert Nazmi Temizel"
        }
    },
    en: {

    },
    de: {

    },
    fr: {

    },
    ch: {

    },
    ar: {

    }
}

const products = {
    tr: {
        product_1: {
            id: 1,
            marka_id: 1,
            title: "Nano Mask",
            image: "./assets/images/common/products/img-01.jpg",

        },
        product_2: {
            id: 2,
            marka_id: 2,
            title: "Nano Mask Farklı Şirket",
            image: "./assets/images/common/products/img-02.jpg",

        }
    },
    en: {

    },
    de: {

    },
    fr: {

    },
    ch: {

    },
    ar: {

    }
}

const markas = {
    marka_1: {
        id:1,
        name: "Lagis"
    },
    marka_2: {
        id:2,
        name: "Vathin"
    },
    marka_3: {
        id:3,
        name: "Human Med"
    },
    marka_4: {
        id:4,
        name: "Cousin Surgery"
    },
    marka_5: {
        id:5,
        name: "Kavandish System"
    },
    marka_6: {
        id:6,
        name: "Comen"
    }
}

const pageHandlers = {
    "index.html": generateBlogSlides,
    "blog.html": generateBlogPages,
    "blog-details.html": generateBlogDetail,
    "products.html": generateProducts,
}
const handleItem = {
    "index.html": blogs,
    "blog.html": blogs,
    "blog-details.html": blogs,
    "products.html": products,
}
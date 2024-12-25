


function changeLanguage(lang) {

    pageName = window.location.pathname.split("/").pop();

    if (pageHandlers[pageName]) {
        if (handleItem[pageName] === undefined) {
            pageHandlers[pageName]();
        }
        else {
            pageHandlers[pageName](handleItem[pageName][lang]);
        }

    }
    else {
        generateBlogSlides(blogs[lang])
    }
    localStorage.setItem("language", lang);
    if (lang === "ar") {
        document.documentElement.setAttribute("dir", "rtl");
    }
    else {
        document.documentElement.setAttribute("dir", "ltr");
    }
    const currentLangElements = document.querySelectorAll(".current-lang");

    currentLangElements.forEach((element) => {
        element.textContent = lang.charAt(0).toUpperCase() + lang.slice(1).toUpperCase();;
    });
    const elements = document.querySelectorAll("[data-key]");
    elements.forEach((element) => {
        const key = element.getAttribute("data-key");
        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
            if (translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        }
        else if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }

    });
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("language") || "tr";
    changeLanguage(savedLanguage);

});

function generateBlogSlides(blogs) {

    const container = document.getElementById("swiper");

    if (!container) {
        console.debug(`Container with selector swiper not found.`);
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
                    <a href="blog-details.html?id=${blog}" class="position-cover" data-caption="${blogs[blog].title}" alt="${blogs[blog].title}"></a>
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


    const int_container = document.getElementById("marka_integrations");

    if (!int_container) {
        console.debug(`Container with selector integrations not found.`);
        return;
    }

    const int_swiper = document.getElementById("marka-swiper");

    if (!int_swiper) {
        console.debug(`Container with selector marka-swiper not found.`);
        return;
    }



    int_container.innerHTML = "";
    int_swiper.innerHTML = "";

    Object.keys(markas).forEach(marka => {
        int_cont = document.createElement("div");
        int_cont.innerHTML = `
            <div
                class="panel vstack justify-between gap-4 p-3 rounded lg:rounded-2 bg-white text-dark">
                <div class="vstack gap-3">
                    <div class="hstack justify-between items-center">
                        <div class="vstack">
                            <h5 class="h5 m-0 text-dark">${markas[marka].name}</h5>
                        </div>
                        <img class="w-32px lg:w-40px"
                            src="${markas[marka].image}" alt="${markas[marka].name}">
                    </div>
                    <p class="fs-6 opacity-70 dark:opacity-80" data-key="${markas[marka].data_key}"></p>
                </div>
                <a href="products.html?id=${markas[marka].id}"
                    class="uc-link fw-bold fs-7 d-inline-flex items-center gap-narrow">
                    <span data-key="buton_3"></span>
                    <i class="icon icon-narrow unicon-arrow-right rtl:rotate-180"></i>
                </a>
            </div>
        `

        int_container.appendChild(int_cont);

        int_swip = document.createElement("div");
        int_swip.className = "brand-item swiper-slide text-center"
        int_swip.innerHTML = `
        <a href="products.html?id=${markas[marka].id}">
            <img class="brand-item-image h-40px xl:h-48px"
                src="${markas[marka].image}" alt="${markas[marka].name}"
                data-uc-svg>
        </a>
        `

        int_swiper.appendChild(int_swip);
    }
    )

    // Select the container where slides will be added







}

function generateBlogPages(blogs) {

    // Select the container where slides will be added

    const container = document.getElementById("blog-wrapper");

    if (!container) {
        console.debug(`Container with selector wrapper not found.`);
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
                            <div class="post-category text-white fw-normal text-none fw-bold fs-7 bg-primary text-white py-narrow px-1 rounded">${blogs[blog].tag}</div>
                            <h3 class="h4 xl:h2 m-0 text-center m-0 lg:w-500px lg:m-auto">
                                <a class="text-none text-white" href="blog-details.html?id=${blog}">${blogs[blog].title}</a>
                            </h3>
                            <ul class="post-meta nav-x ft-tertiary justify-center fs-7 gap-1">
                                <li>
                                    <div class="post-date hstack gap-narrow text-white">
                                        <span>${blogs[blog].date}</span>
                                    </div>
                                </li>
                            </ul>
                            <p class="fs-6 lg:fs-5 lg:w-500px lg:mx-auto text-center text-white md:d-none lg:d-block">${contentExcerpt}</p>
                            <a class="btn btn-text text-white border-bottom d-inline-flex fs-7 lg:fs-6 sm:mt-2" href="blog-details.html?id=${blog}" data-key="blog_continue"></a>
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
                        <a href="blog-details.html?id=${blog}" class="position-cover text-white" data-caption="${blogs[blog].title}"></a>
                    </figure>
                    <header class="panel vstack items-center gap-1 lg:gap-2 px-2">
                        <h3 class="h5 xl:h4 m-0 text-center m-0">
                            <a class="text-none text-white" href="blog-details.html?id=${blog}">${blogs[blog].title}</a>
                        </h3>
                        <ul class="post-meta nav-x ft-tertiary justify-center gap-1 fs-7 text-gray-400 dark:text-gray-300 d-none lg:d-flex">
                            <li>
                                <div class="post-date hstack gap-narrow text-white">
                                    <span>${blogs[blog].date}</span>
                                </div>
                            </li>
                        </ul>
                    </header>
                    <a class="btn btn-text text-white border-bottom d-inline-flex fs-7 lg:fs-6 sm:mt-2" href="blog-details.html?id=${blog}" data-key="blog_continue"></a>
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
    sendMail()
    id = new URLSearchParams(window.location.search).get("id");
    exist = false

    const container = document.getElementById("products");


    if (!container) {
        console.debug(`Container with selector products not found.`);
        return;
    }

    header = document.getElementById("header")

    const title = Object.values(markas).find(marka => marka.id === parseInt(id, 10))?.name
    if (title) {
        header.textContent = title;
    }
    else {
        header.setAttribute("data-key", "tum");
    }


    container.innerHTML = "";

    Object.keys(products).forEach(product => {

        if (products[product].marka_id === parseInt(id, 10) || parseInt(id, 10) === 0) {
            product_cont = document.createElement("div");
            product_cont.innerHTML = `
                <article class="product type-product panel bg-white">
                    <div class="vstack gap-2 border">
                        <div class="panel">
                            <figure
                                class="featured-image m-0 rounded ratio ratio-3x4 overflow-hidden uc-transition-toggle overflow-hidden">
                                <img class="media-cover image uc-transition-scale-up uc-transition-opaque" style="object-fit: contain;"
                                    src="${products[product].image}" alt="${products[product].title}">
                            </figure>
                        </div>
                        <div class="content vstack items-center gap-1 fs-6 text-center xl:mt-1" style="margin-bottom: 20px">
                            <h5 class="h6 md:h5 m-0 text-black">${products[product].title}</h5>
            
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

function sendMail() {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Extract form data
        const formData = {
            name: document.querySelector('[data-key="form_1"]').value,
            mail: document.querySelector('[data-key="form_2"]').value,
            subject: document.querySelector('[data-key="form_3"]').value,
            message: document.querySelector('[data-key="form_4"]').value,
        };


        // Perform validation (optional)
        if (!formData.name || !formData.mail || !formData.message || !formData.subject) {
            alert('Please fill in all required fields.');
            return;
        }

        data = {
            service_id: "service_65ddnpi",
            template_id: "template_pcjx27m",
            user_id: "B5JVr5Ao3MNmipzIQ",
            template_params: {
                'name': formData.name,
                'mail': formData.mail,
                'subject': formData.subject,
                'message': formData.message
            }
        }



        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        }).done(function () {
            alert('Your request has been sent');
        }).fail(function (error) {
            alert('Oops... ' + JSON.stringify(error));
        });

    });
}

function generateIntegrations() {
    const container = document.getElementById("products");

    if (!container) {
        console.debug(`Container with selector products not found.`);
        return;
    }

    container.innerHTML = "";
    Object.keys(markas).forEach(marka => {
        product_cont = document.createElement("div");
        product_cont.innerHTML = `
            <article class="product type-product panel" style="background-color: #f0f0f0; border-radius: 10px;">
                <div class="vstack gap-2" style="margin: 20px">
                    <div class="panel">
                        <figure
                            class="featured-image m-0 rounded ratio ratio-1x1 overflow-hidden uc-transition-toggle overflow-hidden">
                            <img class="media-cover image uc-transition-scale-up uc-transition-opaque" style="object-fit:contain; padding: 15px"
                                src="${markas[marka].image}" alt="${markas[marka].name}">
                            <a href="products.html?id=${markas[marka].id}" class="position-cover"
                                data-caption="${markas[marka].name}"></a>
                        </figure>
                    </div>
                    <div class="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                        <h5 class="h6 md:h5 m-0"><a class="text-none text-black"
                                href="products.html?id=${markas[marka].id}">${markas[marka].name}</a></h5>
                        <a class="btn btn-text text-none text-primary border-bottom fs-7 lg:fs-6 mt-1 pb-narrow"
                            href="products.html?id=${markas[marka].id}" data-uc-toggle="" data-key="urun_detay"></a>
                    </div>
                </div>
            </article>
            `
        container.appendChild(product_cont);
    }
    )
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
        hakkinda: "MEDITEM Health: Sağlıkta Yenilikçi Çözümler",
        hakkinda_icerik_1: "2024 yılında kurulan MEDITEM Health, sağlık sektöründe uzun yıllara dayanan deneyimimizle, yenilikçi çözümleri bir araya getiren bir firma olarak öne çıkmaktadır. Genel Cerrahi, Jinekoloji, Pediatri, Üroloji ve Plastik Cerrahi gibi birçok tıbbi uzmanlık alanında, hasta bakımını iyileştirmeyi ve sağlık profesyonellerinin ihtiyaçlarını karşılamayı amaçlayan ürünler sunuyoruz.",
        hakkinda_icerik_2: "Sağlık teknolojisi sektöründeki geniş bilgi birikimimiz ve tecrübemizle, iş ortaklarımıza ve müşterilerimize en yüksek standartlarda hizmet sağlamaktayız. İleri teknolojiye olan bağlılığımız, verimli ve güvenilir çözümler üreterek hastaların ve sağlık çalışanlarının hayatlarını kolaylaştırmamıza olanak tanıyor.",
        hakkinda_icerik_3: "MEDITEM Health olarak, sağlık teknolojileri alanında fark yaratan, sektörde lider bir firma olmayı hedefliyoruz. Sağlık sektörüne olan katkılarımızla, sadece bugünü değil, geleceği de şekillendirmeye kararlıyız.",
        hakkinda_header_1: "Misyonumuz",
        hakkinda_icerik_4: "MEDITEM Health, sağlık sektöründe kaliteli, yenilikçi ve güvenilir çözümler sunarak, sağlık hizmetlerinin verimliliğini ve hasta bakımının kalitesini sürekli olarak iyileştirmeyi hedefler. Teknolojiye dayalı çözümlerimiz, sağlık profesyonellerinin iş süreçlerini optimize ederken, aynı zamanda hasta güvenliğini ve tedavi başarısını artırmayı amaçlar.",
        hakkinda_header_2: "Vizyonumuz",
        hakkinda_icerik_5: "MEDITEM Health, sağlık teknolojileri alanında lider bir inovasyon gücü olmayı ve sektördeki tüm paydaşlar için değer yaratmayı amaçlamaktadır. Geliştirdiğimiz çözümlerle, sağlık profesyonellerine güvenli, etkili ve verimli araçlar sunarak, hastaların yaşam kalitesini artırmayı hedefliyoruz.",
        hakkinda_header_3: "Değerlerimiz",
        blog_header: "Blog",
        blog_continue: "Okumaya devam edin",
        header_404: "Sayfa Bulunamadı",
        content_404: "Aradığınız sayfa maalesef mevcut değil. Lütfen tekrar deneyin veya ana sayfaya dönün.",
        redirect_404: "Ana Sayfaya Dön",
        urun_detay: "Ürünleri Gör",
        urun_ayrinti: "Ürün Detayını Göster",
        tum: "Tüm",
        contact_header: "Bize Ulaşın",
        contact_option_1: "Adres",
        contact_option_1_buton: "Haritada Gör",
        contact_option_2: "Telefon",
        contact_option_2_buton: "Bizi Arayın",
        contact_option_3: "E-posta",
        contact_option_3_buton: "E-posta Gönder",
        mail_header: "Bize Yazın",
        mail_header_content: "Aşağıdaki formu doldurarak bize ulaşabilirsiniz. Ekibimiz sizinle irtibata geçecektir.",
        form_1: "Adınız",
        form_2: "E-posta Adresiniz",
        form_3: "Konu",
        form_4: "Mesajınız",
        form_5: "Gönder",
        product_contact_content: "Ürünlerle ilgili detaylı bilgi için bizimle irtibata geçin."

    },
    en: {
        footer_1: "Meditem © 2024, All rights reserved.",
        footer_link_1: "Quick Links",
        footer_link_2: "Companies",
        footer_link_3: "Where Are We?",
        anaSayfa: "Home",
        hakkimizda: "About Us",
        urunler: "Products",
        blog: "Blog",
        iletisim: "Contact",
        tema: "Select Theme:",
        language: "Select Language:",
        baslik_1: "Secure Solutions with Advanced Technologies in Healthcare",
        buton_1: "Discover Our Company",
        baslik_2: "Advanced Technological Solutions for the Healthcare Sector",
        icerik_1: "We focus on making medical technologies more accessible with the ultimate goal of improving healthcare efficiency and patient outcomes.",
        option_1: "Sales",
        option_2: "Technical Service",
        option_3: "Project Management",
        option_1_baslik: "Fast access to medical solutions",
        option_1_icerik: "We offer innovative solutions in General Surgery, Gynecology, Urology, and Plastic Surgery. With a wide product portfolio catering to every need, we prioritize customer satisfaction through high-quality service. Our fast supply processes and expert team are ready to support your projects.",
        option_2_baslik: "Your devices are always secure",
        option_2_icerik: "We provide comprehensive and reliable technical service for your medical devices. From sensitive operations like board repairs to customized performance-enhancing solutions, we offer a wide range of support. Our experienced team ensures your devices operate at maximum performance and longevity.",
        option_3_baslik: "Professional touch to your projects",
        option_3_icerik: "We support you at every stage of your medical projects. From needs analysis to strategic planning and implementation, our expert team ensures maximum efficiency. With our industry knowledge and technical expertise, we bring your projects to life on time, budget-friendly, and with high quality.",
        baslik_3: "Our Advanced Technology Products",
        icerik_3: "Using the latest technology in the healthcare sector, we aim for excellence in healthcare services with high-quality and reliable products.",
        buton_2: "Discover All Products of Our Companies",
        buton_3: "View Products",
        marka_1_icerik: "Offers innovative and reliable solutions for minimally invasive surgery.",
        marka_2_icerik: "Enhances patient safety and efficiency with single-use bronchoscopy solutions.",
        marka_3_icerik: "A leading brand in Plastic and Aesthetic Surgery with high-tech devices.",
        marka_4_icerik: "Takes surgical success a step further with mesh solutions.",
        marka_5_icerik: "The address of reliability and high performance in electrocautery devices.",
        marka_6_icerik: "Provides global standard solutions in patient monitoring and life support equipment.",
        baslik_4: "Our Blog Posts",
        buton_5: "Read the Blog",
        icerik_4: "Interviews, best practices in the industry, and news.",
        buton_4: "View All Posts",
        hakkinda: "MEDITEM Health: Innovative Solutions in Healthcare",
        hakkinda_icerik_1: "Founded in 2024, MEDITEM Health stands out as a company combining innovative solutions in the healthcare sector with years of experience. We provide products aiming to improve patient care and meet the needs of healthcare professionals in various medical specialties such as General Surgery, Gynecology, Pediatrics, Urology, and Plastic Surgery.",
        hakkinda_icerik_2: "With our extensive knowledge and experience in the healthcare technology sector, we provide services of the highest standards to our partners and clients. Our commitment to advanced technology allows us to produce efficient and reliable solutions that ease the lives of patients and healthcare professionals.",
        hakkinda_icerik_3: "At MEDITEM Health, we aim to be a leading company making a difference in the healthcare technologies field. With our contributions to the healthcare sector, we are committed to shaping not only today but also the future.",
        hakkinda_header_1: "Our Mission",
        hakkinda_icerik_4: "MEDITEM Health aims to continuously improve the efficiency of healthcare services and the quality of patient care by providing high-quality, innovative, and reliable solutions in the healthcare sector. Our technology-driven solutions optimize the workflows of healthcare professionals while enhancing patient safety and treatment success. With our extensive experience, we commit to offering effective and sustainable solutions to challenges in the healthcare sector.",
        hakkinda_header_2: "Our Vision",
        hakkinda_icerik_5: "MEDITEM Health aims to be a leading innovation force in healthcare technologies and create value for all stakeholders in the sector. By developing solutions that provide safe, effective, and efficient tools for healthcare professionals, we strive to enhance patients' quality of life. As a pioneer driving the digital transformation of healthcare services, we aim to offer robust, sustainable, and effective solutions for an ever-evolving sector.",
        hakkinda_header_3: "Our Values",
        blog_header: "Blog",
        blog_continue: "Continue Reading",
        header_404: "Page Not Found",
        content_404: "Unfortunately, the page you are looking for does not exist. Please try again or return to the homepage.",
        redirect_404: "Return to Homepage",
        urun_detay: "View Products",
        urun_ayrinti: "View Product Details",
        tum: "All",
        contact_header: "Contact Us",
        contact_option_1: "Address",
        contact_option_1_buton: "View on Map",
        contact_option_2: "Phone",
        contact_option_2_buton: "Call Us",
        contact_option_3: "Email",
        contact_option_3_buton: "Send Email",
        mail_header: "Write to Us",
        mail_header_content: "You can contact us by filling out the form below. Our team will get in touch with you.",
        form_1: "Your Name",
        form_2: "Your Email Address",
        form_3: "Subject",
        form_4: "Your Message",
        form_5: "Send",
        product_contact_content: "Contact us for detailed information about the products."
    },
    de: {
        footer_1: "Meditem © 2024, Alle Rechte vorbehalten.",
        footer_link_1: "Schnellzugriffe",
        footer_link_2: "Unternehmen",
        footer_link_3: "Wo sind wir?",
        anaSayfa: "Startseite",
        hakkimizda: "Über uns",
        urunler: "Produkte",
        blog: "Blog",
        iletisim: "Kontakt",
        tema: "Thema auswählen:",
        language: "Sprache auswählen:",
        baslik_1: "Sichere Lösungen mit fortschrittlicher Technologie im Gesundheitswesen",
        buton_1: "Entdecken Sie unser Unternehmen",
        baslik_2: "Fortschrittliche technologische Lösungen für den Gesundheitssektor",
        icerik_1: "Wir konzentrieren uns darauf, medizinische Technologien zugänglicher zu machen, mit dem Ziel, die Effizienz im Gesundheitswesen zu steigern und Patientenergebnisse zu verbessern.",
        option_1: "Verkauf",
        option_2: "Technischer Service",
        option_3: "Projektmanagement",
        option_1_baslik: "Schneller Zugang zu medizinischen Lösungen",
        option_1_icerik: "Wir bieten innovative Lösungen in den Bereichen Allgemeinchirurgie, Gynäkologie, Urologie und Plastische Chirurgie. Mit einem breiten Produktportfolio, das jeden Bedarf abdeckt, stellen wir die Kundenzufriedenheit durch unseren qualitativ hochwertigen Service in den Vordergrund. Unsere schnellen Beschaffungsprozesse und unser Expertenteam sind bereit, Ihre Projekte zu unterstützen.",
        option_2_baslik: "Ihre Geräte sind immer sicher",
        option_2_icerik: "Wir bieten umfassenden und zuverlässigen technischen Service für Ihre medizinischen Geräte. Von sensiblen Reparaturen wie Platinenreparaturen bis hin zu maßgeschneiderten leistungssteigernden Lösungen bieten wir ein breites Spektrum an Unterstützung. Unser erfahrenes Team stellt sicher, dass Ihre Geräte mit maximaler Leistung und Langlebigkeit arbeiten.",
        option_3_baslik: "Professionelle Unterstützung für Ihre Projekte",
        option_3_icerik: "Wir stehen Ihnen in jeder Phase Ihrer medizinischen Projekte zur Seite. Von Bedarfsanalysen über strategische Planung bis hin zur Umsetzung sorgt unser Expertenteam für maximale Effizienz. Mit unserem Branchenwissen und unserer technischen Expertise realisieren wir Ihre Projekte termingerecht, kostengünstig und in hoher Qualität.",
        baslik_3: "Unsere Produkte mit fortschrittlicher Technologie",
        icerik_3: "Mit der neuesten Technologie im Gesundheitswesen streben wir Exzellenz in Gesundheitsdienstleistungen durch qualitativ hochwertige und zuverlässige Produkte an.",
        buton_2: "Entdecken Sie alle Produkte unserer Unternehmen",
        buton_3: "Produkte ansehen",
        marka_1_icerik: "Bietet innovative und zuverlässige Lösungen für minimalinvasive Chirurgie.",
        marka_2_icerik: "Erhöht die Patientensicherheit und Effizienz mit Einweg-Bronchoskopielösungen.",
        marka_3_icerik: "Eine führende Marke in der Plastischen und Ästhetischen Chirurgie mit High-Tech-Geräten.",
        marka_4_icerik: "Steigert den chirurgischen Erfolg mit Mesh-Lösungen.",
        marka_5_icerik: "Die Adresse für Zuverlässigkeit und hohe Leistung bei Elektrokautergeräten.",
        marka_6_icerik: "Bietet Lösungen nach globalen Standards in der Patientenüberwachung und lebenserhaltenden Ausrüstung.",
        baslik_4: "Unsere Blogbeiträge",
        buton_5: "Blog lesen",
        icerik_4: "Interviews, Best Practices in der Branche und Neuigkeiten.",
        buton_4: "Alle Beiträge anzeigen",
        hakkinda: "MEDITEM Health: Innovative Lösungen im Gesundheitswesen",
        hakkinda_icerik_1: "MEDITEM Health, gegründet im Jahr 2024, zeichnet sich durch die Kombination innovativer Lösungen im Gesundheitswesen mit langjähriger Erfahrung aus. Wir bieten Produkte an, die darauf abzielen, die Patientenversorgung zu verbessern und die Bedürfnisse von Gesundheitsfachkräften in verschiedenen medizinischen Fachgebieten wie Allgemeinchirurgie, Gynäkologie, Pädiatrie, Urologie und Plastische Chirurgie zu erfüllen.",
        hakkinda_icerik_2: "Mit unserem umfassenden Wissen und unserer Erfahrung im Bereich der Gesundheitstechnologie bieten wir unseren Partnern und Kunden Dienstleistungen von höchstem Standard. Unser Engagement für fortschrittliche Technologie ermöglicht es uns, effiziente und zuverlässige Lösungen zu entwickeln, die das Leben von Patienten und Gesundheitsfachkräften erleichtern.",
        hakkinda_icerik_3: "Bei MEDITEM Health streben wir danach, ein führendes Unternehmen zu sein, das einen Unterschied im Bereich der Gesundheitstechnologien macht. Mit unseren Beiträgen zum Gesundheitswesen sind wir entschlossen, nicht nur die Gegenwart, sondern auch die Zukunft zu gestalten.",
        hakkinda_header_1: "Unsere Mission",
        hakkinda_icerik_4: "MEDITEM Health hat sich zum Ziel gesetzt, die Effizienz der Gesundheitsdienste und die Qualität der Patientenversorgung durch hochwertige, innovative und zuverlässige Lösungen im Gesundheitswesen kontinuierlich zu verbessern. Unsere technologiegestützten Lösungen optimieren die Arbeitsabläufe von Gesundheitsfachkräften und erhöhen gleichzeitig die Patientensicherheit und den Behandlungserfolg. Mit unserer umfassenden Erfahrung verpflichten wir uns, effektive und nachhaltige Lösungen für Herausforderungen im Gesundheitswesen zu bieten.",
        hakkinda_header_2: "Unsere Vision",
        hakkinda_icerik_5: "MEDITEM Health strebt an, eine führende Innovationskraft im Bereich der Gesundheitstechnologien zu sein und für alle Akteure der Branche Mehrwert zu schaffen. Durch die Entwicklung von Lösungen, die sichere, effektive und effiziente Werkzeuge für Gesundheitsfachkräfte bieten, möchten wir die Lebensqualität der Patienten verbessern. Als Vorreiter der digitalen Transformation von Gesundheitsdiensten haben wir uns zum Ziel gesetzt, robuste, nachhaltige und effektive Lösungen für eine sich ständig weiterentwickelnde Branche anzubieten.",
        hakkinda_header_3: "Unsere Werte",
        blog_header: "Blog",
        blog_continue: "Weiterlesen",
        header_404: "Seite nicht gefunden",
        content_404: "Die von Ihnen gesuchte Seite ist leider nicht verfügbar. Bitte versuchen Sie es erneut oder kehren Sie zur Startseite zurück.",
        redirect_404: "Zur Startseite zurückkehren",
        urun_detay: "Produkte ansehen",
        urun_ayrinti: "Produktdetails anzeigen",
        tum: "Alle",
        contact_header: "Kontaktieren Sie uns",
        contact_option_1: "Adresse",
        contact_option_1_buton: "Auf der Karte anzeigen",
        contact_option_2: "Telefon",
        contact_option_2_buton: "Rufen Sie uns an",
        contact_option_3: "E-Mail",
        contact_option_3_buton: "E-Mail senden",
        mail_header: "Schreiben Sie uns",
        mail_header_content: "Sie können uns kontaktieren, indem Sie das folgende Formular ausfüllen. Unser Team wird sich mit Ihnen in Verbindung setzen.",
        form_1: "Ihr Name",
        form_2: "Ihre E-Mail-Adresse",
        form_3: "Betreff",
        form_4: "Ihre Nachricht",
        form_5: "Senden",
        product_contact_content: "Kontaktieren Sie uns für detaillierte Informationen zu den Produkten."
    },
    fr: {
        footer_1: "Meditem © 2024, Tous droits réservés.",
        footer_link_1: "Liens rapides",
        footer_link_2: "Entreprises",
        footer_link_3: "Où sommes-nous ?",
        anaSayfa: "Accueil",
        hakkimizda: "À propos de nous",
        urunler: "Produits",
        blog: "Blog",
        iletisim: "Contact",
        tema: "Choisir un thème :",
        language: "Choisir une langue :",
        baslik_1: "Des solutions sûres avec des technologies avancées en santé",
        buton_1: "Découvrez notre entreprise",
        baslik_2: "Solutions technologiques avancées pour le secteur de la santé",
        icerik_1: "Nous nous concentrons sur la rendre les technologies médicales plus accessibles avec pour objectif d'améliorer l'efficacité des soins de santé et les résultats pour les patients.",
        option_1: "Vente",
        option_2: "Service technique",
        option_3: "Gestion de projets",
        option_1_baslik: "Accès rapide aux solutions médicales",
        option_1_icerik: "Nous proposons des solutions innovantes dans les domaines de la chirurgie générale, de la gynécologie, de l'urologie et de la chirurgie plastique. Grâce à notre vaste portefeuille de produits, nous répondons à tous les besoins avec des dispositifs médicaux de qualité tout en mettant la satisfaction client au premier plan. Nos processus d'approvisionnement rapides et notre équipe d'experts sont prêts à soutenir vos projets.",
        option_2_baslik: "Vos équipements toujours en sécurité",
        option_2_icerik: "Nous offrons des services techniques complets et fiables pour vos équipements médicaux. Qu'il s'agisse de réparations délicates comme les circuits imprimés ou de solutions personnalisées pour améliorer les performances, nous couvrons un large éventail de besoins. Notre équipe expérimentée garantit que vos équipements fonctionnent avec des performances maximales et une durée de vie prolongée.",
        option_3_baslik: "Une touche professionnelle pour vos projets",
        option_3_icerik: "Nous vous accompagnons à chaque étape de vos projets médicaux. Analyse des besoins, planification stratégique et mise en œuvre, notre équipe d'experts assure une efficacité maximale. Avec notre expertise sectorielle et technique, nous réalisons vos projets dans les délais, de manière économique et avec une qualité supérieure.",
        baslik_3: "Nos produits de haute technologie",
        icerik_3: "En utilisant les technologies les plus récentes dans le domaine de la santé, nous visons l'excellence dans les services de santé avec des produits de qualité et fiables.",
        buton_2: "Découvrez tous les produits de nos entreprises",
        buton_3: "Voir les produits",
        marka_1_icerik: "Offre des solutions innovantes et fiables pour la chirurgie mini-invasive.",
        marka_2_icerik: "Augmente la sécurité des patients et l'efficacité grâce à des solutions de bronchoscopie à usage unique.",
        marka_3_icerik: "Une marque leader dans la chirurgie plastique et esthétique avec des dispositifs de haute technologie.",
        marka_4_icerik: "Améliore le succès chirurgical grâce à des solutions de maille.",
        marka_5_icerik: "L'adresse de la fiabilité et de la haute performance pour les appareils électro-chirurgicaux.",
        marka_6_icerik: "Propose des solutions conformes aux normes mondiales pour le suivi des patients et les équipements de maintien en vie.",
        baslik_4: "Nos articles de blog",
        buton_5: "Lire le blog",
        icerik_4: "Interviews, meilleures pratiques du secteur et actualités.",
        buton_4: "Voir tous les articles",
        hakkinda: "MEDITEM Health : Solutions innovantes en santé",
        hakkinda_icerik_1: "Fondée en 2024, MEDITEM Health se distingue par la combinaison de solutions innovantes en santé et de nombreuses années d'expérience. Nous offrons des produits conçus pour améliorer les soins aux patients et répondre aux besoins des professionnels de santé dans divers domaines médicaux tels que la chirurgie générale, la gynécologie, la pédiatrie, l'urologie et la chirurgie plastique.",
        hakkinda_icerik_2: "Avec notre vaste savoir-faire et expérience dans le domaine de la technologie médicale, nous fournissons des services de la plus haute qualité à nos partenaires et clients. Notre engagement envers les technologies de pointe nous permet de développer des solutions efficaces et fiables, facilitant la vie des patients et des professionnels de santé.",
        hakkinda_icerik_3: "Chez MEDITEM Health, nous nous efforçons de devenir un leader dans le domaine des technologies médicales. Avec nos contributions au secteur de la santé, nous sommes déterminés à façonner non seulement le présent, mais aussi l'avenir.",
        hakkinda_header_1: "Notre mission",
        hakkinda_icerik_4: "MEDITEM Health s'engage à améliorer en permanence l'efficacité des services de santé et la qualité des soins aux patients grâce à des solutions de haute qualité, innovantes et fiables. Nos solutions basées sur la technologie optimisent les processus des professionnels de santé tout en augmentant la sécurité des patients et le succès des traitements. Forts de notre vaste expérience, nous promettons de fournir des solutions efficaces et durables aux défis du secteur de la santé.",
        hakkinda_header_2: "Notre vision",
        hakkinda_icerik_5: "MEDITEM Health vise à devenir une force d'innovation leader dans le domaine des technologies de la santé, créant de la valeur pour toutes les parties prenantes du secteur. Grâce à nos solutions, nous offrons aux professionnels de santé des outils sûrs, efficaces et performants, améliorant ainsi la qualité de vie des patients. Pionniers de la transformation numérique des services de santé, nous nous engageons à offrir des solutions robustes, durables et efficaces pour un secteur en constante évolution.",
        hakkinda_header_3: "Nos valeurs",
        blog_header: "Blog",
        blog_continue: "Lire la suite",
        header_404: "Page introuvable",
        content_404: "La page que vous recherchez n'est pas disponible. Veuillez réessayer ou retourner à la page d'accueil.",
        redirect_404: "Retour à l'accueil",
        urun_detay: "Voir les produits",
        urun_ayrinti: "Afficher les détails du produit",
        tum: "Tous",
        contact_header: "Contactez-nous",
        contact_option_1: "Adresse",
        contact_option_1_buton: "Voir sur la carte",
        contact_option_2: "Téléphone",
        contact_option_2_buton: "Appelez-nous",
        contact_option_3: "E-mail",
        contact_option_3_buton: "Envoyez un e-mail",
        mail_header: "Écrivez-nous",
        mail_header_content: "Vous pouvez nous contacter en remplissant le formulaire ci-dessous. Notre équipe vous répondra rapidement.",
        form_1: "Votre nom",
        form_2: "Votre adresse e-mail",
        form_3: "Sujet",
        form_4: "Votre message",
        form_5: "Envoyer",
        product_contact_content: "Contactez-nous pour plus d'informations sur les produits."
    },
    ch: {
        footer_1: "Meditem © 2024，版权所有。",
        footer_link_1: "快速链接",
        footer_link_2: "公司",
        footer_link_3: "我们在哪里？",
        anaSayfa: "首页",
        hakkimizda: "关于我们",
        urunler: "产品",
        blog: "博客",
        iletisim: "联系",
        tema: "选择主题：",
        language: "选择语言：",
        baslik_1: "医疗技术领域的安全解决方案",
        buton_1: "了解我们的公司",
        baslik_2: "为医疗行业提供先进技术解决方案",
        icerik_1: "我们致力于让医疗技术更易获得，最终目标是提高医疗服务效率并改善患者的治疗效果。",
        option_1: "销售",
        option_2: "技术服务",
        option_3: "项目管理",
        option_1_baslik: "快速访问医疗解决方案",
        option_1_icerik: "我们在普通外科、妇产科、泌尿科和整形外科领域提供创新的解决方案。凭借广泛的产品组合，我们为所有需求提供高质量的医疗设备，同时以客户满意为首要任务。快速的供应流程和专业团队随时准备支持您的项目。",
        option_2_baslik: "确保设备始终安全",
        option_2_icerik: "我们为您的医疗设备提供全面可靠的技术服务。从电路板维修等精细操作到提高性能的定制解决方案，我们提供广泛的支持。经验丰富的团队确保您的设备以最佳性能运行并延长其使用寿命。",
        option_3_baslik: "为您的项目提供专业支持",
        option_3_icerik: "我们在医疗项目的每个阶段为您提供支持。从需求分析到战略规划和实施，我们的专家团队确保实现最大效率。凭借我们的行业知识和技术专业知识，我们确保您的项目按时、经济高效且高质量地完成。",
        baslik_3: "我们的高科技产品",
        icerik_3: "通过使用医疗领域的最新技术，我们以高质量、可靠的产品追求医疗服务的卓越。",
        buton_2: "探索我们公司的所有产品",
        buton_3: "查看产品",
        marka_1_icerik: "为微创手术提供创新可靠的解决方案。",
        marka_2_icerik: "通过一次性支气管镜解决方案提高患者安全性和效率。",
        marka_3_icerik: "整形与美容外科领域的高科技设备领先品牌。",
        marka_4_icerik: "通过网片解决方案提升手术成功率。",
        marka_5_icerik: "在电外科设备中体现可靠性和高性能。",
        marka_6_icerik: "在患者监护和生命支持设备领域提供符合全球标准的解决方案。",
        baslik_4: "我们的博客文章",
        buton_5: "阅读博客",
        icerik_4: "访谈、行业最佳实践和新闻。",
        buton_4: "查看所有文章",
        hakkinda: "MEDITEM Health：创新医疗解决方案",
        hakkinda_icerik_1: "成立于2024年的MEDITEM Health，凭借多年的医疗行业经验，结合创新解决方案脱颖而出。我们提供的产品旨在改善患者护理并满足医疗专业人员的需求，覆盖普通外科、妇产科、儿科、泌尿科和整形外科等多个医疗专业领域。",
        hakkinda_icerik_2: "凭借在医疗技术领域的丰富知识和经验，我们为合作伙伴和客户提供最高标准的服务。我们对先进技术的承诺使我们能够开发高效、可靠的解决方案，从而改善患者和医疗专业人员的生活。",
        hakkinda_icerik_3: "在MEDITEM Health，我们的目标是成为医疗技术领域的领导者。通过我们对医疗行业的贡献，我们决心不仅塑造今天，也塑造未来。",
        hakkinda_header_1: "我们的使命",
        hakkinda_icerik_4: "MEDITEM Health致力于通过提供高质量、创新和可靠的解决方案，不断提高医疗服务的效率和患者护理质量。我们的技术驱动解决方案在优化医疗专业人员工作流程的同时，还能提高患者的安全性和治疗成功率。凭借我们在行业中的深厚经验，我们承诺为医疗领域的挑战提供有效和可持续的解决方案。",
        hakkinda_header_2: "我们的愿景",
        hakkinda_icerik_5: "MEDITEM Health旨在成为医疗技术领域的创新领导者，为行业中的所有利益相关者创造价值。通过我们的解决方案，我们为医疗专业人员提供安全、高效和高性能的工具，从而改善患者的生活质量。作为医疗服务数字化转型的先驱，我们致力于为不断发展的行业提供强大、可持续和高效的解决方案。",
        hakkinda_header_3: "我们的价值观",
        blog_header: "博客",
        blog_continue: "继续阅读",
        header_404: "页面未找到",
        content_404: "抱歉，您寻找的页面不存在。请重试或返回首页。",
        redirect_404: "返回首页",
        urun_detay: "查看产品",
        urun_ayrinti: "查看产品详情",
        tum: "全部",
        contact_header: "联系我们",
        contact_option_1: "地址",
        contact_option_1_buton: "在地图上查看",
        contact_option_2: "电话",
        contact_option_2_buton: "给我们打电话",
        contact_option_3: "电子邮件",
        contact_option_3_buton: "发送电子邮件",
        mail_header: "给我们写信",
        mail_header_content: "您可以通过填写以下表单与我们联系。我们的团队会尽快与您联系。",
        form_1: "您的姓名",
        form_2: "您的电子邮件地址",
        form_3: "主题",
        form_4: "您的留言",
        form_5: "发送",
        product_contact_content: "如需了解产品的详细信息，请联系我们。"
    },
    ar: {
        footer_1: "Meditem © 2024، جميع الحقوق محفوظة.",
        footer_link_1: "روابط سريعة",
        footer_link_2: "الشركات",
        footer_link_3: "أين نحن؟",
        anaSayfa: "الصفحة الرئيسية",
        hakkimizda: "من نحن",
        urunler: "المنتجات",
        blog: "المدونة",
        iletisim: "اتصل بنا",
        tema: "اختر السمة:",
        language: "اختر اللغة:",
        baslik_1: "حلول آمنة بتقنيات متقدمة في المجال الطبي",
        buton_1: "تعرف على شركتنا",
        baslik_2: "حلول تكنولوجية متقدمة لقطاع الصحة",
        icerik_1: "نركز على جعل التقنيات الطبية أكثر سهولة مع هدفنا النهائي المتمثل في تحسين كفاءة الخدمات الصحية وتحسين نتائج المرضى.",
        option_1: "المبيعات",
        option_2: "الخدمات التقنية",
        option_3: "إدارة المشاريع",
        option_1_baslik: "الوصول السريع إلى الحلول الطبية",
        option_1_icerik: "نقدم حلولاً مبتكرة في مجالات الجراحة العامة، وأمراض النساء، والمسالك البولية، وجراحة التجميل. بفضل مجموعتنا الواسعة من المنتجات، نقدم أجهزة طبية تلبي جميع الاحتياجات، مع التركيز على رضا العملاء. فرقنا المتخصصة وسرعة عمليات التوريد جاهزة لدعم مشاريعك.",
        option_2_baslik: "أجهزتك في أمان دائم",
        option_2_icerik: "نقدم خدمات تقنية شاملة وموثوقة لأجهزتك الطبية. من إصلاح اللوحات الإلكترونية إلى حلول تحسين الأداء، نقدم مجموعة واسعة من الدعم. يضمن فريقنا المتمرس تشغيل أجهزتك بأقصى كفاءة وعمر طويل.",
        option_3_baslik: "لمسة احترافية لمشاريعك",
        option_3_icerik: "نقف بجانبك في كل مرحلة من مراحل مشاريعك الطبية. بدءًا من تحليل الاحتياجات إلى التخطيط الاستراتيجي وعمليات التنفيذ، يوفر فريقنا المتخصص أقصى كفاءة. بفضل معرفتنا العميقة في القطاع وخبراتنا التقنية، نضمن إتمام مشاريعك في الوقت المحدد وبميزانية موفرة وبجودة عالية.",
        baslik_3: "منتجاتنا التقنية المتقدمة",
        icerik_3: "من خلال استخدام أحدث التقنيات في المجال الطبي، نهدف إلى تحقيق التميز في الخدمات الصحية مع منتجات عالية الجودة وموثوقة.",
        buton_2: "استكشاف جميع منتجات شركاتنا",
        buton_3: "عرض المنتجات",
        marka_1_icerik: "توفر حلولاً مبتكرة وموثوقة للجراحة طفيفة التوغل.",
        marka_2_icerik: "تحسن أمان وكفاءة المرضى باستخدام حلول تنظير الشعب الهوائية للاستخدام الواحد.",
        marka_3_icerik: "علامة رائدة في مجال الأجهزة عالية التقنية لجراحة التجميل والترميم.",
        marka_4_icerik: "تأخذ نجاح العمليات الجراحية إلى مستوى جديد مع حلول الشبكات.",
        marka_5_icerik: "العنوان للموثوقية والأداء العالي في أجهزة الكي الكهربائي.",
        marka_6_icerik: "تقدم حلولًا بمعايير عالمية في مجال مراقبة المرضى وأجهزة دعم الحياة.",
        baslik_4: "مقالات مدونتنا",
        buton_5: "قراءة المدونة",
        icerik_4: "مقابلات، أفضل الممارسات في القطاع، والأخبار.",
        buton_4: "عرض جميع المقالات",
        hakkinda: "MEDITEM Health: حلول مبتكرة في المجال الطبي",
        hakkinda_icerik_1: "تأسست MEDITEM Health في عام 2024، وتبرز كشركة تجمع بين الحلول المبتكرة والخبرة الطويلة في القطاع الطبي. نحن نقدم منتجات تهدف إلى تحسين رعاية المرضى وتلبية احتياجات المهنيين الطبيين، تشمل مجالات الجراحة العامة، وأمراض النساء، وطب الأطفال، والمسالك البولية، وجراحة التجميل.",
        hakkinda_icerik_2: "بفضل معرفتنا العميقة وخبرتنا في قطاع التكنولوجيا الطبية، نقدم خدمات بمعايير عالية لشركائنا وعملائنا. التزامنا بالتكنولوجيا المتقدمة يمكّننا من تقديم حلول فعالة وموثوقة لتحسين حياة المرضى والمهنيين الطبيين.",
        hakkinda_icerik_3: "في MEDITEM Health، نهدف إلى أن نصبح شركة رائدة في قطاع التكنولوجيا الطبية. من خلال مساهماتنا في المجال الطبي، نحن ملتزمون بتشكيل الحاضر والمستقبل.",
        hakkinda_header_1: "مهمتنا",
        hakkinda_icerik_4: "تهدف MEDITEM Health إلى تحسين كفاءة الخدمات الصحية وجودة رعاية المرضى من خلال تقديم حلول مبتكرة وموثوقة. تعمل حلولنا التقنية على تحسين عمليات العمل للمهن الطبية وزيادة أمان المرضى ونجاح العلاج. بفضل خبرتنا العميقة في القطاع، نتعهد بتقديم حلول فعالة ومستدامة لتحديات المجال الطبي.",
        hakkinda_header_2: "رؤيتنا",
        hakkinda_icerik_5: "تسعى MEDITEM Health لأن تصبح قوة رائدة في الابتكار في مجال التكنولوجيا الطبية، وخلق قيمة لجميع أصحاب المصلحة في القطاع. من خلال حلولنا، نقدم أدوات آمنة وفعالة للمهن الطبية لتحسين جودة حياة المرضى. كمحرك للتحول الرقمي في الخدمات الصحية، نحن ملتزمون بتقديم حلول قوية ومستدامة وفعالة لقطاع دائم التطور.",
        hakkinda_header_3: "قيمنا",
        blog_header: "المدونة",
        blog_continue: "تابع القراءة",
        header_404: "الصفحة غير موجودة",
        content_404: "عذرًا، الصفحة التي تبحث عنها غير موجودة. يرجى المحاولة مرة أخرى أو العودة إلى الصفحة الرئيسية.",
        redirect_404: "العودة إلى الصفحة الرئيسية",
        urun_detay: "عرض المنتجات",
        urun_ayrinti: "عرض تفاصيل المنتج",
        tum: "الكل",
        contact_header: "اتصل بنا",
        contact_option_1: "العنوان",
        contact_option_1_buton: "عرض على الخريطة",
        contact_option_2: "الهاتف",
        contact_option_2_buton: "اتصل بنا",
        contact_option_3: "البريد الإلكتروني",
        contact_option_3_buton: "أرسل بريدًا إلكترونيًا",
        mail_header: "اكتب لنا",
        mail_header_content: "يمكنك التواصل معنا عن طريق ملء النموذج أدناه. سيتواصل فريقنا معك قريبًا.",
        form_1: "اسمك",
        form_2: "عنوان بريدك الإلكتروني",
        form_3: "الموضوع",
        form_4: "رسالتك",
        form_5: "إرسال",
        product_contact_content: "للحصول على مزيد من المعلومات التفصيلية حول المنتجات، يرجى التواصل معنا."
    }
}

const blogs = {
    tr: {
        blog_1: {
            title: "Meditem Health ve Çevreye Duyarlı Gelecek: Elektrikli Araç Kullanımı",
            content: `Günümüz dünyasında çevresel sorunlar, yalnızca bireylerin değil, kurumların da öncelikli sorumluluk alanlarından biri haline gelmiştir. Meditem Health olarak, yalnızca sağlık sektöründe öncü olmayı değil, aynı zamanda çevresel sorumluluklarımızı da yerine getirmeyi görev biliyoruz. Bu doğrultuda şirket araç filomuzda elektrikli araçlar (EV'ler)kullanarak, karbon ayak izimizi azaltma yolunda önemli bir adım atıyoruz.
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
Meditem Health olarak, geleceğin sağlık çözümleri kadar çevre dostu teknolojilerin de savunucusuyuz. Elektrikli araç kullanımımız, bu anlayışımızın bir yansımasıdır. Nature Communications gibi bilimsel yayınların da ortaya koyduğu üzere, sürdürülebilir ulaşım, gezegenimizin geleceği için hayati bir öneme sahiptir. Bizler, çevreye duyarlı bu yaklaşımı benimseyerek sadece bugünü değil, geleceği de iyileştirmeyi hedefliyoruz.
Daha sağlıklı bir dünya için teknoloji ve çevre dostu çözümleri bir araya getiren Meditem Health, sorumluluklarının bilincinde bir şekilde ilerlemeye devam ediyor.`,
            image: "./assets/images/blog/img-01.jpg",
            date: "Ara 18, 2024",
            tag: "Elektrikli Araç",
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
        }
    },
    en: {
        blog_1: {
            title: "Meditem Health and an Environmentally Conscious Future: Electric Vehicle Usage",
content: `In today's world, environmental issues have become a primary responsibility not just for individuals but also for institutions. At Meditem Health, we consider it our duty not only to lead in the healthcare sector but also to fulfill our environmental responsibilities. In this regard, we are taking a significant step towards reducing our carbon footprint by using electric vehicles (EVs) in our corporate vehicle fleet.

The impact of electric vehicles on the environment has been clearly demonstrated through various scientific studies. According to a study published in the journal *Nature Communications*, widespread adoption of electric vehicles could reduce global temperature increases by 0.5°C by 2040. This represents a vital difference for the future of our planet. At Meditem, by adopting such solutions, we aim to set an example not only in our sector but also in environmental leadership.

**The Environmental Importance of Electric Vehicles**
According to data from the World Health Organization (WHO), air pollution adversely affects millions of lives annually, with fossil fuel-powered vehicles being a major source of this pollution. Electric vehicles, operating with zero emissions, offer an innovative solution to the problem of environmental pollution. Moreover, reports from the United States Environmental Protection Agency (EPA) indicate that an electric vehicle emits, on average, 4.6 metric tons less carbon annually. At Meditem, we support these environmental benefits and aim to transition our entire corporate vehicle fleet to electric vehicles.

**Electric Vehicle Usage in Turkey**
A study aimed at improving air quality in major cities in Turkey has shown that electric vehicle usage can reduce air pollution by 30% (Boğaziçi University, 2023). These scientific findings once again highlight the importance of the steps we are taking toward a sustainable future. As a company, we aim to make a difference not only through our individual choices but also by raising environmental awareness in the industry.

**Meditem’s Contribution to the Environment**
Through our use of electric vehicles:
   • **We reduce carbon emissions:** Our zero-emission vehicles minimize environmental harm.
   • **We contribute to energy conservation:** By installing charging stations compatible with renewable energy sources, we support sustainability.
   • **We ensure a clean and quiet environment:** Our electric vehicles reduce noise pollution by operating silently.

**A Step Towards a Sustainable Future**
At Meditem Health, we advocate for environmentally friendly technologies as much as we do for the healthcare solutions of the future. Our use of electric vehicles reflects this understanding. As highlighted by scientific publications such as *Nature Communications*, sustainable transportation is critically important for the future of our planet. By adopting this environmentally conscious approach, we aim to improve not just today but also the future.

Meditem Health, combining technology and environmentally friendly solutions for a healthier world, continues to move forward with a strong sense of responsibility.`,
image: "./assets/images/blog/img-01.jpg",
date: "Dec 18, 2024",
tag: "Electric Vehicle",
        },
        blog_2: {
            title: "5 Technologies That Will Shape the Future of the Healthcare Sector",
            content: ``,
            image: "./assets/images/blog/img-02.jpg",
            date: "Dec 18, 2024",
            tag: "Technology",
        },
        blog_3: {
            title: "The Role of Automation and Artificial Intelligence in the Healthcare Sector",
            content: ``,
            image: "./assets/images/blog/img-03.jpg",
            date: "Dec 18, 2024",
            tag: "Artificial Intelligence",
        },
        blog_4: {
            title: "The Impact of Nanotechnology on the Healthcare Sector: Solutions Shaping the Future of Medicine",
            content: ``,
            image: "./assets/images/blog/img-04.jpg",
            date: "Dec 18, 2024",
            tag: "Nanotechnology",
        }
    },
    de: {
        blog_1: {
            title: "Meditem Health und eine umweltbewusste Zukunft: Elektrofahrzeugnutzung",
            content: ``,
            image: "./assets/images/blog/img-01.jpg",
            date: "Dec 18, 2024",
            tag: "Elektrofahrzeug", 
        },
        blog_2: {
            title: "5 Technologien, die die Zukunft des Gesundheitswesens prägen werden",
            content: ``,
            image: "./assets/images/blog/img-02.jpg",
            date: "Dec 18, 2024",
            tag: "Technologie",
        },
        blog_3: {
            title: "Die Rolle der Automatisierung und Künstlichen Intelligenz im Gesundheitswesen",
            content: ``,
            image: "./assets/images/blog/img-03.jpg",
            date: "Dec 18, 2024",
            tag: "Künstliche Intelligenz",
        },
        blog_4: {
            title: "Die Auswirkungen der Nanotechnologie auf den Gesundheitssektor: Lösungen, die die Zukunft der Medizin prägen",
            content: ``,
            image: "./assets/images/blog/img-04.jpg",
            date: "Dec 18, 2024",
            tag: "Nanotechnologie",
        }
    },
    fr: {
        blog_1: {
            title: "Meditem Health et un avenir respectueux de l'environnement : Utilisation de véhicules électriques",
            content: ``,
            image: "./assets/images/blog/img-01.jpg",
            date: "Dec 18, 2024",
            tag: "Véhicule électrique",
        },
        blog_2: {
            title: "5 Technologies qui façonneront l'avenir du secteur de la santé",
            content: ``,
            image: "./assets/images/blog/img-02.jpg",
            date: "Dec 18, 2024",
            tag: "Technologie",
        },
        blog_3: {
            title: "Le rôle de l'automatisation et de l'intelligence artificielle dans le secteur de la santé",
            content: ``,
            image: "./assets/images/blog/img-03.jpg",
            date: "Dec 18, 2024",
            tag: "Intelligence artificielle",
        },
        blog_4: {
            title: "L'impact de la nanotechnologie sur le secteur de la santé : Des solutions qui façonnent l'avenir de la médecine",
            content: ``,
            image: "./assets/images/blog/img-04.jpg",
            date: "Dec 18, 2024",
            tag: "Nanotechnologie",
        }
    },
    ch: {
        blog_1: {
            title: "Meditem Health和环保未来：电动车使用",
            content: ``,
            image: "./assets/images/blog/img-01.jpg",
            date: "Dec 18, 2024",
            tag: "电动车",
        },
        blog_2: {
            title: "5种将塑造未来医疗行业的技术",
            content: ``,
            image: "./assets/images/blog/img-02.jpg",
            date: "Dec 18, 2024",
            tag: "技术",
        },
        blog_3: {
            title: "自动化和人工智能在医疗行业中的作用",
            content: ``,
            image: "./assets/images/blog/img-03.jpg",
            date: "Dec 18, 2024",
            tag: "人工智能",
        },
        blog_4: {
            title: "纳米技术对医疗行业的影响：塑造未来医学的解决方案",
            content: ``,
            image: "./assets/images/blog/img-04.jpg",
            date: "Dec 18, 2024",
            tag: "纳米技术",
        }
    },
    ar: {
        blog_1: {
            title: "ميديتم هيلث ومستقبل مدرك للبيئة: استخدام المركبات الكهربائية",
            content: ``,
            image: "./assets/images/blog/img-01.jpg",
            date: "Dec 18, 2024",
            tag: "المركبة الكهربائية",
        },
        blog_2: {
            title: "5 تقنيات ستشكل مستقبل قطاع الرعاية الصحية",
            content: ``,
            image: "./assets/images/blog/img-02.jpg",
            date: "Dec 18, 2024",
            tag: "التكنولوجيا",
        },
        blog_3: {
            title: "دور التشغيل الآلي والذكاء الاصطناعي في قطاع الرعاية الصحية",
            content: ``,
            image: "./assets/images/blog/img-03.jpg",
            date: "Dec 18, 2024",
            tag: "الذكاء الاصطناعي",
        },
        blog_4: {
            title: "تأثير التكنولوجيا النانوية على قطاع الرعاية الصحية: حلول تشكل مستقبل الطب",
            content: ``,
            image: "./assets/images/blog/img-04.jpg",
            date: "Dec 18, 2024",
            tag: "التكنولوجيا النانوية",
        }
    }
}

const products = {
    tr: {
        product_1: {
            id: 1,
            marka_id: 1,
            title: "Trokar",
            image: "./assets/images/common/products/trokar.png",
        },
        product_2: {
            id: 2,
            marka_id: 1,
            title: "El Aletleri",
            image: "./assets/images/common/products/el_aletleri.jpg",
        },
        product_3: {
            id: 3,
            marka_id: 1,
            title: "Yara Koruyucu Ekartör",
            image: "./assets/images/common/products/yara_koruyucu_ekartör.jpg",
        },
        product_4: {
            id: 4,
            marka_id: 1,
            title: "Sakşın İrigasyon Sistemi",
            image: "./assets/images/common/products/suction.jpg",
        },
        product_5: {
            id: 5,
            marka_id: 1,
            title: "Bipolar Bıçaklı Forseps",
            image: "./assets/images/common/products/bipolar.jpg",
        },
        product_6: {
            id: 6,
            marka_id: 1,
            title: "Çok Girişli Port",
            image: "./assets/images/common/products/port.jpeg",
        },
        product_7: {
            id: 7,
            marka_id: 1,
            title: "Spesimen Torbası",
            image: "./assets/images/common/products/spesimen.jpg",
        },
        product_8: {
            id: 8,
            marka_id: 2,
            title: "Zero",
            image: "./assets/images/common/products/zero.png",
        },
        product_9: {
            id: 9,
            marka_id: 2,
            title: "Slim",
            image: "./assets/images/common/products/slim.png",
        },
        product_10: {
            id: 10,
            marka_id: 2,
            title: "Normal",
            image: "./assets/images/common/products/normal.png",
        },
        product_11: {
            id: 11,
            marka_id: 2,
            title: "Large",
            image: "./assets/images/common/products/large.png",
        },
        product_12: {
            id: 12,
            marka_id: 2,
            title: "Extra",
            image: "./assets/images/common/products/extra.png",
        },
        product_13: {
            id: 13,
            marka_id: 1,
            title: "İnsüflatör İğnesi",
            image: "./assets/images/common/products/insüflatör.png",
        },
        product_14: {
            id: 14,
            marka_id: 3,
            title: "body-jet Liposuction Cihazı",
            image: "./assets/images/common/products/liposuction.png",
        },
        product_15: {
            id: 15,
            marka_id: 3,
            title: "body-jet eco Liposuction Cihazı",
            image: "./assets/images/common/products/liposuction_eco.png",
        },
        product_16: {
            id: 16,
            marka_id: 3,
            title: "body-jet evo Liposuction Cihazı",
            image: "./assets/images/common/products/liposuction_evo.png",
        },
        product_17: {
            id: 17,
            marka_id: 4,
            title: "Mesh Ürün Grubu",
            image: "./assets/images/common/products/mesh.png",
        },
        product_18: {
            id: 18,
            marka_id: 5,
            title: "ICONIC IMAGE Elektrocerrahi Ünitesi",
            image: "./assets/images/common/products/image.png",
        },
        product_19: {
            id: 19,
            marka_id: 5,
            title: "ICONIC-IS410-Elektrocerrahi Ünitesi",
            image: "./assets/images/common/products/is410.png",
        },
        product_20: {
            id: 20,
            marka_id: 5,
            title: "ICONIC-IS410S Elektrocerrahi Ünitesi",
            image: "./assets/images/common/products/is410s.png",
        },
        product_21: {
            id: 21,
            marka_id: 5,
            title: "APS Argon Plazma Ünitesi",
            image: "./assets/images/common/products/argon.png",
        },
        product_22: {
            id: 22,
            marka_id: 5,
            title: "MEG-1 Elektrokoter Cihazı",
            image: "./assets/images/common/products/meg1.png",
        },
        product_23: {
            id: 23,
            marka_id: 5,
            title: "MEG1-E Endoskopik Elektrokoter Cihazı",
            image: "./assets/images/common/products/meg1e.png",
        },
        product_24: {
            id: 24,
            marka_id: 5,
            title: "MEG1-R Radyofrekans Elektrokoter Cihazı",
            image: "./assets/images/common/products/meg1r.png",
        },
        product_25: {
            id: 25,
            marka_id: 5,
            title: "MEG-2 Damar Mühürleme Cihazı",
            image: "./assets/images/common/products/meg2.png",
        },
        product_26: {
            id: 26,
            marka_id: 5,
            title: "Kablosuz Ayak Pedalları",
            image: "./assets/images/common/products/pedal.png",
        },
        product_27: {
            id: 27,
            marka_id: 6,
            title: "ND12 Hastabaşı Monitörü",
            image: "./assets/images/common/products/nd12.jpg",
        },
        product_28: {
            id: 28,
            marka_id: 6,
            title: "Star 8000 Hastabaşı Monitörü",
            image: "./assets/images/common/products/star8000.jpeg",
        },
        product_29: {
            id: 29,
            marka_id: 6,
            title: "NC5 Vital Monitör",
            image: "./assets/images/common/products/nc5.png",
        },
        product_30: {
            id: 30,
            marka_id: 6,
            title: "NC6 Vital Monitör",
            image: "./assets/images/common/products/nc6.png",
        },
        product_31: {
            id: 31,
            marka_id: 6,
            title: "NC7 Vital Monitör",
            image: "./assets/images/common/products/nc7.webp",
        },
        product_32: {
            id: 32,
            marka_id: 6,
            title: "H3 3 Kanallı EKG Cihazı",
            image: "./assets/images/common/products/h3.webp",
        },
        product_33: {
            id: 33,
            marka_id: 6,
            title: "CM 1200B EKG Cihazı",
            image: "./assets/images/common/products/1200b.jpg",
        },
        product_34: {
            id: 34,
            marka_id: 6,
            title: "CM 1200A EKG Cihazı",
            image: "./assets/images/common/products/1200a.jpg",
        },

    },
    en: {
        product_1: {
            id: 1,
            marka_id: 1,
            title: "Trokar",
            image: "./assets/images/common/products/trokar.png",
        },
        product_2: {
            id: 2,
            marka_id: 1,
            title: "Hand Tools",
            image: "./assets/images/common/products/el_aletleri.jpg",
        },
        product_3: {
            id: 3,
            marka_id: 1,
            title: "Wound Protector Retractor",
            image: "./assets/images/common/products/yara_koruyucu_ekartör.jpg",
        },
        product_4: {
            id: 4,
            marka_id: 1,
            title: "Suction Irrigation System",
            image: "./assets/images/common/products/suction.jpg",
        },
        product_5: {
            id: 5,
            marka_id: 1,
            title: "Bipolar Blade Forceps",
            image: "./assets/images/common/products/bipolar.jpg",
        },
        product_6: {
            id: 6,
            marka_id: 1,
            title: "Multi-Input Port",
            image: "./assets/images/common/products/port.jpeg",
        },
        product_7: {
            id: 7,
            marka_id: 1,
            title: "Specimen Bag",
            image: "./assets/images/common/products/spesimen.jpg",
        },
        product_8: {
            id: 8,
            marka_id: 2,
            title: "Zero",
            image: "./assets/images/common/products/zero.png",
        },
        product_9: {
            id: 9,
            marka_id: 2,
            title: "Slim",
            image: "./assets/images/common/products/slim.png",
        },
        product_10: {
            id: 10,
            marka_id: 2,
            title: "Normal",
            image: "./assets/images/common/products/normal.png",
        },
        product_11: {
            id: 11,
            marka_id: 2,
            title: "Large",
            image: "./assets/images/common/products/large.png",
        },
        product_12: {
            id: 12,
            marka_id: 2,
            title: "Extra",
            image: "./assets/images/common/products/extra.png",
        },
        product_13: {
            id: 13,
            marka_id: 1,
            title: "Insufflator Needle",
            image: "./assets/images/common/products/insüflatör.png",
        },
        product_14: {
            id: 14,
            marka_id: 3,
            title: "body-jet Liposuction Device",
            image: "./assets/images/common/products/liposuction.png",
        },
        product_15: {
            id: 15,
            marka_id: 3,
            title: "body-jet eco Liposuction Device",
            image: "./assets/images/common/products/liposuction_eco.png",
        },
        product_16: {
            id: 16,
            marka_id: 3,
            title: "body-jet evo Liposuction Device",
            image: "./assets/images/common/products/liposuction_evo.png",
        },
        product_17: {
            id: 17,
            marka_id: 4,
            title: "Mesh Product Group",
            image: "./assets/images/common/products/mesh.png",
        },
        product_18: {
            id: 18,
            marka_id: 5,
            title: "ICONIC IMAGE Electrosurgery Unit",
            image: "./assets/images/common/products/image.png",
        },
        product_19: {
            id: 19,
            marka_id: 5,
            title: "ICONIC-IS410 Electrosurgery Unit",
            image: "./assets/images/common/products/is410.png",
        },
        product_20: {
            id: 20,
            marka_id: 5,
            title: "ICONIC-IS410S Electrosurgery Unit",
            image: "./assets/images/common/products/is410s.png",
        },
        product_21: {
            id: 21,
            marka_id: 5,
            title: "APS Argon Plasma Unit",
            image: "./assets/images/common/products/argon.png",
        },
        product_22: {
            id: 22,
            marka_id: 5,
            title: "MEG-1 Elektrokoter Device",
            image: "./assets/images/common/products/meg1.png",
        },
        product_23: {
            id: 23,
            marka_id: 5,
            title: "MEG1-E Endoskopik Elektrokoter Device",
            image: "./assets/images/common/products/meg1e.png",
        },
        product_24: {
            id: 24,
            marka_id: 5,
            title: "MEG1-R Radiofrequency Elektrokoter Device",
            image: "./assets/images/common/products/meg1r.png",
        },
        product_25: {
            id: 25,
            marka_id: 5,
            title: "MEG-2 Vein Sealing Device",
            image: "./assets/images/common/products/meg2.png",
        },
        product_26: {
            id: 26,
            marka_id: 5,
            title: "Wireless Foot Pedals",
            image: "./assets/images/common/products/pedal.png",
        },
        product_27: {
            id: 27,
            marka_id: 6,
            title: "ND12 Bedside Monitor",
            image: "./assets/images/common/products/nd12.jpg",
        },
        product_28: {
            id: 28,
            marka_id: 6,
            title: "Star 8000 Bedside Monitor",
            image: "./assets/images/common/products/star8000.jpeg",
        },
        product_29: {
            id: 29,
            marka_id: 6,
            title: "NC5 Vital Monitor",
            image: "./assets/images/common/products/nc5.png",
        },
        product_30: {
            id: 30,
            marka_id: 6,
            title: "NC6 Vital Monitoor",
            image: "./assets/images/common/products/nc6.png",
        },
        product_31: {
            id: 31,
            marka_id: 6,
            title: "NC7 Vital Monitor",
            image: "./assets/images/common/products/nc7.webp",
        },
        product_32: {
            id: 32,
            marka_id: 6,
            title: "H3 3 Channel ECG Device",
            image: "./assets/images/common/products/h3.webp",
        },
        product_33: {
            id: 33,
            marka_id: 6,
            title: "CM 1200B ECG Device",
            image: "./assets/images/common/products/1200b.jpg",
        },
        product_34: {
            id: 34,
            marka_id: 6,
            title: "CM 1200A ECG Device",
            image: "./assets/images/common/products/1200a.jpg",
        },

    },
    de: {
        product_1: {
            id: 1,
            marka_id: 1,
            title: "Trokar",
            image: "./assets/images/common/products/trokar.png",
        },
        product_2: {
            id: 2,
            marka_id: 1,
            title: "Handwerkzeuge",
            image: "./assets/images/common/products/el_aletleri.jpg",
        },
        product_3: {
            id: 3,
            marka_id: 1,
            title: "Wundschutzretraktor",
            image: "./assets/images/common/products/yara_koruyucu_ekartör.jpg",
        },
        product_4: {
            id: 4,
            marka_id: 1,
            title: "Saug-Bewässerungssystem",
            image: "./assets/images/common/products/suction.jpg",
        },
        product_5: {
            id: 5,
            marka_id: 1,
            title: "Bipolare Klingenpinzette",
            image: "./assets/images/common/products/bipolar.jpg",
        },
        product_6: {
            id: 6,
            marka_id: 1,
            title: "Multi-Input-Anschluss",
            image: "./assets/images/common/products/port.jpeg",
        },
        product_7: {
            id: 7,
            marka_id: 1,
            title: "Probenbeutel",
            image: "./assets/images/common/products/spesimen.jpg",
        },
        product_8: {
            id: 8,
            marka_id: 2,
            title: "Null",
            image: "./assets/images/common/products/zero.png",
        },
        product_9: {
            id: 9,
            marka_id: 2,
            title: "Schlank",
            image: "./assets/images/common/products/slim.png",
        },
        product_10: {
            id: 10,
            marka_id: 2,
            title: "Normal",
            image: "./assets/images/common/products/normal.png",
        },
        product_11: {
            id: 11,
            marka_id: 2,
            title: "Groß",
            image: "./assets/images/common/products/large.png",
        },
        product_12: {
            id: 12,
            marka_id: 2,
            title: "Extra",
            image: "./assets/images/common/products/extra.png",
        },
        product_13: {
            id: 13,
            marka_id: 1,
            title: "Insufflator-Nadel",
            image: "./assets/images/common/products/insüflatör.png",
        },
        product_14: {
            id: 14,
            marka_id: 3,
            title: "body-jet Liposuktion Gerät",
            image: "./assets/images/common/products/liposuction.png",
        },
        product_15: {
            id: 15,
            marka_id: 3,
            title: "body-jet eco Liposuktion Gerät",
            image: "./assets/images/common/products/liposuction_eco.png",
        },
        product_16: {
            id: 16,
            marka_id: 3,
            title: "body-jet evo Liposuktion Gerät",
            image: "./assets/images/common/products/liposuction_evo.png",
        },
        product_17: {
            id: 17,
            marka_id: 4,
            title: "Produktgruppe Mesh",
            image: "./assets/images/common/products/mesh.png",
        },
        product_18: {
            id: 18,
            marka_id: 5,
            title: "ICONIC IMAGE Elektrochirurgiegerät",
            image: "./assets/images/common/products/image.png",
        },
        product_19: {
            id: 19,
            marka_id: 5,
            title: "ICONIC-IS410 Elektrochirurgiegerät",
            image: "./assets/images/common/products/is410.png",
        },
        product_20: {
            id: 20,
            marka_id: 5,
            title: "ICONIC-IS410S Elektrochirurgiegerät",
            image: "./assets/images/common/products/is410s.png",
        },
        product_21: {
            id: 21,
            marka_id: 5,
            title: "APS Argon Plasma Gerät",
            image: "./assets/images/common/products/argon.png",
        },
        product_22: {
            id: 22,
            marka_id: 5,
            title: "MEG-1 Elektrokauterisationsgerät",
            image: "./assets/images/common/products/meg1.png",
        },
        product_23: {
            id: 23,
            marka_id: 5,
            title: "MEG1-E Endoskopisches Elektrokauterisationsgerät",
            image: "./assets/images/common/products/meg1e.png",
        },
        product_24: {
            id: 24,
            marka_id: 5,
            title: "MEG1-R Radiofrequenz-Elektrokauterisationsgerät",
            image: "./assets/images/common/products/meg1r.png",
        },
        product_25: {
            id: 25,
            marka_id: 5,
            title: "MEG-2 Venenversiegelungsgerät",
            image: "./assets/images/common/products/meg2.png",
        },
        product_26: {
            id: 26,
            marka_id: 5,
            title: "Kabellose Fußpedale",
            image: "./assets/images/common/products/pedal.png",
        },
        product_27: {
            id: 27,
            marka_id: 6,
            title: "ND12 Monitor am Krankenbett",
            image: "./assets/images/common/products/nd12.jpg",
        },
        product_28: {
            id: 28,
            marka_id: 6,
            title: "Star 8000 Monitor am Krankenbett",
            image: "./assets/images/common/products/star8000.jpeg",
        },
        product_29: {
            id: 29,
            marka_id: 6,
            title: "NC5 Vital Monitor",
            image: "./assets/images/common/products/nc5.png",
        },
        product_30: {
            id: 30,
            marka_id: 6,
            title: "NC6 Vital Monitor",
            image: "./assets/images/common/products/nc6.png",
        },
        product_31: {
            id: 31,
            marka_id: 6,
            title: "NC7 Vital Monitor",
            image: "./assets/images/common/products/nc7.webp",
        },
        product_32: {
            id: 32,
            marka_id: 6,
            title: "H3 3-Kanal-EKG-Gerät",
            image: "./assets/images/common/products/h3.webp",
        },
        product_33: {
            id: 33,
            marka_id: 6,
            title: "CM 1200B EKG-Gerät",
            image: "./assets/images/common/products/1200b.jpg",
        },
        product_34: {
            id: 34,
            marka_id: 6,
            title: "CM 1200A EKG-Gerät",
            image: "./assets/images/common/products/1200a.jpg",
        },

    },
    fr: {
        product_1: {
            id: 1,
            marka_id: 1,
            title: "Trokar",
            image: "./assets/images/common/products/trokar.png",
        },
        product_2: {
            id: 2,
            marka_id: 1,
            title: "Outils à main",
            image: "./assets/images/common/products/el_aletleri.jpg",
        },
        product_3: {
            id: 3,
            marka_id: 1,
            title: "Écarteur de protection des plaies",
            image: "./assets/images/common/products/yara_koruyucu_ekartör.jpg",
        },
        product_4: {
            id: 4,
            marka_id: 1,
            title: "Système d'irrigation par aspiration",
            image: "./assets/images/common/products/suction.jpg",
        },
        product_5: {
            id: 5,
            marka_id: 1,
            title: "Pince à lames bipolaires",
            image: "./assets/images/common/products/bipolar.jpg",
        },
        product_6: {
            id: 6,
            marka_id: 1,
            title: "Port à entrées multiples",
            image: "./assets/images/common/products/port.jpeg",
        },
        product_7: {
            id: 7,
            marka_id: 1,
            title: "Sac à spécimens",
            image: "./assets/images/common/products/spesimen.jpg",
        },
        product_8: {
            id: 8,
            marka_id: 2,
            title: "Zéro",
            image: "./assets/images/common/products/zero.png",
        },
        product_9: {
            id: 9,
            marka_id: 2,
            title: "Mince",
            image: "./assets/images/common/products/slim.png",
        },
        product_10: {
            id: 10,
            marka_id: 2,
            title: "Normal",
            image: "./assets/images/common/products/normal.png",
        },
        product_11: {
            id: 11,
            marka_id: 2,
            title: "Grandes dimensions",
            image: "./assets/images/common/products/large.png",
        },
        product_12: {
            id: 12,
            marka_id: 2,
            title: "Extra",
            image: "./assets/images/common/products/extra.png",
        },
        product_13: {
            id: 13,
            marka_id: 1,
            title: "Aiguille d'insufflateur",
            image: "./assets/images/common/products/insüflatör.png",
        },
        product_14: {
            id: 14,
            marka_id: 3,
            title: "body-jet Dispositif de liposuccion",
            image: "./assets/images/common/products/liposuction.png",
        },
        product_15: {
            id: 15,
            marka_id: 3,
            title: "body-jet eco Dispositif de liposuccion",
            image: "./assets/images/common/products/liposuction_eco.png",
        },
        product_16: {
            id: 16,
            marka_id: 3,
            title: "body-jet evo Dispositif de liposuccion",
            image: "./assets/images/common/products/liposuction_evo.png",
        },
        product_17: {
            id: 17,
            marka_id: 4,
            title: "Groupe de produits maille",
            image: "./assets/images/common/products/mesh.png",
        },
        product_18: {
            id: 18,
            marka_id: 5,
            title: "ICONIC IMAGE Unité d'électrochirurgie",
            image: "./assets/images/common/products/image.png",
        },
        product_19: {
            id: 19,
            marka_id: 5,
            title: "ICONIC-IS410 Unité d'électrochirurgie",
            image: "./assets/images/common/products/is410.png",
        },
        product_20: {
            id: 20,
            marka_id: 5,
            title: "ICONIC-IS410S Unité d'électrochirurgie",
            image: "./assets/images/common/products/is410s.png",
        },
        product_21: {
            id: 21,
            marka_id: 5,
            title: "APS Unité de plasma d'argon",
            image: "./assets/images/common/products/argon.png",
        },
        product_22: {
            id: 22,
            marka_id: 5,
            title: "MEG-1 Dispositif d'électrocautère",
            image: "./assets/images/common/products/meg1.png",
        },
        product_23: {
            id: 23,
            marka_id: 5,
            title: "MEG1-E Dispositif d'électrocautère endoscopique",
            image: "./assets/images/common/products/meg1e.png",
        },
        product_24: {
            id: 24,
            marka_id: 5,
            title: "MEG1-R Dispositif d'électrocautère par radiofréquence",
            image: "./assets/images/common/products/meg1r.png",
        },
        product_25: {
            id: 25,
            marka_id: 5,
            title: "MEG-2 Dispositif de scellement des veines",
            image: "./assets/images/common/products/meg2.png",
        },
        product_26: {
            id: 26,
            marka_id: 5,
            title: "Pédales sans fil",
            image: "./assets/images/common/products/pedal.png",
        },
        product_27: {
            id: 27,
            marka_id: 6,
            title: "ND12 Moniteur de chevet",
            image: "./assets/images/common/products/nd12.jpg",
        },
        product_28: {
            id: 28,
            marka_id: 6,
            title: "Star 8000 Moniteur de chevet",
            image: "./assets/images/common/products/star8000.jpeg",
        },
        product_29: {
            id: 29,
            marka_id: 6,
            title: "NC5 Vital Monitör",
            image: "./assets/images/common/products/nc5.png",
        },
        product_30: {
            id: 30,
            marka_id: 6,
            title: "NC6 Moniteur vital",
            image: "./assets/images/common/products/nc6.png",
        },
        product_31: {
            id: 31,
            marka_id: 6,
            title: "NC7 Moniteur vital",
            image: "./assets/images/common/products/nc7.webp",
        },
        product_32: {
            id: 32,
            marka_id: 6,
            title: "H3 Dispositif ECG à 3 canaux",
            image: "./assets/images/common/products/h3.webp",
        },
        product_33: {
            id: 33,
            marka_id: 6,
            title: "CM 1200B Dispositif ECG",
            image: "./assets/images/common/products/1200b.jpg",
        },
        product_34: {
            id: 34,
            marka_id: 6,
            title: "CM 1200A Dispositif ECG",
            image: "./assets/images/common/products/1200a.jpg",
        },

    },
    ch: {
        product_1: {
            id: 1,
            marka_id: 1,
            title: "特罗卡",
            image: "./assets/images/common/products/trokar.png",
        },
        product_2: {
            id: 2,
            marka_id: 1,
            title: "手动工具",
            image: "./assets/images/common/products/el_aletleri.jpg",
        },
        product_3: {
            id: 3,
            marka_id: 1,
            title: "伤口保护器牵引器",
            image: "./assets/images/common/products/yara_koruyucu_ekartör.jpg",
        },
        product_4: {
            id: 4,
            marka_id: 1,
            title: "抽吸灌溉系统",
            image: "./assets/images/common/products/suction.jpg",
        },
        product_5: {
            id: 5,
            marka_id: 1,
            title: "双极刀片镊子",
            image: "./assets/images/common/products/bipolar.jpg",
        },
        product_6: {
            id: 6,
            marka_id: 1,
            title: "多输入端口",
            image: "./assets/images/common/products/port.jpeg",
        },
        product_7: {
            id: 7,
            marka_id: 1,
            title: "样本袋",
            image: "./assets/images/common/products/spesimen.jpg",
        },
        product_8: {
            id: 8,
            marka_id: 2,
            title: "零",
            image: "./assets/images/common/products/zero.png",
        },
        product_9: {
            id: 9,
            marka_id: 2,
            title: "苗条",
            image: "./assets/images/common/products/slim.png",
        },
        product_10: {
            id: 10,
            marka_id: 2,
            title: "正常",
            image: "./assets/images/common/products/normal.png",
        },
        product_11: {
            id: 11,
            marka_id: 2,
            title: "大型",
            image: "./assets/images/common/products/large.png",
        },
        product_12: {
            id: 12,
            marka_id: 2,
            title: "额外",
            image: "./assets/images/common/products/extra.png",
        },
        product_13: {
            id: 13,
            marka_id: 1,
            title: "充气针",
            image: "./assets/images/common/products/insüflatör.png",
        },
        product_14: {
            id: 14,
            marka_id: 3,
            title: "喷体吸脂装置",
            image: "./assets/images/common/products/liposuction.png",
        },
        product_15: {
            id: 15,
            marka_id: 3,
            title: "body-jet eco Cihazı吸脂术",
            image: "./assets/images/common/products/liposuction_eco.png",
        },
        product_16: {
            id: 16,
            marka_id: 3,
            title: "body-jet evo 吸脂术 Cihazı",
            image: "./assets/images/common/products/liposuction_evo.png",
        },
        product_17: {
            id: 17,
            marka_id: 4,
            title: "网格产品组",
            image: "./assets/images/common/products/mesh.png",
        },
        product_18: {
            id: 18,
            marka_id: 5,
            title: "ICONIC IMAGE 电外科设备",
            image: "./assets/images/common/products/image.png",
        },
        product_19: {
            id: 19,
            marka_id: 5,
            title: "ICONIC-IS410 电外科设备",
            image: "./assets/images/common/products/is410.png",
        },
        product_20: {
            id: 20,
            marka_id: 5,
            title: "ICONIC-IS410S 电外科设备",
            image: "./assets/images/common/products/is410s.png",
        },
        product_21: {
            id: 21,
            marka_id: 5,
            title: "APS 氩等离子装置",
            image: "./assets/images/common/products/argon.png",
        },
        product_22: {
            id: 22,
            marka_id: 5,
            title: "MEG-1 电烧装置",
            image: "./assets/images/common/products/meg1.png",
        },
        product_23: {
            id: 23,
            marka_id: 5,
            title: "MEG1-E 内窥镜电烧装置",
            image: "./assets/images/common/products/meg1e.png",
        },
        product_24: {
            id: 24,
            marka_id: 5,
            title: "MEG1-R 射频电烧装置",
            image: "./assets/images/common/products/meg1r.png",
        },
        product_25: {
            id: 25,
            marka_id: 5,
            title: "MEG-2 静脉密封装置",
            image: "./assets/images/common/products/meg2.png",
        },
        product_26: {
            id: 26,
            marka_id: 5,
            title: "无线脚踏板",
            image: "./assets/images/common/products/pedal.png",
        },
        product_27: {
            id: 27,
            marka_id: 6,
            title: "ND12 床边监视器",
            image: "./assets/images/common/products/nd12.jpg",
        },
        product_28: {
            id: 28,
            marka_id: 6,
            title: "Star 8000 床旁监护仪",
            image: "./assets/images/common/products/star8000.jpeg",
        },
        product_29: {
            id: 29,
            marka_id: 6,
            title: "NC5 生命监测仪",
            image: "./assets/images/common/products/nc5.png",
        },
        product_30: {
            id: 30,
            marka_id: 6,
            title: "NC6 生命监测仪",
            image: "./assets/images/common/products/nc6.png",
        },
        product_31: {
            id: 31,
            marka_id: 6,
            title: "NC7 生命监测仪",
            image: "./assets/images/common/products/nc7.webp",
        },
        product_32: {
            id: 32,
            marka_id: 6,
            title: "H3 3 通道心电图仪",
            image: "./assets/images/common/products/h3.webp",
        },
        product_33: {
            id: 33,
            marka_id: 6,
            title: "CM 1200B 心电图仪",
            image: "./assets/images/common/products/1200b.jpg",
        },
        product_34: {
            id: 34,
            marka_id: 6,
            title: "CM 1200A 心电图仪",
            image: "./assets/images/common/products/1200a.jpg",
        },

    },
    ar: {
        product_1: {
            id: 1,
            marka_id: 1,
            title: "تروكار",
            image: "./assets/images/common/products/trokar.png",
        },
        product_2: {
            id: 2,
            marka_id: 1,
            title: "الأدوات اليدوية",
            image: "./assets/images/common/products/el_aletleri.jpg",
        },
        product_3: {
            id: 3,
            marka_id: 1,
            title: "مبعدة واقي الجروح",
            image: "./assets/images/common/products/yara_koruyucu_ekartör.jpg",
        },
        product_4: {
            id: 4,
            marka_id: 1,
            title: "نظام الري بالشفط",
            image: "./assets/images/common/products/suction.jpg",
        },
        product_5: {
            id: 5,
            marka_id: 1,
            title: "ملقط الشفرة ثنائي القطب",
            image: "./assets/images/common/products/bipolar.jpg",
        },
        product_6: {
            id: 6,
            marka_id: 1,
            title: "منفذ متعدد المدخلات",
            image: "./assets/images/common/products/port.jpeg",
        },
        product_7: {
            id: 7,
            marka_id: 1,
            title: "حقيبة العينات",
            image: "./assets/images/common/products/spesimen.jpg",
        },
        product_8: {
            id: 8,
            marka_id: 2,
            title: "صفر",
            image: "./assets/images/common/products/zero.png",
        },
        product_9: {
            id: 9,
            marka_id: 2,
            title: "نحيف",
            image: "./assets/images/common/products/slim.png",
        },
        product_10: {
            id: 10,
            marka_id: 2,
            title: "عادي",
            image: "./assets/images/common/products/normal.png",
        },
        product_11: {
            id: 11,
            marka_id: 2,
            title: "كبير",
            image: "./assets/images/common/products/large.png",
        },
        product_12: {
            id: 12,
            marka_id: 2,
            title: "إضافي",
            image: "./assets/images/common/products/extra.png",
        },
        product_13: {
            id: 13,
            marka_id: 1,
            title: "إبرة النفخ",
            image: "./assets/images/common/products/insüflatör.png",
        },
        product_14: {
            id: 14,
            marka_id: 3,
            title: "جهاز شفط الدهون النفاث للجسم",
            image: "./assets/images/common/products/liposuction.png",
        },
        product_15: {
            id: 15,
            marka_id: 3,
            title: "شفط دهون الجسم النفاثة الصديقة للبيئة Cihazı",
            image: "./assets/images/common/products/liposuction_eco.png",
        },
        product_16: {
            id: 16,
            marka_id: 3,
            title: "شفط الدهون من الجسم النفاث لشفط الدهون Cihazı",
            image: "./assets/images/common/products/liposuction_evo.png",
        },
        product_17: {
            id: 17,
            marka_id: 4,
            title: "مجموعة المنتجات الشبكية",
            image: "./assets/images/common/products/mesh.png",
        },
        product_18: {
            id: 18,
            marka_id: 5,
            title: "وحدة ICONIC IMAGE للجراحة الكهربائية",
            image: "./assets/images/common/products/image.png",
        },
        product_19: {
            id: 19,
            marka_id: 5,
            title: "وحدة ICONIC-IS410 للجراحة الكهربائية",
            image: "./assets/images/common/products/is410.png",
        },
        product_20: {
            id: 20,
            marka_id: 5,
            title: "وحدة الجراحة الكهربية ICONIC-IS410S",
            image: "./assets/images/common/products/is410s.png",
        },
        product_21: {
            id: 21,
            marka_id: 5,
            title: "APS وحدة بلازما الأرغون",
            image: "./assets/images/common/products/argon.png",
        },
        product_22: {
            id: 22,
            marka_id: 5,
            title: "جهاز الكي الكهربائي MEG-1",
            image: "./assets/images/common/products/meg1.png",
        },
        product_23: {
            id: 23,
            marka_id: 5,
            title: "جهاز الكي الكهربائي بالمنظار الداخلي MEG1-E",
            image: "./assets/images/common/products/meg1e.png",
        },
        product_24: {
            id: 24,
            marka_id: 5,
            title: "جهاز الكي الكهربي بالترددات الراديوية MEG1-R",
            image: "./assets/images/common/products/meg1r.png",
        },
        product_25: {
            id: 25,
            marka_id: 5,
            title: "جهاز ختم الوريد MEG-2",
            image: "./assets/images/common/products/meg2.png",
        },
        product_26: {
            id: 26,
            marka_id: 5,
            title: "دواسات قدم لاسلكية",
            image: "./assets/images/common/products/pedal.png",
        },
        product_27: {
            id: 27,
            marka_id: 6,
            title: "شاشة ND12 بجانب السرير",
            image: "./assets/images/common/products/nd12.jpg",
        },
        product_28: {
            id: 28,
            marka_id: 6,
            title: "شاشة العرض بجانب السرير Star 8000",
            image: "./assets/images/common/products/star8000.jpeg",
        },
        product_29: {
            id: 29,
            marka_id: 6,
            title: "المراقب الحيوي NC5",
            image: "./assets/images/common/products/nc5.png",
        },
        product_30: {
            id: 30,
            marka_id: 6,
            title: "المراقب الحيوي NC6",
            image: "./assets/images/common/products/nc6.png",
        },
        product_31: {
            id: 31,
            marka_id: 6,
            title: "المراقب الحيوي NC7",
            image: "./assets/images/common/products/nc7.webp",
        },
        product_32: {
            id: 32,
            marka_id: 6,
            title: "جهاز تخطيط كهربية القلب H3 3 قنوات",
            image: "./assets/images/common/products/h3.webp",
        },
        product_33: {
            id: 33,
            marka_id: 6,
            title: "جهاز تخطيط كهربية القلب CM 1200B",
            image: "./assets/images/common/products/1200b.jpg",
        },
        product_34: {
            id: 34,
            marka_id: 6,
            title: "جهاز تخطيط كهربية القلب CM 1200A",
            image: "./assets/images/common/products/1200a.jpg",
        },

    },
}

const markas = {
    marka_1: {
        id: 1,
        name: "Lagis",
        image: "./assets/images/marka_logolar/Lagis.png",
        data_key: "marka_1_icerik"
    },
    marka_2: {
        id: 2,
        name: "Vathin",
        image: "./assets/images/marka_logolar/Vathin.png",
        data_key: "marka_2_icerik"
    },
    marka_3: {
        id: 3,
        name: "Human Med",
        image: "./assets/images/marka_logolar/HumanMed.png",
        data_key: "marka_3_icerik"
    },
    marka_4: {
        id: 4,
        name: "Cousin Surgery",
        image: "./assets/images/marka_logolar/Cousin Surgery.png",
        data_key: "marka_4_icerik"
    },
    marka_5: {
        id: 5,
        name: "Kavandish System",
        image: "./assets/images/marka_logolar/Kavandish.png",
        data_key: "marka_5_icerik"
    },
    marka_6: {
        id: 6,
        name: "Comen",
        image: "./assets/images/marka_logolar/Comen.png",
        data_key: "marka_6_icerik"
    }
}

const pageHandlers = {
    "index.html": generateBlogSlides,
    "blog.html": generateBlogPages,
    "blog-details.html": generateBlogDetail,
    "products.html": generateProducts,
    "page-contact.html": sendMail,
    "integrations.html": generateIntegrations,
}
const handleItem = {
    "index.html": blogs,
    "blog.html": blogs,
    "blog-details.html": blogs,
    "products.html": products,
}
function changeLanguage(lang) {
    localStorage.setItem("language", lang);
    const currentLangElements = document.querySelectorAll(".current-lang");
    currentLangElements.forEach((element) => {
        element.textContent = lang.charAt(0).toUpperCase() + lang.slice(1).toLowerCase();;
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


const translations = {
    tr: {
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
        
    },
    en: {
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
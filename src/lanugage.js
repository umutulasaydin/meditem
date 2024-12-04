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
        icerik_4: "Röportajlar, ipuçları, kılavuzlar, sektördeki en iyi uygulamalar ve haberler.",
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
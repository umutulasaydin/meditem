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
    },
    en: {
        anaSayfa: "Ana Sayfa2",
        hakkimizda: "Hakkımızda",
        urunler: "Ürünler",
        blog: "Blog",
        iletisim: "İletişim",
        tema: "Tema Seç:",
        language: "Dil Seç:",
    },
    de: {
        anaSayfa: "Ana Sayfa3",
        hakkimizda: "Hakkımızda",
        urunler: "Ürünler",
        blog: "Blog",
        iletisim: "İletişim",
        tema: "Tema Seç:",
        language: "Dil Seç:",
    },
    fr: {
        anaSayfa: "Ana Sayfa4",
        hakkimizda: "Hakkımızda",
        urunler: "Ürünler",
        blog: "Blog",
        iletisim: "İletişim",
        tema: "Tema Seç:",
        language: "Dil Seç:",
    },
    ch: {
        anaSayfa: "Ana Sayfa5",
        hakkimizda: "Hakkımızda",
        urunler: "Ürünler",
        blog: "Blog",
        iletisim: "İletişim",
        tema: "Tema Seç:",
        language: "Dil Seç:",
    },
    ar: {
        anaSayfa: "Ana Sayfa6",
        hakkimizda: "Hakkımızda",
        urunler: "Ürünler",
        blog: "Blog",
        iletisim: "İletişim",
        tema: "Tema Seç:",
        language: "Dil Seç:",
    }
}
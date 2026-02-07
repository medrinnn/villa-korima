// Language switch functionality
function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-en]").forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });
}

// Lightbox functionality
const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

images.forEach(img => {
    img.onclick = () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    };
});

lightbox.onclick = () => lightbox.style.display = "none";

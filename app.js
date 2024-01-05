window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add("preload-finish");
});

const hamburger = document.querySelector(".hamburger-container");
const navMenu = document.querySelector("ol.hero-1huvudsida");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})
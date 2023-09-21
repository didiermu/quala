document.querySelector(".navbar-toggler").addEventListener("click", () => {
    document.body.classList.toggle("hidden");
});

const swiper = new Swiper(".swiper-sabores", {
    direction: "horizontal",
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const swiperCategorias = new Swiper(".swiper-categorias", {
    direction: "horizontal",
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

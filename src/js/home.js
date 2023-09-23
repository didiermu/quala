document.querySelector(".navbar-toggler").addEventListener("click", () => {
    document.body.classList.toggle("hidden");
});

const anclas = document.querySelectorAll(".nav-link");
anclas.forEach((l) => {
    l.addEventListener("click", () => {
        document.body.classList.remove("hidden");
        document
            .querySelector("#navbarSupportedContent")
            .classList.remove("show");
        document.querySelector(".navbar-toggler").classList.add("collapsed");
        document
            .querySelector(".navbar-toggler")
            .setAttribute("aria-expanded", false);
    });
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

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 60,
    loop: true,
    navigation: {
        nextEl: ".swiper-buttn-next",
        prevEl: ".swiper-buttn-prev",
    },
    mousewheel: false,
    keyboard: true,
});
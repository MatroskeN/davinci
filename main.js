let swiper = new Swiper('.gallerySlider', {
    slidesPerView: 'auto',
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
        draggable: true,
        snapOnRelease: false,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
});

$('.renovationItem').on('click', function () {
    $('.renovationItem').removeClass('renovationItem__active')
    $(this).addClass('renovationItem__active')
})
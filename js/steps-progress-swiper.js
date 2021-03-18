document.addEventListener('DOMContentLoaded', () => {

    let swiper = new Swiper('.info-steps__left', {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        allowTouchMove: true,
        allowSlidePrev: true
    });

    swiper.allowSlidePrev = true

    let previewSwiper = new Swiper('.preview-screen__wrapper', {
        loop: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false
        },
        speed: 1200,
        pagination: {
            el: '.swiper-pagination'
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    })


});
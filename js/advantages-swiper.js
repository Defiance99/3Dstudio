document.addEventListener('DOMContentLoaded', () => {

    let swipePaginations = document.querySelectorAll('.advatanges__swiper-pagination');

    function showTActiveSlideTime(index) {
        swipePaginations[index].classList.add('advantages__swiper-slide_active');
    }

    function hiddenPrevSlideTime(index) {
        swipePaginations[index - 1].classList.remove('advantages__swiper-slide_active');
    }

    let swiper = new Swiper('.advantages__swiper-container', {
        loop: true,
        autoplay: {
            delay: 40000,
            disableOnInteraction: false
        },
        on: {
            afterInit: function() {
                showTActiveSlideTime(0);
            }
        }
    });
    
    for (let i = 0; i < swipePaginations.length; i++) {
        swipePaginations[i].addEventListener('click', () => {
            swiper.slideToLoop(i);
        });
    }

    swiper.on('realIndexChange', function() {
        showTActiveSlideTime(swiper.realIndex);
        hiddenPrevSlideTime(swiper.previousIndex);
    });

});
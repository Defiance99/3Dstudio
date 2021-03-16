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

    let progressBar = document.querySelectorAll('.progress-bar__interval_disable');
    let progressBarValue = document.querySelectorAll('.progress-bar__value');
    let windowHeight = window.innerHeight;
    let arrayProgressValue = ['90%', '87%', '79%'];

    document.addEventListener('scroll', () => {
        for (let i = 0; i < progressBar.length; i++) {
            if (!progressBar[i].classList.contains('progress-bar__interval_active') && progressBar[i].getBoundingClientRect().top - windowHeight <= 0) {
                activingProgressBar(i);
            }
        }

        function activingProgressBar(i) {
            let j = 0;
            let time = parseInt(arrayProgressValue[i].match(/\d+/)) / 4;
            progressBar[i].classList.add('progress-bar__interval_active');
            progressBar[i].style.width = arrayProgressValue[i];

            function progressValue() {
                if (progressBarValue[i].innerHTML == arrayProgressValue[i]) clearInterval(timer);

                j++;
                progressBarValue[i].innerHTML = j + '%';
            }

            let timer = setInterval(progressValue, time);
        }

    })
});
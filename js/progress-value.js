document.addEventListener('DOMContentLoaded', () => {
    let progressBar = document.querySelectorAll('.progress-bar__interval_disable');
    let progressBarValue = document.querySelectorAll('.progress-bar__value');
    let windowHeight = window.innerHeight;
    let arrayProgressValue = [];

    if (progressBarValue.length > 0) {
            document.addEventListener('scroll', () => {
        for (let i = 0; i < progressBar.length; i++) {
            if (!progressBar[i].classList.contains('progress-bar__interval_active') && progressBar[i].getBoundingClientRect().top - windowHeight <= 0) {
                arrayProgressValue.push(progressBarValue[i].getAttribute('data-progress-value'));
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
    }


    //data-single-value="321"
    // Single value
    let singleProgressValue = document.querySelectorAll('.single-progress-value');
    let arraySinlgeValues = [];
    let timeForSignleProgressValue = 2000;

    if (singleProgressValue.length > 0) {
        document.addEventListener('scroll', () => {
            for (let i = 0; i < singleProgressValue.length; i++) {
                if (!singleProgressValue[i].classList.contains('progress-bar__interval_active') && singleProgressValue[i].getBoundingClientRect().top - windowHeight <= 0) {
                    arraySinlgeValues.push(singleProgressValue[i].getAttribute('data-single-value'));
                    activingProgressBar(i);
                }
            }

            function activingProgressBar(i) {
                let j = 0;
                let time = timeForSignleProgressValue / 20;
                let gapValue = arraySinlgeValues[i] / time;
                console.log(time)
                console.log(gapValue)
                singleProgressValue[i].classList.add('progress-bar__interval_active');
    
                function progressValue() {
                    if (singleProgressValue[i].innerHTML == arraySinlgeValues[i]) clearInterval(timer);
                    j++;
                    singleProgressValue[i].innerHTML = j;
                }
    
                let timer = setInterval(progressValue, 20);
            }
        });
    }

});
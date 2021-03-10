document.addEventListener('DOMContentLoaded', () => {
    let header = document.querySelector('header');

    document.addEventListener('scroll', () => {
        if (window.pageYOffset !== 0) {
            header.classList.add('header_fixed');
        }else {
            header.classList.remove('header_fixed');
        }
    })
});
window.addEventListener('scroll', e => {
    const scrollY = window.pageYOffset,
        background = document.querySelector('.bp-header__bg');

    if (window.innerWidth < 800) {
        return;
    }

    if(background){
        background.style.top = `-${scrollY * 0.3}px`;
    }
});
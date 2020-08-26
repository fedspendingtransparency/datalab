(function () {
    function onLinkClick(e) {
        var target = e.srcElement,
            targetSelector, targetElement;

        if (target.nodeName !== 'A') {
            target = target.parentElement
        }

        targetSelector = target.getAttribute("href");
        targetElement = document.querySelector(targetSelector);

        e.preventDefault();

        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    function attachHandlers() {
        const scrollToEls = document.querySelectorAll('.scroll-to');
        
        for(let i = scrollToEls.length; i--;){
            scrollToEls[i].addEventListener("click", onLinkClick);
        }
    }

    attachHandlers();
})();
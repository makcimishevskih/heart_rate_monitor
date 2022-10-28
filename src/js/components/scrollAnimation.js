const scrollAnimation = () => {

    function opacityObserverFunction() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        };

        const observerOpacity = new IntersectionObserver((entries,observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    const lazyElem = entry.target;

                    lazyElem.classList.remove('animation');

                    observerOpacity.unobserve(lazyElem);
                    // console.log(lazyElem);
                }
            })
        },options);


        const animateBlocks = document.querySelectorAll('.animation');

        animateBlocks.forEach(el => {
            observerOpacity.observe(el);
        });
    }
    opacityObserverFunction();



}

export default scrollAnimation;
const moreLink = (parentSelector,moreSelector,backSelector) => {
    const parent = document.querySelector(parentSelector)
    const moreButtons = document.querySelectorAll(`.${moreSelector}`)
    const backButton = document.querySelectorAll(`.${backSelector}`)

    const contentBlocks = document.querySelectorAll('.catalog__item-content')
    const infoBlocks = document.querySelectorAll('.catalog__item-info')


    function hideBlock(arr,elActiveIndex) {
        arr[elActiveIndex].classList.add('active-link')
    }

    function showBlock(arr,elActiveIndex) {
        arr[elActiveIndex].classList.remove('active-link')
    }

    parent.addEventListener('click',(e) => {
        const t = e.target;
        if (t && t.classList.contains(moreSelector)) {
            moreButtons.forEach((el,i) => {
                if (el === t) {
                    hideBlock(contentBlocks,i);
                    showBlock(infoBlocks,i)
                }
            });
        } else if (t && t.classList.contains(backSelector)) {
            backButton.forEach((el,i) => {
                if (el === t) {
                    hideBlock(infoBlocks,i);
                    showBlock(contentBlocks,i)
                }
            });
        }
    });
}

export default moreLink;
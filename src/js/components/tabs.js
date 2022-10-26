const tabs = (parentSelector,tabsClass) => {
    const parent = document.querySelector(parentSelector)
    const tabs = document.querySelectorAll(`.${tabsClass}`)

    const reActivateTabs = (arr) => {
        arr.forEach(el => {
            el.classList.remove('active')
        });
    }

    const activateTabs = (arr,activeElIndex = 0) => {
        arr.forEach((el,i) => {
            if (i === activeElIndex) {
                el.classList.add('active')
            }
        })
    }
    reActivateTabs(tabs);
    activateTabs(tabs);

    parent.addEventListener('click',(e) => {
        const t = e.target;
        if (t && t.classList.contains(tabsClass)) {
            reActivateTabs(tabs)
            tabs.forEach((el,i) => {
                if (t === el) {
                    activateTabs(tabs,i)
                }
            })
        }
    })


}

export default tabs
import catalog from "./catalog.js";

const tabs = (state,parentSelector,tabsClass) => {
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
                const type = el.dataset.type;
                el.classList.add('active');
                state.tabActive = type;
                type === 'all' ? catalog('.catalog__list',state.catalogState) : filterCatalogItems();
            }
        })
    }
    reActivateTabs(tabs);
    activateTabs(tabs,0);

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

    function filterCatalogItems() {
        const filterCatalog = state.catalogState.filter(el => el.type === state.tabActive);
        state.filteredCatalog = filterCatalog;
        catalog('.catalog__list',state.filteredCatalog);
    }
}

export default tabs
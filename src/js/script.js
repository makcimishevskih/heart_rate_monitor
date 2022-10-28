import slider from './components/slider.js';
import tabs from './components/tabs.js';
import form from './components/form.js';
import modal from './components/modal.js';
import cart from './components/cart.js';
import catalog from './components/catalog.js';
import scrollAnimation from './components/scrollAnimation.js';

const state = {
    cartState: {
        cart: [],
        count: 0,
        sumPrice: 0,
    },
    catalogState: [
        { type: 'fitness',img: 'img/polar_pulsometr.png',title: 'Пульсометр Polar FT1',descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',promoPrice: '4 750',price: '4 500' },
        { type: 'run',img: 'img/polar_pulsometr.png',title: 'Пульсометр Suunto M2',descr: 'Пульсометр начального уровня с комфортным тканевым ремешком',promoPrice: '6 990',price: '6 641' },
        { type: 'fitness',img: 'img/polar_pulsometr.png',title: 'Пульсометр Polar FT4',descr: 'Улучшенная версия Polar FT1, имеющая следующие улучшения',promoPrice: '7 390',price: '7 021' },
        { type: 'fitness',img: 'img/polar_pulsometr.png',title: 'Пульсометр Polar FT1',descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',promoPrice: '4 750',price: '4 500' },
        { type: 'run',img: 'img/polar_pulsometr.png',title: 'Пульсометр Suunto M2',descr: 'Пульсометр начального уровня с комфортным тканевым ремешком',promoPrice: '6 990',price: '6 641' },
        { type: 'triatlon',img: 'img/polar_pulsometr.png',title: 'Пульсометр Polar FT4',descr: 'Улучшенная версия Polar FT1, имеющая следующие улучшения',promoPrice: '7 390',price: '7 021' },
    ],
    tabActive: 'all',
    filteredCatalog: []
}

// CATALOG TRANSFORM-DELAY, OTZIVI PODGYZIT' V STATE
// TYPE OF PULSOMETRS

window.addEventListener('DOMContentLoaded',() => {

    scrollAnimation();
    form(state.cartState);
    modal('modal-layout','modal__button','not-cart-form','modal__close-button');
    modal('modal-layout','item__buy-button','cart-form','modal__close-button');
    tabs(state,'.tabs','tabs__item');
    cart(state);
});
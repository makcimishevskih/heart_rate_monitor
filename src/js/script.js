import slider from './components/slider.js';
import tabs from './components/tabs.js';
import form from './components/form.js';
import modal from './components/modal.js';
import moreLink from './components/moreLink.js';
import cart from './components/cart.js';
import catalog from './components/catalog.js';

const state = {
    cartState: {
        cart: [],
        count: 0,
        sumPrice: 0,
    },
    catalogState: [
        { img: 'img/polar_pulsometr.png',title: 'Пульсометр Polar FT1',descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',promoPrice: '4 750',price: '4 500' },
        { img: 'img/polar_pulsometr.png',title: 'Пульсометр Suunto M2',descr: 'Пульсометр начального уровня с комфортным тканевым ремешком',promoPrice: '6 990',price: '6 641' },
        { img: 'img/polar_pulsometr.png',title: 'Пульсометр Polar FT4',descr: 'Улучшенная версия Polar FT1, имеющая следующие улучшения',promoPrice: '7 390',price: '7 021' },
        { img: 'img/polar_pulsometr.png',title: 'Пульсометр Polar FT1',descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',promoPrice: '4 750',price: '4 500' },
        { img: 'img/polar_pulsometr.png',title: 'Пульсометр Suunto M2',descr: 'Пульсометр начального уровня с комфортным тканевым ремешком',promoPrice: '6 990',price: '6 641' },
        { img: 'img/polar_pulsometr.png',title: 'Пульсометр Polar FT4',descr: 'Улучшенная версия Polar FT1, имеющая следующие улучшения',promoPrice: '7 390',price: '7 021' },
    ]
}

window.addEventListener('DOMContentLoaded',() => {
    modal('modal-layout','modal__button','not-cart-form','modal__close-button');
    modal('modal-layout','item__buy-button','cart-form','modal__close-button');
    tabs('.tabs','tabs__item');
    form(state.cartState);
    moreLink('.catalog__list','more-link','back-link');
    cart(state);
    catalog('.catalog__list',state.catalogState);
});
import slider from './components/slider.js';
import tabs from './components/tabs.js';
import form from './components/form.js';
import modal from './components/modal.js';
import cart from './components/cart.js';
import pageUpButton from './components/pageUpButton.js';
import catalog from './components/catalog.js';
import scrollAnimation from './components/scrollAnimation.js';
import clients from './components/clients.js';
import state from './state/state.js';


// CATALOG TRANSFORM-DELAY
// ADD BURGER MENU WITH ANCHORS (CATALOG,MAP);

window.addEventListener('DOMContentLoaded',() => {

    clients(state,'.clients__list','clients__item','animation');
    scrollAnimation();
    form(state.cartState);
    modal('modal-layout','modal__button','not-cart-form','modal__close-button');
    modal('modal-layout','item__buy-button','cart-form','modal__close-button');
    tabs(state,'.tabs','tabs__item');
    cart(state);
    pageUpButton('.pageUp');
});


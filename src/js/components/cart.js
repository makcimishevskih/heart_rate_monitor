import { openModal,closeModal,createNewModal } from '../helpers.js';

const cart = (state) => {
    const catalog = document.querySelector('.catalog__list')
    const modalLayout = document.querySelector(".modal-layout");
    const modalModal = document.querySelector('.modal');
    const cartForm = document.querySelector('.cart-form');

    catalog.addEventListener('click',(e) => {
        if (e.target.classList.contains('item__buy-button')) {
            const item = e.target.closest('.catalog__item');

            const titleElem = item.querySelector('.catalog__item-content .item__title');
            const priceElem = item.querySelector('.item__buy-block .item__price');

            let price = priceElem.textContent.replace(/\D/gi,'');
            const dataAttrItem = item.dataset.item;

            if (!state.cartState.cart.includes(dataAttrItem)) {
                state.cartState.sumPrice += +price;
                state.cartState.count = state.cartState.count + 1;
                let str = '';
                state.cartState.cart.push(titleElem.textContent);
                state.cartState.cart.forEach(el => str += el + ' ');

                document.querySelector('.cart-form .modal__subtitle').textContent += str;
                document.querySelector('.cart-form .modal__price').textContent = `Count: ${state.cartState.count}. Sum: ${state.cartState.sumPrice}`;
            }
        }
    });
}

export default cart;
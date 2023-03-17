import "./scss/style.scss";

import "./js/components/slider.js";
import tabs from "./js/components/tabs.js";
import form from "./js/components/form.js";
import modal from "./js/components/modal.js";
import cart from "./js/components/cart.js";
import pageUpButton from "./js/components/pageUpButton.js";
import scrollAnimation from "./js/components/scrollAnimation.js";
import clients from "./js/components/clients.js";

import state from "./state/state.js";

window.addEventListener("DOMContentLoaded", () => {
  scrollAnimation();
  clients(state, ".clients__list", "clients__item", "animation");
  form(state.cartState);
  modal(
    "modal-layout",
    "modal__button",
    "not-cart-form",
    "modal__close-button"
  );
  modal("modal-layout", "item__buy-button", "cart-form", "modal__close-button");
  tabs(state, ".tabs", "tabs__item");
  cart(state);
  pageUpButton(".pageUp");
});

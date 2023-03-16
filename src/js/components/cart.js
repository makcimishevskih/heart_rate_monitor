const cart = (state) => {
  const catalog = document.querySelector(".catalog__list");

  catalog.addEventListener("click", (e) => {
    if (e.target.classList.contains("item__buy-button")) {
      const item = e.target.closest(".catalog__item");

      const itemTitle = item.querySelector(
        ".catalog__item-content .item__title"
      );
      const itemPrice = item.querySelector(".item__buy-block .item__price");

      let price = itemPrice.textContent.replace(/\D/gi, "");
      const dataAttrItem = item.dataset.item;

      if (!state.cartState.cart.includes(dataAttrItem)) {
        const modalSubtitle = document.querySelector(
          ".cart-form .modal__subtitle"
        );
        const modalPrice = document.querySelector(".cart-form .modal__price");

        let str = "";

        state.cartState.sumPrice += +price;
        state.cartState.count = state.cartState.count + 1;
        state.cartState.cart.push(itemTitle.textContent);
        state.cartState.cart.forEach((el) => (str += el + " "));

        modalSubtitle.textContent += str;
        modalPrice.textContent = `Count: ${state.cartState.count}. Sum: ${state.cartState.sumPrice}`;
      }
    }
  });
};

export default cart;

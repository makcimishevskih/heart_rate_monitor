import moreLink from "./moreLink.js";

const catalog = (parentSelector, state) => {
  const wrapper = document.querySelector(parentSelector);

  const items = document.querySelectorAll(".catalog__item");
  const emptyListNotation = document.querySelector(".empty-list");

  if (emptyListNotation) {
    emptyListNotation.remove();
  }

  if (items) {
    items.forEach((el) => el.remove());
  }

  function createCatalogItem(img, title, descr, promoPrice, price) {
    const item = document.createElement("div");
    item.classList.add("catalog__item");
    item.setAttribute("data-item", title);

    item.innerHTML += `<div class="catalog__item-content">
                <div class="catalog__img-wrapper">
                    <img class="catalog__img" src="${img}" alt="item">
                </div>
                <h4 class="item__title">${title}</h4>
                <p class="item__descr">${descr}</p>
                <a class="more-link link">Подробнее</a>
            </div>
            <div class="catalog__item-info">
                <ul class="catalog__item-text">
                    <li>
                        Вы услышите звуковое оповещение о нужном пульсе во время
                        тренировки;
                    </li>
                    <li>
                        Вы увидите информативный графический индикатор целевых
                        тренировочных
                        зон пульса;
                    </li>
                    <li>
                        Также Вы увидите информацию о расходе калорий за тренировку;

                    </li>
                    <li>
                        Вы сможете посмотреть данные по 10 тренировкам.
                    </li>
                </ul>
                <a class="back-link">Назад</a>
            </div>
            <div class="line"></div>
            <div class="item__buy-block">
                <div class="item__price-block">
                    <div class="item__promotion-price">${promoPrice} руб.</div>
                    <div class="item__price">${price} руб.</div>
                </div>
                <button
                    class="item__buy-button button button_xsmall btn_animation">Купить</button>
            </div>`;

    wrapper.append(item);
  }

  function emptyListItems() {
    const elem = document.createElement("div");
    elem.textContent = "Нет товаров";
    elem.classList.add("empty-list");
    wrapper.append(elem);
  }

  function createElements(arr) {
    if (arr.length === 0) {
      emptyListItems();
      return;
    }

    for (let el of arr) {
      const { img, title, descr, promoPrice, price } = el;
      createCatalogItem(img, title, descr, promoPrice, price);
    }
  }

  createElements(state);
  moreLink(".catalog__list", "more-link", "back-link");
};

export default catalog;

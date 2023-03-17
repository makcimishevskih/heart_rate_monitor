import pulsometr from "../img/polar_pulsometr.png";
import first_person from "../img/first_person.png";
import second_person from "../img/second_person.png";
import third_person from "../img/third_person.png";

const state = {
  catalogState: [
    {
      type: "fitness",
      img: pulsometr,
      title: "Пульсометр Polar FT1",
      descr: "Для первых шагов в тренировках, основанных на сердечном ритме",
      promoPrice: "4 750",
      price: "4 500",
    },
    {
      type: "run",
      img: pulsometr,
      title: "Пульсометр Suunto M2",
      descr: "Пульсометр начального уровня с комфортным тканевым ремешком",
      promoPrice: "6 990",
      price: "6 641",
    },
    {
      type: "fitness",
      img: pulsometr,
      title: "Пульсометр Polar FT4",
      descr: "Улучшенная версия Polar FT1, имеющая следующие улучшения",
      promoPrice: "7 390",
      price: "7 021",
    },
    {
      type: "fitness",
      img: pulsometr,
      title: "Пульсометр Polar FT1",
      descr: "Для первых шагов в тренировках, основанных на сердечном ритме",
      promoPrice: "4 750",
      price: "4 500",
    },
    {
      type: "run",
      img: pulsometr,
      title: "Пульсометр Suunto M2",
      descr: "Пульсометр начального уровня с комфортным тканевым ремешком",
      promoPrice: "6 990",
      price: "6 641",
    },
    {
      type: "triatlon",
      img: pulsometr,
      title: "Пульсометр Polar FT4",
      descr: "Улучшенная версия Polar FT1, имеющая следующие улучшения",
      promoPrice: "7 390",
      price: "7 021",
    },
  ],
  clientsState: [
    {
      name: "Ирина",
      surname: "Иванченко",
      marathons: 5,
      descr:
        "Не знала, что себе купить - обратилась к ребятам из RunSmart - подобрали пульсометр, который подошёл именно под мои цели и финансовые возможности. Через некоторое время решила обновить гаджет - не раздумывая обратилась туда же.<br>Новые цели - новый гаджет!<br>Спасибо,RunSmart!",
      imgUrl: first_person,
    },
    {
      name: "Иван",
      surname: "Сёмочкин",
      marathons: 1,
      descr:
        "Крутая штука - пульсометр.Обычно без них бегал. Оказывается только хуже себе делал. Купил пульсометр,ещё в подарок получил тренировку.Со мной вместе провели первую тренировку,научили пользоваться новым гаджетом.Также объяснили основы анатомии,составили план тренировок на месяц вперёд.<br>С ними подготовился к своему первому полумарафону! Спасибо!!!",
      imgUrl: second_person,
    },
    {
      name: "Юлия",
      surname: "Дашкина",
      marathons: 2,
      descr:
        "Долго не могла начать бегать, т.к. до этого несколько раз начинала, но становилось тяжело и я бросала. От друзей услышала о RunSmart и о беге с контролем пульса и решила попробовать.<br>Позвонила,ребята поинтересовались моими целями и подобрали очень интересный вариант со скидкой! Теперь бегаю и наслаждаюсь бегом! Пробежала уже 2 полумарафона и несколько более коротких забегов и не намерена останавливаться!<br>Спасибо!!!",
      imgUrl: third_person,
    },
  ],
  cartState: {
    cart: [],
    count: 0,
    sumPrice: 0,
  },
  tabActive: "all",
  filteredCatalog: [],
};

export default state;

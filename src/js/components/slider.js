import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";

const slider = tns({
  container: ".carousel__wrapper",
  items: 1,
  slideBy: "page",
  autoplay: true,
  prevButton: document.querySelector(".tiny-prev"),
  nextButton: document.querySelector(".tiny-next"),
  autoplayButtonOutput: false,
});

document.querySelector(".tiny-prev").onclick = function () {
  slider.goTo("tiny-prev");
};

document.querySelector(".tiny-next").onclick = function () {
  slider.goTo("tiny-next");
};

export default slider;

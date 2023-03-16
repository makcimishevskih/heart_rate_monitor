const pageUpButton = (pageUpSelector) => {
  const pageUp = document.querySelector(pageUpSelector);

  window.addEventListener("scroll", () => {
    const pageY = -document.body.getBoundingClientRect().y;

    if (pageY > 900) {
      pageUp.style.visibility = "visible";
      pageUp.style.transform = "translateY(0px)";
    } else if (pageY < 900) {
      pageUp.style.visibility = "hidden";
      pageUp.style.transform = "translateY(200px)";
    }
  });
};

export default pageUpButton;

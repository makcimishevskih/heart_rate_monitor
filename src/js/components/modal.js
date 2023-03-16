import { openModal, closeModal } from "../helpers.js";

const modal = (
  modalLayoutSelector,
  modalTrigger,
  modalSelector,
  closeButtonClass
) => {
  const modalLayout = document.querySelector(`.${modalLayoutSelector}`);
  const modalForm = document.querySelector(`.${modalSelector}`);

  window.addEventListener("click", (e) => {
    const { target } = e;

    if (target.classList.contains(closeButtonClass)) {
      e.preventDefault();
      closeModal(modalLayout, modalForm);
    } else if (target.classList.contains(modalTrigger)) {
      if (document.querySelector(".cart-form").classList.contains("open")) {
        return;
      }
      openModal(modalLayout, modalForm);
    } else if (target.classList.contains(modalLayoutSelector)) {
      closeModal(modalLayout, modalForm);
    }
  });

  window.addEventListener("keydown", (e) => {
    const { target, repeat, code } = e;
    if (repeat) {
      return;
    }
    if (code === "Escape") {
      closeModal(modalLayout, modalForm);
    }
    if (target.tagName === "INPUT" && code === "Enter") {
      e.preventDefault();

      target.nextElementSibling.focus();
    }
  });
};

export default modal;

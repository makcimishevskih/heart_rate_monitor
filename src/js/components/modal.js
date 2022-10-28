import { openModal,closeModal } from "../helpers.js";

const modal = (modalLayoutSelector,modalTrigger,modalSelector,closeButtonClass) => {
    const modalLayout = document.querySelector(`.${modalLayoutSelector}`);
    const modalForm = document.querySelector(`.${modalSelector}`)

    window.addEventListener('click',(e) => {
        const t = e.target;
        if (t.classList.contains(closeButtonClass)) {
            closeModal(modalLayout,modalForm);
        } else if (t.classList.contains(modalTrigger)) {
            openModal(modalLayout,modalForm);
        } else if (t.classList.contains(modalLayoutSelector)) {
            closeModal(modalLayout,modalForm);
        }
    });

    window.addEventListener('keydown',(e) => {
        if (e.repeat) {
            return;
        }
        if (e.code === 'Escape') {
            closeModal(modalLayout,modalForm);
        }
        if (e.target.tagName === 'INPUT' && e.code === 'Enter') {
            e.preventDefault();
            e.target.nextElementSibling.focus();
        }
        // console.log(e.target,e.target.tagName);
    });
}

export default modal;
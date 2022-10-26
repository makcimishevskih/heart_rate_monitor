function openModal(modalLayout,modal = null,className = 'open') {
    calcScrollWidth();
    if (modal) {
        modal.classList.add('open');
    }
    modalLayout.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalLayout,className = 'open') {
    const statusModal = document.querySelector('.status-modal');
    const modalOpen = document.querySelector('.modal.open');

    if (statusModal) {
        statusModal.remove();
    }
    if (modalOpen) {
        modalOpen.classList.remove('open');
    }
    modalLayout.classList.remove('open');
    document.body.style.paddingRight = '';
    document.body.style.overflow = '';
}

function createNewModal(oldModalEL) {
    const statusModal = document.createElement('div');
    statusModal.classList.add('modal-wrapper','status-modal');

    const modalInner = document.querySelector(".modal-layout .modal-wrapper");
    modalInner.classList.add('hide');

    openModal(oldModalEL);
    oldModalEL.append(statusModal);
}


function calcScrollWidth() {
    const innerW = window.innerWidth;
    const scrollW = document.documentElement.scrollWidth;
    document.body.style.paddingRight = innerW - scrollW + 'px';
}

(function usePhoneMask() {
    const maskOptions = {
        mask: '+{7}(000)000-00-00',
        lazy: true,
    };

    const inputs = document.querySelectorAll('input[name="phone"]');

    inputs.forEach(input => {
        const mask = IMask(input,maskOptions);
    })
})()



export { openModal,closeModal,createNewModal }
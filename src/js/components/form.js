import postData from "../fetch.js";
import { openModal,closeModal,createNewModal } from "../helpers.js";

const form = (state) => {
    const forms = document.querySelectorAll('form')
    const formBtn = document.querySelectorAll('.form-button');
    const modalLayout = document.querySelector(".modal-layout");

    const message = {
        loading: 'Sending form data... Please, wait.',
        error: 'Message error',
        success: 'Thank you! We will call you!',
    }

    forms.forEach(form => {
        form.addEventListener('submit',(e) => {
            e.preventDefault();

            const errors = form.querySelectorAll('.error-status');
            deleteAllErrors(errors);

            if (checkErrors(form)) {
                return;
            };

            let obj = {};
            const formData = new FormData(form);

            for (let key of formData.entries()) {
                obj[key[0]] = key[1];
            }

            if (form.classList.contains('cart-form')) {
                obj = { ...obj,...state }
            }

            createNewModal(modalLayout);

            const statusModal = document.querySelector('.status-modal')
            modalHTML(statusModal,message.loading);


            postData('https://jsonplaceholder.typicode.com/posts',obj)
                .then((data) => console.log(data))
                .catch((err) => {
                    modalHTML(statusModal,message.error);
                    throw new Error('Error: ',err);
                })
                .then(() => {
                    formReset(form,statusModal);
                });
        });
    });


    function checkErrors(parent) {
        const inputs = parent.querySelectorAll('input');

        let isError = false;
        for (let i = 0; i < inputs.length; i++) {
            const error = document.createElement('div');
            error.classList.add('error-status');

            if (!inputs[i].value) {
                error.textContent = 'Field is required';
                inputs[i].insertAdjacentElement('afterend',error)
                isError = true;
            }
            const inputName = inputs[i].name;

            switch (inputName) {
                case 'name':
                    if (inputs[i].value.length < 4) {
                        error.textContent = 'Must be more then 4 symbols';
                        inputs[i].insertAdjacentElement('afterend',error)
                        isError = true;
                    }
                    break;

                case 'phone':

                    if (inputs[i].value.length !== 16) {
                        error.textContent = 'Not valid phone number - too short';
                        inputs[i].insertAdjacentElement('afterend',error)
                        isError = true;
                    }

                    // const phoneno = /7\d{10}/gi;
                    console.log(11111,inputs[i].value,inputs[i].value.length);
                    // console.log(inputs[i].value, );
                    // if (!inputs[i].value.match(phoneno)) {
                    //     console.log(22222);
                    // }
                    break;

                case 'email':
                    if (!inputs[i].value
                        .toLowerCase()
                        .match(
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        )) {
                        error.textContent = 'Not valid Email';
                        inputs[i].insertAdjacentElement('afterend',error)
                        isError = true;
                    }
                    break;
            }
        }
        return isError;
    }

    function deleteAllErrors(arr) {
        arr.forEach(el => el.remove());
    }

    function formReset(form,newModalToDelete) {
        const modalInner = document.querySelector(".modal-wrapper");

        modalHTML(newModalToDelete,message.success);
        form.reset();
        resetState(state);

        setTimeout(() => {
            if (form.classList.contains('cart-form')) {
                const title = form.querySelector('.modal__subtitle');
                const price = form.querySelector('.modal__price');
                title.textContent = '';
                price.textContent = '';
            }
            newModalToDelete.remove();
            closeModal(modalLayout)
            modalInner.classList.remove('hide');
        },2000);
    }

    function resetState(state) {
        state.cart = [];
        state.count = 0;
        state.sumPrice = 0;
    }

    function modalHTML(modal,message) {
        modal.innerHTML = `
    <div class='modal' style='display:flex;'>
    <h3 class='modal__title'>${message}</h3>
    </div>`;
    }

}

export default form;
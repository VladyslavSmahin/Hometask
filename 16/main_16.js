function FormValidate(form) {
    const SUCCESS_CLASS_NAME = `success`
    const ERROR_CLASS_NAME = `error`
    const ERROR_ITEM_CLASS_NAME = `error__item`
    const FORM_CONTROL_CLASS_NAME = `form-group`

    this.success = null
    this.elements = form.elements
    form.addEventListener(`submit`, (event) => {
        event.preventDefault()
        this.checkFormElement()
        this.checkForm()
    })
    this.checkFormElement = function () {
        for (let i = 0; i < this.elements.length; i++) {
            const element = this.elements[i]
            const reqMessage = element.dataset.req
            const minMessage = element.dataset.min_message
            const emailMessage = element.dataset.email
            this.clearError(element)
            if (reqMessage) {
                this.required(element, reqMessage)
            }
            if (emailMessage) {
                this.email(element, emailMessage);
            }

            if (minMessage && element.tagName === 'TEXTAREA') {
                this.minLength(element, minMessage);
            }
        }
    }
    this.email = function (element, emailMessage) {
        const emailValue = element.value.trim();
        const emailPattern = /\S+@\S+\.\S+/;

        if (!emailPattern.test(emailValue)) {
            this.errorTemplate(element, emailMessage);
        } else {
            this.clearError(element);
            element.closest(`.${FORM_CONTROL_CLASS_NAME}`).classList.add(SUCCESS_CLASS_NAME);
        }
    }

    this.minLength = function (element, minMessage) {
        const minLength = parseInt(document.querySelector("textarea").dataset.min_length);
        minMessage = element.dataset.min_message.replace(`N`, String(minLength))
        console.log(minLength)
        const textValue = element.value.trim();

        if (textValue.length < minLength) {
            this.errorTemplate(element, minMessage);
        } else {
            this.clearError(element);
            element.closest(`.${FORM_CONTROL_CLASS_NAME}`).classList.add(SUCCESS_CLASS_NAME);
        }
    }
    this.checkForm = function () {
        const form = document.querySelector('.js--reg_form');
        let formData = {};
        const hasErrors = form.querySelector('.error');
        if (!hasErrors) {
            for (let i = 0; i < this.elements.length; i++) {
                const element = this.elements[i];
                if (element.type !== 'submit') {
                    formData[element.name] = element.value;
                }
            }
            console.log(formData);
            console.log(`Form method: ${form.method}`);
            console.log(`Form action: ${form.action}`);
        }
    }
    this.required = function (element, reqMessage) {
        if (element.value.length === 0) {
            this.errorTemplate(element, reqMessage)
        } else {
            this.clearError(element)
            element.closest(`.${FORM_CONTROL_CLASS_NAME}`).classList.add(SUCCESS_CLASS_NAME)
        }
    }
    this.errorTemplate = function (element, reqMessage) {
        const parent = element.closest(`.${FORM_CONTROL_CLASS_NAME}`)
        if (parent.classList.contains(ERROR_CLASS_NAME) === false) {
            parent.classList.add(ERROR_CLASS_NAME)
            parent.insertAdjacentHTML(`beforeend`, `<small class="${ERROR_ITEM_CLASS_NAME}">${reqMessage}</small>`)
        }
    }
    this.clearError = function (element) {
        const parent = element.closest(`.${FORM_CONTROL_CLASS_NAME}`)
        if (parent !== null && parent.classList.contains(ERROR_CLASS_NAME)) {
            parent.classList.remove(ERROR_CLASS_NAME)
            parent.querySelector(`.${ERROR_ITEM_CLASS_NAME}`).remove()
        }
    }
}

document.addEventListener(`DOMContentLoaded`, function () {
    const regFrom = new FormValidate(document.querySelector(`.js--reg_form`))
    document.querySelector(`.js--check`).addEventListener(`click`, function () {
        console.log(regFrom)
    })
})
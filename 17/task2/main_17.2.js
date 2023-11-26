class FormValidate{
    constructor() {
        this.SUCCESS_CLASS_NAME = `success`
        this.ERROR_CLASS_NAME = `error`
        this.ERROR_ITEM_CLASS_NAME = `error__item`
        this.FORM_CONTROL_CLASS_NAME = `form-group`
        this.form = document.querySelector('.js--reg_form');
        this.success = null
        this.elements = this.form.elements
        this.form.addEventListener(`submit`, (event) => {
            event.preventDefault()
            this.checkFormElement()
            this.checkForm()
        })
    }
    checkFormElement () {
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

    email  (element, emailMessage) {
        const emailValue = element.value.trim();
        const emailPattern = /\S+@\S+\.\S+/;

        if (!emailPattern.test(emailValue)) {
            this.errorTemplate(element, emailMessage);
        } else {
            this.clearError(element);
            element.closest(`.${this.FORM_CONTROL_CLASS_NAME}`).classList.add(this.SUCCESS_CLASS_NAME);
        }
    }

    minLength  (element, minMessage) {
        const minLength = parseInt(document.querySelector("textarea").dataset.min_length);
        minMessage = element.dataset.min_message.replace(`N`, String(minLength))
        const textValue = element.value.trim();

        if (textValue.length < minLength) {
            this.errorTemplate(element, minMessage);
        } else {
            this.clearError(element);
            element.closest(`.${this.FORM_CONTROL_CLASS_NAME}`).classList.add(this.SUCCESS_CLASS_NAME);
        }
    }
    checkForm() {
        const hasErrors = this.form.querySelector(`.${this.ERROR_CLASS_NAME}`);

        if (!hasErrors) {
            this.getFormData();
        }
    }

    getFormData() {
        let formData = {};

        for (let i = 0; i < this.elements.length; i++) {
            const element = this.elements[i];
            if (element.type !== 'submit') {
                formData[element.name] = element.value;
            }
        }

        console.log(formData);
        console.log(`Form method: ${this.form.method}`);
        console.log(`Form action: ${this.form.action}`);
    }
    required  (element, reqMessage) {
        if (element.value.length === 0) {
            this.errorTemplate(element, reqMessage)
        } else {
            this.clearError(element)
            element.closest(`.${this.FORM_CONTROL_CLASS_NAME}`).classList.add(this.SUCCESS_CLASS_NAME)
        }
    }
    errorTemplate  (element, reqMessage) {
        const parent = element.closest(`.${this.FORM_CONTROL_CLASS_NAME}`)
        if (parent.classList.contains(this.ERROR_CLASS_NAME) === false) {
            parent.classList.add(this.ERROR_CLASS_NAME)
            parent.insertAdjacentHTML(`beforeend`, `<small class="${this.ERROR_ITEM_CLASS_NAME}">${reqMessage}</small>`)
        }
    }
    clearError (element) {
        const parent = element.closest(`.${this.FORM_CONTROL_CLASS_NAME}`)
        if (parent !== null && parent.classList.contains(this.ERROR_CLASS_NAME)) {
            parent.classList.remove(this.ERROR_CLASS_NAME)
            parent.querySelector(`.${this.ERROR_ITEM_CLASS_NAME}`).remove()
        }
    }
}
document.addEventListener(`DOMContentLoaded`, function () {
    const regFrom = new FormValidate(document.querySelector(`.js--reg_form`))
    document.querySelector(`.js--check`).addEventListener(`click`, function () {
        console.log(regFrom)
    })
})
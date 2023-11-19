function toDOList(props) {
    const {form} = props
    const KEY = `strings`
    let todosWrapper = document.querySelector(`.js--todos-wrapper`)
    const addToBody = (value) => {
        document.querySelector('.js--todos-wrapper').insertAdjacentHTML('beforeend', `
            <li class="todo-item">
                <input type="checkbox">
                <span class="todo-item__description">${value}</span>
                <button class="todo-item__delete">Видалити</button>
            </li>
        `)

    }
    const addToLocalData = (value) => {
        const currentLocalValue = localStorage.getItem(KEY)
        if (currentLocalValue === null) {
            localStorage.setItem(KEY, JSON.stringify([value]))
        } else {
            const strings = JSON.parse(currentLocalValue)
            strings.push(value)
            localStorage.setItem(KEY, JSON.stringify(strings))
        }
    }
    const addFromInput = () => {
        form.addEventListener(`submit`, function (event) {
            event.preventDefault()
            const value = document.querySelector(`.js--form__input`).value
            addToBody(value)
            addToLocalData(value)
        })
    }
    const removeFromBodyAndLocalStorage = () => {
        todosWrapper.addEventListener(`click`, function (event) {
            const removeButton = event.target.closest('.todo-item__delete');
            if (removeButton) {
                const todoItem = removeButton.closest('.todo-item');
                todoItem.remove()
                const spanElement = todoItem.querySelector('.todo-item__description');
                const text = spanElement.innerText;
                const localStoredData = JSON.parse(localStorage.getItem(KEY));
                const newData = localStoredData.filter(data => data !== text)
                localStorage.setItem(KEY, JSON.stringify(newData))
            }
        })
    }
    const getDataFromLocal = () => {
        const strings = JSON.parse(localStorage.getItem(KEY))
        if (strings !== null) {
            strings.forEach(addToBody)
        }
    }
    const completedString = () => {
        todosWrapper.addEventListener(`change`, function (event) {
            if (event.target.matches('input[type="checkbox"]')) {
                const listItem = event.target.closest('.todo-item');
                const spanElement = listItem.querySelector('.todo-item__description');
                if (event.target.checked) {
                    spanElement.classList.add(`todo-item--checked`)
                } else {
                    spanElement.classList.remove(`todo-item--checked`)
                }
            }
        })
    }
    addFromInput()
    completedString()
    removeFromBodyAndLocalStorage()
    getDataFromLocal()

}

document.addEventListener(`DOMContentLoaded`, () => {
    toDOList({form: document.querySelector(`.js--form  `)})
})
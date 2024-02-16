import todoSlice from "./todoSlice.js";
import TodoSlice from "./todoSlice.js";

const getData = () => {
    return (dispatch) => {
        const data = JSON.parse(localStorage.getItem('items')) || [];
        dispatch(todoSlice.actions.setItems(data));
        dispatch(todoSlice.actions.setLoading(false))
        console.log(data)
    }
}

const setData = (event, items) => {
    return (dispatch) => {
        event.preventDefault()

        setTimeout(()=> {
            dispatch(TodoSlice.actions.addItems(event.target.text_input.value))
            dispatch(TodoSlice.actions.setLoading(false))
            event.target.text_input.value = ''
        }, 3000)
        localStorage.setItem('items', JSON.stringify([...items, event.target.text_input.value]))
    }

}

export {
    getData,
    setData
}
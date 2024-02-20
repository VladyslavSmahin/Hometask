import todoSlice from "../redux/todoSlice.js";

const getData = () => {
    return (dispatch) => {
        dispatch(todoSlice.actions.setLoading(true))
        const data = JSON.parse(localStorage.getItem('items')) || [];
        dispatch(todoSlice.actions.setItems(data));
        dispatch(todoSlice.actions.setLoading(false))
    }
}

const setData = (event, items) => {
    return (dispatch) => {
        dispatch(todoSlice.actions.setLoading(true))
        event.preventDefault()

        setTimeout(()=> {
            dispatch(todoSlice.actions.addItems(event.target.text_input.value))
            dispatch(todoSlice.actions.setLoading(false))
            event.target.text_input.value = ''
        }, 3000)
        localStorage.setItem('items', JSON.stringify([...items, event.target.text_input.value]))
    }

}
 const  clearStore = () => {
    return (dispatch) => {
        {
            localStorage.removeItem('items');
            dispatch(todoSlice.actions.setItems([]))
        }
    }
 }
 const clearItem = (item, items) => {
    return (dispatch) => {
        const updatedItems = items.filter(i => i !== item)
        dispatch(todoSlice.actions.setItems(updatedItems));
        localStorage.setItem('items', JSON.stringify(updatedItems));
    };
 }
/*
export {
    getData,
    setData,
    clearStore,
    clearItem
}*/

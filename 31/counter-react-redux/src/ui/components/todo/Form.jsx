import {useDispatch, useSelector} from "react-redux";
import TodoSlice from "../../../engine/todo/todoSlice.js";
import selectors from "../../../engine/todo/selectors.js";

function Form(props) {
    const {children} = props
    const dispatch = useDispatch()
    const onSubmit = (event) => {
        event.preventDefault()
        dispatch(TodoSlice.actions.addItems(event.target.text_input.value))
        event.target.text_input.value = ''
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text" name='text_input'/>
            <button>{children}</button>
        </form>
    );
}

export default Form
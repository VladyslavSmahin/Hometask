import {useDispatch, useSelector} from "react-redux";
import selectors from "../../../engine/todo/redux/selectors.js";
import {setDataAsyncAction} from "../../../engine/todo/saga/asynxActions.js";


function Form(props) {
    const {children} = props
    const dispatch = useDispatch()
    const loading = useSelector(selectors.loading)
    const items = useSelector(selectors.items)
    const onSubmit = (event) => {
        dispatch(setDataAsyncAction(event))
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text" name='text_input'/>
            <button disabled={loading}>{children}</button>
        </form>
    );
}

export default Form
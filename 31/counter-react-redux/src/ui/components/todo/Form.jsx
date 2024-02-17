import {useDispatch, useSelector} from "react-redux";
import selectors from "../../../engine/todo/selectors.js";
import {setData} from "../../../engine/todo/thunks.js";


function Form(props) {
    const {children} = props
    const dispatch = useDispatch()
    const loading = useSelector(selectors.loading)
    console.log(loading)
    const items = useSelector(selectors.items)
    const onSubmit = (event) => {
        dispatch(setData(event, items))
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text" name='text_input'/>
            <button disabled={loading}>{children}</button>
        </form>
    );
}

export default Form
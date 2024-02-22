import {useDispatch, useSelector} from "react-redux";
import selectors from "../../../engine/todo/redux/selectors.js";
import {setDataAsyncAction} from "../../../engine/todo/saga/asynxActions.js";
import TextField from "./Input.jsx";
import Button from "./Button.jsx";


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
            <TextField sx={{width: "100%"}}/>
            <Button type="submit"
                    disabled={loading}
                    sx={{height: '20px',width: "100%"}}
            >{children}</Button>
        </form>
    );
}

export default Form
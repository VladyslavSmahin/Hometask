import Button from "../counter/Button.jsx";
import selectors from "../../../engine/todo/redux/selectors.js";
import {useSelector, useDispatch} from "react-redux";
import {clearStoreAsyncAction} from "../../../engine/todo/saga/asynxActions.js";


function Footer() {
    const items = useSelector(selectors.items);
    const dispatch = useDispatch()
    const onClear = () => {
        dispatch(clearStoreAsyncAction());
    }
    return (
        <>
            Count: {items.length} <Button onClick={onClear}>Clear</Button>
        </>
    );
}

export default Footer
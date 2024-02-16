import Button from "../counter/Button.jsx";
import selectors from "../../../engine/todo/selectors.js";
import {useSelector, useDispatch} from "react-redux";
import TodoSlice from "../../../engine/todo/todoSlice.js";


function Footer(){
    const items = useSelector(selectors.items);
    const dispatch = useDispatch()
    const onClear = () => {
        dispatch(TodoSlice.actions.setItems([]))
    }

    return (
        <>
            Count: {items.length} <Button onClick={onClear}>Clear</Button>
        </>
    );
}
export default Footer
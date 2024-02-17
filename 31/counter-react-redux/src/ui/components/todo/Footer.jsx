import Button from "../counter/Button.jsx";
import selectors from "../../../engine/todo/selectors.js";
import {useSelector, useDispatch} from "react-redux";
import {clearStore} from "../../../engine/todo/thunks.js";


function Footer(){
    const items = useSelector(selectors.items);
    const dispatch = useDispatch()
    const onClear = () => dispatch(clearStore());

    return (
        <>
            Count: {items.length} <Button onClick={onClear}>Clear</Button>
        </>
    );
}
export default Footer
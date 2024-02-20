import Button from "../counter/Button.jsx";
import selectors from "../../../engine/todo/redux/selectors.js";
import {useSelector, useDispatch} from "react-redux";


function Footer(){
    const items = useSelector(selectors.items);
    const dispatch = useDispatch()
    const onClear = () => {
       /* dispatch(

        );*/
    }
    return (
        <>
            Count: {items.length} <Button onClick={onClear}>Clear</Button>
        </>
    );
}
export default Footer
import ListItem from "./ListItem.jsx";
import {useDispatch, useSelector} from "react-redux";
import Button from "../counter/Button.jsx";
import selectors from "../../../engine/todo/redux/selectors.js";
import {useEffect} from "react";
import {
    changeItemAsyncAction,
    clearItemAsyncAction,
    getDataAsyncAction
} from "../../../engine/todo/saga/asynxActions.js";


function List() {
    const items = useSelector(selectors.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDataAsyncAction())
    }, []);

    const handleDelete = (item) => () => dispatch(clearItemAsyncAction(item))
    const handleChange = (item) => () => dispatch(changeItemAsyncAction(item))

    return (
        <>
            {
                items.length === 0
                    ? <span>No data </span>
                    :
                    (
                        items.map((item, index) =>

                            <ListItem key={index}>
                                <Button onClick={handleChange(item)}>Change</Button>
                                {item}
                                <Button onClick={handleDelete(item)}>Delete</Button></ListItem>)
                    )
            }
        </>
    );
}

export default List
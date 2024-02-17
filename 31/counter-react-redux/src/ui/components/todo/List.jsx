import ListItem from "./ListItem.jsx";
import {useDispatch, useSelector} from "react-redux";
import Button from "../counter/Button.jsx";
import selectors from "../../../engine/todo/selectors.js";
import {useEffect} from "react";
import {getData} from "../../../engine/todo/thunks.js";
import TodoSlice from "../../../engine/todo/todoSlice.js";


function List() {
    const items = useSelector(selectors.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData())
    }, []);

    const handleDelete = (item) => () => {
        dispatch(TodoSlice.actions.deleteItem(item));
    };


    return (
        <>
            {
                items.length === 0
                    ? <span>No data </span>
                    :
                    (
                        items.map((item, index) => <ListItem key={index}>{item}
                            <Button onClick={handleDelete(item)}>Delete</Button></ListItem>)
                    )
            }
        </>
    );
}

export default List
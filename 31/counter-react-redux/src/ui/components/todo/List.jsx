import ListItem from "./ListItem.jsx";
import {useDispatch, useSelector} from "react-redux";
import Button from "../counter/Button.jsx";
import selectors from "../../../engine/todo/selectors.js";
import {useEffect} from "react";
import {getData} from "../../../engine/todo/thunks.js";


function List() {
    const items = useSelector(selectors.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData())
    }, []);

    return (
        <>
            {
                items.length === 0
                    ? <span>No data </span>
                    :
                    (
                        items.map((item, index) => <ListItem key={index}>{item}<Button>Delete</Button></ListItem>)
                    )
            }
        </>
    );
}

export default List
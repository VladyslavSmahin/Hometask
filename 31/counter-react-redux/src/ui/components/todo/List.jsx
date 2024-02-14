import ListItem from "./ListItem.jsx";
import {useSelector} from "react-redux";
import Button from "../counter/Button.jsx";
import selectors from "../../../engine/todo/selectors.js";


function List() {
    const items = useSelector(selectors.items);
    return (
        <>
            {
                items.length === 0
                    ? <span>No data </span>
                    :
                    (
                        items.map(item =>
                            <ListItem key={item.id}>{item.text}
                                <Button>Delete</Button>
                            </ListItem>)
                    )
            }
        </>
    );
}

export default List
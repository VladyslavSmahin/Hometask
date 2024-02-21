import ListItem from "./ListItem.jsx";
import {useDispatch, useSelector} from "react-redux";
import Button from "../counter/Button.jsx";
import selectors from "../../../engine/todo/redux/selectors.js";
import {useEffect, useState} from "react";
import {
    changeItemAsyncAction,
    clearItemAsyncAction,
    getDataAsyncAction
} from "../../../engine/todo/saga/asynxActions.js";


function List() {
    const items = useSelector(selectors.items);
    const dispatch = useDispatch();
    const [inputValues, setInputValues] = useState({});

    useEffect(() => {
        dispatch(getDataAsyncAction())
    }, []);

    const handleDelete = (item) => () => dispatch(clearItemAsyncAction(item))
    const handleChange = (index) => (event) => {
        setInputValues({...inputValues, [index]: event.target.value});
    };
    const handleSubmit = (index) => () => {
        const updatedValue = inputValues[index];
        dispatch(changeItemAsyncAction({index, newValue: updatedValue}));
        setInputValues(prevState => ({
            ...prevState,
            [index]: ''
        }));
    };


    return (
        <>
            {
                items.length === 0
                    ? <span>No data </span>
                    :
                    (
                        items.map((item, index) =>

                            <ListItem key={index}>
                                <input
                                    type="text"
                                    name='text_input'
                                    value={inputValues[index] || ''}
                                    onChange={handleChange(index)}/>
                                <Button onClick={handleSubmit(index)}>Change</Button>

                                {item}
                                <Button onClick={handleDelete(item)}>Delete</Button></ListItem>)
                    )
            }
        </>
    );
}

export default List
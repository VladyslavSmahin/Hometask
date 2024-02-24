import {useDispatch, useSelector} from "react-redux";
import Button from "../todo/Button.jsx";
import selectors from "../../../engine/todo/redux/selectors.js";
import {useEffect, useState} from "react";
import {
    changeItemAsyncAction,
    clearItemAsyncAction,
    getDataAsyncAction
} from "../../../engine/todo/saga/asynxActions.js";
import Input from "./Input.jsx";
import {Box, ListItem, ListItemText} from "@mui/material";
import "/style.css";


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
                        items.map((item, index) => (
                            <ListItem key={index}
                                      className='liItem'
                                      sx={{
                                          margin: "auto",
                                          display: "flex",
                                          justifyContent: "center",
                                          alignItems: "center"
                                      }}>
                                <Button sx={{height: '55px', marginTop: '-6px' }}
                                        onClick={handleSubmit(index)}>Change</Button>
                                <Box sx={{display: 'flex', height: '60px'}}>
                                    <Input sx={{width: '100px'}}
                                           value={inputValues[index] || ''}
                                           onChange={handleChange(index)}/>
                                    <ListItemText primary={item}
                                                  sx={{ border: '1px solid black',width: '300px', padding: '10px 20px 20px 20px', marginTop: '0' }}
                                    />
                                    <Button  sx={{height: '55px'}}>Done</Button>
                                    <Button onClick={handleDelete(item)} sx={{height: '55px'}}>Delete</Button>

                                </Box>
                            </ListItem>
                        ))
                    )
            }
        </>
    );
}

export default List
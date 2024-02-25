import {useDispatch, useSelector} from "react-redux";
import Button from "../todo/Button.jsx";
import selectors from "../../../engine/todo/redux/selectors.js";
import {useContext, useEffect, useState} from "react";
import {
    toggleCheckboxAction,
    clearItemAsyncAction,
    getDataAsyncAction
} from "../../../engine/todo/saga/asynxActions.js";
import {Box, Checkbox, ListItem, ListItemText} from "@mui/material";
import "/style.css";
import ThemeContext from "../theme.jsx";


function List() {
    const items = useSelector(selectors.items);
    const dispatch = useDispatch();
    const theme = useContext(ThemeContext);

    useEffect(() => {
        dispatch(getDataAsyncAction())
    }, []);

    const handleDelete = (item) => () => dispatch(clearItemAsyncAction(item))

    const handleCheckboxClick = (id) => () => {
        dispatch(toggleCheckboxAction(id))
    };

    console.log('items:', items);

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
                                      }}
                            >
                                <Box sx={{display: 'flex', height: '60px'}}>
                                    <Checkbox
                                        edge="end"
                                        checked={item.isChecked}
                                        onClick={handleCheckboxClick(item.id)}
                                    />
                                    <ListItemText primary={item.text}
                                                  sx={{border: `1px solid ${theme.palette.primary.main}`,
                                                      width: '300px',
                                                      padding: '10px 20px 20px 20px',
                                                      marginTop: '0' }}
                                    />
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
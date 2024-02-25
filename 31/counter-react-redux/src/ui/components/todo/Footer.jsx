import Button from "../todo/Button.jsx";
import selectors from "../../../engine/todo/redux/selectors.js";
import {useSelector, useDispatch} from "react-redux";
import {clearStoreAsyncAction, filterItemsAsyncAction} from "../../../engine/todo/saga/asynxActions.js";
import {Box, TextField, Typography} from "@mui/material";
import Input from "./Input.jsx";
import todoSlice from "../../../engine/todo/redux/todoSlice.js";
import {useEffect} from "react";
import {Form} from "formik";

function Footer() {
    const items = useSelector(selectors.items);
    const dispatch = useDispatch()
    const onClear = () => {
        dispatch(clearStoreAsyncAction());
    }
    const handleFilter = (event) => {
        const inputValue = event.target.value.toLowerCase();
        dispatch(filterItemsAsyncAction(inputValue));
    }
    const onReset = (event) => {
        console.log(event.target.value)
    }
    return (
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography sx={{border: '1px solid black', padding: "10px"}}
                        variant="h5">Count: {items.length}</Typography>
            <Button onClick={onClear} sx={{marginRight: '6px'}}>Clear</Button>
            <Input  sx={{width: "50%"}} onChange={handleFilter}></Input>

        </Box>
    );
}

export default Footer
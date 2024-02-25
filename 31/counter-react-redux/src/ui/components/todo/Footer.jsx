import Button from "../todo/Button.jsx";
import selectors from "../../../engine/todo/redux/selectors.js";
import {useSelector, useDispatch} from "react-redux";
import {clearStoreAsyncAction, filterItemsAsyncAction} from "../../../engine/todo/saga/asynxActions.js";
import {Box, Typography} from "@mui/material";
import Input from "./Input.jsx";
import todoSlice from "../../../engine/todo/redux/todoSlice.js";
import {useEffect} from "react";

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
    return (
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography sx={{ border: '1px solid black', padding:"10px"}} variant="h5">Count: {items.length}</Typography>
            <Button onClick={onClear} sx={{marginRight:'6px'}}>Clear</Button>
            <Input sx={{width:"30%"}} onChange={handleFilter}></Input>
        </Box>
    );
}

export default Footer
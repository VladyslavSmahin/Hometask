import Button from "../todo/Button.jsx";
import selectors from "../../../engine/todo/redux/selectors.js";
import {useSelector, useDispatch} from "react-redux";
import {clearStoreAsyncAction} from "../../../engine/todo/saga/asynxActions.js";
import {Box, Typography} from "@mui/material";
import Input from "./Input.jsx";


function Footer() {
    const items = useSelector(selectors.items);
    const dispatch = useDispatch()
    const onClear = () => {
        dispatch(clearStoreAsyncAction());
    }
    return (
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography sx={{ border: '1px solid black', padding:"10px"}} variant="h5">Count: {items.length}</Typography>
            <Button onClick={onClear} sx={{marginRight:'6px'}}>Clear</Button>
            <Input sx={{width:"30%"}}></Input>
        </Box>
    );
}

export default Footer
import Button from "../components/todo/Button.jsx";
import Content from "../components/counter/Content.jsx";
import {useDispatch} from "react-redux";
import counterSlice from "../../engine/counter/counter.js";
import {useContext} from "react";
import ThemeContext from "../components/helpers/theme.jsx";
import {Box} from "@mui/material";

export default function (props) {
    const {sx} = props
    const dispatch = useDispatch()
    const onIncrement = () => {
        dispatch(counterSlice.actions.increment())
    }
    const onDecrement = () => {
        dispatch(counterSlice.actions.decrement())
    }
    const onForce0 = () => {
        dispatch(counterSlice.actions.force(0))
    }
    const Theme = useContext(ThemeContext)
    return (
        <Box sx={{...sx, backgroundColor: Theme.palette.primary.main,
            width: '30%',
            display: 'flex',
            alignItems: `center`,
            marginLeft: '35%',
            marginBottom: '100px',
            flexDirection: 'column',
            border: `3px solid ${Theme.palette.primary.dark}`,
            borderRadius: '5%'
        }}>
            <Content/>
            <Box sx={{marginBottom: '5px'}}>
                <Button onClick={onDecrement}>-</Button>
                <Button onClick={onIncrement}>+</Button>
            </Box>
            <Button onClick={onForce0} sx={{marginBottom: '20px'}}>Change to 0</Button>
        </Box>
    )
}
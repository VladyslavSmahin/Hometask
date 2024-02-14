import Button from "./Button.jsx";
import Content from "./Content.jsx";
import {useDispatch} from "react-redux";
import counterSlice from "../../../engine/counter/counter.js";

export default function () {
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
    return (
        <div>
            <Content/>
            <Button onClick={onDecrement}>-</Button>
            <Button onClick={onIncrement}>+</Button>
            <Button onClick={onForce0}>Change to 0</Button>
        </div>
    )
}
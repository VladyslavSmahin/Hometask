import {useSelector} from "react-redux";

export default function (){
    const counterState = useSelector((state) =>  state.counter.value)
    return(
            <p>
                Clicked: <span> {counterState}</span>
            </p>
    )
}
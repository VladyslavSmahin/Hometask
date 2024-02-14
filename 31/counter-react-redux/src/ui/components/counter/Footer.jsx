import {useSelector} from "react-redux";

export default function (){
    const counterState = useSelector((state) =>  state.counter.value)
    return(
        <div>
            <footer>
               Counter: {counterState}
            </footer>
        </div>
    )
}
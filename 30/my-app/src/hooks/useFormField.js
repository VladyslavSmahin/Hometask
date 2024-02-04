import {useState} from "react";


const UseFormField = (initialValue = '') => {
    const [value, setValue] = useState(initialValue)
    const onChange = (e) => {
        setValue(e.target.value)
    }
    return {
        value,
        onChange,
    }
}
export default UseFormField
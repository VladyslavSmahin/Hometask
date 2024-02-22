import {TextField} from "@mui/material";

function Input(props) {
    const {handleChange, value, sx, placeholder,onBlur} = props
    return (
        <TextField onChange={handleChange}
                   onBlur={onBlur}
                   value={value}
                   sx={sx}
                   label="Filled"
                   variant="outlined"
                   type="text"
                   name="todoText"
                   placeholder={placeholder}
                   />
    )

}

export default Input
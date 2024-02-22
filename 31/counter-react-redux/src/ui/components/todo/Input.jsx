import {TextField} from "@mui/material";

function Input(props) {
    const {onChange, value, sx} = props
    return (
        <TextField onChange={onChange}
                   value={value}
                   id="filled-basic"
                   label="Filled"
                   variant="outlined"
                   name='text_input'
                   type="text"
                   sx={sx}/>
    )

}

export default Input
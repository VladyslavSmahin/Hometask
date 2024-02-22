import {TextField} from "@mui/material";

function Input(props) {
    const {onChange, sx, name,value} = props

    return (
        <TextField
            value={value}
            onChange={onChange}
            name={name}
            sx={sx}
            label="Filled"
            variant="outlined"
            type="text"
        />
    )

}

export default Input
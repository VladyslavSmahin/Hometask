import {TextField} from "@mui/material";

function Input(props) {
    const { sx, name,value} = props

    return (
        <TextField
            value={value}
            name={name}
            sx={sx}
            label="Filled"
            variant="outlined"
            type="text"
        />
    )

}

export default Input
import {TextField} from "@mui/material";

export  default function (props){
    let {input, meta, placeholder} = props
    return(
        <TextField
            sx={{marginTop: '10px'}}
            helperText={meta.error}
            {...meta}
            {...input}
            placeholder={placeholder}
        />
    )
}
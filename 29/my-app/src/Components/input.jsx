    import {TextField} from "@mui/material";

    export  default function (props){
        let {input, meta, placeholder, type, className} = props
        return(
            <TextField
                sx={{marginTop: '10px'}}
                helperText={meta.touched && meta.error}
                error={Boolean(meta.error)}
                value={input.value}
                placeholder={placeholder}
                onChange={input.onChange}
                type={type}
                className={className}
            />
        )
    }
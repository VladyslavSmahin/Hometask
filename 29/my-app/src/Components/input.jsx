    import {TextField} from "@mui/material";

    export  default function (props){
        let {input, meta, placeholder, type, className} = props
        const handleChange = (event) => {
            input.onChange(event);
            console.log(props)
        };
        return(
            <TextField
                sx={{marginTop: '10px'}}
                helperText={meta.touched && meta.error}
                {...meta}
                value={input.value}
                placeholder={placeholder}
                onChange={handleChange}
                type={type}
                className={className}
            />
        )
    }
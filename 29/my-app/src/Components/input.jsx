    import {TextField} from "@mui/material";

    export  default function (props){
        let {input, meta, placeholder, type, className } = props
        const handleChange = (e) => {
            input.onChange(e);
        };
        return(
            <>
            <TextField
                sx={{marginTop: '10px'}}
                helperText={meta.error}
                error={Boolean(meta.error)}
                value={input.value}
                placeholder={placeholder}
                onChange={handleChange}
                type={type}
                className={className}
            />
            </>
        )
    }
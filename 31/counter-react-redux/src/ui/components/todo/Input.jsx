    import {TextField} from "@mui/material";

    function Input(props) {
        const { sx, name,value, onChange,label } = props

        const handleChange = (event) => {
            const newValue = event.target.value;
            onChange({ target: { name, value: newValue } });
        };

        return (
            <TextField
                value={value}
                name={name}
                sx={sx}
                label={label}
                variant="outlined"
                type="text"
                onChange={handleChange}
            />
        )

    }

    export default Input
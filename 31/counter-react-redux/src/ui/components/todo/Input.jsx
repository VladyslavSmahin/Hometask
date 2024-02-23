    import {TextField} from "@mui/material";

    function Input(props) {
        const { sx, name,value, onChange } = props
        const handleChange = (event) => {
            const newValue = event.target.value;
            onChange(name, newValue);
        };

        return (
            <TextField
                value={value}
                name={name}
                sx={sx}
                label="Filled"
                variant="outlined"
                type="text"
                onChange={handleChange}
            />
        )

    }

    export default Input
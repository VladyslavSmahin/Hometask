import Button from '@mui/material/Button';

export default function (props){
    const  {onClick, children,disabled, sx, type } = props
    return(
        <Button type={type} sx={sx} variant="contained" disabled={disabled} onClick={onClick}>{children}</Button>
    )

}
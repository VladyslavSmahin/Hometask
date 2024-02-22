import Button from '@mui/material/Button';

export default function (props){
    const  {onClick, children } = props
    return(
        <Button onClick={onClick}>{children}</Button>
    )

}
import {Form, Field} from "react-final-form";
import {Button} from "@mui/material";
import Input from "./input.jsx";



function LogInForm(props) {
    const {handleSubmit, valid} = props;
    return (
        <form onSubmit={handleSubmit}>
            <br/>
            <Field
                name='email'
                component={Input}
                label='Email'
                type='email'
                placeholder='test@gmail.ua'
            />
            <br/>
            <Field
                name='password'
                component={Input}
                label='Password'
                type='password'
                placeholder='yourPassword'
            />
            <br/>
            <Button sx={{marginTop: '20px'}} disabled={!valid} type='submit' variant='outlined' >Send</Button>
        </form>
    )
}
const validateLoginPassword = (values) => {
    const errors = {};
    if (!values.email){
        errors.email = 'Required'
    }
    if (!values.password){
        errors.password = 'Required'
    }
    return errors;
}
function App() {
    const onSubmit = (e) => {
        console.log(`sended:`, e)
    }
    return (
        <>
            <Form
                validate={validateLoginPassword}
                onSubmit={onSubmit}
                render={LogInForm}
            />
        </>
    )
}

export default App

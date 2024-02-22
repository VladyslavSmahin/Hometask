import {useDispatch, useSelector} from "react-redux";
import selectors from "../../../engine/todo/redux/selectors.js";
import {setDataAsyncAction} from "../../../engine/todo/saga/asynxActions.js";
import TextField from "./Input.jsx";
import Button from "./Button.jsx";
import { Formik } from 'formik';
import * as Yup from 'yup';

function Form(props) {
    const {children} = props
    const dispatch = useDispatch()
    const loading = useSelector(selectors.loading)
    const onSubmit = (event) => {
        dispatch(setDataAsyncAction(event))
    }
    const validationSchema = Yup.object().shape({
        todoText: Yup.string()
            .min(5, 'Слишком короткое значение')
            .max(50, 'Слишком длинное значение')
            .required('Обязательное поле'),
    });
    return (
        <>
       {/* <form onSubmit={onSubmit}>
            <TextField sx={{width: "100%"}}/>
            <Button type="submit"
                    disabled={loading}
                    sx={{height: '20px',width: "100%"}}
            >{children}</Button>
        </form>*/}
            <Formik
                initialValues={{ todoText: '' }}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                validateOnChange={true}
                validateOnBlur={false}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <TextField
                            onBlur={handleBlur}
                            value={values.todoText}
                            sx={{ width: "100%" }}
                        />
                        {errors.todoText && touched.todoText && <div>{errors.todoText}</div>}
                        <Button type="submit"
                                disabled={loading}
                                sx={{ height: '20px', width: "100%" }}>
                            {children}
                        </Button>
                    </form>
                )}
            </Formik>

        </>
    );
}

export default Form
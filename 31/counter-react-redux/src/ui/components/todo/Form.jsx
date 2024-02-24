    import {useDispatch, useSelector} from "react-redux";
    import selectors from "../../../engine/todo/redux/selectors.js";
    import {setDataAsyncAction} from "../../../engine/todo/saga/asynxActions.js";
    import Input from "./Input.jsx";
    import Button from "./Button.jsx";
    import { Formik } from 'formik';
    import * as Yup from 'yup';

    function Form(props) {
        const {children} = props
        const dispatch = useDispatch()
        const loading = useSelector(selectors.loading);
        const onSubmit = (values, formikProps) => {
            dispatch(setDataAsyncAction(values));
            formikProps.resetForm()
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
                <Input sx={{width: "100%"}}
                       name='text_input'
                />
                <Button type="submit"
                        disabled={loading }
                        sx={{height: '20px',width: "100%"}}
                >{children}</Button>
            </form>*/}
                <Formik
                    initialValues={{
                        todoText: '' }}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    validateOnChange={true}
                    validateOnBlur={false}
                >
                    {formikProps => (
                        <form onSubmit={formikProps.handleSubmit}>
                            <Input
                                type='text'
                                name='todoText'
                                sx={{ width: "100%" }}
                                value={formikProps.values.todoText}
                                onChange={formikProps.handleChange}
                            />
                            {formikProps.errors.todoText && formikProps.touched.todoText && <div>{formikProps.errors.todoText}</div>}
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
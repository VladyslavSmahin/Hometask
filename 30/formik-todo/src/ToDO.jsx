import Button from "./Button.jsx";
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const TodoForm = ({ addTodo }) => {
    const validationSchema = Yup.object().shape({
        todoText: Yup.string()
            .min(5, 'Слишком короткое значение')
            .max(50, 'Слишком длинное значение')
            .required('Обязательное поле'),
    });
    return (
        <Formik
            initialValues={{ todoText: '' }}
            validationSchema={validationSchema}
            validateOnChange={true}
            validateOnBlur={false}
            onSubmit={(values, { resetForm }) => {
                addTodo(values.todoText);
                resetForm();
            }}
        >
            {formikProps => (
                <Form>
                    <Field
                        type="text"
                        name="todoText"
                        className="input"
                        placeholder="Add new todo"
                        onChange={formikProps.handleChange}
                        onBlur={formikProps.handleBlur}
                    />
                    {formikProps.errors.todoText && formikProps.touched.todoText && (
                        <div className="error-message">{formikProps.errors.todoText}</div>
                    )}
                    <Button type="submit" text={"Add"} disabled={!formikProps.isValid}></Button>
                </Form>
            )}
        </Formik>

    );
};

export default TodoForm;

{/*<form onSubmit={onSubmit}>
            <Input sx={{width: "100%"}}
                   name='text_input'
            />
            <Button type="submit"
                    disabled={loading }
                    sx={{height: '20px',width: "100%"}}
            >{children}</Button>
        </form>*/}
    import React, {useContext, useState, useEffect} from 'react';
    import {DarkThemeContext} from "../helpers/context.js";
    import Button from "../Components/Button.jsx"
    import {Field, Form} from "react-final-form";
    import Input from "../Components/input.jsx";


    const ToDo = () => {
        const [localStorageData, setLocalStorageData] = useState([]);
        const currentTheme = useContext(DarkThemeContext)

        const validateLogin = (values) => {
            const errors = {};
            if (!values.myField) {
                errors.myField = 'Required'
            }
            return errors;
        }

        const addTodo = (values, helpers) => {
            const newData = [...localStorageData, values.myField];
            setLocalStorageData(newData);
            helpers.reset()
        };

        const removeButton = (index) => {
            const updatedData = [...localStorageData];
            updatedData.splice(index, 1);
            setLocalStorageData(updatedData);
            localStorage.setItem('localStorageData', JSON.stringify(updatedData));
        };

        useEffect(() => {
            localStorage.setItem('localStorageData', JSON.stringify(localStorageData));
        }, [localStorageData]);

        return (
            <div>
                <h1 className={`${currentTheme.textColor} pt-5 text-4xl`}>ToDoList</h1>
                <Form
                    validate={validateLogin}
                    onSubmit={addTodo}
                    render={({handleSubmit, valid }) => (
                        <form onSubmit={handleSubmit}  className={`form ${currentTheme.backgroundHeader}`} >
                            <Field
                                name="myField"
                                component={Input}
                                placeholder='your text'
                                label='Email'
                                type='email'
                                className="form__input"
                            >
                            </Field>
                            <Button className="p-3 mt-4 bg-emerald-900 text-slate-50" disabled={!valid} type="submit" text='Add'></Button>

                        </form>
                    )}
                />
                {localStorageData.length > 0 && (
                    <ul>
                        {localStorageData.map((todo, index) => (
                            <li key={index} className="todo-item">
                                <input type="checkbox" />
                                <span className="todo-item__description">{todo}</span>
                                <Button onClick={() => removeButton(index)} className="p-3 bg-emerald-900 text-slate-50" text='Delete'></Button>
                            </li>
                        ))}

                    </ul>
                )}
            </div>
        );
    }

    export default ToDo;

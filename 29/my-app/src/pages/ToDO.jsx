import React, {useContext, useState} from 'react';
import {DarkThemeContext} from "../helpers/context.js";
import Button from "../Components/Button.jsx"
import {Field, Form} from "react-final-form";
import Input from "../Components/input.jsx";


const ToDo = () => {
    const [localStorageData, setLocalStorageData] = useState([]);
    const currentTheme = useContext(DarkThemeContext)
    const [inputValue, setInputValue] = useState('');
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const validateLogin = (values) => {
        const errors = {};
        if (!values.myField) {
            errors.myField = 'Required'
        }
        console.log(errors)
        return errors;
    }

    const addTodo = (event) => {
        event.preventDefault();
        if (inputValue !== '') {
            const newData = [...localStorageData, inputValue];
            setLocalStorageData(newData);
            localStorage.setItem('myLocalStorageData', JSON.stringify(newData));
            setInputValue('');
            console.log(`sended:`,newData)
        }
    };
    return (
        <div>
            <h1 className={`${currentTheme.textColor} pt-5 text-4xl`}>ToDoList</h1>
            <Form
                validate={validateLogin}
                onSubmit={addTodo}
                render={({ valid }) => (
                    <form className={`form ${currentTheme.backgroundHeader}`} >
                        <Field
                            name="myField"
                            component={Input}
                            placeholder='your text'
                            label='Email'
                            type='email'
                            required
                            className="form__input"
                            onChange={handleChange}
                        />
                        <Button className="p-3 bg-emerald-900 text-slate-50" disabled={!valid}  text='Add'></Button>
                    </form>
                )}
            />
            {localStorageData.length > 0 && (
                <ul>
                    {localStorageData.map((todo, index) => (
                        <li key={index} className="todo-item">
                            <input type="checkbox"/>
                            <span className="todo-item__description">{todo}</span>
                            <Button className="p-3 bg-emerald-900 text-slate-50" text='Delete'></Button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ToDo;

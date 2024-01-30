import React, {useContext, useState} from 'react';
import {DarkThemeContext} from "../helpers/context.js";
import Button from "../Components/Button.jsx"

const ToDo = () => {
    const currentTheme = useContext(DarkThemeContext)
    const [inputValue, setInputValue] = useState('');
    const [localStorageData, setLocalStorageData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
        setErrorMessage('')
    };

    const addTodo = (event) => {
        event.preventDefault();
        if (inputValue !== '') {
            const newData = [...localStorageData, inputValue];
            setLocalStorageData(newData);
            localStorage.setItem('myLocalStorageData', JSON.stringify(newData));
            setInputValue('');
        } else {
            setErrorMessage("Oops, you need to enter text.");
        }
    };
    return (
        <div>
            <h1 className={`${currentTheme.textColor} pt-5 text-4xl`}>ToDoList</h1>
            <form className="form">
                <input type="text" placeholder={errorMessage} value={inputValue} required className="form__input"
                       onChange={handleChange} />
                <Button className="p-3 bg-emerald-900 text-slate-50" onClick={addTodo} text='Add'></Button>
            </form>

            {/* Условный рендеринг списка дел */}
            {localStorageData.length > 0 && (
                <ul className="js--todos-wrapper">
                    {localStorageData.map((todo, index) => (
                        <li key={index} className="todo-item">
                            <input type="checkbox" />
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

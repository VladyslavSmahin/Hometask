import React, {useContext, useState} from 'react';
import {DarkThemeContext} from "../helpers/context.js";

const ToDo = () => {
    const currentTheme = useContext(DarkThemeContext)

    return (
         <div>
             <h1 className={`${currentTheme.textColor} pt-5 text-4xl`}>ToDoList</h1>
             <form className="form js--form">
                 <input type="text" name="value" required className="form__input js--form__input"/>
                     <button className="form__btn">Додати</button>
             </form>
             <ul className="js--todos-wrapper">
                 <li className="todo-item ">
                     <input type="checkbox"/>
                     <span className="todo-item__description">Text</span>
                     <button className="todo-item__delete">Видалити</button>
                 </li>
             </ul>
         </div>
        )
}

export default ToDo;

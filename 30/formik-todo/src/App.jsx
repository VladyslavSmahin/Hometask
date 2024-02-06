import React, { useState } from 'react';
import TodoForm from "./ToDO.jsx";

const App = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    return (
        <div className="app">
            <h1>To-Do List</h1>
            <TodoForm addTodo={addTodo} />
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;

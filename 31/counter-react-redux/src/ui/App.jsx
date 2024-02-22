import {Provider} from 'react-redux'
import {store} from "../shared/store.js";
import Todo from "./components/todo/Todo.jsx";
import Header from "./components/todo/Header.jsx";

function App() {

    return (
        <Provider store={store}>
            <Todo/>
        </Provider>
    )
}

export default App

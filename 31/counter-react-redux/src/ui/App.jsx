import {Provider} from 'react-redux'
import {store} from "../shared/store.js";
import Wrapper from "./components/counter/Wrapper.jsx";
import Footer from "./components/counter/Footer.jsx";
import Todo from "./components/todo/Todo.jsx";

function App() {

    return (
        <Provider store={store}>
            {/*<Wrapper/>
            <Footer/>*/}
            <Todo/>
        </Provider>
    )
}

export default App

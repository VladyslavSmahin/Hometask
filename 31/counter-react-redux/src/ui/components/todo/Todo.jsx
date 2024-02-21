import List from "./List.jsx";
import Form from "./Form.jsx";
import Footer from "./Footer.jsx";


function TodoForm() {

    return (
        <div>
            <h1>Todo List</h1>
            <Form>Add item</Form>
            <List/>
            <Footer/>
        </div>
    );
}

export default TodoForm
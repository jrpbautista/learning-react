import { useState } from "react";
import Form from "./components/todo/form/Form";
import TodoItem from "./components/todo/item/Item";

function App() {
    const [todoList, setTodoList] = useState([]);

    const deleteItemHandler = (id) => {
        setTodoList((prevState) => prevState.filter((todo) => todo.id !== id));
    };

    const addItemHandler = (text) => {
        setTodoList((prevState) => [
            ...prevState,
            { text, id: `${Math.random()}` },
        ]);
    };

    return (
        <div className="App">
            <Form onAddItem={addItemHandler} />
            {todoList.length !== 0 && (
                <ul>
                    {todoList.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            id={todo.id}
                            text={todo.text}
                            onDeleteClick={deleteItemHandler}
                        />
                    ))}
                </ul>
            )}
            {todoList.length === 0 && <p>Nothing to do today!</p>}
        </div>
    );
}

export default App;

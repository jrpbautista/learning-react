import TodoItem from "./components/TodoItem.js";

function App() {
    const clickItemHandler = (text) => {
        alert(text + " is clicked");
    };

    return (
        <div className="App">
            <ul>
                <TodoItem text="todo 1" onItemClick={clickItemHandler} />
                <TodoItem text="todo 2" onItemClick={clickItemHandler} />
                <TodoItem text="todo 3" onItemClick={clickItemHandler} />
                <TodoItem text="todo 4" onItemClick={clickItemHandler} />
            </ul>
        </div>
    );
}

export default App;

import TodoItem from "./components/TodoItem.js";

function App() {
    return (
        <div className="App">
            <ul>
                <TodoItem text="todo 1" />
                <TodoItem text="todo 2" />
                <TodoItem text="todo 3" />
                <TodoItem text="todo 4" />
            </ul>
        </div>
    );
}

export default App;

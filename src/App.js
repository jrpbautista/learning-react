import TodoItem from "./components/TodoItem.js";

function App() {
    const DUMMY_TODO = [
        {
            text: "todo 1",
        },
        {
            text: "todo 2",
        },
        {
            text: "todo 3",
        },
        {
            text: "todo 4",
        },
        {
            text: "todo 5",
        },
    ];

    const clickItemHandler = (text) => {
        alert(text + " is clicked");
    };

    return (
        <div className="App">
            <ul>
                {DUMMY_TODO.map((todo) => (
                    <TodoItem text={todo.text} onItemClick={clickItemHandler} />
                ))}
            </ul>
        </div>
    );
}

export default App;

import { useState } from "react";

const Form = (props) => {
    const [todo, setTodo] = useState();

    const todoChangeHandler = (event) => {
        setTodo(event.target.value);
    };

    const addTodoItemHandler = (event) => {
        event.preventDefault();
        props.onAddItem(todo);
        setTodo("");
    };

    return (
        <form onSubmit={addTodoItemHandler}>
            <label htmlFor="item-desc">What to do? </label>
            <input
                type="text"
                id="item-desc"
                name="item-desc"
                onChange={todoChangeHandler}
                value={todo}
                required
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default Form;

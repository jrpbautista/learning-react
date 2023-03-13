import { useState } from "react";

const Input = () => {
    const [name, setName] = useState();

    // useState() lets you add a state in the component
    // if destructured,
    // 1st element is the state,
    // 2nd element will be the dispatch action

    const changeNameHandler = (event) => {
        setName(event.target.value);
    };

    return (
        <div>
            <label htmlFor="name">Name: </label>
            <input
                type="text"
                id="name"
                name="name"
                onChange={changeNameHandler}
            />

            <h1>{name}</h1>
        </div>
    );
};

export default Input;

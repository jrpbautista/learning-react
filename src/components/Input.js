import { useState } from "react";

const Input = () => {
    const [counter, setCounter] = useState(0); //initializes counter to 0

    const increaseCounterHandler = () => {
        setCounter((prevState) => prevState + 1);
    };

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increaseCounterHandler}>Increase count</button>
        </div>
    );
};

export default Input;

import { useState } from "react";

const Input = () => {
    const [counter, setCounter] = useState(0); //initializes counter to 0

    const increaseCounterHandler = () => {
        setCounter((prevState) => prevState + 1);
    };

    const decreaseCounterHandler = () => {
        setCounter((prevState) => prevState - 1);
    };

    return (
        <div>
            <p>Count to 5</p>
            <h1>{counter}</h1>
            <button onClick={increaseCounterHandler}>Increase</button>
            <button onClick={decreaseCounterHandler}>Decrease</button>
            {counter >= 5 && <h1>DONE!</h1>}
        </div>
    );

    // added h1 that will only be shown if counter is equal or greater than 5.
};

export default Input;

import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const increSeCount = () => {
        setCount((c) => c + 1);
    };
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increSeCount}>Increment</button>
        </div>
    );
};

export default Counter;

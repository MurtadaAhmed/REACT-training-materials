import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)

    function increaseCount() {
        setCount(count + 1)
    }

    function decreaseCount() {
        setCount(count - 1)
    }

    function resetCount(){
        setCount(0)
    }

    let negativeCount = count < 0 ? "negative" : ""

    return (
        <>
            <h2>Counter with button</h2>
            <h3>Current count: {count}</h3>
            <p>{negativeCount}</p>
            <button onClick={increaseCount}>+ Click me to increase count + </button>
            <button onClick={resetCount}>Reset</button>
            <button onClick={decreaseCount}>- Click me to reduce count -</button>
            
        </>
    )
}
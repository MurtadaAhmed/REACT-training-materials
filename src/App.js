import {useState} from "react";

function MyButton(){
    const [count, setCount] = useState(0)

    function handleClick(){
        setCount(count + 1)
    }

    return (
        <button onClick={handleClick}>
            clicked {count} times
        </button>
    )
}

export default function MyApp(){
    return (
        <div>
            <h1>Counters:</h1>
            <MyButton />
                <br/>
            <MyButton />
                <br/>
            <MyButton />
        </div>
    )
}
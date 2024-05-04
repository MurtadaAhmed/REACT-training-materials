import {useState} from 'react';

export default function Timer(props){
    const [time, setTime] = useState(0);
    setTimeout(() => {
        setTime(time + 1)
    }, 1000)
    return (
        <div>
            <h2>Timer using "useState"</h2>
           <h2> {time}</h2>
        </div>
    )
}
import React,{useState} from 'react';

    const Clock =()=>{
        let time = new Date().toLocaleTimeString();
        const [newTime, setTime] = useState(time);

        const updateTime=()=>{
            let newCTime = new Date().toLocaleTimeString();
            setTime(newCTime);
        }
        
        setInterval(updateTime, 1000);
        return <h1>{newTime}</h1>
    }

export default Clock;
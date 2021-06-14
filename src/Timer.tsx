import  React, { useState , useEffect } from 'react'
 
import './App.css';

const  Timer =() =>{

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });


    return (
     <div>   
            <p> TIME : {date.toLocaleTimeString()}</p>
            <p> DATE : {date.toLocaleDateString()}</p>
        </div>
    );
}

export default Timer;

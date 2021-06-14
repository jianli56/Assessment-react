import React, { useState } from 'react';

import './App.css';

const Increment = () => {

    var [count, setCount] = useState(0);
    function increment() {
        setCount(count + 1);
    }


    return (
        <div>
            <button type="button" className="form-control" onClick={increment} >increment</button>
            <label id="ccount">  {count}</label>
        </div>
    );
}

export default Increment;

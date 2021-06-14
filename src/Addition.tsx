import React, { useState } from 'react';

import './App.css';

function Addition() {
    var [firstNumber, setFirstNumber] = useState(0);
    var [secondNumber, setSecondNumber] = useState(0);
    var [addedValue, setAddedValue] = useState(0);

    function addTogether() {
        setAddedValue(firstNumber + secondNumber);
    }


    function handleOnchange(event: any) {

        let name = event.target.name;
        let value = parseFloat(event.target.value);

        if (name === 'firstNumber') {
            setFirstNumber(value);
        } else if (name === 'secondNumber') {
            setSecondNumber(value);
        }

    }
    return (
        < >
            <div>
                <label id="firstNumber">First number:</label>
                <input type="text" id="firstNumber" name="firstNumber" value={firstNumber} onChange={handleOnchange} />
            </div>
            <div>
                <label id="secondNumber">Second Number:</label>
                <input type="text" id="secondNumber" name="secondNumber" value={secondNumber} onChange={handleOnchange} />
            </div>

            <div>
                <button type="button" id="addButtonId" onClick={addTogether}> Add</button>
                <label id="additionResult"> {addedValue}</label>
            </div>
        </>

    );
}

export default Addition;

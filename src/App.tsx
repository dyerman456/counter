import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Button} from "./components/Button";

function App() {

    const minValue = 6
    const [value, setValue] = useState(minValue)
    const maxValue = 11

    const increase = () => {
        value < maxValue && setValue(value + 1)
    }
    const reset = () => {
        setValue(minValue)
    }

    const counterClass = `blue-div ${maxValue === value ? "max-count" : ""}`

    return (
        <div className="App">
            <Counter
                value={value}
                className={counterClass}
            />
            <div className="wrapper">
                <Button
                    name="Inc"
                    callBack={increase}
                    disabled={value === maxValue}
                    className="blue-div"
                />
                <Button
                    name="Reset"
                    callBack={reset}
                    disabled={value === minValue}
                    className="blue-div"
                />
            </div>
        </div>
    );
}

export default App;

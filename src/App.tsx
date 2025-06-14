import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Button} from "./components/Button";

function App() {

    let [value, setValue] = useState(0)
    const maxValue = 10

    const Increase = (v: number) => {
        v < maxValue && setValue(++value)
    }
    const Reset = () => {
        setValue(0)
    }

    return (
        <div className="App">
            <Counter
                value={value}
                className={`blue-div ${maxValue === value ? "max-count" : ""}`}

            />
            <div className="wrapper">
                <Button
                    name="Inc"
                    maxValue={maxValue}
                    callBack={() => {Increase(value)}}
                    disabled={maxValue === value}
                    className="blue-div"
                />
                <Button
                    name="Reset"
                    callBack={() => {Reset()}}
                    disabled={value === 0}
                    className="blue-div"
                />
            </div>
        </div>
    );
}

export default App;

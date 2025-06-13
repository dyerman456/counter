import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Button} from "./components/Button";

function App() {

    const [value, setValue] = useState(0)
    const maxValue = 5

    const Increase = (v: number) => {
        v < maxValue && setValue(value + 1)
    }
    const Reset = () => {
        setValue(0)
    }

    return (
        <div className="App">
            <Counter
                value={value}
                className={maxValue === value ? "maxCount" : ""}
            />
            <div>
                <Button
                    name={"Inc"}
                    maxValue={maxValue}
                    callBack={() => {Increase(value)}}
                    disabled={maxValue === value}
                />
                <Button
                    name={"Reset"}
                    callBack={() => {Reset()}}
                    disabled={value === 0}
                />
            </div>
        </div>
    );
}

export default App;

import { useState } from "react";
import './counter.css'
import React from "react";

export default function Counterapp() {
    const [count, setelement] = useState(0)


    function increaseValue() {
        setelement(count + 1);

    }

    function decreaseValue() {
        if (count > 0) {
            setelement(count - 1)
        } else {
            alert("the value is less than 0")
        }
    }

    return (
        <div className="parent">
            <div className="container">
                <h3 className="result">{count}</h3>
                <button className="btn1" onClick={increaseValue}>increase </button>
                <button className="btn1" onClick={decreaseValue}>decrease </button>
            </div>
        </div>
    )
}


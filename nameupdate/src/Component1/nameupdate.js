import './nameupdate.css'
import React, { useState } from "react"


export default function Nameupdate() {

    const [getvalue, setvalue] = useState("")
    const [name, setname] = useState()


    function changeName(event) {
        setname(event.target.value)
    }

    function clickName() {
        setvalue(name)
    }

    return (

        <div className="container">
            <input className='input_tag' placeholder='Enter Name' onChange={changeName} ></input><br />
            <button className="btn" onClick={clickName}>Submit</button>
            <div className="btn_div" >
                <h1>My Name is {getvalue}</h1>
            </div>

        </div>

    )
}
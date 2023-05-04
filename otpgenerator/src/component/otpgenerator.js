import React, { useState } from "react";
import axios from 'axios';
import './otpgenerator.css';




export default function GenerateOTP() {

    const [Num, setNum] = useState(' ');
    const [message, setmessage] = useState(' ');

    function validNum() {
        const correctNumber = /^[6-9]\d{9}$/.test(Num);

        if (!correctNumber) {
            setmessage("Please Check Number")
        }
        else {
            setmessage("Entered Number is Valid");
            setNum(" ");

        }
    }

    function getOTP() {

        axios.post(`https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`, {
            mobile: `${Num}`
        })
            .then((data) => setNum(data.mobile))
            .catch((error) => console.log(error))
        validNum();

    }


    return (

        <div className="parent">
            <input type="number" placeholder="Enter Number" onChange={(e) => { setNum(e.target.value) }} className="input" value={Num}></input>
            <button className="btn" onClick={getOTP}>Get OTP</button>
            <h2 className="heading">{message}</h2>
        </div>

    )
}
import { Fragment, useState } from "react";
import './form.css'



let luckyNumber = Math.round(Math.random() * 10);
export default function Makingform() {

    const [getNumber, setNumber] = useState()
    const [count , setCount] = useState(1)

    function changeNumber(event) {
        setNumber(event.target.value)

    }


    function checkNumber(e) {
      e.preventDefault();
        
      setCount(count + 1 )
    //   console.log(count);

        const guessnum = getNumber;
       
        if (guessnum < luckyNumber) {
            alert("You guessed a smaller number")
        }
        if (guessnum > luckyNumber) {
            alert("You guessed a greater number")
        }
        if (guessnum == luckyNumber) {
            alert(`CONGRATULATION  you guessed the right number in ${count+1} attempts`)
            
        }

    }


    return (

        <div className="container">
            <h1>Guess Lucky Number</h1>
            <input className='input_tag' placeholder='Guess Lucky Number' onChange={changeNumber} ></input>
            <button className="btn" onClick={checkNumber}>Match Number</button>
        </div>


    )


}
import { useEffect, useState } from 'react';
import styles from './timer.module.css';


export default function Timer({}){

const [second, setSecond] = useState(0);
const [minutes, setMinutes] = useState(0);

var timer;
useEffect (()=>{

    timer = setInterval(() =>{
         setSecond(second + 1);

         if(second == 59){
             
         }
    },1000)

})


    return(
        <>
        
            <h1>{minutes<10?"0"+minutes:minutes}:{second<10?"0"+second:second}</h1>
        </>
    )
}
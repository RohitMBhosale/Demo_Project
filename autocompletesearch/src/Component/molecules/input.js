
import styles from './input.module.css';
import {FaSearch} from 'react-icons/fa'
import { useState } from 'react';

export default function Input(){

const [input, setInput] = useState('')
const [data , setData] = useState([]);

const fetchData = (value) =>{
    fetch("http://cdn-api.co-vin.in/api/v2/admin/location/states")
    .then( (response)=>response.json())
    .then((json) =>{
        // console.log(json.states.state_name);
        setData(json.states);
        console.log(data[0].state_);
     }) 
}



const handleChange = (value) =>{
    setInput(value);
    fetchData(value);
}


    return(
    <>
    <div className={styles.input_section}>
    <div  className={styles.input_box}>
   
     <input type="text" placeholder="search" value={input} onChange={(e) =>handleChange(e.target.value)}/>
     <FaSearch className={styles.search_icon}/>
    </div>
     

    </div>
    </>
    
    )
    }

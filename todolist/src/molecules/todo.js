import React from "react";
import './todo.css';
import { FaBars, FaTimes } from "react-icons/fa";


export default function ToDo(props){

    return(

         <div className="list">
        {/* <button className="btn1">  < FaTimes/></button> */}
            <li> {props.item}</li>
         </div>

)
}

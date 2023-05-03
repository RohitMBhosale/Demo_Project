
import React, { useState } from 'react';
import './fetchcard.css'


 function Fetchcard()
{
    const [index,setIndex]=useState(0)
    const [data,setData]=useState([])


   async function handlefetch()
   {  
    
    try{
        const response= await fetch('https://reqres.in/api/users/')
        const jsonResponse= await response.json()
        
        if(index==6)
    {
    setIndex(0)
    }
    else
    {
        setIndex(index+1)
        setData(jsonResponse.data[index])
        
    }
     }
     catch(error){
         console.log('i am from catch' ,error)
     }}


     return(
        <div className='parent'>
        <div className='child'>
            <img src={data.avatar}/>
            <p className='para'>ID={data.id}</p>
            <p className='para'>Email={data.email}</p>
            <p className='para'>FirstName={data.first_name}</p>
            <p className='para'>LastName={data.last_name}</p>   
        </div>
         <button className="btn" onClick={handlefetch}>Get users</button>
         </div>
     );
}
export default Fetchcard



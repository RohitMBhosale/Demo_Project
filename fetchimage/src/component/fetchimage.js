import React ,{useEffect, useState} from 'react'
import './fetchimage.css'

function Fetchimage()
{
    const [ image,setImage]=useState('')

    useEffect(()=>
    {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((data)=> data.json())
    .then ((response)=> setImage(response.message))
    .catch((error) => console.log(error))  
    },[])

    return(
      <div className='parent'>
          <img src={image}/>
      </div>
    )
}

export default Fetchimage;
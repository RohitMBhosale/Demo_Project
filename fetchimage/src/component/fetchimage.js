import React, { useEffect, useState } from 'react'
import './fetchimage.css'
import axios from "axios"

function Fetchimage() {
  const [image, setImage] = useState('')

  function changeImage() {

    axios.get('https://dog.ceo/api/breeds/image/random')

      .then((response) => setImage(response.data.message))
      .catch((error) => console.log(error))

  }
  useEffect(() => {
    changeImage();
  }, [])

  return (
    <div>
      <div className='parent'>
      <img src={image} />
      <button className='btn' onClick={changeImage}> Change Image</button>
    </div>
    </div>

  )
}

export default Fetchimage;
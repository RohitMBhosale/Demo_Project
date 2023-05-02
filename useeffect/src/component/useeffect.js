import React, { useEffect, useRef, useState } from 'react'

export function Changeimage() {
    const [item, setitem] = useState()
   
    const imgaeref = useRef(null)

    useEffect(() => {
        Myimage();
    }, [])

    const Myimage = () => {
        setitem('https://tse1.mm.bing.net/th?id=OIP.E4IJcali_762Oo_vNhhbFgHaEK&pid=Api&P=0')
    }

    function handleclick() {
        imgaeref.current.click();
    }

    function handlefilechange(event) {
        const file = event.target.files[0]
        const item = URL.createObjectURL(file)
        setitem(item)
    };
    return (
        <div >
             <div className='App' >
                <img src={item} alt='image' />
                <input type='file' style={{ display: 'none' }} ref={imgaeref} onChange={handlefilechange}/><br/>
                <button onClick={handleclick}>Click</button>
            </div>

        </div>

    )
}

import './new.css';
import { useRef } from 'react'



export default function OpenFile() {

    const ref = useRef(null);

    function catchFile() {
        ref.current.click()

    }




    return (

        <div className='file'>
            <input className='input' type='file' ref={ref} ></input>
            <button className="btn" onClick={catchFile}>pick the file</button>
        </div>



    )



}
import styles from  './addMovies.module.css'; 
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { remove } from '../Store/cartSlice';


 export default function AddMovies(){

const state = useSelector(state => state.cart)

const dispatch = useDispatch();
const remoeCart=(id)=>{
       dispatch(remove(id))
}


    return(
<>

<div  className={styles.add_Movies}>
        {state.map((item) => {
          return (
            <div  key={item.imdbID}  className={styles.one_card}>
              <p>{item.Title}</p>
              <img src={item.Poster} />
              <button className={styles.btn} onClick={() => remoeCart(item.imdbID)}>Remove</button>
            </div>
          );
        })}
      </div>


{/* {JSON.stringify(productCart)} */}

</>
    )
 }
import { useEffect, useState } from "react";
import styles from "./movies.module.css";
import { useDispatch } from "react-redux";
import { add } from "../Store/cartSlice";

export default function Movies() {
  const dispatch = useDispatch();
  const [state, setState] = useState([]);

  const fetchData = () => {
    fetch("https://www.omdbapi.com/?s=action&apikey=229f813a&page=1")
      .then((response) => response.json())
      // .then((data)=>setState(data.Search))
      .then((data) => setState(data.Search));
    // console.log(state.Title)
  };
  useEffect(() => {
    fetchData();
  }, []);

  function AddtoCart(item) {
    dispatch(add(item)); //dispatch the action
  }

  return (
    <>
      <div className={styles.home}>
        {state.map((item) => {
          return (
            <div className={styles.container}>
              <p>{item.Title}</p>
              <img src={item.Poster} />
              <button className={styles.btn} onClick={() => AddtoCart(item)}>
                {" "}
                Add Movies{" "}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

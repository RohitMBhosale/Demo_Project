import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cardProduct = useSelector((state) => state.cart);

  return (
    <>
      <div className={styles.nav_Sec}>
        <div>
          <h1>Movie App</h1>
        </div>
        <div className={styles.navbar}>
          <Link className={styles.link} to={"/"}>
            Home
          </Link>
          <Link className={styles.link} to={"/movies"}>
            Movies
          </Link>
        </div>
        <Link className={styles.movies_cart} to={"/addMovies"}>
          Movies Cart {cardProduct.length}
        </Link>
      </div>
    </>
  );
}

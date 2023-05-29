import Movies from "./Component/Movies/movies.js";
import "./App.css";
import Navbar from "./Component/Navbar/navbar.js";
import { Routes, Route, Form } from "react-router-dom";
import Home from "./Component/Movies/Home.js";
import AddMovies from "./Component/AddMovies/addMovies.js";
import { Provider } from "react-redux";
import store from "./Component/Store/store.js";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/movies" element={<Movies />} />
          <Route path="addMovies" element={<AddMovies />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;

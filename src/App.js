import "./App.css";
import { Home } from "./views/Home";
import Movie from "./views/Movie";
import MovieDetails from "./views/MovieDetailsPage";
//import NotFoundView from "./views/NotFoundView";

import {
  Routes,
  Route,
  //Link
} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" exact="true" element={<Home />} />
        <Route path="/search/search-movies" element={<Movie />} />
        <Route path="/movies/:movieId/*" element={<MovieDetails />} />
        {/* <Route element={<NotFoundView />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;

import {
  Route,
  useParams,
  NavLink,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useState, useEffect, Suspense, lazy } from "react";
import * as detailsAPI from "../services/movie-api";
const Cast = lazy(() => import("../components/Cast"));
const Reviews = lazy(() => import("../components/Reviews"));

export default function MovieDetails() {
  const [details, setDetails] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();

  //const { url } = useRouteMatch();
  useEffect(() => {
    detailsAPI.fetchMovieById(movieId).then((response) => {
      //console.log(response);
      setDetails(response);
    });
  }, [movieId]);
  const onGoBack = () => {
    navigate(-1);
  };
  return (
    <>
      <button onClick={onGoBack}>Go Back</button>
      {details && (
        <div>
          <h1>Movie details</h1>
          <img
            src={`https://image.tmdb.org/t/p/w300/${details.poster_path}`}
            alt={details.title}
          />
          <h2>{details.title}</h2>
          <h3>Vote average</h3>
          <p>{details.vote_average}</p>
          <h3>Overview</h3>
          <p>{details.overview}</p>
          <h3>Genres</h3>
          <ul>
            <h2>Additional information</h2>
            {details.genres.map(({ id, name }) => {
              return <li key={id}>{name}</li>;
            })}
          </ul>
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Review</NavLink>
            </li>
          </ul>
          <Suspense fallback={<h1>Загружаем подмаршрут...</h1>}>
            <Routes>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Routes>
          </Suspense>
        </div>
      )}
    </>
  );
}

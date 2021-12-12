import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as castAPI from "../services/movie-api";

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  console.log(movieId);
  useEffect(() => {
    castAPI.fetchMovieCredits(movieId).then((response) => {
      setCast(response.cast);
      //console.log(response);
    });
  }, [movieId]);
  console.log(cast);
  return (
    <div>
      {cast && (
        <ul>
          {cast.map((item) => {
            return (
              <li key={item.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`}
                  alt={item.name}
                />
                <p>{item.name}</p>
                <p>Character: {item.character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
export default Cast;

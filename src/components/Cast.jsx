import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as castAPI from "../services/movie-api";

function Cast() {
  const { movieId } = useParams;
  const [cast, setCast] = useState(null);
  useEffect(() => {
    castAPI.fetchMovieCredits(movieId).then((response) => {
      console.log(response);
      setCast(response.data.cast);
    });
  });
  return (
    <div>
      <h1>Cast</h1>
    </div>
  );
}
export { Cast };

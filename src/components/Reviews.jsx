import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as reviewAPI from "../services/movie-api";

function Review() {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    reviewAPI
      .fetchMovieReviews(movieId)
      .then((response) => setReview(response.results));
  });

  return (
    <div>
      {review ? (
        <ul>
          {" "}
          {review.map((item) => {
            return (
              <li key={item.id}>
                <div>
                  <h3>{item.author}</h3>
                  <p>{item.content}</p>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
}
export default Review;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as trendingAPI from "../services/movie-api";

//Не забыть разобраться как использовать путь на 19 строке
// useRouteMatch in v6?

function Home() {
  const [trends, setTrends] = useState({});
  useEffect(() => {
    trendingAPI.fetchTrending().then((response) => setTrends(response.results));
  }, []);

  return (
    <>
      <h1>Trending now</h1>
      {trends && (
        <ul>
          {trends.map((trend) => (
            <li key={trend.id}>
              <Link to={{ pathname: `/movies/${trend.id}` }}>
                {trend.title || trend.id}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export { Home };

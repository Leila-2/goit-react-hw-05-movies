import s from "./SearchMovie.module.css";
import React, { useState, useEffect } from "react";
import * as searchAPI from "../../services/movie-api";

export default function SearchMovie() {
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState([]);

  const onChange = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    searchAPI.fetchSearchMovies(query).then((response) => {
      if (response.results !== []) {
        console.log(response);
        setMovie(response);
      }
      return <p>Not match for reaquest {query}</p>;
    });
  });
  console.log(movie);

  // const onChange = (e) => {
  //   console.log(e.currentTarget.value.toLowerCase());
  // };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm}>
        <button type="submit" className={s.Button}>
          <span className={s.ButtonLabel}>Search</span>
        </button>

        <input
          className={s.Input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          onChange={onChange}
          //value={value}
        />
      </form>
    </header>
  );
}

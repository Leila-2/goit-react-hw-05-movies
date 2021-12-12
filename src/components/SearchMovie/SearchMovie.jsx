import s from "./SearchMovie.module.css";
import React, { useState, useEffect } from "react";
import * as searchAPI from "../../services/movie-api";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function SearchMovie() {
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      return toast.error("Please enter movie", {
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setSearchParams({ query: query });
  };
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
      <form className={s.SearchForm} onSubmit={handleSubmit}>
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
          value={query}
        />
      </form>
    </header>
  );
}

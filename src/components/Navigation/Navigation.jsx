import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav>
      <NavLink
        exact="true"
        to="/"
        className={s.link}
        style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
      >
        Home
      </NavLink>

      <NavLink
        to="/search/search-movies"
        className={s.link}
        style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
      >
        Movies
      </NavLink>
    </nav>
  );
}

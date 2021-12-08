import { Link, Routes } from "react-router-dom";
function MovieDetails() {
  return (
    <div>
      <nav>
        <Link to="me">Details</Link>
      </nav>

      <Routes>
        {/* <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} /> */}
      </Routes>
    </div>
  );
}
export { MovieDetails };

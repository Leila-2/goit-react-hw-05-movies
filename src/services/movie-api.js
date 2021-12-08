const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = `7ae6258df2c04573ad69bd08876507dd`;

async function fetchWithErrorHandling(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}
export function fetchTrending() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
}

export function fetchSearchMovies(value) {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
  );
}

export function fetchMovieById(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchMovieCredits(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchMovieReviews(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page-1`
  );
}

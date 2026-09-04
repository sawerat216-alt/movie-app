const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export async function searchMovies(query) {
  if (!query || query.trim() === "") {
    throw new Error("Please enter a search term");
  }

  const url = `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    if (data.Response === "False") {
      throw new Error(data.Error || "No movies found");
    }

    return data.Search || [];
  } catch (error) {
    throw new Error(error.message || "Failed to search movies", {
      cause: error,
    });
  }
}

export async function getMovieDetails(imdbID) {
  if (!imdbID || imdbID.trim() === "") {
    throw new Error("Invalid movie ID");
  }

  const url = `${BASE_URL}?apikey=${API_KEY}&i=${encodeURIComponent(imdbID)}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    if (data.Response === "False") {
      throw new Error(data.Error || "Movie not found");
    }

    return data;
  } catch (error) {
    throw new Error(error.message || "Failed to fetch movie details", {
      cause: error,
    });
  }
}
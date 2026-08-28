import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";
import MovieList from "./Components/MovieList";
import MovieDetails from "./Components/MovieDetails";
import Favorites from "./Components/Favorites";
import { searchMovies } from "./services/movieApi";
import "./App.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    setMovies([]);

    try {
      const results = await searchMovies(query);
      setMovies(results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="main-content">
      <h2>Find Your Favorite Movies</h2>

      <SearchBar onSearch={handleSearch} />

      {loading && <p className="loading-message">Loading movies...</p>}

      {error && <p className="error-message">{error}</p>}

      {!loading && !error && movies.length === 0 && (
        <p className="empty-message">Search for a movie to get started!</p>
      )}

      <MovieList movies={movies} />
    </main>
  );
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:imdbID" element={<MovieDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
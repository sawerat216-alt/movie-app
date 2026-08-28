import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getMovieDetails } from "../services/movieApi";
import { addFavorite, removeFavorite, isFavorite } from "../utils/favorites";

function MovieDetails() {
  const { imdbID } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const details = await getMovieDetails(imdbID);
        setMovie(details);
        setFavorite(isFavorite(imdbID));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [imdbID, location]); // Refresh when navigating to different movie

  const handleGoBack = () => {
    navigate("/");
  };

  const handleToggleFavorite = () => {
    if (favorite) {
      removeFavorite(imdbID);
      setFavorite(false);
    } else {
      addFavorite(movie);
      setFavorite(true);
    }
  };

  if (loading) {
    return <div className="loading-message">Loading movie details...</div>;
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
        <button onClick={handleGoBack} className="back-button">
          Go Back
        </button>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="error-container">
        <p className="error-message">Movie not found</p>
        <button onClick={handleGoBack} className="back-button">
          Go Back
        </button>
      </div>
    );
  }

  const posterUrl = movie.Poster !== "N/A" ? movie.Poster : null;

  return (
    <div className="movie-details-container">
      <button onClick={handleGoBack} className="back-button">
        ← Back to Search
      </button>

      <div className="movie-details-content">
        {posterUrl ? (
          <img
            src={posterUrl}
            alt={movie.Title}
            className="movie-details-poster"
          />
        ) : (
          <div className="movie-poster-placeholder movie-details-poster-placeholder">
            <span>No Image Available</span>
          </div>
        )}

        <div className="movie-details-info">
          <h1 className="movie-details-title">{movie.Title}</h1>
          <p className="movie-details-year">{movie.Year}</p>

          <div className="movie-details-meta">
            <span className="movie-details-rating">
              ⭐ IMDb Rating: {movie.imdbRating}
            </span>
            <span className="movie-details-runtime">{movie.Runtime}</span>
          </div>

          <button
            onClick={handleToggleFavorite}
            className={`favorite-button ${favorite ? "is-favorite" : ""}`}
          >
            {favorite ? "❤️ Remove from Favorites" : "🤍 Add to Favorites"}
          </button>

          <div className="movie-details-section">
            <h3>Genre</h3>
            <p>{movie.Genre}</p>
          </div>

          <div className="movie-details-section">
            <h3>Director</h3>
            <p>{movie.Director}</p>
          </div>

          <div className="movie-details-section">
            <h3>Actors</h3>
            <p>{movie.Actors}</p>
          </div>

          <div className="movie-details-section">
            <h3>Plot</h3>
            <p>{movie.Plot}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;

import { Link } from "react-router-dom";

function MovieCard({ movie, onRemoveFavorite }) {
  const posterUrl = movie.Poster !== "N/A" ? movie.Poster : null;

  const handleRemoveClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onRemoveFavorite) {
      onRemoveFavorite(movie.imdbID);
    }
  };

  return (
    <div className="movie-card-wrapper">
      <Link to={`/movie/${movie.imdbID}`} className="movie-card-link">
        <div className="movie-card">
          {posterUrl ? (
            <img
              src={posterUrl}
              alt={movie.Title}
              className="movie-poster"
            />
          ) : (
            <div className="movie-poster-placeholder">
              <span>No Image Available</span>
            </div>
          )}

          <div className="movie-info">
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        </div>
      </Link>
      {onRemoveFavorite && (
        <button
          onClick={handleRemoveClick}
          className="remove-favorite-button"
        >
          Remove from Favorites
        </button>
      )}
    </div>
  );
}

export default MovieCard;
import MovieCard from "./MovieCard";

function MovieList({ movies, onRemoveFavorite }) {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard 
          key={movie.imdbID} 
          movie={movie} 
          onRemoveFavorite={onRemoveFavorite}
        />
      ))}
    </div>
  );
}

export default MovieList;
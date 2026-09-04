import { useState } from "react";
import MovieList from "./MovieList";
import { getFavorites, removeFavorite } from "../utils/favorites";

function Favorites() {
  const [favorites, setFavorites] = useState(() => getFavorites());

  const handleRemoveFavorite = (imdbID) => {
    const updatedFavorites = removeFavorite(imdbID);
    setFavorites(updatedFavorites);
  };

  return (
    <main className="main-content">
      <h2>My Favorites</h2>

      {favorites.length === 0 ? (
        <p className="empty-message">
          You haven't added any movies to your favorites yet. Go search for
          movies and add them to your favorites!
        </p>
      ) : (
        <>
          <p className="favorites-count">
            You have {favorites.length} favorite movie
            {favorites.length !== 1 ? "s" : ""}
          </p>

          <MovieList
            movies={favorites}
            onRemoveFavorite={handleRemoveFavorite}
          />
        </>
      )}
    </main>
  );
}

export default Favorites;
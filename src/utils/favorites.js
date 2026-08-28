const FAVORITES_KEY = "movie_app_favorites";

export function getFavorites() {
  try {
    const favorites = localStorage.getItem(FAVORITES_KEY);
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error("Error reading favorites from localStorage:", error);
    return [];
  }
}

export function saveFavorites(favorites) {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error("Error saving favorites to localStorage:", error);
  }
}

export function addFavorite(movie) {
  const favorites = getFavorites();
  
  // Check if movie already exists in favorites
  const exists = favorites.some((fav) => fav.imdbID === movie.imdbID);
  
  if (exists) {
    return false; // Movie already in favorites
  }
  
  // Add movie to favorites
  favorites.push(movie);
  saveFavorites(favorites);
  return true; // Successfully added
}

export function removeFavorite(imdbID) {
  const favorites = getFavorites();
  const updatedFavorites = favorites.filter((fav) => fav.imdbID !== imdbID);
  saveFavorites(updatedFavorites);
  return updatedFavorites;
}

export function isFavorite(imdbID) {
  const favorites = getFavorites();
  return favorites.some((fav) => fav.imdbID === imdbID);
}

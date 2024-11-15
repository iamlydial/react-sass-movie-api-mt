export function setMoviesInLocalStorage(newMovie) {
  try {
    let storedMovies = JSON.parse(localStorage.getItem("movies"));

    if (!Array.isArray(storedMovies)) {
      storedMovies = [];
    }

    const isMovieAlreadyInList = storedMovies.some(
      (movie) => movie.id === newMovie.id
    );

    if (!isMovieAlreadyInList) {
      const updatedMovies = [...storedMovies, newMovie]; // Create a new array with the new movie
      localStorage.setItem("movies", JSON.stringify(updatedMovies)); // Save updated array
    } else {
      console.log("Movie already in wishlist!");
    }
  } catch (error) {
    console.error("Error saving to localStorage", error);
  }
}

export const getMoviesFromLocalStorage = () => {
  try {
    const movies = localStorage.getItem("movies");
    return movies ? JSON.parse(movies) : [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

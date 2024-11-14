const API_KEY = "your_movie_api_key";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMoviesByCategory = async (category) => {
  const response = await fetch(`${BASE_URL}/movie/${category}?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const fetchMovieById = async (id) => {
  const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
};
const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchMoviesByCategory = async (category) => {
  const apiUrl = `${BASE_URL}/movie/${category}?api_key=${API_KEY}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data.results;
};

export const fetchMovieById = async (id) => {
  const apiUrl = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
};

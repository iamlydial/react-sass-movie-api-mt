export const fetchMoviesByCategory = async (category) => {
  const response = await fetch(
    `${import.meta.BASE_URL}/movie/${category}?api_key=${import.meta.API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

export const fetchMovieById = async (id) => {
  const response = await fetch(
    `${import.meta.BASE_URL}/movie/${id}?api_key=${import.meta.API_KEY}`
  );
  const data = await response.json();
  return data;
};

import React, { useEffect, useState } from "react";
import { fetchMoviesByCategory } from "../utils/api";
import Carousel from "../components/Carousel.jsx";

const Homepage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    fetchMoviesByCategory("top_rated")
      .then((movies) => {
        setTopRatedMovies(movies);
        console.log("top_rated", movies);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
    fetchMoviesByCategory("popular")
      .then((movies) => {
        setPopularMovies(movies);
        console.log(movies);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
    fetchMoviesByCategory("upcoming")
      .then((movies) => {
        setUpcomingMovies(movies);
        console.log("Upcoming Movies:", movies);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  return (
    <div>
      Homepage
      <Carousel title="Popular Movies" items={popularMovies} />
      <Carousel title="Top Rated Movies" items={topRatedMovies} />
      <Carousel title="Upcoming Movies" items={upcomingMovies} />
    </div>
  );
};

export default Homepage;

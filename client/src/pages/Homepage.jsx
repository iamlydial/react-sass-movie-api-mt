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
    <div className="home-page">
      <h2>Your Guide to the Best Movies, Anytime, Anywhere.</h2>
      
      <div className="carousel-section">
        <Carousel
          className="carousel"
          title="Popular Movies"
          items={popularMovies}
          category="popular"
        />
        <Carousel
          className="carousel"
          title="Top Rated Movies"
          items={topRatedMovies}
          category="top-rated"
        />
        <Carousel
          className="carousel"
          title="Upcoming Movies"
          items={upcomingMovies}
          category="upcoming"
        />
      </div>
    </div>
  );
};

export default Homepage;

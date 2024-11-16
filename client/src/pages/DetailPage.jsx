import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieById } from "../utils/api";
import "../styles/pages/detail-page.sass";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../redux/wishlistSlice";
import { setMoviesInLocalStorage } from "../utils/localStorage";

const DetailPage = () => {
  const { id, category } = useParams();
  const [movie, setMovie] = useState(null);
  const dispatch = useDispatch();

  const handleAddToWishlist = () => {
    setMoviesInLocalStorage(movie);
    dispatch(addToWishlist(movie));
  };

  useEffect(() => {
    fetchMovieById(id)
      .then((data) => {
        console.log(data);
        setMovie(data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  const baseClasses = ["info-side", "additional-info"];
  const categories = ["top-rated", "upcoming", "popular"];

  // Generate the dynamic class names for each element
  const generateClasses = (baseClass) => {
    return categories
      .map((categoryName) =>
        category === categoryName ? `${baseClass}-${categoryName}-info` : ""
      )
      .join(" ");
  };

  return (
    <div className={`detail-page ${category}-movie`}>
      <div className="content">
        <div className="img-side">
          {movie.poster_path && (
            <img
              className="detail-img"
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
            />
          )}
        </div>
        <div className={`info-side ${generateClasses("info-side")}`}>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <button
            className={`info-side-button ${generateClasses(
              "info-side-button"
            )}`}
            onClick={handleAddToWishlist}
          >
            ADD TO WISHLIST
          </button>
        </div>
      </div>
      <div className={`additional-info ${generateClasses("additional-info")}`}>
        <h2>Details</h2>
        <p>Release Date: {movie.release_date}</p>
        <p>Rating: {movie.vote_average}</p>
        <p>Runtime: {movie.runtime} minutes</p>
      </div>
    </div>
  );
};

export default DetailPage;

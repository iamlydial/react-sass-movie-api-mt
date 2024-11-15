import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieById } from "../utils/api";
import "../styles/pages/detail-page.sass";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../redux/wishlistSlice";
import { setMoviesInLocalStorage } from "../utils/localStorage";
const DetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const dispatch = useDispatch();
  
  const handleAddToWishlist = () => {
    setMoviesInLocalStorage(movie);
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

  console.log(movie.poster_path, "movie.imageUrl");

  return (
    <div className="detail-page">
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
        <div className="info-side">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <button onClick={handleAddToWishlist}>ADD TO WISHLIST</button>
        </div>
      </div>
      <div className="additional-info">
        <h2>Details</h2>
        <p>Release Date: {movie.release_date}</p>
        <p>Rating: {movie.vote_average}</p>
        <p>Runtime: {movie.runtime} minutes</p>
      </div>
    </div>
  );
};

export default DetailPage;

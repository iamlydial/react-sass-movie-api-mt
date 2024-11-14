import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieById } from "../utils/api";

const DetailPage = ({ addToWishlist }) => {
  const { id } = useParams();
  console.log(id, "id");
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieById(id)
      .then(setMovie)
      .catch((error) => console.error(error));
  }, [id]);

  console.log("movie", movie);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="detail-page">
      <div className="img-side">
        <img
          className="detail-img"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="info-side">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <button onClick={() => addToWishlist(movie)}>Add to Wishlist</button>
      </div>
    </div>
  );
};

export default DetailPage;

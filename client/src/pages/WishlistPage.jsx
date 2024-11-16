import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ItemCarousel from "../components/ItemCarousel.jsx";
import Carousel from "../components/Carousel.jsx";

const WishlistPage = () => {
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  console.log("Wishlist:", wishlist);
  const [movies, setMovies] = useState(() => {
    const movies = localStorage.getItem("movies");
    return movies ? JSON.parse(movies) : [];
  });

  console.log("Movies:", movies);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  if (!movies) {
    return <div>Loading...</div>;
  }
  return (
    <div className="wishlist-page">
      {movies.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul>
          <Carousel title="Wishlist" items={movies} />
        </ul>
      )}
    </div>
  );
};

export default WishlistPage;

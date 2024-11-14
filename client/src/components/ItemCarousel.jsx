import React from "react";
import { Link } from "react-router-dom";

const ItemCarousel = ({ item }) => {
  console.log("Navigating to movie ID:", item.id);
  return (
    <div className="item-card">
      <Link to={`/detail/${item.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
          alt={item.title}
        />
        <h3>{item.title}</h3>
      </Link>
    </div>
  );
};

export default ItemCarousel;

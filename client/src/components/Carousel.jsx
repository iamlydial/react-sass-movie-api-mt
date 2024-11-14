import React from "react";
import ItemCarousel from "./ItemCarousel";

const Carousel = ({ title, items }) => {
  return (
    <div className="carousel">
      <h2>{title}</h2>
      <div className="carousel-items">
        {items.map((item) => (
          <ItemCarousel key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

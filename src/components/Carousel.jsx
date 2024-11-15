import React from "react";
import ItemCarousel from "./ItemCarousel";

const Carousel = ({ title, items, category }) => {
  return (
    <div className="carousel">
      <h2>{title}</h2>
      <div className="carousel-items">
        {items.map((item) => (
          <ItemCarousel key={item.id} item={item} category={category}/>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

import React from "react";
import { Link } from "react-router-dom/dist";

const Navbar = () => {
  return (
    <nav>
      <h1>
        <Link to="/">CineScout</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/wishlist">Wishlist</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import "./styles/styles.sass";
import Navbar from "./components/Navbar.jsx";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import WishlistPage from "./pages/WishlistPage.jsx";
import { BrowserRouter } from "react-router-dom/dist/index.js";

const App = () => {
  console.log("App is rendering");
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (movie) => {
    setWishlist((prevWishlist) => [...prevWishlist, movie]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/detail/:id/:category"
          element={<DetailPage addToWishlist={addToWishlist} />}
        />

        <Route path="/wishlist" element={<WishlistPage />} />
      </Routes>
    </Router>
  );
};

export default App;

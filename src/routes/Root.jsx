/* eslint-disable react-refresh/only-export-components */
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollToTopButton from "../components/shared/ScrollToTopButton";
import { useState, createContext } from "react";

export const AppContext = createContext();

export default function Root() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => [...prevWishlist, product]);
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) => prevWishlist.filter((product) => product.id !== productId));
  };

  return (
    <AppContext.Provider value={{ cart, wishlist }}>
      <Navbar />
      <Outlet context={{ cart, addToCart, removeFromCart, wishlist, addToWishlist, removeFromWishlist, setCart }} />
      <Footer />
      <ScrollToTopButton />
    </AppContext.Provider>
  );
}
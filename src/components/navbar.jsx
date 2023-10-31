import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { motion } from "framer-motion";

export const Navbar = () => {
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="links">
        <h1 className="logo"> SMARTHOME. </h1>
        <Link to="/"> POČETNA </Link>
        <Link to="/shop"> MARKET </Link>
        <Link to="/project"> PROJEKAT </Link>
        <Link to="/cart">
          <ShoppingCart size={25}  />   <motion.span  whileHover={{ scale: 1.2}} className="cart-items">{getTotalCartItems()}</motion.span> 
        </Link>
      </div>
    </div>
  );
};

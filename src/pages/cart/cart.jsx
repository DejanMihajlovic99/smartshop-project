import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import { motion } from "framer-motion";
import { useState } from "react";
import PayPal from "../../components/PayPal";

export const Cart = () => {
  const [checkout, setCheckOut] = useState(false);

  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className="cart"
    >
      <div>
        <h1>Tvoja korpa:</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          } else {
            return null;
          }
        })}
    
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p style={{ textAlign: "center" }}>Kasa: {totalAmount} USD</p>
          <div className="buttons">
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => navigate("/shop")}
            >
              Nastavi sa kupovinom
            </motion.button>
            {checkout ? (
              <PayPal />
            ) : (
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => setCheckOut(true)}
              >
                Checkout
              </motion.button>
            )}
          </div>
        </div>
      ) : (
        <h1>Tvoja korpa za kupovinu je prazna!</h1>
      )}
    </motion.div>
  );
};


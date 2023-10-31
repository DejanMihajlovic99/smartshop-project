import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { motion } from "framer-motion";

export const CartItem = (props) => {
  const { id, productName, price, productImage, title } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} alt="cartitemimages" />
      <div className="description">
        <p>
          <b className="productname">{productName}</b>
        </p>
        <p className="titleproduct">{title}</p>
        <p className="price"> Cena: {price} USD </p>
        <div className="countHandler">
          <motion.button  whileHover={{ scale: 1.1}}  className="decraese" onClick={() => removeFromCart(id)}> - </motion.button>
          <input className="input"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <motion.button  whileHover={{ scale: 1.1}} className="increase" onClick={() => addToCart(id)}> + </motion.button>
        </div>
      </div>
    </div>
  );
};

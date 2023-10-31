import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { motion } from "framer-motion";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <motion.img src={productImage} whileHover={{ scale: 1.1 }} />
      <div className="description">
        <p>
          <b className="product-name">{productName}</b>
        </p>
        <p style={{fontWeight:"bold"}}> {price} <span style={{color:"#68a047"}}>  USD </span> </p>
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="addToCartBttn"
        onClick={() => addToCart(id)}
      >
        NARUČI {cartItemCount > 0 && <> ({cartItemCount})</>}
      </motion.button>
    </div>
  );
};

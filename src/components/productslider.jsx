import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive } from "../products";
import Allproduct from "./allproduct";
import "./productslider.css";

const product = productData.map((item, index) => (
  <Allproduct key={index} name={item.name} url={item.imageurl} price={item.price} />
));

const Productslider = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "20px" }}>
        Naši popularni proizvodi:
      </h1>
      <Carousel responsive={responsive}>{product}</Carousel>;
    </div>
  );
};

export default Productslider;

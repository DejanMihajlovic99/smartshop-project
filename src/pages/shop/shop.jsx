import React, { useState } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import { motion } from "framer-motion";
import { Search } from "@mui/icons-material";


export const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [noResult, setNoResult] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setNoResult(false);
  };

  const filteredProducts = PRODUCTS.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className="shop"
    >
      <div className="shopTitle">
        <h1>SMARTHOME PROIZVODI</h1>
        </div>
        <div className="search">
        <Search className="icon-search" />
         <input 
          className="inputsearch"
          type="text"
          placeholder={noResult ? "No result" : "Pretrazi proizvode..."}
          value={searchTerm}
          onChange={handleSearch}
        /> 
      </div>

      {filteredProducts.length > 0 ? (
        <div className="products">
          {filteredProducts.map((product) => (
            <Product data={product} key={product.id} />
          ))}
        </div>
      ) : (
        <h2 style={{ textAlign: "center", marginTop: "30px" }}>
          Ne postoji pretraga za "{searchTerm}"
        </h2>
      )}
    </motion.div>
  );
};

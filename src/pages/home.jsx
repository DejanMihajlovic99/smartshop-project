import React from "react";
import Slider from "../components/slider";
import Categories from "../components/categories";
import Newsletter from "../components/newsletter";
import Productslider from "../components/productslider";
import { motion } from "framer-motion";


const Home = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
    
      <Slider />
      <Categories />
      <Productslider />
      <Newsletter />
    </motion.div>
  );
};

export default Home;

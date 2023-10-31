import React from "react";
import ImageSlider from "../components/imageslider";
import { motion } from "framer-motion";
import Videoplayer from "../components/videoplayer";

export const Project = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Videoplayer />
      <ImageSlider />
    </motion.div>
  );
};

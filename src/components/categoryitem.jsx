import React from 'react'
import "./categoryitem.css"
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';

const CategoryItem = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="container-box">
      <img src={item.img} className="image-box" alt="categoryimages" />
      <div className="info-box">
        <h1 className="title-box">{item.title}</h1>
        <motion.button whileHover={{ scale: 1.5 }} className="button-box" onClick={() => navigate("/shop")}>  KUPI SADA </motion.button>
      </div>
    </div>
  )
}

export default CategoryItem
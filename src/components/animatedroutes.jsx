import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import Home from '../pages/home';
import { Shop } from '../pages/shop/shop';
import { Project } from '../pages/project';
import { Cart } from '../pages/cart/cart';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/project" element={<Project />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;
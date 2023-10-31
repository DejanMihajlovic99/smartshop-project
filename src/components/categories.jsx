import React from 'react'
import { categories } from '../products';
import CategoryItem from './categoryitem';
import "./categories.css";

const Categories = () => {
  return (
    <div className="container-categories">
      {categories.map(item => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  )
}
export default Categories
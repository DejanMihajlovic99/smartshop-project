import React from 'react'
import { useNavigate } from 'react-router-dom';

const Allproduct = (props) => {
  const navigate = useNavigate();
  return (
    <div className="cards">
      <div className="card-product">
        <img src={props.url} className="productimage" alt="productsimages" />
        <h2> {props.name} </h2>
        <p className="price-product"> {props.price} </p>
        <p className="shopnowparagraf">
          <button className="shopnow" onClick={() => navigate("/shop")}>  KUPI SADA  </button>
        </p>
      </div>
    </div>
  )
}
export default Allproduct

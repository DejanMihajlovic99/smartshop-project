import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../products";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./slider.css";

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slider = () => {
  const navigate = useNavigate();
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className="container">
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <div className="slide" bg={item.bg} key={item.id}>
            <div className="imgcontainer">
              <img src={item.img} className="image" alt="sliderimages"/>
            </div>
            <div className="infocontainer">
              <h1 className="title-p">{item.title}</h1>
              <p className="description-p">{item.desc}</p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="btn-show"
                onClick={() => navigate("/project")}
              >
                POGLEDAJ
              </motion.button>
            </div>
          </div>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </div>
  );
};

export default Slider;

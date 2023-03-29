import React from "react";
import "./CardForSurvice.css";
import { Link } from "react-router-dom";
import {BsArrowRightShort} from "react-icons/bs"
const CardFOrSurvice = ({ img,color,name,Content}) => {
  return (
    <div className="container">
      <div className={`card ${color}`}>
        <div className="imgBx">
          <img src={img} />
        </div>
        <div className="contentBx">
          <h2>{name}</h2>
          
          <div className="color">
            <h3>{Content}</h3>
           
          </div>
          <Link to="/">SEE NOW <BsArrowRightShort size={25}/> </Link>
        </div>
      </div>
    </div>
  );
};

export default CardFOrSurvice;

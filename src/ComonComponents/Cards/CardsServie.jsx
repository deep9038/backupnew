import React, { useEffect, useState } from "react";
import "./CardsServie.css";
import { Box, LinearProgress, Tooltip, Typography } from "@mui/material";
const CardsServie = ({item}) => {
  const [durationType,setDurationtype]=useState(null)
  const [targetstatus,setTargetStatus]=useState(0)


  useEffect(()=>{
    if(item.durationType !== undefined && item.durationType!==null){
      if(item.durationType === "d"){
        setDurationtype("Day")
      }else if(item.durationType === "m"){
        setDurationtype("Month")
      }else if(item.durationType === "y"){
        setDurationtype("Year")
      }
    }

    if(item.target !== undefined && item.target !== null){
      let temp = (item.Achived/item.target)*100
      if(temp >= 100){
        temp= 100
      }
      setTargetStatus(temp);
    }
  
},[item])





  return (
    <>
      <div className="meal">
        <img src={item.img} className="meal-img" alt="Japanese Gyozas" />
        <div className="meal-content">
          <div className="meal-tags">
            <span className="tag tag--vegetarian">{item.posterTital}</span>
          </div>
          <p className="meal-title">{item.Tital}</p>
          <ul className="meal-attributes">
            <li className="meal-attribute">
              {/* <ion-icon className="meal-icon" name="flame-outline"></ion-icon> */}

              <span>
                Target : <strong>{item.target}</strong>
              </span>
            </li>
            <li className="meal-attribute">
              {/* <ion-icon className="meal-icon" name="restaurant-outline"></ion-icon> */}
              {item.durationType !== undefined &&
                item.durationType !== null &&
                item.duration !== undefined &&
                item.duration !== null && (
                  <span>
                    Duration : <strong>{item.duration}</strong>
                    <strong>{durationType}</strong>
                  </span>
                )}
            </li>
            <li className="meal-attribute">
              {/* <ion-icon className="meal-icon" name="star-outline"></ion-icon> */}
              <span>
                campaign started : <strong>{item.Posted}</strong>
              </span>
            </li>
            <li>
            <Tooltip title={`${item.Achived} achived from ${item.intrested} user`}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ width: "100%", mr: 1 }}>
                  <LinearProgress variant="determinate" value={targetstatus} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography variant="body2" color="text.secondary">
                   { `${Math.round(targetstatus)}%`}
                  </Typography>
                </Box>
              </Box>
              </Tooltip>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CardsServie;

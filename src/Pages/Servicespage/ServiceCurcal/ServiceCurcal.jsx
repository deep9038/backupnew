import React from "react";
import "./ServiceCurcal.css";
import Carousel from "react-elastic-carousel";
import CardsServie from "../../../ComonComponents/Cards/CardsServie";
import startup from "../../../Assates/img/startup.jpg"
import poorkids from "../../../Assates/img/poorkids.jpg"
import hospitalpaent from "../../../Assates/img/hospitalpaent.jpg"
import CollegeFees from "../../../Assates/img/CollegeFees.jpg"
const ServiceCurcal = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 1070, itemsToShow: 2 },
    { width: 1525, itemsToShow: 3 }
  ];

  const dataForCard=[
    {   
      id:1,
      img:startup,
      Tital:"Fundraise For StartUp",
      target:200000,
      Achived:30000,
      intrested:25,
      duration:6,
      durationType:"m",
      Posted:"19/02/2023",
      posterTital:"sundeep Gaure",
    },
    {
      id:2,
      img:poorkids,
      Tital:"Charity from bengol schools",
      target:1000000,
      Achived:45900,
      intrested:106,
      duration:3,
      durationType:"m",
      Posted:"19/01/2023",
      posterTital:"Purnima NGO",
    },
    {
      id:3,
      img:hospitalpaent,
      Tital:"Fundraise For Cancer Patients",
      target:800000,
      Achived:700000,
      intrested:700,
      duration:1,
      durationType:"y",
      Posted:"26/01/2023",
      posterTital:"ABC healthcare",
    } ,
    {
      id:4,
      img:CollegeFees,
      Tital:"Fundraise For My college fees",
      target:1000000,
      Achived:400000,
      intrested:58,
      duration:1,
      durationType:"m",
      Posted:"04/01/2023",
      posterTital:"Suvodeep acharjee",
    } 
  ]




  return (
    <section className="we-offer-area text-center bg-gray">
      <div className="container setvicecontainer">
        <div className="row">
          <div className="col-md-12">
            <div className="site-heading text-center">
              <h2>
                Featureed ongoing <span> events </span>
              </h2>
              <h4>Lorem Ipsum is simply dummy text</h4>
            </div>
          </div>
        </div>
        <div className="row cardservice_slider">
        <Carousel breakPoints={breakPoints}>
          {dataForCard.map((item ,ind)=>{
            return (
              <CardsServie key={ind} item={item}/>
            )
          })}
          
        </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ServiceCurcal;

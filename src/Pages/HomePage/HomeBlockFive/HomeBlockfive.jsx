import React from "react";
import CardFOrSurvice from "../cardscomponents/CardFOrSurvice";
import Friends from "../../../Assates/img/friends2.png";
import mysalfe from "../../../Assates/img/myself.png";
import family from "../../../Assates/img/family2.png";
import "./HomeBlockfive.css";
import Carousel from "react-elastic-carousel";
const HomeBlockfive = () => {
  const value = [
    {
      id: "1",
      img: Friends,
      CardName: "FOR FRIENDS",
      Content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      color: "digitalMarkating",
      Link: "/",
    },
    {
      id: "2",
      img: family,
      CardName: "FOR FAMILY",
      Content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      Link: "/",
      color: "webDev",
    },
    {
      id: "3",
      img: mysalfe,
      CardName: "FOR YOURSELF",
      Content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      Link: "/",
      color: "appDev",
    },
    {
        id:"4",
        img:mysalfe,
        CardName:"LOREM ",
        Content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        Link:'/',
        color:"Itsupport"
    },
    {
        id:'5',
        img:Friends,
        CardName:"FOR FAMILY",
        Content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        Link:'/',
        color:"iot"
    },
    {
        id:'6',
        img:Friends,
        CardName:"FOR YOURSELFF",
        Content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        Link:'/',
        color:"uxui"
    },
  ];


  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 }
  ];



  return (
    <div className="blockcontainer">
      <div className="fundForCard">
        <div className="blocktital">
          <h3>Make a difference</h3>
          <h2>Fundraise for...</h2>
        </div>
        <div className="corosalcontainer">
          <Carousel breakPoints={breakPoints} className="Corosulcontainer">
            {value.map((item) => {
              return (
                <CardFOrSurvice
                  key={item.id}
                  img={item.img}
                  color={item.color}
                  name={item.CardName}
                  Content={item.Content}
                />
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HomeBlockfive;

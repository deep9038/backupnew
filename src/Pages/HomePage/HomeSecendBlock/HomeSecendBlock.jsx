import React from "react";
import "./HomeSecendBlock.css";
import { BsArrowRight } from "react-icons/bs";
import {AiOutlineArrowDown} from "react-icons/ai"
const HomeSecendBlock = () => {
  return (
    <>
      <div className="blockcontainer">
        <h3>What To Expect</h3>
        <h1 > Fundraising takes just a few minutes</h1>
        <div className="homeblock1Container">
          <div className="firstcards homeblock1">
            <p>1</p>
            <div className="homeblock1Content">
              <div className="homeblocktext">
                <h3> Start with the basics</h3>
                <h5> Kick things off with your name and location</h5>
              </div>
              <div className="homeblock1Icon">
              <BsArrowRight  />
              </div>
             
            </div>
          </div>
          <div className="resdownarrow">
    <AiOutlineArrowDown/>
          </div>
          <div className="secondcards homeblock1">
            <p>2</p>
            <div className="homeblock1Content">
              <div className="homeblocktext">
                <h3>Tell your story</h3>
                <h5> We'll guide you with tips along the way</h5>
              </div>
              <div className="homeblock1Icon">
              <BsArrowRight  />
              </div>
             
            </div>
          </div>
          <div className="resdownarrow">
    <AiOutlineArrowDown/>
          </div>
          <div className="tuerdcards homeblock1">
            <p>3</p>
            <div className="homeblock1Content">
              <div className="homeblocktext">
                <h3>Share with friends and family</h3>
                <h5> People out there want to help you.</h5>
              </div>
              
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSecendBlock;

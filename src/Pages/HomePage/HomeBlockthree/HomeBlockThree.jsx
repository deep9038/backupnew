import React from "react";
import { Link } from "react-router-dom";
import "./HomeBlockThree.css";
const HomeBlockThree = () => {
  return (
    <>
      <div className="blockcontainer">
        <h3>
          Where you can help <b>?</b>
        </h3>
        <h1>Some featured topics</h1>
        <div className="donationcard">
          <div className="homeblock1Container block3">
            <div className="donationfeature onedf">
              <div className="cardtopic">
                <p>Kerala flood</p>
              </div>
              <div className="donationfeatureTextCon">
                <h5>Help those affected by flood</h5>
                <Link className="action_btn" to="/"> Start donation </Link>
              </div>
            </div>
            <div className="donationfeature twodf">
              <div className="cardtopic">
                <p>Charity</p>
              </div>
             
              <div className="donationfeatureTextCon">
                <h5>Help them who need your support by charity</h5>
                <Link className="action_btn" to="/"> Start charity </Link>
                 </div>
            </div>
            <div className="donationfeature threedf">
              <div className="cardtopic">
                <p>Fundraising</p>
              </div>
              <div className="donationfeatureTextCon">
                <h5>Make a chang by raising funeds for them who want to make ther dream come true</h5>
                <Link className="action_btn" to="/"> Start fundraising </Link>

                 </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBlockThree;

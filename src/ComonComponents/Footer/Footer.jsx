import React from "react";
import "./Footer.css";
import Logo from "../../Assates/img/logo-no-background.png";
import flag from "../../Assates/img/flag.png"
import {AiOutlineCopyrightCircle} from "react-icons/ai"
import playstor from "../../Assates/img/playstor.png"
import appstor from "../../Assates/img/appstore.png"
import { Link } from "react-router-dom";
import {GrFacebook} from "react-icons/gr"
import {FaWhatsappSquare} from "react-icons/fa"
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillTwitterSquare} from "react-icons/ai"
const Footer = () => {
  return (
    <>
    <div className="footerContainer">
      <div className="footerBlock">
        <span>
          {" "}
          <img src={Logo} alt="" /> <p>BAKUP</p>
        </span>
        <div className="contentcontainer">
          <div className="textColom">
            <h1>Fundraise for</h1>
            <ul>
              <li>Medical</li>
              <li>Emergency</li>
              <li>Memorial</li>
              <li>Education</li>
              <li>Charity</li>
              <li>Coronavirus fundraising</li>
            </ul>
          </div>
          <div className="textColom">
            <h1>Learn more</h1>
            <ul>
              <li>How GoFundMe Works</li>
              <li>Common questions</li>
              <li>Success stories</li>
              <li>Supported countries</li>
              <li>Charity fundraising</li>
              <li>Corporate fundraising</li>
              <li>Event fundraising</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="textColom fotlist1">
            <h1>Resources</h1>
            <ul>
              <li>Help centre</li>
              <li>Blog</li>
              <li>Press centre</li>
              <li>Careers</li>
              <li>About</li>
              <li>More resources</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="footrtow">
      <div className="footrttowContainer">
        <div className="footerLeftBloick blockfooter">
          <button className="footrtbtn">
            <img src={flag} alt="" />
            <p className="cuntryname">India</p>
            <p>.English</p>
          </button>
          <span>
           
           <p>  <AiOutlineCopyrightCircle/>2010-2023 GoFundMe</p>
           <ul>
            <li> <Link to="/"> Terms</Link> </li>
            <li> <Link to="/">Privacy</Link> </li>
            <li> <Link to="/">Legal</Link> </li>
          </ul>
          </span>
        </div>
        <div className="footerrightBlock blockfooter">
          <ul>
            <li> <Link to="/"> <GrFacebook size={50}/></Link> </li>
            <li> <Link to="/"><FaWhatsappSquare size={50}/></Link> </li>
            <li> <Link to="/"><AiFillLinkedin size={50}/></Link> </li>
            <li> <Link to="/"><AiFillTwitterSquare size={50}/></Link> </li>
          </ul>
          <div className="appstorBtncontainer"> 
          <img src={playstor} alt="" className="playstor" />
          <img src={appstor} alt=""  className="appstor"/>
          </div>
        </div>

      </div>
    </div>
    </>
  );
};

export default Footer;

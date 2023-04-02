import React from "react";
import "./TopCorner.css";
import {AiOutlineCustomerService} from "react-icons/ai"
import {AiOutlineMail} from "react-icons/ai"
import {AiOutlineHeatMap} from "react-icons/ai"
const TopCorner = () => {
  return (
    <div className="contect_us">
      <div className="contecctuscontainer">
        <div className="contect_us_text" >
        <h1>CONTACT US</h1>
        <p>
          Feel Free to contact us any time. We will get back to you as soon as
          we can!.
        </p>
        </div>
       
      
      <div class="contact_info_sec">
        <h4>Contact Info</h4>
        <div class="d-flex info_single align-items-center">
            <i><AiOutlineCustomerService/></i>
         
          <span>+91 8009 054294</span>
        </div>
        <div class="d-flex info_single align-items-center">
            <i> <AiOutlineMail/></i>
         
          <span>info@flightmantra.com</span>
        </div>
        <div class="d-flex info_single align-items-center">
            <i> <AiOutlineHeatMap/></i>
       
          <span>
            1000+ Travel partners and 65+ Service city across India, USA, Canada
            & UAE
          </span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default TopCorner;

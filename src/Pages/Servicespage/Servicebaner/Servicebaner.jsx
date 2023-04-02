import React from 'react'
import "./Servicebaner.css"
import csrurservice from "../../../Assates/img/csrurservice.jpg"
import servicefunstaide from "../../../Assates/img/servicefunstaide.jpg"
import service4 from "../../../Assates/img/service4.jpg"
import donationservice from "../../../Assates/img/donationservice.jpg"
import helpservoice from "../../../Assates/img/helpservoice.jpg"
import help from "../../../Assates/img/help.jpg"
const Servicebaner = () => {
  return (
    <section className="we-offer-area text-center bg-gray">
    <div className="container setvicecontainer">
        <div className="row">
            <div className="col-md-12">
                <div className="site-heading text-center">
                    <h2>What we <span>Offer</span></h2>
                    <h4>Lorem Ipsum is simply dummy text</h4>
                </div>
            </div>
        </div>
            <div className="row our-offer-items less-carousel">
                {/* <!-- Single Item --> */}
                <div className="col-md-4 col-sm-6 equal-height">
                    <div className="item">
                        <img src={csrurservice} alt="" />
                        {/* <i className="fas fa-pen-fancy"></i> */}
                        <h4>CHARITY</h4>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        </p>
                    </div>
                </div>
                {/* <!-- End Single Item --> */}

                {/* <!-- Single Item --> */}
                <div className="col-md-4 col-sm-6 equal-height">
                    <div className="item">
                        {/* <i className="fas fa-dharmachakra"></i> */}
                        <img src={servicefunstaide} alt="" />
                        <h4>FUNDRAISE</h4>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        </p>
                    </div>
                </div>
                {/* <!-- End Single Item --> */}

                {/* <!-- Single Item --> */}
                <div className="col-md-4 col-sm-6 equal-height">
                    <div className="item">
                        {/* <i className="fas fa-tasks"></i> */}
                        <img src={service4} alt="" />
                        <h4>HELP WHO NEED</h4>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        </p>
                    </div>
                </div>
                {/* <!-- End Single Item --> */}

                {/* <!-- Single Item --> */}
                <div className="col-md-4 col-sm-6 equal-height">
                    <div className="item">
                        {/* <i className="fas fa-tachometer-alt"></i> */}
                        <img src={donationservice} alt="" />
                        <h4>DONATION</h4>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        </p>
                    </div>
                </div>
                {/* <!-- End Single Item --> */}

                {/* <!-- Single Item --> */}
                <div className="col-md-4 col-sm-6 equal-height">
                    <div className="item">
                        {/* <i className="fas fa-recycle"></i> */}
                        <img src={helpservoice} alt="" />
                        <h4>HELP HOMELESS</h4>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        </p>
                    </div>
                </div>
                {/* <!-- End Single Item --> */}

                {/* <!-- Single Item --> */}
                <div className="col-md-4 col-sm-6 equal-height">
                    <div className="item">
                        {/* <i className="fas fa-headset"></i> */}
                        <img src={help} alt="" />
                        <h4>24/7 HELP</h4>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        </p>
                    </div>
                </div>
                {/* <!-- End Single Item --> */}
            </div>
    </div>
</section>
  )
}

export default Servicebaner

import React from 'react'
import "./AboutUsBaner.css"
import banerimg from "../../../Assates/img/abboutbanerpng.png"
const AboutUsBaner = () => {
  return (
    <section className="background firstsection">
        <div className="imgbg">
        <img src={banerimg} alt="" />
        </div>
        <div className="box-main">
            <div className="firstHalf">
                <p className="text-big">About US</p>
                  
                <p className="text-small">
                    Here you will get to know the team members of our company
                </p>
               
            </div>
        </div>
    </section>
  )
}

export default AboutUsBaner

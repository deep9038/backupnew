import React, { useState } from 'react'
import "./NaveBar.css"
import { Link } from 'react-router-dom'
import {RxHamburgerMenu} from "react-icons/rx"
import {RxCross2} from "react-icons/rx"
import logo from "../../Assates/img/logo-no-background.png"
const NaveBar = () => {
  const [toggelbutton ,setToggelButton] = useState(false)
  return (
  <header>
    <div className="navbar">
      <div className='logo'>
      <Link to="/">
           <img src={logo} alt=""  />
      </Link>
      </div>
    
      <ul className='header_links '>
          <li> <Link to="/"> Home </Link> </li>
          <li> <Link to="/about_us"> About Us </Link> </li>
          <li> <Link to="/contact_us"> Contact Us </Link> </li>
          <li> <Link to="/services">service</Link> </li>
      </ul>
      <Link to="/" className='action_btn' > Start Funding </Link>
      <div className="toggle_btn" onClick={()=>setToggelButton(!toggelbutton)}>
        {toggelbutton ? <RxCross2/> : <RxHamburgerMenu /> }
         
      </div>
    </div>
    <div className={toggelbutton ? "dropdown_menu open":"dropdown_menu"}>
      <li><Link to="/" > Home</Link></li>
      <li> <Link to="/about_us"> About Us </Link> </li>
      <li> <Link to="/contact_us">  Contact Us </Link> </li>
      <li> <Link to="/services">service</Link> </li>
      <li> <Link to="/" className='action_btn' > Start Funding </Link></li>
    </div>
  </header>
  )
}

export default NaveBar

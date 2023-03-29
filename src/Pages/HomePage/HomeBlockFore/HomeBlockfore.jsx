import React from 'react'
import "./HomeBlockfore.css"
import {MdOutlineDone} from "react-icons/md"
import { Link } from 'react-router-dom'
const HomeBlockfore = () => {
  return (
    <div className=' blockfore'>
      <div className='contentContainer '>
        <h4> <span><MdOutlineDone  size={35} /></span> Trust & Safety</h4>
        <h2>We've got you covered.</h2>
        <h3>With a global team dedicated to trust and safety, we’ve successfully managed fundraisers worldwide for over a decade. Don’t worry about a thing, we’ve got it covered.</h3>
        <Link className="action_btn" to="/">Explore Trust & Safety </Link>
      </div>
    </div>
  )
}

export default HomeBlockfore

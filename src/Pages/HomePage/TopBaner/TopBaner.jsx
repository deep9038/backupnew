import React from 'react'
import { Link } from 'react-router-dom'
import haderimg from "../../../Assates/img/pic.webp"
import "./TopBaner.css"
const TopBaner = () => {
  return (
    <aside className="responsive-banner first">
    <div className="container-envelope">
      <svg className="cirle-a" height="160" width="160">
        <circle cx="80" cy="80" r="80"/>
      </svg>
       <svg className="cirle-b" height="60" width="60">
        <circle cx="30" cy="30" r="30"/>
      </svg>
      <svg className="cirle-c" height="900" width="900">
        <circle cx="450" cy="450" r="450"/>
      </svg>
     <svg className="cirle-d" height="60" width="60">
        <circle cx="30" cy="30" r="30"/>
      </svg>
      <img src={haderimg }/>
      <div className="col-xs-12">
        <p className='baner_tittal'>Contrary to popular belief, Lorem Ipsum</p>
        <Link target="_blank" to="/" className="more-link">Get inspired</Link>
      </div>
    </div>
  </aside>
  )
}

export default TopBaner

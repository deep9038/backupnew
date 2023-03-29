import React from 'react'
import { Link } from 'react-router-dom'
import HomeBlockfive from './HomeBlockFive/HomeBlockfive'
import HomeBlockfore from './HomeBlockFore/HomeBlockfore'
import HomeBlockThree from './HomeBlockthree/HomeBlockThree'
import HomeSecendBlock from './HomeSecendBlock/HomeSecendBlock'
import TopBaner from './TopBaner/TopBaner'

const Homepage = () => {
  return (
   <>
    <TopBaner/>
    <HomeSecendBlock/>
    <HomeBlockThree/>
    <HomeBlockfore/>
    <HomeBlockfive/>
   </>
  )
}

export default Homepage

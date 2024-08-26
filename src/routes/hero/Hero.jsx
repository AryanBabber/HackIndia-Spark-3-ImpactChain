import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../navbar/Navbar'
import { ReactComponent as HeroImage } from "../../assets/hero-image.svg"
import "./hero.css"
const Hero = () => {
  return (
    <div>
        <Navbar />
        <HeroImage className='hero-image' />
        <Outlet />
    </div>
  )
}

export default Hero
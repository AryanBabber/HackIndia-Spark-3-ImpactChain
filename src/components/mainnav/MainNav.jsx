import React from 'react'
import {ReactComponent as MainLogo} from "../../assets/logo-main.svg"
import "./mainnav.css"

const MainNav = () => {
  return (
    <div>
        <div className="main-nav">
          <MainLogo className="logo" />
          <ul className='nav'>
            <li>Activities</li>
            <li>Services</li>
            <li>Our Accomplishments</li>
            <li>About us</li>
          </ul>
        </div>
    </div>
  )
}

export default MainNav;
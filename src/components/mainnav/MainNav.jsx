import React from "react";
import { ReactComponent as MainLogo } from "../../assets/logo-main.svg";
import "./mainnav.css";
import { Link } from "react-router-dom";

const MainNav = () => {
    return (
        <div>
            <div className="main-nav">
                <MainLogo className="logo" />
                <ul className="nav">
                    <Link to="/activities">Activities</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/accomplishments">Our Accomplishments</Link>
                    <Link to="/about-us">About us</Link>
                </ul>
            </div>
        </div>
    );
};

export default MainNav;

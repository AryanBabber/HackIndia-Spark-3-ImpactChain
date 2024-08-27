import React, { Fragment } from "react";
import { ReactComponent as MainLogo } from "../../assets/logo-main.svg";
import "./mainnav.css";
import { Link } from "react-router-dom";

const MainNav = () => {
    return (
        <Fragment>
            <div className="main-nav">
                <Link to="/"><MainLogo className="logo" /></Link>
                <ul className="nav">
                    <Link to="/activities">Activities</Link>
                    <Link to="/contribute">Contribute</Link>
                    <Link to="/contact-us">Contact us</Link>
                    <Link to="/about-us">About us</Link>
                </ul>
            </div>
        </Fragment>
    );
};

export default MainNav;

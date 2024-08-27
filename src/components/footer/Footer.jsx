import React, { Fragment } from "react";
import { Outlet } from "react-router";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <Fragment>
            <Outlet />
            <div className="footer-container">
                {/* <div className="footer-head"></div> */}
                <h1 className="footer-header">
                    <span>Copyright 2024. All rights reserved</span>|
                    <Link to="/disclaimer">Disclaimer</Link>|
                    <Link to="/privacy-policy">Privacy Policy</Link>
                </h1>
            </div>
        </Fragment>
    );
};

export default Footer;

import React from "react";
import "./directory.css";
import { ReactComponent as DirectoryImage1 } from "../../assets/directory-1.svg";
import { ReactComponent as DirectoryImage2 } from "../../assets/directory-2.svg";
import { ReactComponent as DirectoryImage3 } from "../../assets/directory-3.svg";
import { Link } from "react-router-dom";
import {ReactComponent as TempBtn} from "../../assets/temp-btn.svg";

const Directory = () => {
    return (
        <div className="directory-container">
            <Link to="/activities   " className="sub-container">
                <DirectoryImage1 className="directory-image" />
                <div className="sub-dir-container">
                    <p className="content">ACTIVITIES</p>
                </div>
            </Link>
            <Link to="/about-us" className="sub-container">
                <DirectoryImage2 className="directory-image" />
                <div className="sub-dir-container">
                    <p className="content">WHY JOIN US?</p>
                </div>
            </Link>
            <Link to="/contribute" className="sub-container">
                <DirectoryImage3 className="directory-image" />
                <div className="sub-dir-container no-img">
                    <p className="content">CONTRIBUTE</p>
                </div>
            </Link>
            <Link to="/about-us" className="sub-container no-img">
              <h1>Email us at:</h1>
              <h2>thesamatva13@gmail.com</h2>
            </Link>
            <Link to="/donate" className="sub-container no-img">
              <span className="donate-btn">Donate here &darr;</span>

              <button><TempBtn className="donate-btn" /></button> {/* This gets replaced with proper gateway */}
            </Link>
        </div>
    );
};

export default Directory;

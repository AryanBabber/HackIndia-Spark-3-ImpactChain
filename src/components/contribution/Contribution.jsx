import React from "react";
import "./contribution.css";

const Contribution = () => {
    return (
        <div className="contribution-container">
            <div className="contribution-header-container">
                <h1 className="contribution-header">Contribution</h1>
            </div>

            <div className="contribution-followup-container">
                <h2 className="contribution-followup">Contribution can be done in 3 ways:-</h2>
            </div>
            <div className="donation-options">
                <div className="donation-option-left"></div>
                {/* <div className="dontation-option-right"></div>
                <div className="donation-option-left"></div> */}
            </div>
        </div>
    );
};

export default Contribution;

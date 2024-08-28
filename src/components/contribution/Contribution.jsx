import React from "react";
import "./contribution.css";
import { ReactComponent as TempBtn } from "../../assets/temp-btn.svg";
import { Link } from "react-router-dom";

const Contribution = () => {
    return (
        <div className="contribution-container">
            <div className="contribution-header-container">
                <h1 className="contribution-header">Contribution</h1>
            </div>

            <div className="contribution-followup-container">
                <h2 className="contribution-followup">
                    Contribution can be done in 3 ways:-
                </h2>
            </div>
            <div className="donation-options">
                <div className="donation-option-left-1">
                    <div className="first-way">
                        <h1>Donate here:</h1>
                        <Link to="/donate">
                            <TempBtn className="temp-btn" />
                        </Link>
                    </div>
                </div>
                <div className="donation-option-right">
                    <h1 className="second-way">
                        Contribute by donating things
                    </h1>
                </div>
                <div className="donation-option-left-2">
                    <h1 className="third-way">
                        Contribute by being a volunteer
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Contribution;

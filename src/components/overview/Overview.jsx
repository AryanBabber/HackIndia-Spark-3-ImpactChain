import React from "react";
import "./overview.css";
import {ReactComponent as FounderImg} from "../../assets/Founder.svg"

const Overview = () => {
    return (
        <div className="overview-container">
            <h1 className="overview">
                <span>About us</span>
            </h1>
            <div className="overview-head">
                <div className="name-block">
                    <h3 className="name">Samatva</h3>
                </div>

                <div className="overview-content-container">
                    <div className="overview-content">
                        <div className="content">
                            <p>
                                It consists of two words “Saman” & “Atma” , and
                                Samatva is the combination of saman and atma.
                            </p>

                            <p>
                                This is a project initiated by “Mrs. Aakriti
                                Suneja” with some college students.
                            </p>
                            <p>
                                Main aim of this ngo is to ensure everyone
                                should have quality education.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="overview-founder-container">
                    <div className="founder-img-container">
                        <div className="founder-img">
                            <FounderImg />
                        </div>
                    </div>
                    <div className="founder-desc-container">
                        <div className="founder-desc">
                            <h1>Founder</h1>
                            <p>Mrs. Aakriti Suneja</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;

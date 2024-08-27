import React from "react";
import { ReactComponent as Activities1 } from "../../assets/activities-1.svg";
import { ReactComponent as Activities2 } from "../../assets/activities-2.svg";
import { ReactComponent as Activities3 } from "../../assets/activities-3.svg";
import "./activities.css";

const Activities = () => {
    return (
        <div class="activities-container">
            <div className="activities-header-container">
                <h1 class="heading">Activities</h1>
            </div>
            <div class="one">
                <Activities1 class="group-photo" />
                <div class="group-content">
                    <p>
                        Stationary Distribution at an Ngo named Pragyam
                        Pathshala near Bhupani Mod, Faridabad
                    </p>
                </div>
            </div>
            <div class="two">
                <div className="devilal-content">
                    <p>
                        Visited Tau Devi Lal Aashram to meet Old Age People, and
                        spending some time with them
                    </p>
                </div>
                <Activities2 class="devilal-photo" />
            </div>
            <div class="three">
                <Activities3 class="chiraggroup-photo" />
                <div class="chiraggroup-content">
                    <p>
                        Ngo day celebration at Echelon Institute in collabration
                        with many ngos:- Shahastra Janani Foundation Pragyam
                        etc.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Activities;

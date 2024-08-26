import { Fragment } from "react";
import "./prenav.css"
import {ReactComponent as FacebookImage} from "../../assets/logo-facebook.svg"
import {ReactComponent as TwitterImage} from "../../assets/logo-twitter.svg"
import {ReactComponent as InstagramImage} from "../../assets/logo-instagram.svg"
import {ReactComponent as MailImage} from "../../assets/logo-mail.svg"


const PreNav = () => {
    return (
        <Fragment>
            <div className="socials">
                <h3 className="socials-email">
                    <MailImage className="mail-icon" />
                    <span>thesamatva@gmail.com</span>
                </h3>
                <div className="social-icons">
                    <FacebookImage className="facebook" />
                    <TwitterImage className="twitter" />
                    <InstagramImage className="instagram" />
                </div>
            </div>
            <div className="navbar">
                <div className="logo"></div>
                <nav></nav>
            </div>
        </Fragment>
    );
};

export default PreNav;

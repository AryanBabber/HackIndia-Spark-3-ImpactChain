import { useState } from "react";
import "./inputform.css";

const InputForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="contact-us-container">
            <h1 className="contact-header">Contact us</h1>
            <form form onSubmit={handleSubmit} className="contact-form">
                <div className="form-name">
                    <label className="name-label" htmlFor="name">
                        Name:
                    </label>
                    <input className="input name-input" type="text" name="name" />
                    <div className="form-name-inner">
                        <label className="email-label" htmlFor="email">
                            Email address:
                        </label>
                        <br />
                        <input
                            className="input email-input"
                            type="text"
                            name="email"
                        />
                        <br />
                        <label className="mobile-label" htmlFor="mobile">
                            Mobile No.:
                        </label>
                        <br />
                        <input
                            className="input mobile-input"
                            type="text"
                            name="mobile"
                        />
                    </div>
                    <label className="message-label" htmlFor="message">
                        Message:
                    </label>
                    <br />
                    <input
                        className="input message-input"
                        type="text"
                        name="message"
                    />
                </div>
                <button>Send message</button>
            </form>
        </div>
    );
};

export default InputForm;

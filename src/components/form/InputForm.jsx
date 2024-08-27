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
                    <label className="label name-label" htmlFor="name">
                        Name:
                    </label>
                    <input
                        className="input name-input"
                        type="text"
                        name="name"
                    />
                    <div className="form-name-inner">
                        <div>
                            <label className="label email-label" htmlFor="email">
                                Email address:
                            </label>
                            <input
                                className="input email-input"
                                type="text"
                                name="email"
                            />
                        </div>
                        <br />
                        <div>
                        <label className="label mobile-label" htmlFor="mobile">
                            Mobile No.:
                        </label>
                        <input
                            className="input mobile-input"
                            type="text"
                            name="mobile"
                        />
                        </div>
                    </div>
                    <label className="label message-label" htmlFor="message">
                        Message:
                    </label>
                    <br />
                    <textarea
                        className="input message-input"
                        type="text"
                        name="message"
                    >
                    </textarea>
                </div>
                <button>Send message</button>
            </form>
        </div>
    );
};

export default InputForm;

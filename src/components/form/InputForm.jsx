import { useState } from "react";

const InputForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className=""></div>
        </form>
    );
};

export default InputForm;

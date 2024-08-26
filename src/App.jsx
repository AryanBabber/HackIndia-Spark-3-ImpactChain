import React from "react";
import "./app.css";
import Hero from "./routes/hero/Hero";
import { Routes, Route } from "react-router";
import Home from "./routes/home/Home";

const App = () => {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Hero />}>
                  <Route index element={<Home/>} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;

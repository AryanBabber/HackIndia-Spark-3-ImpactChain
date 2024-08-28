import React from "react";
import "./app.css";
import Hero from "./routes/hero/Hero";
import { Routes, Route } from "react-router";
import Home from "./routes/home/Home";
import Footer from "./components/footer/Footer";
import FooterHelpers from "./components/footerHelpers/FooterHelpers";
import About from "./routes/about/About";
import Activities from "./routes/activities/Activities";
import InputForm from "./components/form/InputForm";
import Contribute from "./routes/contribute/Contribute";
import Donation from "./components/donation/Donation";

const App = () => {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Hero />}>
                    <Route path="/" element={<Footer />}>
                        <Route index element={<Home />} />
                        <Route path="/activities" element={<Activities />} />
                        <Route path="/about-us" element={<About />} />
                        <Route path="/contact-us" element={<InputForm />} />
                        <Route path="/contribute" element={<Contribute />} />
                        <Route path="/donate" element={<Donation/>} />
                        <Route
                            path="/disclaimer"
                            element={<FooterHelpers name="Disclaimer" />}
                        />
                        <Route
                            path="/privacy-policy"
                            element={<FooterHelpers name="Privacy-Policy" />}
                        />
                    </Route>
                </Route>
            </Routes>
        </div>
    );
};

export default App;

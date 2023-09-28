import React from "react";
import homeImg from '../imgs/gadgets-home.jpg';
import CategoriesBanner from "./CategoriesBanner";

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <div className="home-image">
                    <div className="image-container">
                        <img className="tech-home" src={homeImg} alt="home" />
                    </div>
                </div>
                <div className="home-text">
                    <h1>A place where you can find all the latest devices and their reviews.</h1>
                    <button className="cta-button">Discover Tech</button>
                </div>
            </div>
            <CategoriesBanner />
        </div>
    );
};

export default Home;

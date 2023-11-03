import React from "react";
import { Link } from 'react-router-dom';
import homeImg from '../imgs/gadgets-home.jpg';
import blackFridayImg from '../imgs/black_friday_banner.jpg';
import CategoriesBanner from "./CategoriesBanner";
import ProductList from "../components/ProductList";
import LearnMoreAboutUs from "./LearnMoreAboutUs";

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
                    <Link to={"/categories"} >
                        <button className="cta-button">Explore Devices</button>
                    </Link>
                </div>
            </div>
            <h2>Our Black Friday Deals Start Tomorrow!</h2>
            <div className="black-friday-banner" >
                <img src={blackFridayImg} alt="black-friday" />
            </div>
            <LearnMoreAboutUs />
            <CategoriesBanner />
            <h2>All Products</h2>
            <ProductList showAll={true} />
        </div>
    );
};

export default Home;

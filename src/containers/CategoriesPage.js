import React from "react";
import CategoriesBanner from "./CategoriesBanner";
import blackFridayImg from '../imgs/black_friday_banner.jpg';
import LearnMoreAboutUs from "./LearnMoreAboutUs";


const CategoriesPage = () => {
    return (
        <div>
            <div className="black-friday-banner" >
                <img src={blackFridayImg} alt="black-friday" />
            </div>
            <LearnMoreAboutUs />
            <CategoriesBanner />
        </div>
    );
};

export default CategoriesPage;

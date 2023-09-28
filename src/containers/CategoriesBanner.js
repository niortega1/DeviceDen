import React from "react";
import Category from "./Category";

const CategoriesBanner = () => {
    return (
        <div className="categories-container">
            <div className="categories-content">
                <div className="categories-text">
                    <h2>Categories</h2>
                    <p>Explore the latest devices and their reviews.</p>
                </div>
                <Category />
            </div>
        </div>
    );
};

export default CategoriesBanner;
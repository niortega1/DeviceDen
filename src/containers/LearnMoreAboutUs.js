import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

const LearnMoreAboutUs = () => {
    return (
        <div className="learn-more-container">
            <h3>About Device Den</h3>
            <p>Discover the story behind our brand, our values, and why customers trust us.</p>
            <Link to="/about-us" className="learn-more-btn">Learn More</Link>
        </div>
    );
};

export default LearnMoreAboutUs;

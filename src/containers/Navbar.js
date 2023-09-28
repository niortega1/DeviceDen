import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="nav-bar-container" >
            <div className="logo"><a href="/">Device Den</a></div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/categories">Categories</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;
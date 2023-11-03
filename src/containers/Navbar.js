import React from "react";
import { Link } from "react-router-dom";
import cartIcon from '../imgs/icons8-cart-64.png';
import { useSelector } from "react-redux";

const Navbar = () => {
    const cartItems = useSelector(state => state.cart.items);
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const displayCount = cartCount > 10 ? '10+' : cartCount;
    return (
        <div className="nav-bar-container">
            <div className="logo"><a href="/">Device Den</a></div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/categories">Categories</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li>
                <Link to="/cart" className="cart-icon-link">
                    <div className="cart-icon-container">
                        <img src={cartIcon} alt="Cart Icon" />
                        {cartCount > 0 && <span className={`cart-number ${cartCount > 9 ? 'double-digit' : ''}`}>{displayCount}</span>}
                    </div>
                </Link>

                </li>
            </ul>
        </div>
    );
};

export default Navbar;
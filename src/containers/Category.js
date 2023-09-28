import React from "react";
import { Link } from 'react-router-dom';
import phoneImg from '../imgs/smart-phone1.jpg';
import laptopImg from '../imgs/laptop1.jpg';
import tabletImg from '../imgs/tablet1.jpg';
import smarthomeImg4 from '../imgs/smarthome4.jpg';
import accessoriesImg from '../imgs/accessories.jpg';

const Category = () => {
    return (
        <div className="category-list mobiles-list laptop-list tablets-list smarthome-list accessories-list">
            <ul>
                <li><Link to="/mobiles"><div className="mobiles"><img src={phoneImg} alt="Mobiles"/><span>Mobiles</span></div></Link></li>
                <li><Link to="/laptops"><div className="laptops"><img src={laptopImg} alt="Laptops"/><span>Laptops</span></div></Link></li>
                <li><Link to="/tablets"><div className="tablets"><img src={tabletImg} alt="Tablets"/><span>Tablets</span></div></Link></li>
                <li><Link to="/smarthome"><div className="smarthome"><img src={smarthomeImg4} alt="Smart Home"/><span>Smart Home</span></div></Link></li>
                <li><Link to="/accessories"><div className="accessories"><img src={accessoriesImg} alt="Accessories"/><span>Accessories</span></div></Link></li>
            </ul>
        </div>
    );
};

export default Category;
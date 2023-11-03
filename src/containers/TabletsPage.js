import React from 'react';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import blackFridayImg from '../imgs/black_friday_banner.jpg';

const Tablets = ()  => {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div className='page'>
            <div className="black-friday-banner" >
                <img src={blackFridayImg} alt="black-friday" />
            </div>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <div className='product-list'>
                <ProductList category="tablet" searchTerm={searchTerm}/>
            </div>
        </div>
    );
};

export default Tablets;
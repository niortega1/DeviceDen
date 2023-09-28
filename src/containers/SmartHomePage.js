import React from 'react';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
;

const SmartHome = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div>
            <h1>Smart Home Page</h1>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className='product-list'>
                <ProductList category="smarthome" searchTerm={searchTerm} />
            </div>
        </div>
    );
};

export default SmartHome;
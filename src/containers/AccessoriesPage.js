import React from 'react';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';

const Accessories = () => {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div>
            <h1>Accessories Page</h1>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}  />
            <div className='product-list'>
                <ProductList category="accessories"searchTerm={searchTerm} />
            </div>
        </div>
    );
};

export default Accessories;
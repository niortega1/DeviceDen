import React from 'react';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';

const Tablets = ()  => {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div>
            <h1>Tablets Page</h1>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <div className='product-list'>
                <ProductList category="tablet" searchTerm={searchTerm}/>
            </div>
        </div>
    );
};

export default Tablets;
import React from 'react';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';


const Laptops = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div>
            <h1>Laptops Page</h1>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <div className='product-list'>
                <ProductList category="laptop" searchTerm={searchTerm}/>
            </div>
        </div>
    );
};

export default Laptops; 
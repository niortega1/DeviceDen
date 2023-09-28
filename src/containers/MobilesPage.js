import React from 'react';
import { useState } from 'react';
import ProductList from '../components/ProductList'; 
import SearchBar from '../components/SearchBar';

const MobilesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <h1>Mobiles Page</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> 
      <div className='product-list'>
        <ProductList category="mobile" searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default MobilesPage;

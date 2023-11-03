import React from 'react';
import { useState } from 'react';
import ProductList from '../components/ProductList'; 
import SearchBar from '../components/SearchBar';
import blackFridayImg from '../imgs/black_friday_banner.jpg';

const MobilesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='page'>
        <div className="black-friday-banner" >
          <img src={blackFridayImg} alt="black-friday" />
        </div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> 
      <div className='product-list'>
        <ProductList category="mobile" searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default MobilesPage;

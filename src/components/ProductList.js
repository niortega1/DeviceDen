import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductItem from '../components/ProductItem';

const ProductList = ({ category, searchTerm, showAll = false }) => {
  // Fetch products from Redux store
  const products = useSelector(state => state.products);

  const displayedProducts = showAll ? products : products
      .filter(product => product.category === category)
      .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className='product-list-div'>
      <ul className='product-list-ul'>
        {displayedProducts.map(product => (
          <li className='product-list-li' key={product.id}>
            <Link to={`/product/${product.id}`}>
              <ProductItem key={product.id} product={product} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

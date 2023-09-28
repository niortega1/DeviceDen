import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductItem from '../components/ProductItem';

const ProductList = ({ category, searchTerm }) => {
  // Fetch products from Redux store
  const products = useSelector(state => state.products);

  // Filter products based on the provided category
  const filteredProducts = products
      .filter(product => product.category === category)
      .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Products</h1>
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
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

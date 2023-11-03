import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';

const RecommendedProducts = ({ currentProductId, currentCategory }) => {
    const products = useSelector(state => 
        state.products
             .filter(product => product.category === currentCategory && product.id !== currentProductId)
             .slice(0, 4)
    );

    if (products.length === 0) return null;

    return (
        <div className='recommended-products'>
            <h2>Products related to this item </h2>
            <ul>
                {products.map(product => (
                    <Link to={`/product/${product.id}`}>
                        <ProductItem  key={product.id} product={product} />
                    </Link>

                ))}
            </ul>
        </div>
    );
}

export default RecommendedProducts;
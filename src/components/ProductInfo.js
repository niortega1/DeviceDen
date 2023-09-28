import React from 'react';

const ProductInfo = ({ product }) => {
    return (
        <div className='product-info'>
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
        </div>
    );
}

export default ProductInfo;
import React from 'react';

const ProductDescription = ({ description }) => {
    return (
        <div className='product-description'>
            <h3>Description</h3>
            <p>{description || 'No description available for this product.'}</p>
        </div>
    );
}

export default ProductDescription;
import React from 'react';

const ProductDescription = ({ description }) => {
    return (
        <div className='product-description'>
            <h3 className="description-heading">Description</h3>
            <p className="description-text">{description || 'No description available for this product.'}</p>
        </div>
    );
}

export default ProductDescription;

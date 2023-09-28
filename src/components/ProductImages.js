import React from 'react';

const ProductImages = ({ images }) => {
    return (
        <div className='product-images'>
            {images.map((img, index) => (
                <img key={index} src={img} alt="product" />
            ))}
        </div>
    );
}

export default ProductImages;
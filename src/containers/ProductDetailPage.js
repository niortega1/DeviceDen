import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductImages from '../components/ProductImages';
import ProductInfo from '../components/ProductInfo';
import ProductDescription from '../components/ProductDescription';
import ProductReviews from '../components/ProductReviews';
import RecommendedProducts from '../components/RecommendedProducts';
import { addItemToCart } from '../slices/cartSlice';

const ProductDetailPage = () => {
    const dispatch = useDispatch();
    const { id: productId } = useParams();
    const product = useSelector(state => state.products.find(product => product.id === parseInt(productId)));

    const handleAddToCart = () => {
        dispatch(addItemToCart({
            productId: product.id,
            name: product.name, 
            price: product.price
        }));

        alert('Added to cart!'); // Notify user that item was added to cart
    }

    if (!product) {
        return <p>No product found.</p>
    };

    return (
        <div className='product-detail'>
            <div className='product-main'>
                <ProductImages images={[product.image]} />
                <div className='product-content-wrapper'>
                    <ProductInfo product={product} />
                    <ProductDescription description={product.description} />
                    <ProductReviews reviews={product.reviews} />
                </div>
                {/* Add to Cart Button */}
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
            <RecommendedProducts currentProductId={product.id} currentCategory={product.category} />
        </div>
    );
}

export default ProductDetailPage;
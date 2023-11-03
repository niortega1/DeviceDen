import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductImages from '../components/ProductImages';
import ProductInfo from '../components/ProductInfo';
import ProductDescription from '../components/ProductDescription';
import ProductReviews from '../components/ProductReviews';
import RecommendedProducts from '../components/RecommendedProducts';
import { addItemToCart } from '../slices/cartSlice';
import blackFridayImg from '../imgs/black_friday_banner.jpg';
import LearnMoreAboutUs from './LearnMoreAboutUs';


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
    }

    if (!product) {
        return <p>No product found.</p>
    };

    return (
        <div className='product-detail'>
            <div className="black-friday-banner" >
                <img src={blackFridayImg} alt="black-friday" />
            </div>
            <div className='product-main'>
                <ProductImages images={[product.image]} />
                <div className='product-content-wrapper'>
                    <ProductInfo product={product} />
                    <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
                    <ProductDescription description={product.description} />
                    <ProductReviews reviews={product.reviews} />
                </div>
            </div>
            <RecommendedProducts currentProductId={product.id} currentCategory={product.category} />
            <LearnMoreAboutUs />

        </div>
    );
}

export default ProductDetailPage;
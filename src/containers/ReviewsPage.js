import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductImages from "../components/ProductImages";
import ProductInfo from "../components/ProductInfo";
import AddReview from "../components/AddReview";
import RecommendedProducts from "../components/RecommendedProducts";

const ReviewsPage = () => {
    const { id: productId } = useParams();
    const product = useSelector(state => state.products.find(product => product.id === parseInt(productId)));


    return (
        <div>
            <h1>Reviews Page</h1>
            <div className="product-detail">
                <div className="product-main">
                    <ProductImages images={[product.image]} />
                    <div className="product-content-wrapper">
                        <ProductInfo product={product}/>
                        <AddReview />
                    </div>
                </div>
                <RecommendedProducts currentProductId={product.id} currentCategory={product.category} />
            </div>  
        </div>
    );
};

export default ReviewsPage;
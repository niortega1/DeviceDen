import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import StarRatings from "react-rating-stars-component";


const ProductReviews = () => {
    const { id } = useParams();

    const reviewsForProduct = useSelector(state => state.reviews[id] || []);

    return (
        <div className='product-reviews'>
            <h3>Reviews</h3>
            
            {/* Check if there are reviews */}
            {reviewsForProduct.length === 0 ? (
                <p>No reviews available for this product.</p>
            ) : (
                <ul className="reviews-list">
                    {reviewsForProduct.map((review, index) => (
                        <li key={index} className="review-item">
                            <div className="review-content">
                                <div className="review-header">
                                    <strong className="review-user">{review.user}:</strong> 
                                </div>
                                <div className="star-rating-container">
                                    <StarRatings
                                        count={5}
                                        value={review.rating}
                                        size={24}
                                        activeColor="gold"
                                        isHalf={false}
                                    />
                                </div>
                                <strong className="review-headline">{review.headline}</strong>
                                <p>{review.comment}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            
            {/* Write a Review Link - moved outside the condition */}
            <Link to={`/product/${id}/review`} className='write-review-btn'>
                <button className="review-button">Write a Review</button>
            </Link>
        </div>
    );
}

export default ProductReviews;

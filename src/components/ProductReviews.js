import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductReviews = () => {
    const { id } = useParams();
    
    // Use the useSelector hook to get the reviews for the specific product from the Redux store
    const reviewsForProduct = useSelector(state => state.reviews[id] || []);

    if (reviewsForProduct.length === 0) {
        return <p>No reviews available for this product.</p>
    }

    return (
        <div className='product-reviews'>
            <h3>Reviews</h3>

            <ul>
                {reviewsForProduct.map((review, index) => (
                    <li key={index}>
                        <strong>{review.user}:</strong> <span className='rating'>{'★'.repeat(review.rating)}</span>
                        <strong>{review.headline}</strong>
                        {review.comment}
                    </li>
                ))}
            </ul>

            {/* Write a Review Link */}
            <Link to={`/product/${id}/review`} className='write-review-btn'>
                <button>Write a Review</button>
            </Link>
        </div>
    );
}

export default ProductReviews;

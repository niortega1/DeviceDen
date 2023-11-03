import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addReview } from '../slices/reviewSlice';
import StarRatings from "react-rating-stars-component";



const AddReview = () => {
    const [rating, setRating] = useState(0);
    const [headline, setHeadline] = useState('');
    const [content, setContent] = useState('');
    const [username, setUsername] = useState('');


    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newReview = {
            user: username || 'Anonymous',
            headline,
            comment: content,
            rating,
        };
        

        dispatch(addReview({ productId: id, review: newReview }));
        console.log("Dispatching new review", newReview);

        // Resets form
        setRating(0);
        setHeadline('');
        setContent('');

        // Navigates back to product detail page
        navigate(`/product/${id}`);
    };

    return (
        <div className='add-review' style={{ padding: '20px' }}>

            {/* Star rating system */}
            <div className="rating-input">
                <StarRatings
                    count={5}
                    value={rating}
                    onChange={(newRating) => setRating(newRating)}
                    size={24}
                    activeColor="gold"
                    isHalf={false}
                />
            </div>
            {/* Review form */}
            <h3>Create a Review</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type='text'
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your name"
                    />
                </div>

                <div className='review-input'>
                    <label>Add a headline:</label>
                    <input
                        className='review-headline-input'
                        type='text'
                        value={headline} 
                        onChange={(e) => setHeadline(e.target.value)}
                    />
                </div>

                <div className='review-input'>
                    <label>Add a written review:</label>
                    <textarea
                        className='review-textarea'
                        value={content} 
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default AddReview;
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addReview } from '../slices/reviewSlice';

const AddReview = () => {
    const [rating, setRating] = useState(0);
    const [headline, setHeadline] = useState('');
    const [content, setContent] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    

    const handleSubmit = (e) => {
        e.preventDefault();

        const newReview = {
            user: 'SomeUser',
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
            <div>
                {[...Array(5)].map((_, index) => (
                    <span
                        key={index}
                        onClick={() => setRating(index + 1)}
                        style={{ cursor: 'pointer', fontSize: '24px'}}>
                            {index < rating ? '★' : '☆'}
                    </span>
                ))}
            </div>

            {/* Review form */}
            <h3>Create a Review</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Add a headline:</label>
                    <input
                        type='text'
                        value={headline} 
                        onChange={(e) => setHeadline(e.target.value)}
                    />
                </div>
                <div>
                    <label>Add a written review</label>
                    <textarea
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
import { createSlice } from '@reduxjs/toolkit';

const reviewSlice = createSlice({
    name: 'reviews',
    initialState: {
        // Create an object with productIds as keys and reviews array as values
        "1": [
            {
                user: 'John Doe',
                headline: "I love this product! Apple rules!",
                comment: "This product is great. I never knew I could love a phone so much. I love this product! Apple rules!",
                rating: 5
            },
            // ... other reviews for productId 1
        ],
        "3": [
            {
                user: "Jane Doe",
                headline: "Fantastic phone! ...",
                comment: "I love this phone...",
                rating: 5
            },
            // ... other reviews for productId 3
        ],
        // ... add other product reviews in the same manner
    },
    reducers: {
        addReview: (state, action) => {
            const { productId, review } = action.payload;

            if(!state[productId]) {
                state[productId] = [];
            }
            state[productId].push(review);
        }
    }
});

export const { addReview } = reviewSlice.actions;
export default reviewSlice.reducer;

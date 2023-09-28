import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice.js';
import reviewReducer from './slices/reviewSlice.js';
import cartReducer from './slices/cartSlice.js';


const store = configureStore({
  reducer: {
    products: productsReducer,
    reviews: reviewReducer,
    cart: cartReducer
  }
});

export default store;

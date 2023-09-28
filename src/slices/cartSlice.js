import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalAmount: 0, // { productId, name, price, quantity }
    },
    reducers: {
        addItemToCart: (state, action) => {
            const newItem = action.payload;
            const existingItemIndex = state.items.findIndex(item => item.productId === newItem.productId);

            if (existingItemIndex !== -1) {
                state.items[existingItemIndex].quantity += 1;
            } else {
                state.items.push({
                    ...newItem,
                    quantity: 1
                });
            }
            state.totalAmount += newItem.price;
        },
        removeItemFromCart: (state, action) => {
            const id = action.payload;
            const existingItem = state.items.find(item => item.productId === id);

            // If item exists in cart, removes item from cart and updates totalAmount
            if (existingItem) {
                state.totalAmount -= existingItem.price * existingItem.quantity;
                state.items = state.items.filter(item => item.productId !== id);
            } 
        },
        adjustItemQuantity: (state, action) => {
            const { productId, quantity } = action.payload;
            const existingItem = state.items.find(item => item.productId === productId);

            // If item exists in cart, updates quantity of item and updates totalAmount
            if(existingItem) {
                state.totalAmount += (quantity - existingItem.quantity) * existingItem.price;
                existingItem.quantity = quantity;
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalAmount = 0;
        }
    }
});

export const { addItemToCart, removeItemFromCart, adjustItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
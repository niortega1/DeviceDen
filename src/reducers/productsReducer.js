const initialState = {
    products: [],
    cart: [],
    currentItem: null,
    isCheckout: false,
    isOrder: false,
    isOrderDetail: false
};

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_PRODUCTS":
            return {
                ...state,
                products: [...state.products, action.product],
            };
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, { ...action.product, qty: 1 }],
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((c) => c.id !== action.id),
            };
        default: 
            return state;
    };
}
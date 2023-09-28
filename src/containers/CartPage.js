import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { adjustItemQuantity, removeItemFromCart } from '../slices/cartSlice';

const CartPage = () => {
    const cartItems = useSelector(state => state.cart.items);
    const totalAmount = useSelector(state => state.cart.totalAmount);
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    const handleAdjustItemQuantity = (productId, quantity) => {
        dispatch(adjustItemQuantity({ productId, quantity }));
    };

    const handleRemoveItemFromCart = (productId) => {
        dispatch(removeItemFromCart(productId));
    };

    return (
        <div className="cart-page">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty!</p>
            ) : (
                <div>
                    <ul>
                    {cartItems.map(cartItem => {
                        const product = products.find(p => p.id === cartItem.productId);
                        return (
                            <li key={cartItem.productId}>
                                <img src={product.image} alt={product.name} width="50" /> {/* Adjust size as needed */}
                                {product.name} - ${product.price.toFixed(2)} x {cartItem.quantity}
                                <input
                                    type="number"
                                    value={cartItem.quantity}
                                    onChange={ e => handleAdjustItemQuantity(cartItem.productId, +e.target.value)}
                                />
                                <button onClick={() => handleRemoveItemFromCart(cartItem.productId)} >Remove</button>
                            </li>
                        );
                    })}
                    </ul>
                    <h2>Total: ${totalAmount.toFixed(2)}</h2>
                    {/* Add checkout button here later */}
                </div>
            )}
        </div>
    );
};

export default CartPage;

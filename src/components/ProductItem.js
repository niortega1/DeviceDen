import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editProduct, removeProduct } from '../slices/productsSlice';

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(product);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({...prevState, [name]: value}));
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        dispatch(editProduct(formData));
        setIsEditing(false);
    }

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            dispatch(removeProduct(product.id));
        }
    };

    return (
        <div>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                    />
                    <button onClick={handleSave}>Save</button>
                </div>
            ) : (
                <div>
                    <img src={product.image} alt={product.name} width="100"/>
                    <div>{product.name}</div>
                    <div>{product.price}</div>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            )}
        </div>
    );
};

export default ProductItem;
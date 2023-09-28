import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../slices/productsSlice'; // Adjust path

const ProductForm = ({ category }) => {
  const dispatch = useDispatch();
  
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: ''
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      ...formData,
      id: Date.now(),  
      category
    };
    dispatch(addProduct(newProduct));
    // Clear form after submission or navigate away
    setFormData({
      name: '',
      price: '',
      image: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name" 
        value={formData.name} 
        onChange={handleChange} 
        placeholder="Product Name"
      />
      <input 
        type="text" 
        name="price" 
        value={formData.price} 
        onChange={handleChange} 
        placeholder="Product Price"
      />
      <input 
        type="text" 
        name="image" 
        value={formData.image} 
        onChange={handleChange} 
        placeholder="Product Image URL"
      />
      {/* Add more fields if necessary */}
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;

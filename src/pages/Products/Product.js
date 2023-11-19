// Product.js
import React from 'react';
import './Product.css'; // Add your styling if needed
import axios from 'axios';
import config from '../../config.json';

const SERVER_URL = config.SERVER_URL;

const Product = ({ product, onDeleteProduct }) => {
  const { id, title, price, description } = product;

  const handleDeleteProduct = () => {
    axios.delete(`${SERVER_URL}/products/${id}`)
      .then(() => {
        onDeleteProduct(id); 
      })
      .catch((error) => {
        console.error('Error deleting product:', error);
      });
  };

  return (
    <div className="product-container">
      <h2>{title}</h2>
      <p>Price: ${price}</p>
      <p>Description: {description}</p>
      <div className="product-buttons">
        <button>Add to Cart</button>
        <button onClick={handleDeleteProduct}>Delete Product</button>
      </div>
    </div>
  );
};

export default Product;

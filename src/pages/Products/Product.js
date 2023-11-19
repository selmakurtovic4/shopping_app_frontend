// Product.js
import React from 'react';
import './Product.css'; // Add your styling if needed
import axios from 'axios';
import config from '../../config.json';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
const SERVER_URL = config.SERVER_URL;

const Product = ({ product, onDeleteProduct, isBuyingActive }) => {
  const { id, title, price, description } = product;


    const { orderId } = useParams()
    console.log(orderId)
  


  const handleDeleteProduct = () => {
    axios.delete(`${SERVER_URL}/products/${id}`)
      .then(() => {
        onDeleteProduct(id); 
      })
      .catch((error) => {
        console.error('Error deleting product:', error);
      });
  };

  const handleBuyButton= (productId)=>{
      console.log("buy");
      console.log()

    axios.post(`${SERVER_URL}/orders/${orderId}/addProduct`,{ productId })  .then(() => {
      toast.success('Product added successfully!', { position: toast.POSITION.TOP_RIGHT });
    })
    .catch((error) => {
      console.error('Error buying product:', error);
    });;
  }

  return (
    <div className="product-container">
      <h2>{title}</h2>
      <p>Price: ${price}</p>
      <p>Description: {description}</p>
      <div className="product-buttons" onClick={()=>handleBuyButton(id)}>
        {isBuyingActive && <button>Add to Cart</button>}
        <button onClick={handleDeleteProduct}>Delete Product</button>
      </div>
    </div>
  );
};

export default Product;

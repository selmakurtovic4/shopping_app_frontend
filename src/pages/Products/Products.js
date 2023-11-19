// Products.js
import React, { useState, useEffect } from 'react';
import ListContainer from '../../components/ListContainer/ListContainer';
import axios from 'axios';
import config from '../../config.json';
import Product from './Product'; // Import the Product component

const SERVER_URL = config.SERVER_URL;

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${SERVER_URL}/products`)
      .then((response) => {
        if (response.status === 200) {
          const products = response.data;
          setProducts(products);
        } else {
          console.error('Invalid response status:', response.status);
        }
      })
      .catch((error) => {
        console.error('Error fetching products:', error.message);
      });
  }, []);

  const handleDeleteProduct = (productId) => {
    setProducts((prevProducts) => prevProducts.filter(product => product.id !== productId));
  };

  return (
    <div>
      <h1>Products</h1>
      <button className="handleCreateProduct">Create New Product</button>
      <ListContainer items={products.map(product => (
        <Product
          key={product._id}
          product={product}
          onDeleteProduct={handleDeleteProduct}
        />
      ))} />
    </div>
  );
};

export default Products;

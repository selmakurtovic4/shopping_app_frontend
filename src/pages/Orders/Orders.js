// Orders.js
import React, { useState, useEffect } from 'react';
import ListContainer from '../../components/ListContainer/ListContainer';
import axios from 'axios';
import config from '../../config.json';
import Order from './Order'; 
import { useParams } from 'react-router-dom';

const SERVER_URL = config.SERVER_URL;

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    let url = ``;

    if (userId) {
      ///user/:userId
      url = `${SERVER_URL}/orders/user/${userId}`;
  
    }
    else{
      url = `${SERVER_URL}/orders`
    }

    axios.get(url)
      .then((response) => {
        if (response.status === 200) {
          const orders = response.data;
          setOrders(orders);
        } else {
          console.error('Invalid response status:', response.status);
        }
      })
      .catch((error) => {
        console.error('Error fetching orders:', error.message);
      });
  }, [userId]);

  const handleDeleteOrder = (orderId) => {
    setOrders((prevOrders) => prevOrders.filter(order => order.id !== orderId));
  };

  const handleCreateOrder = (orderId) => {
    setOrders((prevOrders) => prevOrders.filter(order => order.id !== orderId));
  };

  return (
    <div>
      <h1>Orders</h1>
      <ListContainer items={orders.map(order => (
        <Order
          key={order._id}
          order={order}
          onDeleteOrder={handleDeleteOrder}
        />
      ))} />
    </div>
  );
};

export default Orders;

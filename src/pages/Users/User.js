// User.js
import React from 'react';
import './User.css';
import axios from 'axios';
import config from '../../config.json';

const SERVER_URL = config.SERVER_URL;

const User = ({ user, onDeleteUser }) => {
  const { id, firstName, lastName } = user;

  const handleDeleteUser = () => {
    axios.delete(`${SERVER_URL}/user/${id}`)
      .then(() => {
        onDeleteUser(id); 
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };

  return (
    <div className="user-container">
      <h2>{`${firstName} ${lastName}`}</h2>
      <div className="user-buttons">
        <button>Create New Order</button>
        <button>See Previous Orders</button>
        <button onClick={handleDeleteUser}>Delete User</button>
      </div>
    </div>
  );
};

export default User;

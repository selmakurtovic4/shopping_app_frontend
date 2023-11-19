// Users.js
import React, { useState, useEffect } from 'react';
import ListContainer from '../../components/ListContainer/ListContainer';
import axios from 'axios';
import config from '../../config.json';
import User from './User';

const SERVER_URL = config.SERVER_URL;

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`${SERVER_URL}/user`)
      .then((response) => {
        if (response.status === 200) {
          const users = response.data;
          setUsers(users);
        } else {
          console.error('Invalid response status:', response.status);
        }
      })
      .catch((error) => {
        console.error('Error fetching users:', error.message);
      });
  }, []);

  const handleDeleteUser = (userId) => {

    setUsers((prevUsers) => prevUsers.filter(user => user.id !== userId));
  };

 
  return (
    <div>
      <h1>Users</h1>
   
      <ListContainer items={users.map(user => (
        <User
          key={user._id}
          user={user}
          onDeleteUser={handleDeleteUser}
        />
      ))} />
    </div>
  );
};

export default Users;

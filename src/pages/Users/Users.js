import React, { useState, useEffect } from 'react';
import ListContainer from '../../components/ListContainer/ListContainer';
import axios from 'axios';
import config from '../../config.json';
import User from'./User.js'

const Users = () => {
  const [users, setUsers] = useState([]);
  const SERVER_URL = config.SERVER_URL;

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

  return (
<div>
      <h1>Users</h1>
      <button>Create New User</button>
      <ListContainer items={users.map(user => (
        <User
          key={user.id}
          user={user}
        
        />
      ))} />
    </div>

  );
};

export default Users;

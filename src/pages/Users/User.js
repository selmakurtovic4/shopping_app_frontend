import React from 'react';
import './User.css'

const User= ({ user }) => {
  const { firstName, lastName } = user;

  return (
    <div className="user-container">
      <h2>{`${firstName} ${lastName}`}</h2>
      <div className="user-buttons">
        <button >Create New Order</button>
        <button >See Previous Orders</button>
        <button >Delete User</button>
      </div>
    </div>
  );
};

export default User;

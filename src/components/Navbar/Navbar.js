import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="/users">Users</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/orders">Orders</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

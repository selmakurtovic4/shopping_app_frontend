import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import {Route, Routes} from "react-router-dom"
import Users  from './pages/Users/Users.js'
import Products from './pages/Products/Products.js'
import Orders  from './pages/Orders/Orders.js'
import User from './pages/Users/User.js';


function App() {
  const users = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Jane', lastName: 'Doe' },
    // Add more users as needed
  ];

  const items = users.map((user) => (
    <User
      key={user.id}
      user={user}
      onCreateNewOrder={() => handleCreateNewOrder(user.id)}
      onSeePreviousOrders={() => handleSeePreviousOrders(user.id)}
      onDeleteUser={() => handleDeleteUser(user.id)}
    />
  ));

  const handleCreateNewOrder = (userId) => {
    // Implement logic for creating a new order for the user with the given userId
    console.log(`Creating new order for user with ID ${userId}`);
  };

  const handleSeePreviousOrders = (userId) => {
    // Implement logic for displaying previous orders for the user with the given userId
    console.log(`Viewing previous orders for user with ID ${userId}`);
  };

  const handleDeleteUser = (userId) => {
    // Implement logic for deleting the user with the given userId
    console.log(`Deleting user with ID ${userId}`);
  };
  return (
    <div className="App">
      <Navbar></Navbar>
     <div className="container">
        <Routes>
          <Route path="/users" element={<Users items={items} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

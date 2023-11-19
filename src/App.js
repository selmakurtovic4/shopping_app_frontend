import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import {Route, Routes} from "react-router-dom"
import Users  from './pages/Users/Users.js'
import Products from './pages/Products/Products.js'
import Orders  from './pages/Orders/Orders.js'
import User from './pages/Users/User.js';
import Cart from './components/Cart/Cart.js';


function App() {


  
  return (
    <div className="App">
      <Navbar></Navbar>
     <div className="container">
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:userId" element={<Orders/>} />
          <Route path="/createOrder/:userId" element={<Cart/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

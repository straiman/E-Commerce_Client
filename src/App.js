import './App.css';
import Header from './components/header.js';
import Home from './components/home.js';
import Login from './components/login.js';
import Gallery from './components/gallery.js';
import Product from './components/product.js';
import Cart from './components/cart.js';
import Wishlist from './components/wishlist.js';
import Account from './components/account.js';
import Orders from './components/orders.js';
import Contact from './components/contact.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

/*
TODO: Check if nested route renders as <Gallery><Product /></Gallery>
Don't want that! Just <Product>
*/

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products">
            <Route path=":id" element={<Product />} />
            <Route index element={<Gallery />} />
          </Route>
          <Route path="/category/:category" element={<Gallery />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/account" element={<Account />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:id" element={<Cart />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

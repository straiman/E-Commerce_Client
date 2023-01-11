import Header from './components/header.js';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Gallery />}>
            <Route path=":id" element={<Product />} />
          </Route>
          <Route path="/category/:category" element={<Gallery />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/account" element={<Account />} />
          <Route path="/orders" element={<Orders />}>
            <Route path=":id" element={<Cart />} />
          </Route>
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

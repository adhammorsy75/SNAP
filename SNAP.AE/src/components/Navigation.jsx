import React from 'react';
import './nav.css'
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <nav>
      <h1>SNAP.AE</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
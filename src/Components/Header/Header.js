import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar">
      <span className="burger"></span>
      <ul className="nav-ul">
        <li className="nav-li">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-li">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-li">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="nav-li">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

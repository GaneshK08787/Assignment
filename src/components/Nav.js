import React from 'react';
import './Nav.css';
import img5 from './dot.png';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src={img5} alt="Untitled UI Logo" />
          <span>Untitled UI</span>
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li>
            <a href="/">Products</a>
            <span className="dropdown-arrow">▼</span>
          </li>
          <li>
            <a href="/">Resources</a>
            <span className="dropdown-arrow">▼</span>
          </li>
          <li><a href="/">Pricing</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        {/* Profile image will be added here */}
        <div className="profile-img">
          
        </div>
      </div>
    </nav>
  );
};

export default Nav;

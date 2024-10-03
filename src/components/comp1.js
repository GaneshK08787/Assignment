import React from 'react';
import './comp1.css';
import img from './figmacomp1_img.png'

const Comp1 = () => {
  return (
    <div className="comp1-container">
      <header className="header">
        <h1>Beautiful analytics to grow smarter</h1>
        <p>
          Powerful, self-serve product and growth analytics to help you convert, engage, 
          and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="header-buttons">
          <button className="demo-button">Demo</button>
          <button className="signup-button">Sign up</button>
        </div>
      </header>

      <div className="main-content">
     <img src={img} alt=""/>
      </div>

      <footer className="footer">
        <p>Join 4,000+ companies already growing</p>
        <div className="logos">
          <img src="logo1.png" alt="Boltshift" />
          <img src="logo2.png" alt="Lightbox" />
          <img src="logo3.png" alt="FeatherDev" />
          <img src="logo4.png" alt="Spherule" />
        </div>
      </footer>
    </div>
  );
};

export default Comp1;

import React from 'react';
import './Banner.css';
import logo from '../Assets/logo.png';

const Banner = () => {
  return (
    <div className="banner">
      <img className="banner-logo" src={logo} alt="" />
      <div className="banner-marquee">
        <marquee>Buy for ₹3499 and get 20% OFF. Code: INDIA20</marquee>
      </div>
    </div>
  );
};

export default Banner;

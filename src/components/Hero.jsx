import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <div className="hero">
        <h1>Decentralized Marketplace for Seamless Trading</h1>
        <p>
          Discover, list, and purchase products securely on a blockchain-powered
          platform. Experience the future of online commerce with transparency
          and full ownership of your transactions.
        </p>

        <div class="hero-buttons">
          <Link to="/add-products">
            <button className="btn1">Sell Your Products</button>
          </Link>
          <Link to="/list-products">
            <button className="btn2">Buy Now</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero
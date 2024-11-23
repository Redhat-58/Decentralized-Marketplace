import React from 'react'
import Cart from '../assets/images/cart.png'
import schoolBag from '../assets/images/bag.jpg'
import headset from '../assets/images/headset.jpg'
import { TiShoppingCart } from 'react-icons/ti';

const List_Products = () => {

  const ProductCart = [
    {
      id: 1,
      name: "School Bag",
      price: 10.99,
      description:
        "Durable and stylish school bag with spacious compartments for carrying books, supplies, and essentials comfortably all day.",
      image: "",
    },
  ];
  return (
    <>
      <section className="product-container">
        <div className="text">
          <h1>Explore Exclusive Products on Our Decentralized Marketplace.</h1>
          <p>
            Discover unique items, buy securely using cryptocurrency, and enjoy
            full ownership of your purchases, all powered by blockchain
            technology.
          </p>

          <button className="buy">Buy Now</button>
        </div>
        <img src={Cart} alt="" className="cart" />
      </section>
      <div className="product-image">
        <h2>Our Available Products</h2>

        <div className="product-card">
          <div className="product-box">
            <img src={schoolBag} alt="" />
            <h3>School Bag</h3>
            <p>
              Durable and stylish school bag with spacious compartments for
              carrying books, supplies, and essentials comfortably all day.
            </p>
            <p>$30.00</p>
            <button>
              Add to cart <TiShoppingCart />
            </button>
          </div>
          <div className="product-box">
            <img src={headset} alt="" />
            <h3>Headset</h3>
            <p>
              High-quality headset with clear sound, noise-canceling features,
              and a comfortable fit, perfect for gaming, music, or video calls.
            </p>
            <p>$30.00</p>
            <button>
              Add to cart <TiShoppingCart />
            </button>
          </div>
          <div className="product-box">
            <img src={schoolBag} alt="" />
            <h3>School Bag</h3>
            <p>
              Durable and stylish school bag with spacious compartments for
              carrying books, supplies, and essentials comfortably all day
            </p>
            <p>$30.00</p>
            <button>
              Add to cart <TiShoppingCart />
            </button>
          </div>
          <div className="product-box">
            <img src={schoolBag} alt="" />
            <h3>School Bag</h3>
            <p>
              Durable and stylish school bag with spacious compartments for
              carrying books, supplies, and essentials comfortably all day
            </p>
            <p>$30.00</p>
            <button>
              Add to cart <TiShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default List_Products
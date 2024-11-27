import React from 'react'
import Cart from '../assets/images/cart.png'
import schoolBag from '../assets/images/bag.jpg'
import headset from '../assets/images/headset.jpg'
import mouse from '../assets/images/mouse.jpg'
import laptop from '../assets/images/laptop.jpg'
import Gamepad from '../assets/images/gamePad.jpg'
import SmartWatch from '../assets/images/smartWatch.jpg'
import { TiShoppingCart } from 'react-icons/ti';

 export const products = [
   {
     id: 1,
     name: "School Bag",
     price: 10.99,
     description:
       "Durable and stylish school bag with spacious compartments for carrying books, supplies, and essentials comfortably all day.",
     image: schoolBag,
   },
   {
     id: 2,
     name: "Head Set",
     price: 10.99,
     description:
       "High-quality headset with clear sound, noise-canceling features, and a comfortable fit, perfect for gaming, music, or video calls.",
     image: headset,
   },
   {
     id: 3,
     name: "Mouse",
     price: 10.99,
     description:
       "Durable and stylish school bag with spacious compartments for carrying books, supplies, and essentials comfortably all day.",
     image: mouse,
   },
   {
     id: 4,
     name: "Laptop",
     price: 10.99,
     description:
       "Durable and stylish school bag with spacious compartments for carrying books, supplies, and essentials comfortably all day.",
     image: laptop,
   },
   {
     id: 5,
     name: "Game Pad",
     price: 10.99,
     description:
       "Durable and stylish school bag with spacious compartments for carrying books, supplies, and essentials comfortably all day.",
     image: Gamepad,
   },
   {
     id: 6,
     name: "Smart Watch",
     price: 10.99,
     description:
       "Durable and stylish school bag with spacious compartments for carrying books, supplies, and essentials comfortably all day.",
     image: SmartWatch,
   },
   {
     id: 7,
     name: "School Bag",
     price: 10.99,
     description:
       "Durable and stylish school bag with spacious compartments for carrying books, supplies, and essentials comfortably all day.",
     image: schoolBag,
   },
   {
     id: 8,
     name: "Head Set",
     price: 10.99,
     description:
       "High-quality headset with clear sound, noise-canceling features, and a comfortable fit, perfect for gaming, music, or video calls.",
     image: headset,
   },
   {
     id: 9,
     name: "Mouse",
     price: 10.99,
     description:
       "Durable and stylish school bag with spacious compartments for carrying books, supplies, and essentials comfortably all day.",
     image: mouse,
   },
   {
     id: 10,
     name: "Laptop",
     price: 10.99,
     description:
       "Durable and stylish school bag with spacious compartments for carrying books, supplies, and essentials comfortably all day.",
     image: laptop,
   },
   {
     id: 11,
     name: "Game Pad",
     price: 10.99,
     description:
       "Durable and stylish school bag with spacious compartments for carrying books, supplies, and essentials comfortably all day.",
     image: Gamepad,
   },
   {
     id: 12,
     name: "Smart Watch",
     price: 10.99,
     description:
       "Durable and stylish school bag with spacious compartments for carrying books, supplies, and essentials comfortably all day.",
     image: SmartWatch,
   },
 ];
const List_Products = () => {

 
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
         
         {products.map((product) =>{
            return (
              <div className="product-box">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>
                 {product.description}
                </p>
                <p>${product.price}</p>
                <button className='cart-btn'>
                  Add to cart <TiShoppingCart className='cart-icon' />
                </button>
              </div>
            );
         })}
        </div>
      </div>
    </>
  );
}

export default List_Products
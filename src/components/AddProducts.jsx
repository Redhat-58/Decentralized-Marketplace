import React, { useState } from "react";
import {products} from "./List_Products"

const AddProducts = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: products.length + 1,
      name,
      price,
      description,
      imageUrl,
    };
    products.push(newProduct);
    setName("");
    setPrice("");
    setDescription("");
    setImageUrl("");
  };

  return (
    <>
      <div className="add-product">
        <h2>Add Product</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-input">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name=""
              placeholder="Enter product name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-input">
            <label htmlFor="description">Description:</label>
            <textarea
              name=""
              placeholder="Enter product description"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="form-input">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              name=""
              placeholder="Enter price for product"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="form-input">
            <label htmlFor="image">Image Url:</label>
            <input
              type="url"
              name=""
              placeholder="Enter Image Url"
              required
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>

          <button type="submit" className="product-btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProducts;

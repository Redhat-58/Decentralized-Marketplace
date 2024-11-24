import React from 'react'

const AddProducts = () => {
  return (
    <>
      <div className="add-product">
        <h2>Add Product</h2>

        <form action="">
          <div className='form-input'>
            <label htmlFor="">Name:</label>
            <input type="text" name="" placeholder="Enter product name" />
          </div>
          <div className='form-input'>
            <label htmlFor="">Description:</label>
            <textarea
              name=""
              placeholder="Enter product description"
            ></textarea>
          </div>

          <div className='form-input'>
            <label htmlFor="">Price:</label>
            <input
              type="number"
              name=""
              placeholder="Enter price for product"
            />
          </div>

          <div className='form-input'>
            <label htmlFor="">Image:</label>
            <input type="file" name="" />
          </div>

          <button type='submit' className='product-btn'>Submit</button>
        </form>
      </div>
    </>
  );
}

export default AddProducts
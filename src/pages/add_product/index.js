import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css"

const AddProduct = () => {

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [priceNumber, setPriceNumber] = useState("");
  const [inventoryNumber, setInventoryNumber] = useState("");
  const [inStock, setInStock] = useState(true);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const items = {
      name,
      priceNumber,
      inventoryNumber,
      inStock,
      image,
      description,
    };
    

    let res = await axios('../create_product', {
      method: "POST",
      headers: {
          'Content-Type': 'application/json',
      },
      
      data: items
  })
  window.location.reload();
  };

  return (
    <form id="add_container" onSubmit={handleSubmit}>
      <table id="table">
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">Name:</label>
            </td>
            <td>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="price">Price:</label>
            </td>
            <td>
              <input
                id="price"
                type="number"
                step="0.01"
                value={priceNumber}
                onChange={(event) => setPriceNumber(event.target.value)}
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="inventory">Inventory:</label>
            </td>
            <td>
              <input
                id="inventory"
                type="number"
                value={inventoryNumber}
                onChange={(event) => setInventoryNumber(event.target.value)}
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="inStock">In Stock:</label>
            </td>
            <td>
              <input
                id="inStock"
                type="checkbox"
                checked={inStock}
                onChange={(event) => setInStock(event.target.checked)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="image">Image:</label>
            </td>
            <td>
              <input
                id="image"
                type="text"
                value={image}
                onChange={(event) => setImage(event.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="description">Description:</label>
            </td>
            <td>
              <textarea
                id="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                required
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button type="submit">Create Product</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default AddProduct;

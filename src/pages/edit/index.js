import React, { useContext, useEffect, useState  } from 'react'
import { AppContext } from '../../context/app_context'
import { useNavigate } from "react-router-dom";
import './index.css'
import axios from 'axios';


const Edit = () => {

    const navigate = useNavigate();
    const { activeProduct, setActiveProduct } = useContext(AppContext);
    const {image: image, price: price, inventory: inventory, name: name, description: description, inStock: inStock} = activeProduct;
    
    const [name1, setName1] = useState(name);
    const [price1, setPrice1] = useState(price);
    const [image1, setImage1] = useState(image);
    const [inventory1, setInventory1] = useState(inventory);
    const [description1, setDescription1] = useState(description);
    const [inStock1, setInStock1] = useState(inStock);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedProduct = {
            image:image1,
            price:price1,
            inventory:inventory1,
            name:name1,
            description:description1,
            inStock:inStock1
        };
        console.log(updatedProduct);
        // 
           let res = await axios({
            method:'PUT',
            url: `/update_product/${activeProduct._id}`,
            data: updatedProduct
            

           }) 
           navigate(`/product/${name}`)
    }

    const handleDelete = async () => {
      let response = await axios(
        `../delete_product/${activeProduct._id}`,
        {
          method: "delete",
        }
      );
      navigate(`/product/${name}`)
    };
      
      

  return (

    <form className="editContainer" onSubmit={(e) => handleSubmit(e)}>
      <label>
        Name:
        <input
          type="text"
          value={name1}
          onChange={(e) => setName1(e.target.value)}
        />
      </label>
      <br />
      <label>
        Price:
        <input
          type="number"
          value={price1}
          onChange={(e) => setPrice1(e.target.value)}
        />
      </label>
      <br />
      <label>
        Image:
        <input
          type="string"
          value={image1}
          onChange={(e) => setImage1(e.target.value)}
        />
      </label>
      <br />
      <label>
        Inventory:
        <input
          type="string"
          value={inventory1}
          onChange={(e) => setInventory1(e.target.value)}
        />
      </label>
      <br />
      <label>
        In Stock:
        <input
          type="string"
          value={inStock1}
          onChange={(e) => setInStock1(e.target.value)}
        />
      </label>
      <br />
      <label>
        Description
        <textarea
          value={description1}
          onChange={(e) => setDescription1(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
      <button id='delete' onClick={(e) => handleDelete(e)}>Delete</button>
    </form>
  )
}

export default Edit

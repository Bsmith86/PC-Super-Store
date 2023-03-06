import React, { useContext, useEffect, useState  } from 'react'
import './index.css'
import { AppContext } from '../../context/app_context'
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const Product = () => {
    const { activeProduct, setCart } = useContext(AppContext);
    const { image: image, price: price, inventory: inventory, name: name, description: description, inStock: inStock} = activeProduct;
    const navigate = useNavigate();

    

    const handleAddToCart = async () => {
      // make an axios call to add an item to the order
      let res = await axios({
        method: "PUT",
        url: `/add_to_cart/${activeProduct._id}`
        
      })
      console.log(res);
      if (res.data._id) {
        setCart(res.data)
      }

    };

    const handleBuy = async (e)  => {
        // Buy Function

   let newNumber = inventory -1
   let inStock = newNumber == 0 ? false : true
//    let inventoryHtml = document.getElementById("inventory")
//    inventoryHtml.textContent = newNumber
    //   .disabled = !inStock ? true : false 
//    let stockHtml = document.getElementById("inStock") 

     console.log(newNumber);
   
    if(inStock == false){
        inStock.innerHTML = "Out Of Stock"
    }
    console.log(inStock);
   const buyProduct = {
           newNumber,
           inStock
       };
       let res = await axios({
        method:'PUT',
        url: `../buy_product/${activeProduct._id}`,
        data: buyProduct
        

       }) 
       navigate('/product/{name')
    

 
//    let response = await axios(
//      `../buy_product/${activeProduct._id}`,
//      {
//        method: "PUT",
//        headers: {
//          "Content-Type": "application/json",
//        },
    //    body: JSON.stringify(buyProduct),
//           data: buyProduct
//      }
//    );
//    let finalData = await response.json();
//     console.log(finalData);
   
//     if(inStock == true){
//         window.location.href = `../products?idInQuery=${productId}`;
//     }
     
  };
    
//   const handleBuy = () =>{
//     console.log('clicked buy');
    
// }

    const handleEdit = () =>{
        console.log('clicked Edit');
        navigate(`/edit/${name}`)
    }

    
console.log(inStock);

// if(inStock == true){
//     inStock.innerHTML = "Out Of Stock"
// }

    return (
    <div className='productCard'>
       <h1 className='name'>{name}</h1>
       <img className='image' src={image} />
       <p className='description'>{description}</p>
       <p className="price" >Price: ${price}</p> 
       <p className="inventory">{inventory} Left</p>
       <p id="inStock">In Stock:{inStock}</p> 
       <button className="addToCart" onClick={(e) => handleAddToCart(e)}>Add</button><button onClick={() => handleEdit()} className="edit">Edit</button>
    </div>
  )
}

export default Product

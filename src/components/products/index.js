import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../context/app_context'
import './index.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';



const Products = () => {

  const { activeProduct, setActiveProduct, items, setItems } = useContext(AppContext);
  
  const navigate = useNavigate();
  const location = useLocation().pathname;
  console.log(location);

  useEffect(() => {
    const getItems = async () => {
      let response = await axios('/get_data');
      let items = [...response.data];
      setItems(items)
    }

    

    getItems()
  }, [])



 
  // let products = props.products;
  // when we render, we want to grab that array
  console.log(activeProduct);

  const handleClick = (items) => {
    // console.log(items._id);
    setActiveProduct(items)
console.log(activeProduct);
    navigate(`/product/`)
    // Manually switch pages to coin/symbolOfItem
  
  }

  let productsJSX = items.map((el) => {
    return (
      <div 
        key={el._id} 
        style={{backgroundColor: "rgba(9, 9, 191, 0.8)", padding: '20px 0', fontSize: '30px', color: '#edfa00' }}
        className={items.name === activeProduct ? "active" : 'default'}
        onClick={() => handleClick(el)}>
        <h3 className="product_name" >{el.name}</h3>
         <img className='productPic' src={el.image} alt="" />
        <p className="product_price" >Price: ${el.price}</p>
      </div>
    )
  })


  // grab our products
  

  return (
    <div className="products" style={{display: 'grid', gridTemplateRows: 'auto' }}>
      {/* a bunch of li tags with our products */}
      {productsJSX}
      
    </div>
  )
}

export default Products
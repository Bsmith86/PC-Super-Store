import React, { useContext, useEffect, useState  } from 'react'
import { AppContext } from '../../context/app_context'
import './index.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from 'react-router-dom';



const Products = () => {

  let [items, setItems] = useState([]);
  const navigate = useNavigate();
  const location = useLocation().pathname;
  console.log(location);

  useEffect(() => {
    const getData = async () => {
     let res = await axios(`/get_data`)

     let mongoItems = [...res.data];
     
     console.log(res);
     setItems(mongoItems)

    
  
    }
    getData()
  }, []);



  const { activeProduct, setActiveProduct } = useContext(AppContext);
  // let products = props.products;
  // when we render, we want to grab that array
  console.log(activeProduct);

  const handleClick = (items) => {
    // console.log(items._id);
    setActiveProduct(items)
console.log(activeProduct);
    navigate(`/product/${items.name}`)
    // Manually switch pages to coin/symbolOfItem
  
  }

  let productsJSX = items.map((el) => {
    return (
      <div key={el.name} style={{backgroundColor: "rgba(9, 9, 191, 0.8)", padding: '20px 0', fontSize: '30px', color: '#edfa00' }} key={items._id} 
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
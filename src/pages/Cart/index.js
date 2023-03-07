import React, { useContext } from 'react'
import Cart from '../../components/cart'
import './index.css'
import { useNavigate } from "react-router-dom";
import { AppContext } from '../../context/app_context';
const Checkout = () => {

  const handleClick = () => {
    navigate(`/previous`)
}

let { cart, setCart } = useContext(AppContext)

  const navigate = useNavigate();
  return (
    <div>
       <h1>Items in Cart</h1>
       <button className='orderSwitch' onClick={()=> handleClick()}>Previous Orders</button>
        <Cart cart={cart} setCart={setCart} />
    </div>
  )
}

export default Checkout

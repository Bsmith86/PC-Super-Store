import React from 'react'
import './index.css'
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate();
   

    const handleHomeClick = () => {
        console.log('clicked Home');
        navigate(`/`)
    }
    const handleAddClick = () => {
        console.log('clicked add');
        navigate(`/add`)
    }
    

    return (
    
       <nav id="navbar">
            <ul className="nav__links">
            
            <li><a id="home" src="#"><h1 onClick={() => handleHomeClick()}>Home</h1></a></li>
            <li><a id="add_product" src="#"><h1 onClick={() => handleAddClick()}>Add Products</h1></a></li>
                <li>
                    <label htmlFor="vsearch"><h1>Product Search:</h1></label>
                <input type="search" id="psearch" name="psearch" />
                <button id="search-btn">Search</button>
                </li>
            </ul>
            <div className="cart">
                <a href="./cart/index.html"><i className="bi bi-cart2"></i></a>
                <div className="cartAmount">0</div>
            </div> 
                
            
        </nav>      
   
  )
}

export default Nav

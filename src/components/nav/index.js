import React, { useContext } from 'react'
import './index.css'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useState} from 'react'
import { AppContext } from '../../context/app_context';
import LogOut from '../logout';


import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

const Nav = () => {
    const {items, setActiveProduct, cart} = useContext(AppContext)
    const navigate = useNavigate();
    const [query, setQuery] = useState('');


    const handleHomeClick = () => {
        console.log('clicked Home');
        navigate(`/`)
    }
    const handleCart = () => {
        console.log('clicked Cart');
        navigate(`/checkout`)
    }
    const handleAddClick = () => {
        console.log('clicked add');
        navigate(`/add`)
    }
    const handleSearch = () => {
        console.log(query);
        // 
        items.forEach((el) => {
            if (el.name == query) {
                console.log(el.name);
                setActiveProduct(el)
                navigate(`/product/`)
            }
        })
    }
    

    return (
    
       <nav id="navbar">
            <ul className="nav__links">
            
            <li><a id="home" src="#"><h1 onClick={() => handleHomeClick()}>Home</h1></a></li>
            <li><a id="add_product" src="#"><h1 onClick={() => handleAddClick()}>Add Products</h1></a></li>
                <li>
                    <label htmlFor="psearch"><h1>Product Search:</h1></label>
                <input onChange={e => setQuery(e.target.value)} type="search" id="psearch" name="psearch" />
                <button onClick={() => handleSearch()} id="search-btn">Search</button>
                    {/* <SearchBar /> */}
                </li>
            </ul>
            <LogOut />
            <div className="cart">
                <i className="fa-solid fa-shop" onClick={() => handleCart()}></i>                
                <div className="cartAmount">{cart.totalQty}</div>
            </div> 
                
            
        </nav>     
   
  )
}

export default Nav

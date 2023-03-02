import React, { useContext } from 'react'
import './index.css'
import { useNavigate } from "react-router-dom";
import SearchBar from '../search_bar';
import {useState} from 'react'
import { AppContext } from '../../context/app_context';

const Nav = () => {
    const {items, setActiveProduct} = useContext(AppContext)
    const navigate = useNavigate();
    const [query, setQuery] = useState('');


    const handleHomeClick = () => {
        console.log('clicked Home');
        navigate(`/`)
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
            <div className="cart">
                <a href="./cart/index.html"><i className="bi bi-cart2"></i></a>
                <div className="cartAmount">0</div>
            </div> 
                
            
        </nav>      
   
  )
}

export default Nav

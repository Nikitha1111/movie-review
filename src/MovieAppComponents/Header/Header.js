import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Link} from "react-router-dom";
import user from "../../images/user.png";
import net from "../../images/net.png"

import "./Header.scss"
import { fetchAsyncShows, fetchAsyncMovies } from '../../features/movies/MovieSlice';

const Header = () => {
    const [term,setTerm] = useState("");
    const dispatch =useDispatch();
    
  
    const submitHandler =(e) =>{
       e.preventDefault();
       dispatch(fetchAsyncMovies(term));
       dispatch(fetchAsyncShows(term));
       setTerm("");
      
    }
    return (
     
        <div className='header'>
            
                <div className='logo'>
                <img src={net} height="180px"width="160px" background-color="transparent" alt="user"/> 
                <Link to="/Home">HOME</Link>             
                </div>
           
           <div className='search-bar'>
            <form onSubmit={submitHandler}>
               <input type='text' value={term} 
               placeholder="Search Movies or Shows" 
               onChange={(e) => setTerm(e.target.value)}
               />
           <button type='submit'><i className='fa fa-search'></i></button>
            </form>
           </div>
            <div className='user-image'>
                <img src={user}alt="user"/>
            </div>
            
        </div>
    
    );
};

export default Header;
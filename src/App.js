import React from 'react';

import {  HashRouter as Router, Route, Routes, HashRouter} from "react-router-dom";
import Home from './MovieAppComponents/home/Home';
import Header from './MovieAppComponents/Header/Header';
import Footer from './MovieAppComponents/Footer/Footer';
import PageNotFound from './MovieAppComponents/PageNotFound/PageNotFound';
import MovieDetail from './MovieAppComponents/MovieDetails/MovieDeatils';

import './App.scss';
import { Link } from 'react-router-dom';



function App(){

return(

<div className='app'>



<HashRouter basename="/index.html">
<Router>
<Header></Header> 
   
<Routes>
  
   <Route path='/' element={<Home/>}/>
   <Route path='/Home' element={<Home/>}/>
   <Route path="/movie/:imdbID" element={<MovieDetail/>}/>
   <Route path ='/pageNotFound' element={<PageNotFound/>}/>

</Routes>

<Footer/>
</Router>

</HashRouter>

</div>


);


}
export default App;
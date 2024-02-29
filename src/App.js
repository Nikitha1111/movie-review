import React from 'react';
import { HashRouter } from 'react-router-dom';
import { HashRouter as Router, Route, Routes} from "react-router-dom";
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


<HashRouter basename="/movie-review">


<Router>
<Header></Header> 
   
<Routes>
  
   <Route path='/movie-review' element={<Home/>}/>
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
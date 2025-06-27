import './App.css';
import React from "react";
import { Route,  BrowserRouter as Router, Routes} from 'react-router-dom';
import Login from "./mainProject/Login";
import Home from "./mainProject/Home";
 import Cards1 from "./mainProject/Cards1";
import Norestock from './mainProject/Norestock';
import Hats from './mainProject/Hats';
// import Rex from './mainProject/Rex';
import Syste from './mainProject/Syste';
import Mtv from './mainProject/Mtv';
import Eyewear from './mainProject/Eyewear';
import Apparel from './mainProject/Apparel';
import Accesories from './mainProject/Accesories';
import About from './mainProject/About';
import Carts from './mainProject/Carts';
import Product from './mainProject/Product';

export default function App(){
  return(
      <div> 
      
          <Router>
            <Routes>
                <Route exact path='/' element = {<Home/>}/>
                <Route path='/cards1' element = {<Cards1/>}/>
                <Route path='/login' element = {<Login/>}/>
                <Route path='/norestock' element = {<Norestock/>}/>
                <Route path='/hats' element = {<Hats/>}/> 
                <Route path='/rexs' element = {<Product/>}/>
                <Route path='/system' element = {<Syste/>}/>
                <Route path='/mtv' element = {<Mtv/>}/>
                <Route path='/eyewear' element = {<Eyewear/>}/>
                <Route path='/apparel' element = {<Apparel/>}/>
                <Route path='/accesries' element = {<Accesories/>}/>
                <Route path='/about' element = {<About/>}/>
                <Route path='/cart' element = {<Carts/>}/>
            </Routes>
        </Router>
             
      </div>
   )
}

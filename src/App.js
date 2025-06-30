import './App.css';
import React from "react";
import { Route,  BrowserRouter as Router, Routes} from 'react-router-dom';
import Login from "./mainProject/Login";
import Home from "./mainProject/Home";
//import Cards1 from "./mainProject/Cards1";
import About from './mainProject/About';
import Carts from './mainProject/Carts';
import Product from './mainProject/Product';
import Product1 from './mainProject/Product1'
import Product2 from './mainProject/Product2'
import Product3 from './mainProject/Product3'
import Product4 from './mainProject/Product4';
import Product5 from './mainProject/Product5';
import Product6 from './mainProject/Product6';
import Product7 from './mainProject/Product7';
import Product8 from './mainProject/Product8';

export default function App(){
  return(
      <div> 
      
          <Router>
            <Routes>
                <Route exact path='/' element = {<Home/>}/>
                <Route path='/cards1' element = {<Product8/>}/>
                <Route path='/login' element = {<Login/>}/>
                <Route path='/norestock' element = {<Product1/>}/>
                <Route path='/hats' element = {<Product2/>}/> 
                <Route path='/rexs' element = {<Product/>}/>
                <Route path='/system' element = {<Product3/>}/>
                <Route path='/mtv' element = {<Product4/>}/>
                <Route path='/eyewear' element = {<Product5/>}/>
                <Route path='/apparel' element = {<Product6/>}/>
                <Route path='/accesries' element = {<Product7/>}/>
                <Route path='/about' element = {<About/>}/>
                <Route path='/cart' element = {<Carts/>}/>
            </Routes>
        </Router>
             
      </div>
   )
}

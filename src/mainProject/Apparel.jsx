import React from "react";
import { Link } from "react-router-dom";
import app1 from '../photo/images1/app1.webp'
import app2 from '../photo/images1/app2.webp'
import app3 from '../photo/images1/app3.webp'
import app4 from '../photo/images1/app4.webp'

export default function Apparel(){
    return(
        <div>
            <div id="head" >
        <h2 class="roboto"><Link to='/'  >URBAN MONKEY®</Link></h2>
        <input type="search" placeholder="SEARCH FOR PRODUCTS"/>  
         <div>
        <Link to='/login'><i class="fa-regular fa-user"></i></Link>
        <a href="ss"><i class="fa-regular fa-heart"></i></a>
        <a href="ss"><i class="fa fa-cart-shopping"></i></a>
        </div>
       
    </div>

     <div class="header" >
        <ul>
             <li class="list"><Link to='/norestock'>NO RESTOCK</Link></li>
             <li class="list"><Link to='/hats'>HATS & CAPS</Link></li>
             <li class="list"><Link to='/rexs'>RE X UM</Link></li> 
             <li class="list"><Link to='/system'>SYSTMS</Link></li>
             <li class="list"><Link to='/mtv'>MTV X UM</Link></li>
             <li class="list"><Link to='/eyewear'>EYEWEAR</Link></li>
             <li class="list"><Link to='/apparel'>APPAREL</Link></li>
             <li class="list"><Link to='/accesries'>ACCESSORIES</Link></li>
             <li class="list"><Link to='/about'>ABOUTS US</Link></li>
        </ul>
    </div>

    <div class="header1">
        <ul>
            <li id="space">APPAREL</li>
            <li>HOME : APPAREL</li>
        </ul>
    </div>

     <div class="cards">
        
        <ul>
        <li class="list1">
        <a href="ss"><img src={app1} alt="img2" width="300px"  /></a>
        <p class="productName1">Short Sleeve Off black Shirt</p>
        <p class="price">Rs.8650</p> 
        </li>
         
        <li class="list1">
        <img src={app2} alt="img3" width="300px" height="450px"/>
        <p class="productName1">Metal Head Trucker</p>
        <p class="price">Rs.3450</p>
        </li>
        
        <li class="list1">
        <img src={app3} alt="img4" width="300px"  />
        <p class="productName1">Short Sleeve Gray Shirt // System Error</p>
        <p class="price">Rs.500</p>
        </li>
        
        <li class="list1">
        <img src={app4} alt="img5" width="300px" />
        <p class="productName1">UM Core Vintage // Majolica beaige</p>
        <p class="price">Rs.999</p>
        </li>
        </ul>
         
    </div>

        </div>
    )
}
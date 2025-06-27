import React from "react";
import { Link } from "react-router-dom";
import hod1 from '../photo/images1/hod1.webp';
import hod2 from '../photo/images1/hod2.webp';
import hod3 from '../photo/images1/hod3.webp';
import hod4 from '../photo/images1/hod4.webp';


export default function Mtv(){
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
            <li id="space">MTV X UM</li>
            <li>HOME : MTV X UM</li>
        </ul>
    </div>

     <div class="cards">
        
        <ul>
        <li class="list1">
        <a href="ss"><img src={hod1} alt="img2" width="300px"  /></a>
        <p class="productName1">Hoodie // Lost Angels</p>
        <p class="price">Rs.2650</p> 
        </li>
         
        <li class="list1">
        <img src={hod2} alt="img3" width="300px" height="450px" />
        <p class="productName1">Metal Head Hoodie   </p>
        <p class="price">Rs.3450</p>
        </li>
        
        <li class="list1">
        <img src={hod3} alt="img4" width="300px"  />
        <p class="productName1">Short Sleeve Black Shirt</p>
        <p class="price">Rs.1500</p>
        </li>
        
        <li class="list1">
        <img src={hod4} alt="img5" width="300px"/>
        <p class="productName1">Core Vintage // Majolica White</p>
        <p class="price">Rs.999</p>
        </li>
        </ul>
         
    </div>
        </div>
    )
}
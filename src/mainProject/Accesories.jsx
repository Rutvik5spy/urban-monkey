import React from "react";
import { Link } from "react-router-dom";
import accc1 from '../photo/images1/acc1.webp'
import accc2 from '../photo/images1/acc2.webp'
import accc3 from '../photo/images1/acc3.webp'
import accc4 from '../photo/images1/acc4.webp'

export default function Accesories(){
    return(
        <div>
            <div id="head" >
        <h2 class="roboto"><Link to='/'  >URBAN MONKEY®</Link></h2>
        <input type="search" placeholder="SEARCH FOR PRODUCTS"/>  
         <div>
        <Link to='/login'><i class="fa-regular fa-user"></i></Link>
        <a href="ww"><i class="fa-regular fa-heart"></i></a>
        <a href="ww"><i class="fa fa-cart-shopping"></i></a>
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
            <li id="space">ACCESSORIES</li>
            <li>HOME : ACCESSORIES</li>
        </ul>
    </div>

     <div class="cards">
        
        <ul>
        <li class="list1">
        <a href="ww"><img src={accc1} alt="img2" width="300px" height="450px"  /></a>
        <p class="productName1">Short key pocket</p>
        <p class="price">Rs.1050</p> 
        </li>
         
        <li class="list1">
        <img src={accc2} alt="img3" width="300px" height="450px"  />
        <p class="productName1">Metal Head Trucker bag</p>
        <p class="price">Rs.1950</p>
        </li>
        
        <li class="list1">
        <img src={accc3} alt="img4" width="300px"  />
        <p class="productName1">Short Skater// System Error</p>
        <p class="price">Rs.4500</p>
        </li>
        
        <li class="list1">
        <img src={accc4} alt="img5" width="300px"/>
        <p class="productName1">UM Core keys</p>
        <p class="price">Rs.788</p>
        </li>
        </ul>
         
    </div>
        </div>
    )
}
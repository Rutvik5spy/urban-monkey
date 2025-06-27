import React from "react";
import { Link } from "react-router-dom";
import hat1 from '../photo/images1/cap1.webp'
import hat2 from '../photo/images1/cap2.webp'
import hat3 from '../photo/images1/cap3.webp'
import hat4 from '../photo/images1/cap4.webp'

export default function Hats(){

    return(
        <div>
        <div id="head" >
        <h2 class="roboto"><Link to='/'  >URBAN MONKEY®</Link></h2>
        <input type="search" placeholder="SEARCH FOR PRODUCTS"/>  
         <div>
        <Link to='/login'><i class="fa-regular fa-user"></i></Link>
        <a href="s"><i class="fa-regular fa-heart"></i></a>
        <a href="s"><i class="fa fa-cart-shopping"></i></a>
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
            <li>HOME : HATS & CAPS</li>
        </ul>
    </div>

     <div class="cards">
        
        <ul>
        <li class="list1">
        <a href="s"><img src={hat1} alt="img2" width="300px"  /></a>
        <p class="productName1">Caps town // Lost Angels</p>
        <p class="price">Rs.1150</p> 
        </li>
         
        <li class="list1">
        <img src={hat2} alt="img3" width="300px"/>
        <p class="productName1">Metal Head Trucker // urdu</p>
        <p class="price">Rs.450</p>
        </li>
        
        <li class="list1">
        <img src={hat3} alt="img4" width="300px" height="300px" />
        <p class="productName1">Nocap // System Error</p>
        <p class="price">Rs.2500</p>
        </li>
        
        <li class="list1">
        <img src={hat4} alt="img5" width="300px"/>
        <p class="productName1">UM Core Vintage // caps1</p>
        <p class="price">Rs.1999</p>
        </li>
        </ul>
         
    </div>
        </div>
    )


}
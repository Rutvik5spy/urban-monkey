import React from "react";
import { Link } from "react-router-dom";
import eye1 from '../photo/images1/eye1.webp'
import eye2 from '../photo/images1/eye2.webp'
import eye3 from '../photo/images1/eye3.webp'
import eye4 from '../photo/images1/eye4.webp'

export default function Eyewear(){
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
            <li id="space">EYEWEAR</li>
            <li>HOME : EYEWEAR</li>
        </ul>
    </div>

     <div class="cards">
        
        <ul>
        <li class="list1">
        <a href="ss"><img src={eye1} alt="img2" width="300px"  /></a>
        <p class="productName1">Golden glow EyeWear</p>
        <p class="price">Rs.3650</p> 
        </li>
         
        <li class="list1">
        <img src={eye2} alt="img3" width="300px"  />
        <p class="productName1">Blue lens Trucker</p>
        <p class="price">Rs.1450</p>
        </li>
        
        <li class="list1">
        <img src={eye3} alt="img4" width="300px"  />
        <p class="productName1">Short blue Rayban</p>
        <p class="price">Rs.1500</p>
        </li>
        
        <li class="list1">
        <img src={eye4} alt="img5" width="300px"  />
        <p class="productName1">Core Vintage // Majolica Black</p>
        <p class="price">Rs.999</p>
        </li>
        </ul>
         
    </div>


        </div>
     )
}
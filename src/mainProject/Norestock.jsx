import React from "react";
import { Link } from "react-router-dom";
import img1 from '../photo/images1/img2.webp'
import img2 from '../photo/images1/img3.webp'
import img3 from '../photo/images1/img4.webp'
import img4 from '../photo/images1/img5.webp'

export default function Norestock(){
    return(
        <div>

        <div id="head" >
        <h2 class="roboto"><Link to='/'>URBAN MONKEY®</Link></h2>
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
            <li id="space">NO RESTOCK</li>
            <li>HOME : NO RESTOCK</li>
        </ul>
     </div>

     <div class="cards">
        
        <ul>
        <li class="list1">
        <a href="ds"><img src={img1} alt="img2" width="300px"  /></a>
        <p class="productName1">Short Sleeve Off White Shirt // Lost Angels</p>
        <p class="price">Rs.1650</p> 
        </li>
         
        <li class="list1">
        <img src={img2} alt="img3" width="300px" height="450px" />
        <p class="productName1">Metal Head Trucker</p>
        <p class="price">Rs.1450</p>
        </li>
        
        <li class="list1">
        <img src={img3} alt="img4" width="300px"  />
        <p class="productName1">Short Sleeve Black Shirt // System Error</p>
        <p class="price">Rs.1500</p>
        </li>
        
        <li class="list1">
        <img src={img4} alt="img5" width="300px"  />
        <p class="productName1">UM Core Vintage // Majolica Blue</p>
        <p class="price">Rs.999</p>
        </li>
        </ul>
         
    </div>
        </div>



    )
}
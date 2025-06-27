import React from "react";
import { Link } from "react-router-dom";
import sys1 from '../photo/images1/sys1.webp';
import sys2 from '../photo/images1/sys2.webp';
import sys3 from '../photo/images1/sys3.webp';
import sys4 from '../photo/images1/sys4.webp';

export default function Syste(){
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
            <li id="space">SYSTMS</li>
            <li>HOME : SYSTMS</li>
        </ul>
    </div>
    

     <div class="cards">
        
        <ul>
        <li class="list1">
        <a href="ss"><img src={sys1} alt="img2" width="300px"  /></a>
        <p class="productName1">Short Pocket</p>
        <p class="price">Rs.650</p> 
        </li>
         
        <li class="list1">
        <img src={sys2} alt="img3" width="300px" height="450px" />
        <p class="productName1">Metal Head Trucker // volet</p>
        <p class="price">Rs.450</p>
        </li>
        
        <li class="list1">
        <img src={sys3} alt="img4" width="300px"  />
        <p class="productName1">System Error</p>
        <p class="price">Rs.500</p>
        </li>
        
        <li class="list1">
        <img src={sys4} alt="img5" width="300px" />
        <p class="productName1">Majolica Blue</p>
        <p class="price">Rs.1999</p>
        </li>
        </ul>
         
    </div>

         


    </div>

    )
}
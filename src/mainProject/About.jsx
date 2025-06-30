import React from "react"
import img1 from '../photo/images1/R.png';
import { Link } from "react-router-dom";

export default function About(){
    return(
        <div>
        
         <div id="head" >
        <h2 class="roboto"><Link to='/'>URBAN MONKEY®</Link></h2>
        <input type="search" placeholder="SEARCH FOR PRODUCTS"/>  
        <div>
            <Link to='/login'><i class="fa-regular fa-user"></i></Link>
            <a href="login.html"><i class="fa-regular fa-heart"></i></a>
            <a href="login.html"><i class="fa fa-cart-shopping"></i></a>
        </div>
     </div>

     <div class="header">
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


    <div>
         <h1 class="about1">VISION :-</h1>
         <img src={img1} alt="abc" width="600px" class="about3" />
     </div>

     <div >
         <h1 class="about2">TIMELINE :-</h1>
         <p class="about4">What started in 2013, with a simple goal of increasing awareness about the skate culture in Mumbai,<br/> has now evolved into a deep rooted 
            passion towards accelerating the growth of our community.<br/><br/>
            Just like the community we represent, we are unorthodox in our methods, eccentric in our style, and<br/> determined in our approach. We strive to keep our 
            work unique and smart, with room for a little magic.</p>
     </div>



        </div>
    )
}
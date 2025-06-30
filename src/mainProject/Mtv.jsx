
import React from "react";
import '../rex.css';
import { Link } from "react-router-dom";

const Mtv = (prodlist)=>{

    const renderList = ({prodlist})=>{
        if(prodlist){
            return prodlist.map((data)=>{
                return(
        <div key={data.id}>
        <ul>
        <li class="list1">
        <a href="a"><img src={data.img} alt="img2" width="300px" height="400px" /></a>
        <p class="productName1">{data.name}</p>
        <p class="price">Rs.{data.price}</p> 
        </li>
        </ul>  
        </div>
                )
            })
        }
    }

    return(
        <div>

            <div id="head" >
         <h2 class="roboto"><Link to='/'  >URBAN MONKEY®</Link></h2>
         <input type="search" placeholder="SEARCH FOR PRODUCTS"/>  
          <div>
        <Link to='/login'><i class="fa-regular fa-user"></i></Link>
         <a href="wqww"><i class="fa-regular fa-heart"></i></a>
         <a href="dd"><i class="fa fa-cart-shopping"></i></a>
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
                {renderList(prodlist)}
        </div>

        </div>
    )
}

export default Mtv;
 

import React from "react";
import '../rex.css';
import { Link } from "react-router-dom";

const Apparel = (prodlist)=>{

    const renderList = ({prodlist})=>{
        if(prodlist){
            return prodlist.map((data)=>{
                return(
        <div key={data.id}>
        <ul>
        <li className="list1">
        <a href="a"><img src={data.img} alt="img2" width="300px" height="400px" /></a>
        <p className="productName1">{data.name}</p>
        <p className="price">Rs.{data.price}</p> 
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
         <h2 className="roboto"><Link to='/'  >URBAN MONKEY®</Link></h2>
         <input type="search" placeholder="SEARCH FOR PRODUCTS"/>  
          <div>
        <Link to='/login'><i className="fa-regular fa-user"></i></Link>
         <a href="wqww"><i className="fa-regular fa-heart"></i></a>
         <a href="dd"><i className="fa fa-cart-shopping"></i></a>
         </div>
       
     </div>

      <div className="header" >
         <ul>
                <li className="list"><Link to='/norestock'>NO RESTOCK</Link></li>
                         <li className="list"><Link to='/hats'>HATS & CAPS</Link></li>
                         <li className="list"><Link to='/rexs'>RE X UM</Link></li> 
                         <li className="list"><Link to='/system'>SYSTMS</Link></li>
                         <li className="list"><Link to='/mtv'>MTV X UM</Link></li>
                         <li className="list"><Link to='/eyewear'>EYEWEAR</Link></li>
                         <li className="list"><Link to='/apparel'>APPAREL</Link></li>
                         <li className="list"><Link to='/accesries'>ACCESSORIES</Link></li>
                         <li className="list"><Link to='/about'>ABOUTS US</Link></li>
         </ul>
          </div>
     <div className="header1">
        <ul>
            <li id="space">APPAREL</li>
            <li>HOME : APPAREL</li>
        </ul>
    </div>

       
     <div className="cards">
                {renderList(prodlist)}
        </div>

       
        </div>
    )
}

export default Apparel;
 

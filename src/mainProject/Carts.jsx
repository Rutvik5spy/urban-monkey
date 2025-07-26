import React from "react";
import { Link } from "react-router-dom";
import shop1 from '../photo/images1/shop11.webp'
import shop2 from '../photo/images1/shop22.webp'

export default function Carts(){
    return(
        <div>
             <div id="head" >
                 <h2 className="roboto"><Link to='/'>URBAN MONKEY®</Link></h2>
                 <input type="search" placeholder="SEARCH FOR PRODUCTS"/>  
             <div>
             <Link to='/login'><i className="fa-regular fa-user"></i></Link>
             <a href="ss"><i className="fa-regular fa-heart"></i></a>
             <a href="ss"><i className="fa fa-cart-shopping"></i></a>
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
             <li id="space"><a href="./index.html" className="home">HOME</a> : OVERSIZED</li>
             <li>No Restock</li>
             </ul>
             </div>
             <br></br>

             <div className="container">
  <div className="row">
    <div className="col" >
     
    <div className="d-inline-flex" >
     <div className="card" width= "18rem">
     <img src={shop1} className="card-img-top" alt=""/>
     <div className="card-body">
     </div>
     </div>

     <div className="card" width= "18rem">
     <img src={shop2}  className="card-img-top" alt=""/>
     <div className="card-body">
     </div>
     </div> 

     </div>

     <h4>Short Sleeve Off White Shirt // Lost Angels</h4>
     <h3>Rs.1650</h3>

    </div>

    <div className="col" >
     <p >Khel</p>
     <p >Oversized-Tshirt</p>

     <div className="BOX1">

        <h8>CHOOSE SIZE</h8><br/>
        
        <button className="but">XS</button>
        <button className="but">S</button>
        <button className="but">M</button>
        <button className="but">L</button>
        <button className="but">XL</button>
        <button className="but">2XL</button>
        <button className="but">3XL</button>
        <button className="but">4XL</button><br/>

        <button className="but1">CHOOSE SIZE</button><br/>

        <button className="but1">ADD TO WHISLIST</button>
     </div>

     <br/>

     <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        CORE FEATURES
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <ul >
            <li>fabric: 100% cotton</li>
            <li>220 gsm</li>
            <li>color: pale purple</li>
            <li>oversized fit</li>
            <li>made in India</li>
            <li>5 thread flatlock stitch detail</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        DESCRIPTION
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>Purpose is for machines as Play is for us. This tee is a nudge back to that truth.
Dipped in pale purple and acid-washed down to imperfection, it wears like a question mark — open-ended and unresolved. The oversized silhouette holds space for contradiction-philosophy rendered in childlike typography with deep thought balanced by a turntable spinning joy in the corner. On the back, the word “KHEL” stands tall  which is a reminder, in two scripts, that maybe life’s not meant to be solved, but to be played with.

country of origin - India
Urban Monkey Private Limited</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        RETURNS
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <ul>
            <h8>RETURN & EXCHANGES</h8>
            <li>Returns and Exchanges available within 7 days of receiving the item/s.</li>
            <li>ALL Returns and Exchanges are chargeable at Rs.100/-</li>
            <li>Items purchased in packs/bundles are not eligible for any returns. They are only eligible for size exchange and are chargeable at Rs.100/-</li>

        </ul>
      </div>
    </div>
  </div>
   <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        SHIPPING
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <ul>
            <h8>SHIPPING</h8><br/>
            <h9><strong>Free shipping available for orders above 500/- within India.</strong></h9>
            <li>Your order will be dispatched within 24-48 hours</li>
            <li>After dispatch, it takes about</li>
            <li>2 to 5 working days for metro cities</li>
            <li>4 to 7 working days for the rest of India.</li>
            <h8>We ship your order from Mumbai, Maharashtra.</h8>

        </ul>
      </div>
    </div>
  </div>
</div>
     </div>
     
    </div>
  </div>


        </div>
    )
}
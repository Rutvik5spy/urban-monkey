// import React from "react";
// import backimg from '../photo/images1/back2.webp'
// import backimg2 from '../photo/images1/background.webp'
// import backimg3 from '../photo/images1/backimg3.webp'
// import { Link } from "react-router-dom";
// import img1 from '../photo/images1/img2.webp'
// import img2 from '../photo/images1/img3.webp'
// import img3 from '../photo/images1/img4.webp'
// import img4 from '../photo/images1/img5.webp'

// export default function Home(){
//     return(
      

     
//      <div>
//       <div>
//       </div>
//         <div id="head" >
//         <h2 class="roboto"><Link to='/'>URBAN MONKEY®</Link></h2>
//         <input type="search" placeholder="SEARCH FOR PRODUCTS"/>  
//         <div>
//             <Link to='/login'><i class="fa-regular fa-user"></i></Link>
//             <a href="login.html"><i class="fa-regular fa-heart"></i></a>
//             <a href="login.html"><i class="fa fa-cart-shopping"></i></a>
//         </div>
//      </div>

//      <div class="header">
//         <ul>
//              <li class="list"><Link to='/norestock'>NO RESTOCK</Link></li>
//              <li class="list"><Link to='/hats'>HATS & CAPS</Link></li>
//              <li class="list"><Link to='/rexs'>RE X UM</Link></li> 
//              <li class="list"><Link to='/system'>SYSTMS</Link></li>
//              <li class="list"><Link to='/mtv'>MTV X UM</Link></li>
//              <li class="list"><Link to='/eyewear'>EYEWEAR</Link></li>
//              <li class="list"><Link to='/apparel'>APPAREL</Link></li>
//              <li class="list"><Link to='/accesries'>ACCESSORIES</Link></li>
//              <li class="list"><Link to='/about'>ABOUTS US</Link></li>
             
//         </ul>
//      </div>

//      {/* <div >
//         <Link to='/cards1'><img src={backimg} alt="nointernet" class="background-image" /></Link>
//      </div> 
//      class="d-block w-100"
     
//      */}

//      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
//   <div class="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//   </div>
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       {/* <img src="..."  alt="..." class="background-image" /> */}
//       <Link to='/cards1'><img src={backimg} alt="nointernet" class="background-image" /></Link>
//     </div>
//     <div class="carousel-item">
//       <Link to='/cards1'><img src={backimg2} alt="nointernet" class="background-image" /></Link>
//     </div>
//     <div class="carousel-item">
//      <Link to='/cards1'><img src={backimg3} alt="nointernet" class="background-image" /></Link>
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>

//      <div class="button-1">
//         <Link to='/norestock'><button>NEW ARRIVALS</button></Link> 
//         <Link to='/hats'><button>HATS & CAPS</button></Link>
//         <Link to='/rexs'><button>ROYAL ENFIELD X UM</button></Link>
//         <Link to='/mtv'><button>MTV X UM</button></Link>
//      </div>
//       <div class="cards">
        
//         {/* style="border-radius: 15px;" */}

//         <ul>
//         <li class="list1">
//         <Link to='/cart'><img src={img1} alt="img2" width="300px" />
//         <p class="productName1">Loose Fit Corduroy Trousers // Khaki</p></Link>
//         <p class="price">Rs.2500</p> </li>
         
//         <li class="list1">
//         <img src={img2} alt="img3" width="300px" height="445px" />
//         <p class="productName1">Short Sleeve Half Zipper Shirt // Black</p>
//         <p class="price">Rs.1350</p></li>
        
//         <li class="list1">
//         <img src={img3} alt="img4" width="300px" />
//         <p class="productName1">Made Like A Gun 003_Royal Enfield x Urban</p>
//         <p class="price">Rs.1500</p></li>
        
//         <li class="list1">
//         <img src={img4} alt="img5" width="300px" />
//         <p class="productName1">Hobo Shacket // Rosewood</p>
//         <p class="price">Rs.1950</p></li>
//         </ul>
         
//     </div>
//         </div>
//     )
// }
import React from "react";
import backimg from '../photo/images1/back2.webp'
import backimg2 from '../photo/images1/background.webp'
import backimg3 from '../photo/images1/backimg3.webp'
import { Link } from "react-router-dom";
import img1 from '../photo/images1/img2.webp'
import img2 from '../photo/images1/img3.webp'
import img3 from '../photo/images1/img4.webp'
import img4 from '../photo/images1/img5.webp'
import '../App.css'
export default function Home(){
    return(
      <div>
        {/* Header Section */}
        <div id="head">
          <h2 className="roboto"><Link to='/'>URBAN MONKEY®</Link></h2>
          <input type="search" placeholder="SEARCH FOR PRODUCTS"/>  
          <div>
              <Link to='/login'><i className="fa-regular fa-user"></i></Link>
              <a href="login.html"><i className="fa-regular fa-heart"></i></a>
              <a href="login.html"><i className="fa fa-cart-shopping"></i></a>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="header">
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

        {/* Carousel Section */}
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Link to='/cards1'><img src={backimg} alt="Urban Monkey Collection" className="background-image" /></Link>
            </div>
            <div className="carousel-item">
              <Link to='/cards1'><img src={backimg2} alt="Urban Monkey Collection" className="background-image" /></Link>
            </div>
            <div className="carousel-item">
             <Link to='/cards1'><img src={backimg3} alt="Urban Monkey Collection" className="background-image" /></Link>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Category Buttons */}
        <div className="button-1">
          <Link to='/norestock'><button>NEW ARRIVALS</button></Link> 
          <Link to='/hats'><button>HATS & CAPS</button></Link>
          <Link to='/rexs'><button>ROYAL ENFIELD X UM</button></Link>
          <Link to='/mtv'><button>MTV X UM</button></Link>
        </div>

        {/* Product Cards - Fixed to display in single row on desktop */}
        <div className="cards">
          <ul>
            <li className="list1">
              <Link to='/cart'>
                <img src={img1} alt="Loose Fit Corduroy Trousers" />
                <p className="productName1">Loose Fit Corduroy Trousers // Khaki</p>
              </Link>
              <p className="price">Rs.2500</p> 
            </li>

            <li className="list1">
              <img src={img2} alt="Short Sleeve Half Zipper Shirt" />
              <p className="productName1">Short Sleeve Half Zipper Shirt // Black</p>
              <p className="price">Rs.1350</p>
            </li>

            <li className="list1">
              <img src={img3} alt="Made Like A Gun Royal Enfield" />
              <p className="productName1">Made Like A Gun 003_Royal Enfield x Urban</p>
              <p className="price">Rs.1500</p>
            </li>

            <li className="list1">
              <img src={img4} alt="Hobo Shacket Rosewood" />
              <p className="productName1">Hobo Shacket // Rosewood</p>
              <p className="price">Rs.1950</p>
            </li>
          </ul>
        </div>
      </div>
    )
}
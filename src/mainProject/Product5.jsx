import React, {Component} from "react";
import JSON from '../jsons/eyewear.json';
import Eyewear from "./Eyewear";

  
class Product5 extends Component{
    constructor(){
        super();
        this.state={
            products: JSON
        }
    }
    render(){
        return(
            <div>
                <Eyewear prodlist={this.state.products}/>
            </div>
        )
    }
}

export default Product5;
import React, {Component} from "react";
import JSON from '../jsons/mtv.json';
import Mtv from "./Mtv";
  
class Product4 extends Component{
    constructor(){
        super();
        this.state={
            products: JSON
        }
    }
    render(){
        return(
            <div>
                <Mtv prodlist={this.state.products}/>
            </div>
        )
    }
}

export default Product4;
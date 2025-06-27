import React, {Component} from "react";
import JSON from './norex.json';
import Rex from "./Rex";
  
class Product extends Component{
    constructor(){
        super();
        this.state={
            products: JSON
        }
    }
    render(){
        return(
            <div>
                <Rex prodlist={this.state.products}/>
            </div>
        )
    }
}

export default Product;
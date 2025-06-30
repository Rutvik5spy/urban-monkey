import React, {Component} from "react";
import JSON from '../jsons/system.json';
import Syste from "./Syste";
  
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
                <Syste prodlist={this.state.products}/>
            </div>
        )
    }
}

export default Product;
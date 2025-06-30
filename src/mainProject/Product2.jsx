import React, {Component} from "react";
import JSON from '../jsons/hatscap.json';
import Hats from "./Hats";
  
class Product2 extends Component{
    constructor(){
        super();
        this.state={
            products: JSON
        }
    }
    render(){
        return(
            <div>
                <Hats prodlist={this.state.products}/>
            </div>
        )
    }
}

export default Product2;
import React, {Component} from "react";
import JSON from '../jsons/norestock.json';
import Norestock from "./Norestock";
  
class Product1 extends Component{
    constructor(){
        super();
        this.state={
            products: JSON
        }
    }
    render(){
        return(
            <div>
                <Norestock prodlist={this.state.products}/>
            </div>
        )
    }
}

export default Product1;
import React, {Component} from "react";
import JSON from '../jsons/Cards.json';
import Cards1 from "./Cards1";

  
class Product8 extends Component{
    constructor(){
        super();
        this.state={
            products: JSON
        }
    }
    render(){
        return(
            <div>
                <Cards1 prodlist={this.state.products}/>
            </div>
        )
    }
}

export default Product8;
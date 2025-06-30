import React, {Component} from "react";
import JSON from '../jsons/accesories.json';
import Accesories from "./Accesories";

  
class Product7 extends Component{
    constructor(){
        super();
        this.state={
            products: JSON
        }
    }
    render(){
        return(
            <div>
                <Accesories prodlist={this.state.products}/>
            </div>
        )
    }
}

export default Product7;
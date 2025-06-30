import React, {Component} from "react";
import JSON from '../jsons/apparel.json';

import Apparel from "./Apparel";

  
class Product6 extends Component{
    constructor(){
        super();
        this.state={
            products: JSON
        }
    }
    render(){
        return(
            <div>
                <Apparel prodlist={this.state.products}/>
            </div>
        )
    }
}

export default Product6;
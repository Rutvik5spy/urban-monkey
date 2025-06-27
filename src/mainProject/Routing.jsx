import React from "react";
import { Route,  BrowserRouter as Router, Routes , Link} from 'react-router-dom';
import Login from "./Login";
import Home from "./Home";
import Cards1 from "./Cards1";

export default function Routing(){
    return(
        <div>
                <Router>
        <ul>
            <li>
                <Link to='/login'>
                    login
                </Link>

                  <Link to='/'>
                    home
                </Link>

                  <Link to='/cards'>
                    cards
                </Link>
            </li>
            
        </ul>
        <Routes>
            <Route path='/login' element = {<Login/>}/>

        </Routes>
    </Router>

        </div>
    )
}
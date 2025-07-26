import React from "react";
import Home from '../mainProject/Home'
export default function Login(){

    return(
        <div className="loginBackground">

        <div id="div1">

        <form action={<Home/>}>

        <h2>Urban Monkey®</h2>
        <h3>Log in</h3>

        <p>Enter your email and we'll send you a login code</p>


        <div className="input1">
        <input   type="email" required  placeholder="Email"/>
        <br/><br/>
        </div>

        <div className="input2">
        <input type="submit" value="Continue"/>
        <br/><br/>
        </div>

        <a href="sd" >Privacy</a>
        </form>

    </div>



        </div>
    )



}
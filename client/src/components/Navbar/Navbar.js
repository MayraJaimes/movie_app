import React from "react";
import "./Navbar.css";


const Navbar = () => 
    <nav className="navbar navbar-fixed-top col-md-12">
      {/* logo should go here, needs to be chosen or created */}
      <a className="navbar-brand" href="#">Film Forecast</a>   
       <input type='text' name='cityname' id='cityname' placeholder='City Name' />   
        <form className="form-inline">
            <button className="btn btn-primary logIn" type="submit">Log In</button>
            <button className="btn btn-primary signUp" type="submit">Sign Up</button>
        </form>  
    </nav>;

export default Navbar;



import React from "react";
import {Link} from 'react-router-dom';
import "./Navbar.css";
import axios from 'axios';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    logoutUser = () => {
        axios.get('/logout')
             .then(response => {
                 window.location.replace(response.data.redirect);
             })
    }

    render() {
        if (this.props.loggedIn) {
            return <nav className="navbar navbar-fixed-top col-md-12">
                {/* logo should go here, needs to be chosen or created */}
                <Link to={"/"}>
                  <a className="navbar-brand">Film Forecast</a>
                </Link>
                <input type="text" name="cityname" ref="cityname" id="cityname" placeholder="City Name" onChange={this.props.onChange} />
                <form className="form-inline">
                    <button className="btn btn-primary signUp" type="submit" onClick={this.logoutUser}>
                      Logout
                    </button>
                </form>
              </nav>;
        }else {
        return(
    <nav className="navbar navbar-fixed-top col-md-12">
    {/* logo should go here, needs to be chosen or created */}
    <Link to={"/"}>
      <a className="navbar-brand">Film Forecast</a>
    </Link>
    <input
      type="text"
      name="cityname"
      ref="cityname"
      id="cityname"
      placeholder="City Name"
      onChange={this.props.onChange}
    />
    <form className="form-inline">
      <Link to={"/signin"}>
        <button className="btn btn-primary logIn" type="submit">
          Sign In
        </button>
      </Link>
      <Link to={"/signup"}>
        <button className="btn btn-primary signUp" type="submit">
          Sign Up
        </button>
      </Link>
    </form>
  </nav>
        );
    }
}
}


export default Navbar;
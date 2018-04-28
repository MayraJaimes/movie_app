import React from "react";
import "./Navbar.css";

const Navbar = props => <nav className="navbar navbar-fixed-top col-md-12">{props.children}</nav>;

export default Navbar;
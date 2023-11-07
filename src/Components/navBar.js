import React from "react";
import {NavLink} from "react-router-dom";
import "./navBar.css";


const NavBar = () => (
    <nav className="navbar">
        <NavLink to="/"  className={({ isActive}) => (isActive ? "active" : undefined)}>Home</NavLink>
        <NavLink to="/characters" className={({ isActive}) => (isActive ? "active" : undefined)}>Character</NavLink>
        <NavLink to="/house" className={({ isActive}) => (isActive ? "active" : undefined)}>House</NavLink>
    </nav>
)
export default NavBar;
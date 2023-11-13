import React from "react";
import {NavLink} from "react-router-dom";
import "./navBar.css";


const NavBar = () => (
    <nav className="navbar">
        <NavLink to="/"  className={({ isActive}) => (isActive ? "active" : undefined)}>Home</NavLink>
        <NavLink to="/Characters" className={({ isActive}) => (isActive ? "active" : undefined)}>Characters</NavLink>
        <NavLink to="/Houses" className={({ isActive}) => (isActive ? "active" : undefined)}>Houses</NavLink>
    </nav>
)
export default NavBar;
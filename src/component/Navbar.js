import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const logout = () =>{
    localStorage.removeItem('currentUser')
    window.location.reload()
  }
  const state = useSelector((state)=>state.cardHandle) 
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light py-3 ">
        <div className="container logo__bar">
          <NavLink className="navbar-brand  fs-1" to="/">
            <h1 className="display-8 fs-3 text-black-50 text-uppercase">fake shop</h1>
          </NavLink>
          <button
            className="navbar-toggler"  
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/" style={({isActive})=>{ 
                  return {borderBottom: isActive ? "2px solid #747272": "",width:"max-content"}}}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products" style={({isActive})=>{ 
                  return {borderBottom: isActive ? "2px solid #747272": "",width:"max-content"}}}>
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" style={({isActive})=>{ 
                  return {borderBottom: isActive ? "2px solid #747272": "",width:"max-content"}}}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" style={({isActive})=>{ 
                  return {borderBottom: isActive ? "2px solid #747272": "",width:"max-content"}}}>
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to="/login" className="btn btn-outline-dark me-3" onClick={logout}>
                <i className="fa fa-sign-in" /> Login
              </NavLink>
              <NavLink to="/card" className="btn btn-outline-dark me-3">
                <i className="fa fa-shopping-cart" /> Cart ({state.length})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

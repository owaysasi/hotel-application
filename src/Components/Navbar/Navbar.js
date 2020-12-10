import React from 'react';
import Rooms from '../../Pages/Rooms/Rooms';
import Facilities from '../../Pages/Facilities/Facilities';
import Home from '../../Pages/Home/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
import './Navbar.css';

function Navbar (){

    return(
        <div className="container-navbar">
            <div className="mini-cont-nav">
                <div className="label">
                    <p className="label-word">LUXURY</p>
                    <p className="label-sword">HOTELS</p>
                </div>
                <ul className="pages">
                    <NavLink className="navbar-item" activeClassName="is-active" to="/">
                    Home
                    </NavLink>
                    <NavLink className="navbar-item" activeClassName="is-active" to="/facilities">
                        Facilities
                    </NavLink>
                    <NavLink className="navbar-item" activeClassName="is-active" to="/rooms">
                        Rooms
                    </NavLink>
                    <NavLink className="navbar-item" activeClassName="is-active" to="/contactus">
                        Contact-us
                    </NavLink>
                </ul> 
            </div>
        </div>
    );
}

export default Navbar;
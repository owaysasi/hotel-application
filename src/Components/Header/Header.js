import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import Scroll from '../Scroll/Scroll';
import Navbar from '../Navbar/Navbar';
import './Header.css';

function Header (){

    return(
        <div className="header-container">

            <Navbar/>
            <div className="welc-h">
                <div className="mini-welc-h">
                    <h3 className="frst-welc">WELCOME TO</h3>
                    <h1 className="scnd-welc">LUXURY</h1>
                    <h3 className="thrd-welc">HOTELS</h3>
                    <p className="frth-welc">Book your stay and enjoy Luxury
                        redefined at the most affordable rates.
                    </p>
                </div>
            </div>
            <div className="btn-h">
                <Button/>
            </div>
            <div className="scroll-h">
                <Scroll/>
            </div>
            
        </div>
    );
}

export default Header;
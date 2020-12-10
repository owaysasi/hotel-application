import React from 'react';
import './Footer.css';
import {CgFacebook as Facebook} from 'react-icons/cg';
import {SiInstagram as Instagram} from 'react-icons/si';
import {FaTwitter as Twitter} from 'react-icons/fa';
function Footer (){

    return(
        <div className="main-foot-cont">
            <div className="upper-footer">
                <div className="traingle"></div>
            </div>
            <div className="container-footer">
            <div className="mini-cont-f">
                <div className="frst-f">
                    <div className="frst-up">
                        <div>LUXURY</div>
                        <div>HOTELS</div>
                    </div>
                    <div  className="frst-do">
                    497 Evergreen Rd. Roseville, CA 95673<br/>
                    +44 345 678 903<br/>
                    luxury_hotels@gmail.com
                    </div>
                </div>
                <div className="scnd-f">
                    <div className="scnd-f-item">About Us</div>
                    <div className="scnd-f-item">Contact</div>
                    <div className="scnd-f-item">Terms {"&"} Condition</div>
                </div>
                <div className="thrd-f">
                    <div className="thrd-f-item"><Facebook/>Facebook</div>
                    <div className="thrd-f-item"><Twitter/>Twitter</div>
                    <div className="thrd-f-item"><Instagram/>Instagram</div>
                </div>
                <div className="frth-f">
                    <div className="subs-frth-f">Subscribe to our newsletter</div>
                    <div className="inputbtn-con-f">
                        <input className="input-f" value="Email Address"></input>
                        <input className="button btn-f" type="button" value="OK"></input>
                    </div>
                </div>
            </div>
        </div>  
        </div>
    );
}

export default Footer;
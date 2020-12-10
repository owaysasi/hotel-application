import React from 'react';
import { FaBus } from 'react-icons/fa';
import Button from '../../Components/Button/Button';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import Pictitle from '../../Components/Pic-title/Pictitle';
import Testimonials from '../../Components/Testimonials/Testimonials';
import './Contactus.css';

function Contactus (){

    return(
        <div className="container-con">
            <div className="con-header">
                <Navbar/>
                <h1 className="title-con-header">CONTACT-US</h1>
            </div>
            <div className="title-con">
                <div className="mini-title-con">
                    <h1 className="h-mini-title">WE ARE HERE FOR YOU</h1>
                    <p className="par-mini-title">
                    At Luxury Hotels, we take our customers seriously. 
                    Do you have any enquiries, compaints or requests, 
                    please forward it to our support desk and we will 
                    get back to you as soon as possible.
                    </p>
                </div>
            </div>
            <div className="body-con">
                <div className="mini-body-con">
                    <div className="left-body-con">
                        <p>497 Evergreen Rd. Roseville,<br/> 
                        CA 95673</p>
                        <p>
                        Phone: +44 345 678 903<br/>
                        Email: luxury_hotels@gmail.com
                        </p>
                    </div>
                    <div className="right-body-con">
                        <div className="form-name">
                            <label>Name<br/></label>
                            <input className="name-input"/>
                        </div>

                        <div className="form-email">
                            <label>Email<br/></label>
                            <input className="email-input"/>
                        </div>
                        <div className="form-message">
                            <label>Message<br/></label>
                            <input className="message-input"/>
                        </div>
                        <div className="form-btn">
                            <Button/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Contactus;
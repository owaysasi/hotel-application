import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Pictitle from '../../Components/Pic-title/Pictitle';
import Testimonials from '../../Components/Testimonials/Testimonials';
import './Facilities.css';

function Facilities (){

    return(
        <div className="container-fac">
            <Header/>
            <Pictitle/>
            <Pictitle/>
            <Pictitle/>
            <Pictitle/>
            <Testimonials/>
            <Footer/>
        </div>
    );
}

export default Facilities;
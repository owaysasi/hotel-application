import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Pictitle from '../../Components/Pic-title/Pictitle';
import Testimonials from '../../Components/Testimonials/Testimonials';
import Picgold from '../../Components/Pic-gold/Picgold';
import './Rooms.css';

function Rooms (){

    return(
        <div className="container-room">
            <Header/>
            <Picgold/>
            <Picgold/>
            <Picgold/>
            <Testimonials/>
            <Footer/>
        </div>
    );
}

export default Rooms;
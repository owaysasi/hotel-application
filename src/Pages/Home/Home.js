import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Halfpic from '../../Components/Halfpic/Halfpic';
import Header from '../../Components/Header/Header';
import Testimonials from '../../Components/Testimonials/Testimonials';
import './Home.css';

function Home (){

    return(
        <div className="container-home">
            <Header/>
            <p className="par-home">
            All our room types are including 
            complementary breakfast
            </p>
            <Halfpic/>
            <Halfpic/>
            <Testimonials/>
            <Footer/>
        </div>
    );
}

export default Home;
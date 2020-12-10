import React from 'react';
import './Testimonials.css';
import {AiFillRightSquare as Right} from 'react-icons/ai';
import {AiFillLeftSquare as Left} from 'react-icons/ai';

function Testimonials (){

    return(
        <div className="test-container">
            <div className="mini-cont-test">
                <div className="frst-test-row">Testimonials</div>
                <div className="scnd-test-row">"Calm, Serene, Retro – What a way to relax and enjoy"</div>
                <div className="thrd-test-row"> Mr. and Mrs. Baxter, UK</div>
                <div className="frth-test-row">
                    <div className="frth-icons"><Left/></div>
                    <div className="frth-icons"><Right/></div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
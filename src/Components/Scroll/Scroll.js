import React from 'react';
import './Scroll.css';
import {FaChevronCircleDown as Down} from 'react-icons/fa';

function Scroll (){

    return(
        <div className="container-scroll">
            <div>Scroll</div>
            <div className="scroll-icon"><Down/></div>
        </div>
    );
}

export default Scroll;
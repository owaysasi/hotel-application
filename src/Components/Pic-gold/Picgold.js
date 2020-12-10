import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {BsFillPlusCircleFill as Plus} from 'react-icons/bs';
import Button from '../Button/Button';
import './Picgold.css';

function Picgold (){
    const [photos, setPhotos] = useState([]);
    const [userId, setUserId] = useState(["sKzR6_2MWrV88X29K5mswN7s_HraPdIf3IK6yXR_iGY"]);

    //REACT_APP_UNSPLASH_KEY

    useEffect(() => {
        axios.get(`https://api.unsplash.com/photos/hG3H6N6VwCY/?client_id=sKzR6_2MWrV88X29K5mswN7s_HraPdIf3IK6yXR_iGY`,{
            headers: {
                Authorization: `client-id ${process.env.REACT_APP_UNSPLASH_KEY}`,
            },
        })
        .then(res => {
            setPhotos(res.data.urls.regular);
            console.log(res.data.urls.regular);
        })
        .catch(err => {
            console.log(err)
        })   
    },[]);

    return(
        <div className="container-picg">
            <div className="mini-cont-picg">
                <img src={photos} className="img-picg"/>
                <div className="decl-picg">SINGLE ROOM</div>
                <div className="buy-picg">
                    <div className="lft-part">
                        <div className="buy-icon"><Plus/></div>
                        <div className="buy-view">VIEW ROOM DETAILS</div> 
                    </div>
                    <div className="btn-rgth-part"><Button/></div>
                </div>
            </div>
        </div>
    );
}

export default Picgold ;
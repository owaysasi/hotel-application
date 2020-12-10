import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Button from '../Button/Button';
import './Halfpic.css';

function Halfpic (){
    const [photos, setPhotos] = useState([]);
    const [userId, setUserId] = useState(["sKzR6_2MWrV88X29K5mswN7s_HraPdIf3IK6yXR_iGY"]);

    //REACT_APP_UNSPLASH_KEY

    useEffect(() => {
        axios.get(`https://api.unsplash.com/photos/gREquCUXQLI/?client_id=sKzR6_2MWrV88X29K5mswN7s_HraPdIf3IK6yXR_iGY`,{
            headers: {
                Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`,
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
        <div className="container-half">
            <div className="mini-cont-half">
                <div className="decl-half">
                    <div className="borderbox">
                        <h1 className="title-half">Welcome</h1>
                        <p>Our rooms are designed to transport 
                        you into an environment made for leisure. 
                        Take your mind off the day-to-day of home 
                        life and find a private paradise for yourself.</p>
                        <Button/>
                    </div>
                </div>
                {/**<div className="img-half"></div> */}
                <img className="img-half" src={photos}/>
            </div>
        </div>
    );
}

export default Halfpic ;
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './Pictitle.css';

function Pictitle (){
    const [photos, setPhotos] = useState([]);
    const [userId, setUserId] = useState(["sKzR6_2MWrV88X29K5mswN7s_HraPdIf3IK6yXR_iGY"]);

    //REACT_APP_UNSPLASH_KEY

    useEffect(() => {
        axios.get(`https://api.unsplash.com/photos/xP0gM0Dh-MY/?client_id=sKzR6_2MWrV88X29K5mswN7s_HraPdIf3IK6yXR_iGY`,{
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

    {/**
    
    function ShowPhoto(){
        return photos.map((img,index) => (
            <img
                photo={img.urls.regular}
                index={index}
                key={index}
            />
        ));
    }
    */}

    return(
        <div className="container-pict">
            <div className="mini-cont-pict">
                <div className="float-text">THE GYM</div>
                <img src={photos}/>
            </div>
        </div>
    );
}

export default Pictitle ;
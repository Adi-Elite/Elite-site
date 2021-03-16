import React from 'react';
import './Home.css';
import video from '../Assets/video.mp4';


export const Home = () => {
    return (
        <div className="">
            <video autoPlay loop  muted style={{
                position:"absolute",
                width:"100%",
                top:"50%",
                left:"50%",
                height:"100%",
                objectFit:"cover",
                transform:"translate(-50%,-50%)",
                zIndex:"-1"


            }} >
                <source src={video} type='video/mp4'/>
            </video>
            <div className="content">
                Transforming Technologies one step at a time.
            </div>
        </div>
    )
}

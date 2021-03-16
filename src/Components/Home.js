
import React,{useState,useEffect} from 'react';
import './Home.css';
import axios from 'axios';
import video from '../Assets/video.mp4';


export const Home = () => {
    
    const quoteAPI = async ()=>{
        try{
            const response = await axios.get("https://api.quotable.io/random");
            setData(response.data.content);
            setAuthor(response.data.author);
        }
        catch(error){
            console.log(error);
        }
    };

    const [data,setData] = useState("");
    const [author,setAuthor] = useState("");

    useEffect(() => {
        quoteAPI();
    }, [])

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
            <div style={{color:"white",fontSize:"2rem", }}>
                Quote of the day:
                "{data}"
                -{author}
            </div>
        </div>
    )
}

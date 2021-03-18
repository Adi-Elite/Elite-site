import React from 'react';
import './Footer.css';

export const Footer = () => {
    return (
            <div className="foot-main ">
                <div className="align">
                    <div style={{padding:"1rem"}}>
                        <div style={{color:"white"}}>
                            <i class="far fa-address-book" style={{color:"white", marginRight:"5px"}}>
                            </i>
                            Address: 
                        </div>
                        <ul className="align" style={{flexDirection:"column",color:"white"}}>
                            <li>                        
                                48, Whispering Palms Shopping Center, 
                                <div>
                                Lokhandwala Township, Akurli Road, 
                                </div>
                                Kandivali (E) Mumbai - 400 101.
                            </li>
                            <li>
                            +91 9004022267
                            </li>
                            <li>
                            info@elitemantra.com
                            </li>
                            <li>
                            elitemantra.com, elitemantra.in
                            </li>
                        </ul>
                    </div>
                    <ul  style={{color:"white",flexDirection:"column",listStyle:"none"}} >
                        Connect with us:
                        <li >
                            <i className="fab fa-linkedin-in" style={{marginBottom:"2.5rem",paddingRight:"2rem"}}></i>
                            <i class="fab fa-facebook-f" style={{paddingRight:"2rem"}}></i>
                            <i class="fab fa-instagram" style={{paddingRight:"2rem"}}></i>
                            <i class="fab fa-twitter"style={{paddingRight:"1.5rem"}} ></i>
                        </li>
                    </ul>
                </div>
            </div>
    )
}



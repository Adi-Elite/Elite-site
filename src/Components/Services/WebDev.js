import React from 'react';
import './WebDev.css';
import JS from '../../Assets/jslogo.png';
import A from '../../Assets/angularlogo.png';
import ES from '../../Assets/eslogo.png';
import R from '../../Assets/reactlogo.png';
import WP from '../../Assets/wordpresslogo.png';

export const WebDev = () => {
    return (
        <div>
            <h1>
                Web Design & Development
            </h1>
            <p>
                Our Responsive Design and Developments are Resonable, 
                Fast and Search Engine Friendly. 
                Always updated to the latest upgrades.
            </p>
            <div className='content'>
                <div  style={{color:"black",fontSize:"1.5rem"}}>
                <h2 style={{textAlign:"left"}}> JavaScript</h2> 
                    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",boxSizing:"border-box",width:"60rem",padding:"2rem"}}>
                        <img src={JS} height="100rem" style={{padding:"rem"}}/>
                        <p style={{padding:"1rem"}}> JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming 
                    language with first-class functions. While it is most well-known as the scripting language 
                    for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. 
                    </p>       
                    </div>
                        <h2 style={{textAlign:"left"}}> React </h2>   
                    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",boxSizing:"border-box",width:"60rem",padding:"2rem"}}>
                        <img src={R} height="100rem" style={{padding:"rem"}}/>     
                        <p style={{padding:"1rem"}}>
                        React is a declarative, efficient, and flexible JavaScript library for building user interfaces. 
                        It lets you compose complex UIs from small and isolated pieces of code called “components”.
                        </p>
                    </div>
                    <h2 style={{textAlign:"left"}}>Angular</h2>
                    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",boxSizing:"border-box",width:"60rem",padding:"2rem"}}>
                        <img src={A} height="100rem" style={{padding:"rem"}}/>
                        <p style={{padding:"1rem"}}>
                          Angular is a platform and framework for building single-page client applications using HTML and TypeScript. 
                        Angular is written in TypeScript. It implements core 
                        and optional functionality as a set of TypeScript libraries that you import into your apps.
                        </p>
                    </div>
                    <h2 style={{textAlign:"left"}}>EcmaScript</h2>
                    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",boxSizing:"border-box",width:"60rem",padding:"2rem"}}>
                        <img src={ES} height="100rem" style={{padding:"rem"}}/>
                        <p style={{padding:"1rem"}}>
                            ES6 or ECMAScript 2015 is the 6th version of the ECMAScript programming language. 
                            ECMAScript is the standardization of Javascript which was released in 2015, 4
                            and subsequently renamed as ECMAScript 2015.
                        </p>
                    </div>
                    <h2 style={{textAlign:"left"}}>WordPress</h2>
                    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",boxSizing:"border-box",width:"60rem",padding:"2rem"}}>
                        <img src={WP} height="100rem" style={{padding:"rem"}}/>
                        <p style={{padding:"1rem"}}>
                         WordPress provides the most amazing way of creating websites and blogs.            
                            So, it can be said that this popular content management system is famous for developing
                         blogging sites and websites.
                        </p>
                </div>
            </div>
        
        </div>
        </div>
    )
}

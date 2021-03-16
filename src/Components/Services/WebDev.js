import React from 'react';
import './WebDev.css';
import { Dropdown } from 'react-bootstrap';
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
            <div >
            <div className='content'>
                  <div style={{ color: "black", fontSize: "1.5rem" }}>
                    <p style={{ color: "black", padding: "2rem" }}>Technologies we use</p>
                    <img src={JS} height="100rem" style={{ padding: "rem" }} />
                    <Dropdown style={{ padding: "2rem" }}>
                        <Dropdown.Toggle variant="" id="dropdown-basic">
                            JavaScript
                            </Dropdown.Toggle>
                        <Dropdown.Menu style={{ padding: "2rem" }}>
                            JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming
                            language with first-class functions. While it is most well-known as the scripting language
                            for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.
                            </Dropdown.Menu>
                    </Dropdown>

                    <img src={R} height="100rem" style={{ padding: "rem" }} />
                    <Dropdown style={{ padding: "2rem" }}>
                        <Dropdown.Toggle variant="" id="dropdown-basic">
                            React
                            </Dropdown.Toggle>
                        <Dropdown.Menu style={{ padding: "2rem" }}>
                            React is a declarative, efficient, and flexible JavaScript library for building user interfaces.
                            It lets you compose complex UIs from small and isolated pieces of code called “components”.
                            </Dropdown.Menu>
                    </Dropdown>

                    <img src={A} height="100rem" style={{ padding: "rem" }} />
                    <Dropdown style={{ padding: "2rem" }}>
                        <Dropdown.Toggle variant="" id="dropdown-basic">
                            Angular
                            </Dropdown.Toggle>
                        <Dropdown.Menu style={{ padding: "2rem" }}>
                            Angular is a platform and framework for building single-page client applications using HTML and TypeScript.
                            Angular is written in TypeScript. It implements core
                            and optional functionality as a set of TypeScript libraries that you import into your apps.
                            </Dropdown.Menu>
                    </Dropdown>

                    <img src={ES} height="100rem" style={{ padding: "1rem" }} />
                    <Dropdown style={{ padding: "2rem" }}>
                        <Dropdown.Toggle variant="" id="dropdown-basic">
                            ECMA SCRIPT
                            </Dropdown.Toggle>
                        <Dropdown.Menu style={{ padding: "2rem" }}>
                            ES6 or ECMAScript 2015 is the 6th version of the ECMAScript programming language.
                            ECMAScript is the standardization of Javascript which was released in 2015, 4
                            and subsequently renamed as ECMAScript 2015.
                            </Dropdown.Menu>
                    </Dropdown>


                    <img src={WP} height="100rem" style={{ padding: "rem" }} />
                    <Dropdown style={{ padding: "2rem" }}>
                        <Dropdown.Toggle variant="" id="dropdown-basic">
                            WordPress
                            </Dropdown.Toggle>
                        <Dropdown.Menu style={{ padding: "2rem" }}>
                            WordPress provides the most amazing way of creating websites and blogs.
                            So, it can be said that this popular content management system is famous for developing
                            blogging sites and websites.
                            </Dropdown.Menu>
                    </Dropdown>
                </div>
                    <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",flexDirection:"column",color:"black"}}>
                        Client Base
                        <p>
                        1.
                         </p>
                         <p>
                        2.
                         </p>
                         <p>
                        3.
                         </p>
                         <p>
                        4.
                         </p>
                         <p>
                        5.
                         </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

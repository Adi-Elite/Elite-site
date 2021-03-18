import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../Assets/logo.png";
import'./Navbar.css';
import { Navbar,NavDropdown,Nav } from 'react-bootstrap';

export const NavBar = () => {
    return (
        <div>
            <Navbar bg="secondary" expand="lg" >
                <Navbar.Brand href="/" >
                <img src={logo} height="60rem"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" style={{padding:"2rem",fontSize:"1.5rem"}} >
                        <Nav.Link href="/" >Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <NavDropdown title="Services" id="basic-nav-dropdown" bg="secondary">
                            <NavDropdown.Item href="/services/mobdev" style={{fontSize:"1.5rem"}} >Mobile App Dev</NavDropdown.Item>
                            <NavDropdown.Item href="/services/webdev" style={{fontSize:"1.5rem"}}>Web Application</NavDropdown.Item>
                                <NavDropdown title="Digital Marketing"  type="text/css" drop="left" id="basic-nav-dropdown" style={{fontSize:"1.5rem"}}>
                                    <NavDropdown.Item href="/services/digital/seo" style={{fontSize:"1.5rem"}}>
                                        Seo Optimization
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/services/digital/ali" style={{fontSize:"1.5rem"}}>
                                        Alibaba Mini-site
                                    </NavDropdown.Item>                                    
                                </NavDropdown>
                            <NavDropdown.Divider />
                        </NavDropdown>
                        <Nav.Link href="/contact"> Contact us</Nav.Link>
                    </Nav>
                   </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

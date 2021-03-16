import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../Assets/logo.png";
import'./Navbar.css';
import { Navbar,NavDropdown,Nav } from 'react-bootstrap';

export const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg"  >
                <Navbar.Brand href="/" >
                <img src={logo} height="60rem"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" style={{padding:"2rem"}}>
                        <Nav.Link href="/" >Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <NavDropdown title="Services" id="basic-nav-dropdown" >
                            <NavDropdown.Item href="/services/mobdev">Mobile App Dev</NavDropdown.Item>
                            <NavDropdown.Item href="/services/webdev">Web Application</NavDropdown.Item>
                            <NavDropdown.Item href="/services/opt">Seo Optimization</NavDropdown.Item>
                            <NavDropdown.Item href="/services/ali">Ali baba</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                        <Nav.Link href="/contact"> Contact us</Nav.Link>
                    </Nav>
                   </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

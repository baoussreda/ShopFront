import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap';

export const Header = () => {
    return (
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Shopping Portal</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav> <Link to="/">Home</Link></Nav>
                        
                    </Nav>
                    <Nav className="justify-content-end">
                        <Nav.Link href="#link"><Link to="/login">Login</Link></Nav.Link>
                        {/* <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text> */}
                    </Nav>

                    
                </Navbar.Collapse>
            </Container>
            </Navbar>
    )
}
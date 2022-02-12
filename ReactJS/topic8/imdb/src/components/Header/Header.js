import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {

    render() {
        return (
            <Navbar bg="dark" variant="dark" className='mb-5'>
                <Container>
                    <Navbar.Brand href="#home">OMDB</Navbar.Brand>
                    <Nav className="me-auto">
                            <NavLink exact to="/" className="link" activeClassName="active">
                                Home
                            </NavLink>
                            <NavLink exact to="/about" className="link" activeClassName="active">
                                About
                            </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}

export default Header
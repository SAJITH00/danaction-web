import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, UNSAFE_withHydrateFallbackProps } from 'react-router-dom'; 

function Header() {
  return (
    <div>
      <Navbar expand="lg" style={{backgroundColor:" bisque"}}>
        <Container>
          <Navbar.Brand className='fw-bold' as={Link} to="/">Donation Box</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className='fw-medium' as={Link} to="/">Home</Nav.Link>
              <Nav.Link className='fw-medium'as={Link} to="/base">Details</Nav.Link>
              <Nav.Link className='fw-medium' as={Link} to="/chart">Chart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
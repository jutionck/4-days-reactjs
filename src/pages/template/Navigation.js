import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {

  const navStyle = {
    color: 'white',
    textDecoration: 'none'
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-top">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={navStyle}>Book-Shop</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/books" style={navStyle}>Book</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/members" style={navStyle}>Member</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation

import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Navigation = () => {

  const navStyle = {
    color: '#8c8f91',
    textDecoration: 'none'
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-top">
      <Container>
        <Navbar.Brand>Book-Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" style={navStyle}>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/books" style={navStyle}>Books</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/members" style={navStyle}>Members</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Navigation;
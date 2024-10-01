import React from 'react'
import {Nav,Navbar,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
 
const Header = () => {
  return (
    <header>
        <Navbar bg="blue" variant='blue' expand="lg" collapseOnSelect>
  <Container>
  <LinkContainer to={"/home"}><Navbar.Brand>ProShop</Navbar.Brand></LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
      <LinkContainer to={"/cart"}><Nav.Link><i className='fas fa-shopping-cart'></i> Cart</Nav.Link></LinkContainer>
      <LinkContainer to={"/login"}><Nav.Link><i className='fas fa-user'></i> Sign In</Nav.Link></LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </header>
  )
}

export default Header
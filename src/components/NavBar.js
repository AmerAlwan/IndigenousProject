import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Container, Navbar, Nav} from 'react-bootstrap';

class NavBar extends Component {

  render() {
    return (
    <>
        <Navbar expand="lg" bg='dark' variant='dark' collapseOnSelect style={{marginBottom: "20px", padding: "15px 10px"}}>
        <Navbar.Brand as={Link} to='/'><img style={{width: "5rem", height: "auto", margin: "-20px 0"}} src="https://www.kinbridge.ca/wp-content/uploads/2021/05/Lets-Be-Neighbours-Logo-Official-Colour.png"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic_navbar_nav" />
          <Navbar.Collapse id="basic_navbar_nav">
            <Nav className="mr-auto" style={{ maxHeight: '100px' }}>
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
              <Nav.Link as={Link} to='/donate'>Donate</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </>
  )
  }

}

export default NavBar;

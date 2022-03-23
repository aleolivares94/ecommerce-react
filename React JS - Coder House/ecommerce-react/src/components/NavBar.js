import React, { Component } from 'react';
import{Container,Navbar,Nav,NavDropdown} from 'react-bootstrap'

export default class NavBar extends Component {
  render() {
    return (
      <div> 
          <Navbar bg="dark" variant ={"dark"} expand="lg">
  <Container>
    <Navbar.Brand href="#home">Ecommerce-React</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#inicio">Inicio</Nav.Link>
        <Nav.Link href="#carrito">Carrito</Nav.Link>
        <Nav.Link href="#contacto">Contacto</Nav.Link>
        <NavDropdown title="Marcas" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
     </div>
    );
  }
}

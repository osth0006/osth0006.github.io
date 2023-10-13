import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Github } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import background from "./image.jpg";

const backgroundImage={
  backgroundImage: `url(${background})`,
  height:'100vh',
  marginTop:'-55px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};


function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className="text-muted">Peter Osthus</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://www.linkedin.com/in/peter-o-686978156/" target="_blank"><Linkedin /></Nav.Link>
            <Nav.Link href="https://github.com/osth0006" target="_blank"><Github /></Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function Copyright() {
  return (
    <div>
      <div className="copyright_text">
        <ul>
          <p>© 2023 Peter Osthus</p>
        </ul>
      </div>
    </div>
  );
}

function MainPage() {
  return (
    <div>
      <NavBar />
      {/* <Copyright /> */}
      <div style={backgroundImage}></div>
    </div>
  );
}

function App() {
  return (
    <MainPage />
  );
}

export default App;

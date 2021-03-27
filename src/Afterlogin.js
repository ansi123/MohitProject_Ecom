import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";

function Afterlogin() {
  return (
    <div>
      {/* <nav class="navbar navbar-light bg-light">
        <form class="form-inline">
          <Link to="/">
            <button class="btn btn-success" type="button">
              Home
            </button>
          </Link>
          &nbsp; &nbsp;
          <Link to="/b">
            <button class="btn btn-success" type="button">
              Show Products
            </button>
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </form>
        {/* <div>
          <button type="button" class="btn btn-light auto-ml">
            Light Mode
          </button>
          &nbsp;
          <button type="button" class="btn btn-dark">
            Dark Mode
          </button>
        </div> */}

       <div> 
        <Navbar className="nav_color" variant="light">
          <Navbar.Brand href="#home">
            <img
              src="https://cdn.vox-cdn.com/thumbor/N89EdFHhgIKXJ5ARkZVKeDFV7Wc=/0x0:1024x512/1200x800/filters:focal(431x175:593x337)/cdn.vox-cdn.com/uploads/chorus_image/image/66439957/aDzH7sHpSJ9ivMQhPMiwT5_1024_80.0.jpg"
              height="50px"
              width="100px"
            ></img>
          </Navbar.Brand>
          <Nav className="mr-auto"></Nav>
          <Form inline>
            {/* <Dropdown as={ButtonGroup}>
              <Button variant="success">Blogs</Button>

              <Dropdown.Toggle
                split
                variant="success"
                id="dropdown-split-basic"
              />

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
            <Nav.Link href="#home">
              <Link to="/">
                <button class="btn btn-success" type="button">
                  Home
                </button>
              </Link>
            </Nav.Link>

            <Nav.Link href="#pricing">
              <Link to="/b">
                <button class="btn btn-success" type="button">
                  Show Products
                </button>
              </Link>
            </Nav.Link>
            <Nav.Link href="#features">
            {/* <Link to="/c">
                <button class="btn btn-success" type="button">
                  Sign Up
                </button>
              </Link>
            </Nav.Link>
            <Nav.Link href="#features"> */}
            
            <Link to="/">
                <button class="btn btn-secondary" type="button">
                  Welcome back Mohit
                </button>
              </Link>
            </Nav.Link>
            {/* <Nav.Link href="#features">
            <Link to="/d">
                <button class="btn btn-success" type="button">
                  Log in
                </button>
              </Link>
            </Nav.Link> */}
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
    </div>
    </div>
  );
}

export default Afterlogin;

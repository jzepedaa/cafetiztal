import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    text-align: center;
    border-bottom: 5px solid #222;
    /* color: black; */
    /* background-color: #222;
    width: 100%; */
    /* border: 2px solid black; */
    
  }

  a, .navbar-brand, .navbar-nav .nav-link {
    color: #222;

    &:hover {
      
      color: #222;
    }
  }
  /* .navbar-toggler {
    padding: .25rem .75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: wheat;
    border: 1px solid transparent;
    border-radius: .25rem; */
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/menu">Breakfest Menu</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/lunch">Lunch Menu</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/juices">Juice Bar - Oatmeal Shakes</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/about">Our Story</Link>
            </Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link>
              <Link to="/contact">Contact</Link>
            </Nav.Link>
          </Nav.Item> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)

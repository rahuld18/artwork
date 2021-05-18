import React, { Component } from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img src={require("../images/logo.jpg")} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Form className="col-md-5 p-0 mt-3 mb-3 searchbox">
            <i className="bx bx-search"></i>
                <FormControl
                  type="search"
                  placeholder="Search by Creator, collectible or collection
"
                  className="mr-2 form-search"
                  aria-label="Search"
                />
              </Form>
              <Nav className="ml-auto menutop mr-3">
                <NavLink to="/">Explore </NavLink>
                <NavLink to="/bids">Bids </NavLink>
                <NavLink to="/my-collection">My Collection </NavLink>
              </Nav>
              <NavLink to="/connect-wallet" className="wallet btn btn-dark">
                Connect Wallet
              </NavLink>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

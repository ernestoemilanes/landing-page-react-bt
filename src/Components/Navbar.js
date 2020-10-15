import React, { Component } from 'react';
import { Navbar, NavDropdown, Button, Nav, FormControl, Form } from 'react-bootstrap';

class MyNavbar extends Component {
  render() {
    return (
        <div>
                <div className="navbar navbar-expand-md navbar-dark bg-dark">
              <div className="container">
                  <a href="#" className="navbar-brand">React Bootstrap</a>
                  <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="col-auto">
                      <div className="collapse navbar-collapse" id="navbarMenu">
                          <ul className="navbar-nav">
                              <li className="nav-item">
                                  <a href="#" className="nav-link">Home</a>
                              </li>
                              <li className="nav-item">
                                  <a href="#" className="nav-link">About</a>
                              </li>
                              <li className="nav-item">
                                  <a href="#" className="nav-link">Services</a>
                              </li>
                              <li className="nav-item">
                                  <a href="#" className="nav-link">Contact</a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    );
  }
}

export default MyNavbar;

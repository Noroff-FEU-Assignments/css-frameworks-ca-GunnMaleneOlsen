import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.scss";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faVimeoV } from "@fortawesome/free-brands-svg-icons";
import Home from "./components/home/Home";
import News from "./components/news/News";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">The YAY company</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/news" className="nav-link">
                News
              </NavLink>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Go</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>

      <footer>
        <div className="footer__socialLinks">
          <FontAwesomeIcon icon={faVimeoV} />
          <FontAwesomeIcon icon={faYoutube} />
        </div>
        <span className="footer__info">hello@yay.com</span>
        <span className="footer__info">Copyright 2020</span>
      </footer>
    </Router>
  );
}

export default App;

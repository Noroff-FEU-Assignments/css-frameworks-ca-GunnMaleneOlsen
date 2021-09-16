import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
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
        <Navbar expand="lg">
          <Navbar.Brand href="/" className="navbar__brand">
            The YAY company
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav>
              <NavLink exact to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/news" className="nav-link">
                News
              </NavLink>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </Nav>
            <Form className="d-flex navbar__search">
              <FormControl type="search" placeholder="Search" className="mr-2 navbar__search--input" aria-label="Search" />
              <Button className="navbar__search--btn" variant="success" type="submit">
                Go
              </Button>
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

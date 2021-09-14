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
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Home from "./components/home/Home";
import News from "./components/news/News";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">The YAY company</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/news" className="nav-link">
                About
              </NavLink>
              <NavLink to="/contact" className="nav-link">
                Dashboard
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
          <Route path="/conatct">
            <Contact />
          </Route>
        </Switch>
        <footer>
          <FontAwesomeIcon icon={faCoffee} />
        </footer>

      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Homepage from "./Homepage";
import SubmitPage from "./SubmitPage";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function App() {
  return (
    <Router>
      <div className="App">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">
              <img
                alt=""
                src="../public/logo192.png"
                width="10"
                height="10"
                className="d-inline-block align-top"
              />{' '}
              The Toilet Paper App
            </Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="/submit">Submit</Nav.Link>
            </Nav>
          </Navbar>
        <Switch>
          <Route path="/submit">
            <SubmitPage />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

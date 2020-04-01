import React from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Homepage from "./Homepage";
import SubmitPage from "./SubmitPage";
import AboutPage from "./AboutPage";
import { ScrollToTop } from "./utils";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import ReactGA from "react-ga";
import logo from "./Logo.svg";

const history = createBrowserHistory();
if (process.env.NODE_ENV !== "development") {
  ReactGA.initialize("UA-162047555-1");
  ReactGA.pageview(window.location.pathname);
  history.listen(location => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  });
}

function AppNavbar() {
  return (
    <Navbar bg="light" variant="light" fixed="top">
      <Navbar.Brand className="navbar-brand">
        <Link to="/">
          <img
            alt="Covid Maps"
            src={logo}
            height="24"
            className="d-inline-block align-top"
          />{" "}
        </Link>
      </Navbar.Brand>
      <Nav className="ml-auto text-muted">
        {/* <div>Find nearby stores</div> */}
      </Nav>
    </Navbar>
  );
}

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <ScrollToTop />
        <AppNavbar />
        <div className="page">
          <Switch>
            <Route path="/update" component={SubmitPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/" component={Homepage} />
          </Switch>
        </div>
        <footer className="m-0 p-0">
          <div className="container py-4 text-center text-uppercase">
            <Link to="/">Home</Link> ·{" "}
            <Link to="/update">Submit an update</Link> ·{" "}
            <Link to="/about">About</Link>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

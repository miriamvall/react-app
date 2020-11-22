import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import CreateActivity from "./components/create-activity.component"
import EditActivity from "./components/edit-activity.component"
import ActivityList from "./components/activity-list.component"
import HomePage from "./components/home-page.component"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/"} className="nav-link">
                MERN App
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-activity"} className="nav-link">
                  Create Activity
                </Link>
              </Nav>

              <Nav>
                <Link to={"/activity-list"} className="nav-link">
                  Activity List
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path="/create-activity" component={CreateActivity} />
                <Route path="/edit-activity/:id" component={EditActivity} />
                <Route path="/activity-list" component={ActivityList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;
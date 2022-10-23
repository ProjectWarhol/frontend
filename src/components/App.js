import React, {useState} from "react";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
import {Navbar, Container, Nav, Button} from "react-bootstrap"
import {LinkContainer} from "react-router-bootstrap"
import AllPosts from "./AllPosts.js";
import AlertDismissible from "./AlertDismissible";
import CreatePost from "./CreatePost.js";
import Login from "./Login.js";
import Profile from "./Profile.js";
import Search from "./Search.js";
import Signup from "./Signup.js";
import '../css/App.css';


export default function App() {
  const {alert, setAlert} = useState(null)

  return (
    <div className="fill-parent">
      <BrowserRouter>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand>Stag</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className= "me-auto">
              <LinkContainer to="/">
                <Nav.Link>Feed</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/search">
                <Nav.Link>Search</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/mint">
                <Nav.Link>Post</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav>
              <Navbar.Text>
                <Link to="/signup">Not Signed In</Link>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {alert? <AlertDismissible {...alert} deleteAlert={() => setAlert(null)}/> 
      : null}
        <Routes>
          <Route element={<AllPosts/>} path="/" exact/>
          <Route element={<AlertDismissible/>} path="/alert"/>
          <Route element={<CreatePost/>} path="/mint" />
          <Route element={<Login/>} path="/users/login"/>
          <Route element={<Profile/>} path="/users/:userName"/>
          <Route element={<Search/>} path="/search"/>
          <Route element={<Signup setAlert={setAlert}/>} path="/signup"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

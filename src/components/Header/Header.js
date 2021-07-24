import React, { useContext } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown ,} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { UserContext } from '../../App';
import './Header.css';

const Header = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    console.log(loggedInUser.isSignIn);
    return (
        <div className="container">
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand as={Link} to="/">Online Library</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link as={Link} to="/Home">Home</Nav.Link>
                                    <Nav.Link  as={Link} to="/checkOut">CheckOut</Nav.Link>
                                    <Nav.Link  as={Link} to="/addProduct">Add Product</Nav.Link>
                                    
                                    <Nav.Link as={Link} to="/mannageBooks">Mannage Books</Nav.Link>
                                    
                                    {
                        
                        loggedInUser.P || loggedInUser.isSignIn ?   
                        <Nav.Link as={Link} to="/admin" >{loggedInUser.email}</Nav.Link>
                        :   <h1></h1>
                    }
                    {
                        
                        loggedInUser.P || loggedInUser.isSignIn ?   
                        <button className="btn btn-primary"onClick={()=>setLoggedInUser({})}>Sign Out</button> 
                        :   <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    }

                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>


            </div>
            


            
        
    );
};

export default Header;
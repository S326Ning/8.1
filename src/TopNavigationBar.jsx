import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

function TopNavigationBar(){
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand id="topNav" href="#home">IService</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#">Post a task</Nav.Link>
                    <Nav.Link href="#">Become an expert</Nav.Link>
                    <Nav.Link href="#">Find tasks</Nav.Link>
                    <Nav.Link href="#">How it works</Nav.Link>
                    <Nav.Link className="btn btn-primary sign-in" href="#">Sign in</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default TopNavigationBar
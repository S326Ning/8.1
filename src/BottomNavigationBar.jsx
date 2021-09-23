import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

function BottomNavigationBar(){
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="bottom">
            <Container>
                <Nav className="me-auto newsletter">
                    <Navbar.Brand href="#">NEWSLETTER SIGN</Navbar.Brand>
                    <Form.Control className="email-input" size="sm" type="text" placeholder="Enter your email" />
                    <Button variant="secondary" type="button">
                        Subscribe
                    </Button>   
                </Nav>             
                <Nav className="me-auto connect-us">
                    <Navbar.Brand href="#">CONNECT US</Navbar.Brand>
                    <Nav className="connect-icons">
                        <FontAwesomeIcon size="lg" color="white" icon={faFacebookSquare}/>
                        <FontAwesomeIcon size="lg" color="white" icon={faTwitterSquare}/>
                        <FontAwesomeIcon size="lg" color="white" icon={faInstagramSquare}/>
                    </Nav>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default BottomNavigationBar
import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
export const Navbar = () => {
    return (
        <BootstrapNavbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <BootstrapNavbar.Brand href="#">Shree Hemkunt Tyres</BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                    <Button variant="contained" color="primary" href="#contact">
                        Book Appointment
                    </Button>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    )
}

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';

export const Navbar = () => {
    return (
        <BootstrapNavbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <BootstrapNavbar.Brand href="#">Shree Hemkunt Tyres</BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <ScrollLink
                            to="Banner"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="nav-link"
                        >
                            Home
                        </ScrollLink>
                        <ScrollLink
                            to="Services"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="nav-link"
                        >
                            Services
                        </ScrollLink>
                        <ScrollLink
                            to="Footer"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="nav-link"
                        >
                            Contact
                        </ScrollLink>
                    </Nav>
                    <Button variant="contained" color="primary" href="#contact">
                        Book Appointment
                    </Button>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
};

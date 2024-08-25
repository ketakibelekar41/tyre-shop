import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-3">
            <Container>
                <Row>
                    <Col md={6}>
                        <p>© 2024 Shree Hemkunt Tyres. All rights reserved.</p>
                    </Col>
                    <Col md={6} className="text-md-right">
                        <p>Contact Us: +91 1234567890</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;

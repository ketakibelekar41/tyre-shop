import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Services = () => {
    return (
        <div className="services-section" id='Services'>
            <Container>
                <h2 className="text-center mb-4">Services offered by this Dealer</h2>
                <Row className="text-center">
                    <Col md={6}>
                        <img src="wheel-alignment-.jpg" alt="Wheel Balancing" />
                        <h4>Wheel Balancing</h4>
                        <Button variant="danger">Book Now</Button>
                    </Col>
                    <Col md={6}>
                        <img src="wheel-alignment.jpg" alt="Wheel Alignment" />
                        <h4>Wheel Alignment</h4>
                        <Button variant="danger">Book Now</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Services;

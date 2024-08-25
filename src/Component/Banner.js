import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import bannerImage from '../Component/Banner.jpg'; // Add a banner image in your assets folder

const Banner = () => {
    return (
        <div id='Banner' style={{ backgroundImage: `url(${bannerImage})`, height: '400px', backgroundSize: 'cover' }}>
            <Container>
                <Row>
                    <Col>
                        <div className="banner-content">
                            <h1>Welcome to Shree Hemkunt Tyres</h1>
                            <p>Your One-Stop Shop for All Tyre Needs</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;

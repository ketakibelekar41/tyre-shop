import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import mrfLogo from './DealsInIMG/MRF.png';
import ceatLogo from './DealsInIMG/CEAT.png';
import goodyearLogo from './DealsInIMG/GoodTyre.png';
import apolloLogo from './DealsInIMG/APOLLOTYRE.png';
import bridgestoneLogo from './DealsInIMG/Briedge.jpeg';
import jkTyreLogo from './DealsInIMG/JK.png';
import { Products } from './Products';

const deals = [
    { id: 1, name: 'MRF', logo: mrfLogo },
    { id: 2, name: 'CEAT', logo: ceatLogo },
    { id: 3, name: 'Goodyear', logo: goodyearLogo },
    { id: 4, name: 'Apollo', logo: apolloLogo },
    { id: 5, name: 'Bridgestone', logo: bridgestoneLogo },
    { id: 6, name: 'JK Tyre', logo: jkTyreLogo },
];

const DealsIn = () => {
    const [selectedBrand, setSelectedBrand] = useState('');

    const handleBrandClick = (brand) => {
        setSelectedBrand(brand);
    };

    return (
        <div className="deals-in-section py-4">
            <Container>
                <h3 className="mb-4">Deals in</h3>
                <Row className="justify-content-center">
                    {deals.map((deal) => (
                        <Col key={deal.id} md={2} sm={4} xs={6} className="mb-3">
                            <Card className="text-center shadow-sm border-0">
                                <Card.Body>
                                    <img
                                        src={deal.logo}
                                        alt={deal.name}
                                        className="img-fluid"
                                        onClick={() => handleBrandClick(deal.name)}
                                    />
                                    <Card.Text className="mt-2">{deal.name}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Products selectedBrand={selectedBrand} />
            </Container>
        </div>
    );
};

export default DealsIn;

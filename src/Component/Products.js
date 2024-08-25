import React, { useState } from 'react';
import { Container, Row, Col, Card, Dropdown, DropdownButton, Button } from 'react-bootstrap';

const products = [
    {
        brand: 'Apollo',
        name: 'AMAZER 4G LIFE',
        size: '145/80 R12',
        price: 3136,
        reviews: '320 Reviews',
        warranty: '5 Year Warranty',
        image: 'https://f.media-amazon.com/images/I/51TcyGNfGkL._AC_UY218_.jpg'
    },
    {
        brand: 'JKTyre',
        name: 'AMAZER 4G LIFE',
        size: '155/70 R13',
        price: 3401,
        reviews: '320 Reviews',
        warranty: '5 Year Warranty',
        image: 'https://f.media-amazon.com/images/I/416WOLTcxUL._AC_UY218_.jpg'
    },
    {
        brand: 'MRF',
        name: 'AMAZER 4G LIFE',
        size: '165/70 R14',
        price: 3628,
        reviews: '320 Reviews',
        warranty: '5 Year Warranty',
        image: 'https://f.media-amazon.com/images/I/51vkvsfI3gL._AC_UY218_.jpg'
    },
    {
        brand: 'JKTyre',
        name: 'AMAZER 4G LIFE',
        size: '145/80 R12',
        price: 3150,
        reviews: '320 Reviews',
        warranty: '5 Year Warranty',
        image: 'https://f.media-amazon.com/images/I/41CWpWm5OLS._AC_UY218_.jpg'
    },
    {
        brand: 'Apollo',
        name: 'AMAZER 4G LIFE',
        size: '155/70 R13',
        price: 6034,
        reviews: '320 Reviews',
        warranty: '5 Year Warranty',
        image: 'https://f.media-amazon.com/images/I/61-kP+2HU0L._AC_UY218_.jpg'
    },
    {
        brand: 'CEAT',
        name: 'AMAZER 4G LIFE',
        size: '165/70 R14',
        price: 4772,
        reviews: '320 Reviews',
        warranty: '5 Year Warranty',
        image: 'https://f.media-amazon.com/images/I/51sd3iBg1DL._AC_UY218_.jpg'
    },
    {
        brand: 'CEAT',
        name: 'AMAZER 4G LIFE',
        size: '145/80 R12',
        price: 3689,
        reviews: '320 Reviews',
        warranty: '5 Year Warranty',
        image: 'https://f.media-amazon.com/images/I/51QiYAsUpaL._AC_UY218_.jpg'
    },
    {
        brand: 'MRF',
        name: 'AMAZER 4G LIFE',
        size: '155/70 R13',
        price: 5401,
        reviews: '320 Reviews',
        warranty: '5 Year Warranty',
        image: 'https://f.media-amazon.com/images/I/41DVLUZsXAL._AC_UY218_.jpg'
    },
    {
        brand: 'CEAT',
        name: 'AMAZER 4G LIFE',
        size: '165/70 R14',
        price: 5628,
        reviews: '320 Reviews',
        warranty: '5 Year Warranty',
        image: 'https://f.media-amazon.com/images/I/51GFdGkqs3L._AC_UY218_.jpg'
    },
];

export const Products = ({ selectedBrand }) => {
    const [visibleCount, setVisibleCount] = useState(3);



    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + 3);
    };

    let filteredProducts = products.filter(product =>
        (!selectedBrand || product.brand === selectedBrand) &&
        product.price >= 1000 && product.price <= 100000
    );


    return (
        <Container id="products" className="my-5">
            <h2 className="text-center mb-4">Tyres sold by this Dealer</h2>
            <h5 className="text-center mb-4">Brandwise Filter -Click on above Brands</h5>

            <Row>
                {filteredProducts.slice(0, visibleCount).map((product, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.brand}</Card.Title>
                                <Card.Subtitle>{product.name}</Card.Subtitle>
                                <Card.Text>
                                    Size: {product.size}
                                    <br />
                                    Price: ₹{product.price}
                                    <br />
                                    Reviews: {product.reviews}
                                    <br />
                                    Warranty: {product.warranty}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            {visibleCount < filteredProducts.length && (
                <Button variant="primary" onClick={handleLoadMore} className="d-block mx-auto">
                    Load More
                </Button>
            )}
        </Container>
    );
};

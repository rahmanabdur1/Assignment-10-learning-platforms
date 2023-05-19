import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col md={4}>
                        <h3>Courses</h3>
                        <li>Html</li>
                        <li>Css</li>
                        <li>JavaScript</li>
                        <li>C++</li>
                        <li>Python</li>
                        <li>Node js</li>
                    </Col>
                    <Col md={4}>
                        <li>Facebook</li>
                        <li>Youtuv</li>
                        <li> Google</li>
                        <li>Twitter</li>
                        <li> Instagram</li>
                    </Col>
                    <Col md={4}>
                        <li> Paypal</li>
                        <li>Bkash</li>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;

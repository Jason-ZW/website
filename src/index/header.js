'use strict';

import React from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';

class TopBar extends React.Component {
    displayName: 'TopBar';
    constructor() {
        super();
    }
    render() {
        return (
            <div className="top-bar">
                <div className="container">
                    <Row>
                        <Col sm={8} md={8}>
                            <div className="top-bar-left">
                                <span>
                                    <i className="fa fa-envelope-o"/> support@think-show.com
                                </span>
                            </div>
                        </Col>
                        <Col className="d-none d-md-block d-sm-block text-right">
                            <div>
                                <span className="top-bar-span-first">
                                    <a className="fa fa-facebook" href="https://www.facebook.com/" title="Facebook" target="_blank"/>
                                </span>
                                <span className="top-bar-span">
                                    <a className="fa fa-google-plus" href="https://plus.google.com/" title="Google" target="_blank"/>
                                </span>
                                <span className="top-bar-span">
                                    <a className="fa fa-twitter" href="https://twitter.com/" title="Twitter" target="_blank"/>
                                </span>
                                <span className="top-bar-span">
                                    <a className="fa fa-linkedin" href="https://www.linkedin.com/" title="Linkedin" target="_blank"/>
                                </span>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

class Header extends React.Component {
    displayName: 'Header';
    constructor() {
        super();
    }
    render() {
        return (
            <div className="carousel-container">
                <Row className="carousel-row">
                    <Col md={12}>
                        <Carousel>
                            <Carousel.Item>
                                <div className="carousel-mask"/>
                                <div
                                    className="d-block w-100 c-1"
                                />
                                <Carousel.Caption>
                                    <h3>Professional Laptop Repairs </h3>
                                    <p>Specialized in Laptop Service, We working hard to build a reputation of customer satisfaction through technical excellence and friendly staff.</p>
                                    <button type="button" className="btn btn-primary">Learn More</button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carousel-mask"/>
                                <div
                                    className="d-block w-100 c-2"
                                />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <button type="button" className="btn btn-primary">Learn More</button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carousel-mask"/>
                                <div
                                    className="d-block w-100 c-3"
                                />
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    <button type="button" className="btn btn-primary">Learn More</button>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </div>
        )
    }
}

module.exports = { TopBar, Header };
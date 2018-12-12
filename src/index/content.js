'use strict';

import React from 'react';
import { Row, Col, Button, Breadcrumb, Carousel } from 'react-bootstrap';

class Section1 extends React.Component {
    displayName: 'Section1';
    constructor() {
        super();
    }
    render() {
        return (
            <div className="section1-container">
                <Row>
                    <Col className="flex-column flex-center" sm={12} md={12} lg={3}>
                        <div className="section1-inner-container">
                            <div className="box-icon">
                                <span>
                                    <i className="fa fa-wrench"/>
                                </span>
                            </div>
                            <div className="box-content">
                                <h4 className="box-title">Honest Services</h4>
                                <div>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium dolore mque.
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="flex-column flex-center" sm={12} md={12} lg={3}>
                        <div className="section1-inner-container">
                            <div className="box-icon" style={{backgroundColor: '#3f51b5'}}>
                                <span>
                                    <i className="fa fa-cog"/>
                                </span>
                            </div>
                            <div className="box-content">
                                <h4 className="box-title">Quick Repair</h4>
                                <div>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="flex-column flex-center" sm={12} md={12} lg={3}>
                        <div className="section1-inner-container">
                            <div className="box-icon" style={{backgroundColor: '#673ab7'}}>
                                <span>
                                    <i className="fa fa-history"/>
                                </span>
                            </div>
                            <div className="box-content">
                                <h4 className="box-title">On time delivery</h4>
                                <div>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatm accusa ntium dolore mque.
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="flex-column flex-center" sm={12} md={12} lg={3}>
                        <div className="section1-inner-container">
                            <div className="box-icon" style={{backgroundColor: '#ff5722'}}>
                                <span>
                                    <i className="fa fa-heart-o"/>
                                </span>
                            </div>
                            <div className="box-content">
                                <h4 className="box-title">We are pasionate</h4>
                                <div>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

class Section2 extends React.Component {
    displayName: 'Section2';
    constructor() {
        super();
    }
    render() {
        return (
            <div className="section2-container">
                <Row>
                    <Col className="flex-column flex-center margin-bottom-30 no-padding-horizontal" sm={12} md={12} lg={6}>
                        <div className="section2-inner-container">
                            <h3 className="box-title font-title align-left">Leading Computer Repaire Service Company</h3>
                            <div className="box-content align-left">
                                Ostrya is an established New York based company, specialised in
                                Computer Repairs and Services, We repair out of warranty laptops and Computer
                            </div>
                            <div className="align-left button-top-30">
                                <Button>View Services</Button>
                            </div>
                        </div>
                    </Col>
                    <Col className="flex-column flex-center flex-no-space-column margin-bottom-30" sm={12} md={12} lg={6}>
                        <div className="section2-inner-no-space-container">
                            <div className="section2-img">

                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

class Section3 extends React.Component {
    displayName: 'Section3';
    constructor() {
        super();
    }
    render() {
        return (
            <div className="section3-container">
                <Row>
                    <Col className="flex-column flex-center no-padding-horizontal" sm={12} md={12} lg={12}>
                        <div className="section3-inner-container">
                            <h3 className="box-title font-title">Our Services</h3>
                            <div className="box-content">
                                We are one of the best laptop repairing service provider company in
                                New York and repair your system at your home/office at very cheapest price
                            </div>
                            <div className="our-services">
                                <div className="section3-breadcrumb">
                                    <Breadcrumb>
                                        <Breadcrumb.Item href="#">ALL</Breadcrumb.Item>
                                        <Breadcrumb.Item href="#">
                                            HARDWARE
                                        </Breadcrumb.Item>
                                        <Breadcrumb.Item href="#">
                                            LAPTOP
                                        </Breadcrumb.Item>
                                        <Breadcrumb.Item href="#">
                                            NETWORK SUPPORT
                                        </Breadcrumb.Item>
                                        <Breadcrumb.Item active>SOFTWARE</Breadcrumb.Item>
                                    </Breadcrumb>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

class Section4 extends React.Component {
    displayName: 'Section4';
    constructor() {
        super();
    }
    render() {
        return (
            <div className="section4-container">
                <div className="section4-inner-container">
                    <Row>
                        <Col className="flex-column flex-center" sm={12} md={6} lg={3}>
                            <div className="box-icon width-100 height-100">
                                <span className="font-size-26">
                                    <i className="fa fa-smile-o"/>
                                </span>
                                <div className="counter line-height-30">
                                    2750
                                </div>
                                <h4 className="box-title-1">Happy Customers</h4>
                            </div>
                        </Col>
                        <Col className="flex-column flex-center" sm={12} md={6} lg={3}>
                            <div className="box-icon width-100 height-100">
                                <span className="font-size-26">
                                    <i className="fa fa-laptop"/>
                                </span>
                                <div className="counter line-height-30">
                                    1250
                                </div>
                                <h4 className="box-title-1">Happy Customers</h4>
                            </div>
                        </Col>
                        <Col className="flex-column flex-center" sm={12} md={6} lg={3}>
                            <div className="box-icon width-100 height-100">
                                <span className="font-size-26">
                                    <i className="fa fa-television"/>
                                </span>
                                <div className="counter line-height-30">
                                    950
                                </div>
                                <h4 className="box-title-1">Happy Customers</h4>
                            </div>
                        </Col>
                        <Col className="flex-column flex-center" sm={12} md={6} lg={3}>
                            <div className="box-icon width-100 height-100">
                                <span className="font-size-26">
                                    <i className="fa fa-apple"/>
                                </span>
                                <div className="counter line-height-30">
                                    350
                                </div>
                                <h4 className="box-title-1">Happy Customers</h4>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

class Section5 extends React.Component {
    displayName: 'Section5';
    constructor() {
        super();
    }
    render() {
        return (
            <div className="section5-container">
                <div className="section5-inner-container">
                    <Row>
                        <Col sm={8}>
                            <div className="section5-header">
                                <h3 className="box-title section5-title">
                                    What Clients Say?
                                </h3>
                            </div>
                            <div className="section5-text">
                                Here are testimonials from clients that we have worked with and are happy to share<br />
                                their opinion about the process and the results.
                            </div>
                            <div className="empty-space">
                            </div>
                            <div className="section5-carousel">
                                <Carousel controls={false} indicators={false} >
                                    <Carousel.Item>
                                        <Carousel.Caption>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Carousel.Caption>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Carousel.Caption>
                                            <p>
                                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                            </p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

module.exports = { Section1, Section2, Section3, Section4, Section5 };
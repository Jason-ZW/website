'use strict';

import React from 'react';
import { Row, Col } from 'react-bootstrap';

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

module.exports = { Section1 };
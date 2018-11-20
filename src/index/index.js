'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Carousel, Button } from 'react-bootstrap';
import { TopBar, Header } from './header';
import 'bootstrap/scss/bootstrap.scss';
import "font-awesome/scss/font-awesome.scss";
import '../../static/css/index.scss';

class EntryPoint extends React.Component {
    displayName: 'EntryPoint';
    render() {
        return (
            <div>
                <TopBar/>
                <Header/>
            </div>
        )
    }
}

ReactDOM.render(
    <EntryPoint/>,
    document.getElementById('root')
);
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { TopBar, Header } from './header';
import { Section1, Section2, Section3, Section4, Section5, Section6, Section7, Section8 } from './content';
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
                <Section1/>
                <Section2/>
                <Section3/>
                <Section4/>
                <Section5/>
                <Section6/>
                <Section7/>
                <Section8/>
            </div>
        )
    }
}

ReactDOM.render(
    <EntryPoint/>,
    document.getElementById('root')
);
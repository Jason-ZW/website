'use strict';
import expect from 'expect';
import React from 'react';
import { TopBar, Header } from '../../src/index/header';
import renderer from 'react-test-renderer';

describe('renders correctly', () => {
    it('topbar correctly', () => {
        const tree = renderer.create(<TopBar />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('header correctly', () => {
        const tree = renderer.create(<Header />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});



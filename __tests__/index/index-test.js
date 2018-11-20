import expect from 'expect';
import React from 'react';
import EntryPoint from '../../src/index/index';
import renderer from 'react-test-renderer';

const entrypoint = renderer.create(
    <EntryPoint />,
);
let tree = entrypoint.toJSON();
expect(tree).toMatchSnapshot();
import React from 'react';
import renderer from 'react-test-renderer';
import Chat from '../Chat';

it('renders correct', () => {
    const component = renderer.create(
      <Chat />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
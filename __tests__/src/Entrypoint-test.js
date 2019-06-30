import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import Entrypoint from 'src/Entrypoint';

it('should render Entrypoint', () => {
    renderer.create(<Entrypoint/>);
});

import React from 'react';
import { expect } from 'chai';
import Welcome from './Welcome';
import { shallow } from 'enzyme';

describe('Welcome', () => {
    it('Displays a welcome message', () => {
        const welcome = shallow(<Welcome />);
        expect(welcome.text('.test')).to.equal('Welcome to React!');
    });
});
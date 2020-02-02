import React from 'react';
import { expect } from 'chai';
import Welcome from './Welcomeuser';
import { shallow } from 'enzyme';

describe('Conditional Rendering', () => {
    it('Displays a welcome message when the last name is provied', () => {
        const welcome = shallow(<Welcome firstName='Valentino' lastName='Rossi' />);

        expect(welcome.text()).to.equal('Welcome Mr Rossi')
    });
    it('Displays a welcome message when the last name is provied', () => {
        const welcome = shallow(<Welcome firstName='Carl' />);

        expect(welcome.text()).to.equal('Welcome Mr Carl')
    });
})
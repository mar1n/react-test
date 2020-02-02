import React from 'react';
import { expect } from 'chai';
import StateMessage from './StateMessage';
import { shallow } from 'enzyme';

describe('React state', () => {
    it('Displays a message from state', () => {
        const wrapper = shallow(<StateMessage />);

        expect(wrapper.state().message).to.equal('Hello!');
        expect(wrapper.text()).to.equal('Hello!');
    })
})
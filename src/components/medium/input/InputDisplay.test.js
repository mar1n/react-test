import React from 'react';
import { expect } from 'chai';
import Input from './Input';

import { shallow } from 'enzyme';

describe('Input Display, check, controll', () => {
    it('Input displays a controlled input field', () => {
        const wrapper = shallow(<Input />);
        const getInput = () => wrapper.find('input[type="text"]');

        expect(getInput().props().value).to.equal('Peter');

        getInput().simulate('change', { target: { value : 'Olivia'}});

        expect(getInput().props().value).to.equal('Olivia');
    })
})
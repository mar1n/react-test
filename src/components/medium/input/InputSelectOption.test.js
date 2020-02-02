import React from 'react';
import { expect } from 'chai';
import InputSelect from './InputSelect';
import { shallow } from 'enzyme';

describe('Display Select and change select', () => {
    it('FruitPicker allows user to select Apple and Orange', () => {
        const wrapper = shallow(<InputSelect selected='Apple' />);
        const getSelector = () => wrapper.find('select');

        expect(getSelector().find('option').at(0).text()).to.equal('Apple');
        expect(getSelector().find('option').at(1).text()).to.equal('Orange');
        expect(getSelector().props().value).to.equal('Apple');
        getSelector().simulate('change', { target: { value: 'Orange' }});

        expect(getSelector().props().value).to.equal('Orange');
    })
})
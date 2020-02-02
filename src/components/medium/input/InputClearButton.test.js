import React from 'react';
import { expect } from 'chai';
import InputClear from './InputClear';
import { shallow } from 'enzyme';

describe('Button, display, hide, controll, check ', () => {
    it('ResetableInput shows an input and a button to reset it', () => {
        const wrapper = shallow(<InputClear />);
        const getInput = () => wrapper.find('input[type="text"]');
        const getResetButton = () => wrapper.find('button');

        expect(getInput().props().value).to.equal('Charlotte');
        expect(getResetButton().text()).to.equal('Reset');

        getResetButton().simulate('click');

        expect(getInput().props().value).to.equal('');
    })
})
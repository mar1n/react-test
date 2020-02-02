import React from 'react';
import { expect } from 'chai';
import Salary from './InputSalary';
import { shallow } from 'enzyme';

describe('Input Display, check, controll', () => {
    it('Salalry exposes the salary expectation of player', () => {
        const wrapper = shallow(<Salary />);
        const getInput = () => wrapper.find('input[type="number"]');
        const getMessage = () => wrapper.find('label');

        expect(getInput().props().value).to.equal('');
        expect(getMessage().text()).to.equal('');

        getInput().simulate('change', { target: { value: '28000' }});

        expect(getInput().props().value).to.equal('28000');
        expect(getMessage().text()).to.equal('Expected salary: £28000');
    });
})
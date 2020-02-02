import React from 'react';
import { expect } from 'chai';
import InputEmail from './InputEmail';
import { shallow } from 'enzyme';

describe('', () => {
    it('Email displays 2 inputs and check if they match', () => {
        const wrapper = shallow(<InputEmail />);
        const getEmail = () => wrapper.find('.email');
        const getConfirmEmail = () => wrapper.find('.confirmEmail');
        const getMatchMessage = () => wrapper.find('label');

        expect(getEmail().props().value).to.equal('');
        expect(getMatchMessage().text()).to.equal('Great! Emails match');

        getEmail().simulate('change', { target: { value: 'a@b.com'}});

        expect(getMatchMessage().text()).to.equal('Oh! Emails do not match!');

        getConfirmEmail().simulate('change', { target: { value: 'a@b.com'}})

        expect(getMatchMessage().text()).to.equal('Great! Emails match');
    });
})
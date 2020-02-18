import React from 'react';
import { expect } from 'chai';
import UserNameAvailable from './UserNameAvailable';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

describe('Is my username available?', () => {
    it('Username checks whether the entered text is valid or not', () => {

        const existing = ['karl', 'charlotte'];
        const forbidden = ['hitler', 'stalin'];

        const wrapper = shallow(
            <UserNameAvailable existing={existing} forbidden={forbidden} />
        );

        const getUsernameInput = () => wrapper.find('input[type="text"]');
        const getMessage = () => wrapper.find('label.message');
        const getSubmitButton = () => wrapper.find('input[type="submit"]');

        expect(getMessage().text()).to.equal('Please enter your username');
        expect(getSubmitButton().prop('disabled')).to.equal(true);

        getUsernameInput().simulate('change', { target: {
            value: 'karl'
        }});
        expect(getMessage().text()).to.equal('The username is already taken');
        expect(getSubmitButton().prop('disabled')).to.equal(true);

        getUsernameInput().simulate('change', { target: { value: 'Stalin' }});
        expect(getMessage().text()).to.equal('The username is not allowed');
        expect(getSubmitButton().prop('disabled')).to.equal(true);

        getUsernameInput().simulate('change', { target: { value: 'Oliver'}});
        expect(getMessage().text()).to.equal('The username is available!');
        expect(getSubmitButton().prop('disabled')).to.equal(false);
    })
});
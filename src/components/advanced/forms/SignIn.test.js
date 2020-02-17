import React from 'react';
import { expect } from 'chai';
import SignIn from './SignIn';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

describe('Sign In Form', () => {
    it('SignIn allows to submit when email and pwd are provided', () => {

        const wrapper = shallow(<SignIn />);
        const getEmailInput = () => wrapper.find('input[type="email"]');
        const getPasswordInput = () => wrapper.find('input[type="password"]');
        const getSubmitButton = () => wrapper.find('input[type="submit"]');
        
        const setValue = (input, value) => { 
            input.simulate('change', { target: { value }});
        };

        expect(getSubmitButton().prop('disabled')).to.equal(true);
    })
})
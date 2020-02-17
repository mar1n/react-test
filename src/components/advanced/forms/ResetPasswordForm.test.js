import React from 'react';
import { expect } from 'chai';
import ResetPassword from './ResetPassword';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

describe('Reset password form', () => {
    it('ResetPassword allows user to set a new password', () => {
         const wrapper = shallow(<ResetPassword />);
         const getPasswordInput = () => wrapper.find('.password');
         const getConfirmPasswordInput = () => wrapper.find('.confirmPassword');
         const getSubmitButton = () => wrapper.find('input[type="submit"]');
         const setValue = (input, value) => {
             input.simulate('change', { target : { value }});
         };

         setValue(getPasswordInput(), 'abc');
         expect(getSubmitButton().prop('disabled')).to.equal(true);

         setValue(getPasswordInput(), 'abcd');
         expect(getSubmitButton().prop('disabled')).to.equal(true);

         setValue(getConfirmPasswordInput(), 'abcde');
         expect(getSubmitButton().prop('disabled')).to.equal(true);

         setValue(getConfirmPasswordInput(), 'abcd');
         expect(getSubmitButton().prop('disabled')).to.equal(false);
    })
})
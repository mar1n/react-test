import React from 'react';
import { expect } from 'chai';
import PasswordChecker from './PasswordChecker';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

describe('Password checker', () => {
    it('PasswordsMatch check if the password is entered correctly', () => {
        
        const wrapper = mount(<PasswordChecker />);
        const isStatelessComponent = !wrapper.instance();

        const pwd = wrapper.find('input[type="password"].pwd');
        const confirmPwd = wrapper.find('input[type="password"].confirmPwd');
        const label = wrapper.find('label');

        expect(isStatelessComponent).to.equal(true);

        pwd.simulate('change', { target: { value: 'a' } });
        confirmPwd.simulate('change', { target: { value: 'b' } });

        expect(label.text()).to.equal('Passwords do not match');

        confirmPwd.simulate('change', { target: {value: 'a'}});

        expect(label.text()).to.equal('Passwords match')
    })
 });

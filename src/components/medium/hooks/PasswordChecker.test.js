import React from 'react';
import { expect } from 'chai';
import PasswordChecker from './PasswordChecker';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

describe('Password checker', () => {
    it('PasswordsMatch check if the password is entered correctly', () => {
        
    })
 });

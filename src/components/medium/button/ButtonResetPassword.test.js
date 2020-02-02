import React from 'react';
import { expect } from 'chai';
import Submit from './Submit';

import { shallow } from 'enzyme';

describe('Reseting users\'s password', () => {
    it('ResetPassword disables the files while processing', async () => {

        const wrapper = shallow(<ResetPassword />);
        const getEmailInput = () => wrapper.find('input[type="email"]');
    })
})
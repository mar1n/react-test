import React from 'react';
import { expect } from 'chai';
import ResetPassword from './ResetPassword';

import { shallow } from 'enzyme';

describe('Reseting users\'s password', () => {
    it('ResetPassword disables the files while processing', async () => {

        const wrapper = shallow(<ResetPassword />);
        const getEmailInput = () => wrapper.find('input[type="email"]');
        const getSubmitButton = () => wrapper.find('button');

        expect(getSubmitButton().prop('disabled')).to.equal(false);
        expect(getEmailInput().prop('disabled')).to.equal(false);

        getSubmitButton().simulate('click');

        expect(getSubmitButton().prop('disabled')).to.equal(true);
        expect(getEmailInput().prop('disabled')).to.equal(true);

        await new Promise(resolve => setTimeout(resolve, 500));

        expect(getSubmitButton().prop('disabled')).to.equal(false);
        expect(getEmailInput().prop('disabled')).to.equal(false);

    })
})
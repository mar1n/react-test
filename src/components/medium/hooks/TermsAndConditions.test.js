import React from 'react';
import { expect } from 'chai';
import TermsAndCoditions from './TermsAndCoditions';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

describe('Do you accept the Terms and Conditions?', () => {
    it('TermsAndCoditions shows a message with the user acceptance', () => {
        
        const wrapper = mount(<TermsAndCoditions />);
        const isStatelessComponent = !wrapper.instance();

        const message = wrapper.find('label');
        const termsButton = wrapper.find('button.terms');
        const coditionsButton = wrapper.find('button.conditions');

        expect(isStatelessComponent).to.equal(true);
        expect(message.text()).to.equal('Nothing Accepeted yet');

        termsButton.simulate('click');

        expect(message.text()).to.equal('Terms accepted');

        coditionsButton.simulate('click');

        expect(message.text()).to.equal('Terms and Coditions accepted');
        
        termsButton.simulate('click');

        expect(message.text()).to.equal('Coditions accepted');
    })
})
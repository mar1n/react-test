import React from 'react';
import { expect } from 'chai';
import EmailClient, { MarkAsReadButton } from './EmailClient';


import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

describe('EmailClient sets a button to mark an email as read', () => {
    it('EmailClient sets a button to mark an email as read', () => {
        
        const wrapper = mount(<EmailClient />);
        const markAsReadButton = wrapper.find(MarkAsReadButton);

        expect(wrapper.state().markAsRead).to.equal(false);
        markAsReadButton.simulate('click');
        expect(wrapper.state().markAsRead).to.equal(true);
    })
})
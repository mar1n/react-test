import React from 'react';
import { expect } from 'chai';
import SwitchFeature from './SwitchFeature';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

describe('Create a feature toggle system', () => {
    it('SwitchFeature toggles a given feature ON and OFF', () => {
        
        const wrapper = mount(<SwitchFeature />);
        const isStatelessComponent = !wrapper.instance();

        const name = wrapper.find('label');
        const button = wrapper.find('button');

        expect(isStatelessComponent).to.equal(true);
        expect(name.text()).to.equal('Feature disabled');

        button.simulate('click');

        expect(name.text()).to.equal('Feature enabled');

        button.simulate('click');

        expect(name.text()).to.equal('Feature disabled');
    })
})
import React from 'react';
import { expect } from 'chai';
import LapCounter from './LapCounter';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

describe('Build a lap counter system', () => {
    it('LapCounter increases a number', () => {

        const wrapper = mount(<LapCounter />);
        const isStatelessComponent = !wrapper.instance();
        
        const name = wrapper.find('label');
        const button = wrapper.find('button');

        expect(name.text()).to.equal('Lap 0');

        button.simulate('click');

        expect(name.text()).to.equal('Lap 1');

        button.simulate('click');

        expect(name.text()).to.equal('Lap 2');
    })
})
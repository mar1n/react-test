import React from 'react';
import { expect } from 'chai';
import Walkman, { SideA, SideB } from './Walkman';


import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

describe('Walkman proves how cool were the 90s', () => {
    it('Walkman proves how cool were the 90s', () => {

        const Wrapper = mount(<Walkman />);

        const getSideA = () => Wrapper.find(SideA);
        const getSideB = () => Wrapper.find(SideB);
        const getToggleSideButton = () => Wrapper.find('button');

        expect(getSideA().exists()).to.equal(true);
        expect(getSideA().text()).to.equal('Spice Girls');
        expect(getSideB().exists()).to.equal(false);

        getToggleSideButton().simulate('click');

        expect(getSideA().exists()).to.equal(false);
        expect(getSideB().text()).to.equal('Back Street Boys');
        expect(getSideB().exists()).to.equal(true);
    })
})
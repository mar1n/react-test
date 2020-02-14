/**
 * @jest-environment jsdom
*/
import React from 'react';
import { expect } from 'chai';
import CaptainTsubasa, { Name, Position } from './CaptainTsubasa';


import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

describe('CapitainTsubasaPlayer display details for Kojiro Hyuga', () => {
    it('CaptainTsubasaPlayer displays details for Kojiro Hyuga', () => {

        //given
        const wrapper = mount(
            <CaptainTsubasa />
        );
    
        //when
        const name = wrapper.find(Name);
        const position = wrapper.find(Position);
    
        //then
        expect(wrapper.state().name).to.equal('Kojiro Hyuga');
        expect(wrapper.state().position).to.equal('Forward');
    
        //and
        expect(name.props().name).to.equal('Kojiro Hyuga');
        expect(name.text()).to.equal('Name: Kojiro Hyuga');
    
        //and
        expect(position.props().position).to.equal('Forward');
        expect(position.text()).to.equal('Position: Forward');
    });
})
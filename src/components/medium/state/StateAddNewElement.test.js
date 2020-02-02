import React from 'react';
import { expect } from 'chai';
import CalcAdd from './CalcAdd';
import { shallow } from 'enzyme';

describe('React State', () => {
    [{
        it: 'Display total=16 when a=7, b=4, c=5',
        c: 5, total: 16, expected: 'The total is: 16'
    }, {
        it: 'Diplays total= 9 when a=7, b=4, c=-2',
        c: -2, total: 9, expected: 'The total is: 9'
    }].forEach(scenario => {
        it(scenario.it, () => {
            
            const wrapper = shallow(<CalcAdd c={scenario.c} />);
            const state = wrapper.state();

            expect(state.a).to.equal(7);
            expect(state.b).to.equal(4);
            expect(state.total).to.equal(scenario.total);
            expect(wrapper.text()).to.equal(scenario.expected);
        })
    })
})
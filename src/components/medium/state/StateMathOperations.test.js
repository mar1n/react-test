import React from 'react';
import { expect } from 'chai';
import Calc from './Calc';
import { shallow } from 'enzyme';

describe('React state', () => {
    [{
        it: `Adds the numbers if the 'add' operation is passed`,
        operation: 'add',
        expected: 'The result is: 11'
    }, {
        it: `Subtracts the numbers if the 'subtract' operation is passed`,
        operation: 'subtract',
        expected: 'The result is: 3'
    }, {
        it: 'Displays an error if the passed operation is not supported',
        operation: 'multiply',
        expected: 'This operation is not supported yet!'
    }].forEach(scenario => {

        it(scenario.it, () => {
    
            const wrapper = shallow(
                <Calc operation={scenario.operation} />
            );
            const state = wrapper.state();

            expect(state.a).to.equal(7);
            expect(state.b).to.equal(4);
            expect(wrapper.text()).to.equal(scenario.expected);
        });
    });
})
import React from 'react';
import { expect } from 'chai';
import Chess from './Chess';

import { shallow } from 'enzyme';
import { Simulate } from 'react-dom/test-utils';

describe('Create chess game', () => {
    [
        {
            it: 'Chess sets classic players', white: 'Fisher', black: 'Karpov'
        },
        {
            it: 'Chess sets modern players', white: 'Carlsen', black: 'Aronian'
        }
    ].forEach(scenario => {

        it(scenario.it, () => {

            const wrapper = shallow(<Chess white={scenario.white} black={scenario.black} />);
            
            const getTopPlayer = () => wrapper.find('label.top');
            const getBottomPlayer = () => wrapper.find('label.bottom');
            const getSwapButton = () => wrapper.find('button');

            expect(getTopPlayer().text()).to.equal(scenario.black);
            expect(getBottomPlayer().text()).to.equal(scenario.white);

            getSwapButton().simulate('click');

            expect(getTopPlayer().text()).to.equal(scenario.white);
            expect(getBottomPlayer().text()).to.equal(scenario.black);


        })
    })
})
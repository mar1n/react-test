import React from 'react';
import { expect } from 'chai';
import FemalePlayers from './FamlePlayers';

import { shallow } from 'enzyme';

describe('Display a list of female tennis players', () => {
    [{
        it: 'FemalePlayers display a list of modern female players',
        list: [{ name: 'Federer', gender: 'M'}, { name: 'Osaka', gender: 'F'}],
        expected: ['Osaka']
    }, {
        it: 'FemalePlayers display a list of classic female players',
        list: [{ name: 'Seles', gender: 'F'}, { name: 'Hingis', gender: 'F'}],
        expected: ['Hingis', 'Seles']
    }].forEach(scenario => {
        it(scenario.it, () => {
            const wrapper = shallow(<FemalePlayers list={scenario.list} />);
            const players = wrapper.find('p');

            expect(players).to.have.length(scenario.expected.length);
            scenario.expected.forEach((player, i) => {
                expect(players.at(i).text()).to.equal(scenario.expected[i]);
            });
        });
    });
});
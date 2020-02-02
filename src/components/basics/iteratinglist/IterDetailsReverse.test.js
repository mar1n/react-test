import React from 'react';
import { expect } from 'chai';
import Starting from './Starting';
import { shallow } from 'enzyme';

describe('Display list of elements', () => {
    it('StartingGrid reverses a list of 3 teams', () => {
        const startingGrid = shallow(<Starting teams={['Ferrari', 'McLaren', 'Williams']} />);

        let positions = startingGrid.find('.position');

        expect(positions).to.have.length(3);
        expect(positions.at(0).text()).to.equal('1. Williams');
        expect(positions.at(1).text()).to.equal('2. McLaren');
        expect(positions.at(2).text()).to.equal('3. Ferrari');
    })
})
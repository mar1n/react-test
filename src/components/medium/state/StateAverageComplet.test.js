import React from 'react';
import { expect } from 'chai';
import AverageScore from './AverageScoreComplet';

import { shallow } from 'enzyme';

describe('React state', () => {
    it('AverageScore display the rounded score of a player', () => {
        const wrapper = shallow(<AverageScore newScore={61} />);
        const state = wrapper.state();

        expect(state.firstScore).to.equal(78);
        expect(state.secondScore).to.equal(81);
        expect(wrapper.text()).to.equal('The average score is: 73');
    })
})
import React from 'react';
import { expect } from 'chai';
import TotalScore from './Totalscore';
import { shallow } from 'enzyme';

describe('Pass props and display', () => {
    it('TotalScore returns the accumulated score (bad results)', () => {
        const totalScore = shallow(<TotalScore scores={[34, 35,36]} />);

        expect(totalScore.text()).to.equal('The total score is: 105');
    })
})
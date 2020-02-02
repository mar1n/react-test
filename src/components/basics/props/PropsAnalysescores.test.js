import React from 'react';
import { expect } from 'chai';
import ScoreDetails from './Analysescores';
import { shallow } from 'enzyme';

describe('Pass props and display', () => {
    it('ScoreDetails displays details (2 values passed)', () => {
        const scores = [54, 65];

        const scoreDetails = shallow(<ScoreDetails scores={scores} />);

        expect(scoreDetails.find('.total').text()).to.equal('Total: 2');
        expect(scoreDetails.find('.first').text()).to.equal('First: 54');
        expect(scoreDetails.find('.second').text()).to.equal('Second: 65');
    })
})
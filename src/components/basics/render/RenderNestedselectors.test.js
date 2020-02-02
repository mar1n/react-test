import React from 'react';
import { expect } from 'chai';
import PremierLeague from './PremierLeague';
import { shallow } from 'enzyme';

describe('PremierLeagueFixtures', () => {
    it('display match results', () => {
        const PremierLeagueFixtures = shallow(<PremierLeague />);

        let fixtures = PremierLeagueFixtures.find('.fixtures');
        let fixture = fixtures.find('.fixture');

        expect(fixtures).to.have.length(1);
        expect(fixture).to.have.length(1);


        expect(fixtures.find('.team1').text()).to.equal('Tottenham');
        expect(fixtures.find('.team2').text()).to.equal('Southampton');
        expect(fixtures.find('.result').text()).to.equal('3-1');
    });
});
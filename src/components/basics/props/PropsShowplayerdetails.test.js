import React from 'react';
import { expect } from 'chai';
import Player from './Playerdetails';
import { shallow  } from 'enzyme';

describe('Pass props and display them', () => {
    it('Player displays score details for Andrea', () => {
        const person = { name: 'Andrea', score: 65 };

        const player = shallow(<Player person={person} /> );

        expect(player.find('.name').text()).to.equal('Name: Andrea');
        expect(player.find('.score').text()).to.equal('Score: 65');
    });
    
})
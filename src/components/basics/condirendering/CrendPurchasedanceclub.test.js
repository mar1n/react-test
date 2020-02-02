import React from 'react';
import { expect } from 'chai';
import ClubTickets from './ClubTickets';
import { shallow } from 'enzyme';

describe('Conditional renderning', ()=>{
    it('ClubTikets allows the user to buy tickets when he/she is at least 18 years old', () => {
        const niceClubTickets = shallow(<ClubTickets user={{ age: 18}} />);
        expect(niceClubTickets.text()).to.equal('Purchased!');
    });
    it('ClubTikets allows the user to buy tickets when he/she applies to the afternoon session(alcohol-free)', () => {
        const niceClubTickets = shallow(<ClubTickets user={{ age: 17, session:'afternoon'}} />);
        expect(niceClubTickets.text()).to.equal('Purchased!');
    });
    it('ClubTikets allows the user to buy tickets when he/she applies to the night session is < 18', () => {
        const niceClubTickets = shallow(<ClubTickets user={{ age: 17, session:'night'}} />);
        expect(niceClubTickets.text()).to.equal('Sorry, not allowed');
    });
})
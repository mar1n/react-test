import React from 'react';
import { expect } from 'chai';
import BuyTikets from './BuyTikets';
import { shallow } from 'enzyme';

describe('Conditional rendering', () => {
    it('BuyTikets doesn\'t allow the user to proceed the he/she is below 18', () => {

        let user = { name: 'Anthony', age: 16 };

        const buyTikets = shallow(<BuyTikets user={user} />);

        expect(buyTikets.text()).to.equal('Sorry, try again you turn 18');
    })
    it('BuyTikets allows the user to proceed the he/she is below 18', () => {

        let user = { name: 'Anthony', age: 21 };

        const buyTikets = shallow(<BuyTikets user={user} />);

        expect(buyTikets.text()).to.equal('Enjoy the show!');
    })
});
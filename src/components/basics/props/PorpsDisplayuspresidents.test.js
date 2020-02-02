import React from 'react';
import { expect } from 'chai';
import President from './President';
import { shallow } from 'enzyme';

describe('Pass props and display them', () => {
    it('President display details for Bill Clinton', () => {
        const president = shallow(<President firstName='Bill' lastName='Clinton' />);

        expect(president.find('.firstName').text()).to.equal('First name: Bill');
        expect(president.find('.lastName').text()).to.equal('Last name: Clinton');
    });
    it('President display details for Barack Obama', () => {
        const president = shallow(<President firstName='Barack' lastName='Obama' />);

        expect(president.find('.firstName').text()).to.equal('First name: Barack');
        expect(president.find('.lastName').text()).to.equal('Last name: Obama');
    });
});
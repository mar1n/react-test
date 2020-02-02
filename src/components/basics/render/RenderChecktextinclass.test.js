import React from 'react';
import { expect } from 'chai';
import Checkdetails from './Checkdetails';
import { shallow } from 'enzyme';

describe('Display name and surname', () => {
    it('Display details', () =>{
        const Check = shallow(<Checkdetails />);

        expect(Check.find('.name').text()).to.equal('Szymon');
        expect(Check.find('.surname').text()).to.equal('Dawidowicz');
    })
})
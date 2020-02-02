import React from 'react';
import { expect } from 'chai';
import Welcomemsg from './Welcomemsg';
import { shallow } from 'enzyme';

describe('Welcome', () => {
    it('Welcome returns welcome message in 2 paragraphs', () => {
        const welcome = shallow(<Welcomemsg />);

        let paragraph = welcome.find('p');
        expect(welcome.find('p')).to.have.length(2);
        expect(paragraph.at(0).text()).to.equal('Szymon');
        expect(paragraph.at(1).text()).to.equal('Dawidowicz');
    })
})
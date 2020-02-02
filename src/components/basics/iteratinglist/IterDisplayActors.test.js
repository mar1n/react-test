import React from 'react';
import { expect } from 'chai';
import Actors from './Actors';
import { shallow } from 'enzyme';

describe('Display list of elements', () => {
    it('Actors displays a list of 3 actors', () => {
        const actors = shallow(<Actors names={['Arnold', 'Silvester', 'Steven']} />);
        let paragraphs = actors.find('p');

        expect(paragraphs).to.have.length(3);
        expect(paragraphs.at(0).text()).to.equal('Arnold');
        expect(paragraphs.at(1).text()).to.equal('Silvester');
        expect(paragraphs.at(2).text()).to.equal('Steven');
    });
    it('Actors displays a list of 1 actors', () => {
        const actors = shallow(<Actors names={['Leonardo']} />);
        let paragraphs = actors.find('p');

        expect(paragraphs).to.have.length(1);
	expect(paragraphs.at(0).text()).to.equal('Leonardo');
    });
})
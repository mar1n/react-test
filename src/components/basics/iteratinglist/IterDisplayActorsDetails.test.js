import React from 'react';
import { expect } from 'chai';
import Actors from './ActorsDetails';
import { shallow } from 'enzyme';

describe('Display list of elements', () => {
    it('Actors takes 3 actors and display their name and age', () => {
        const actors = shallow(<Actors actors={[{ name: 'Arnold', age: 71}, { name: 'Silvester', age: 72}]} />);

        let paragraphs = actors.find('p');

        expect(paragraphs).to.have.length(2);
        expect(paragraphs.at(0).text()).to.equal('Arnold (71)');
        expect(paragraphs.at(1).text()).to.equal('Silvester (72)');
    })
    it('Actors takes 1 actor and display their name and age', () => {
        const actors = shallow(<Actors actors={[{ name: 'Steven', age: 66}]} />);

        let paragraphs = actors.find('p');

        expect(paragraphs).to.have.length(1);
        expect(paragraphs.at(0).text()).to.equal('Steven (66)');
    })
})
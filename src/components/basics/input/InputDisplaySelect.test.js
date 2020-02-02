import React from 'react';
import { expect } from 'chai';
import FruitPicker from './FruitSelect';
import { shallow } from 'enzyme';

describe('Display input/form', () => {
    it('FruitPicker allows user to select Apple and Orange', () => {

        const wrapper = shallow(<FruitPicker selected='Orange' />);

        let select = wrapper.find('select');

        expect(select.props().value).to.equal('Orange');
    })
})
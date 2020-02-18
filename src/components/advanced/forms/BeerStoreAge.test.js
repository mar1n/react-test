import React from 'react';
import { expect } from 'chai';
import BeerStoreAge from './BeerStoreAge';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

describe('Create a beer online store', () => {
    it('AgeCheck blocks sign up if user is under 18 years old', () => {

        const wrapper = shallow(<BeerStoreAge />);
        const getAgeSelector = () => wrapper.find('select');
        const getMessage = () => wrapper.find('.message');
        const getQuestion = () => wrapper.find('input[type="text"]');
        const getSubmitButton = () => wrapper.find('input[type="submit"]');

        expect(getQuestion().exists()).to.equal(false);
        expect(getMessage().text()).to.equal('');

        getAgeSelector().simulate('change', { target: { value: '<18' }});
        expect(getQuestion().exists()).to.equal(false);
        expect(getMessage().text()).to.equal('Sorry, you must be 18+ to proceed');
        expect(getSubmitButton().prop('disabled')).to.equal(true);

        getAgeSelector().simulate('change', { target: { value: '>=18' }});
        expect(getQuestion().exists()).to.equal(true);
        expect(getQuestion().props().placeholder).to.equal('When did the German wall fall?');
        expect(getMessage().text()).to.equal('');

        getQuestion().simulate('change', { target: { value: '1988' }});
        expect(getMessage().text()).to.equal('Wrong answer!');
        expect(getSubmitButton().prop('disabled')).to.equal(true);

        getQuestion().simulate('change', { target: { value: '1989' }});
        expect(getMessage().text()).to.equal('Enjoy :)');
        expect(getSubmitButton().prop('disabled')).to.equal(false);

    })
})
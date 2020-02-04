import React from 'react';
import { expect } from 'chai';
import Countries from './Countries';

import { shallow } from 'enzyme';

describe('Display a filtered list of countries', () => {
    it('Countries filtres a list of nations', () => {

        const list = ['Jamaica', 'Japan', 'Jordan'];
        const wrapper = shallow(<Countries list={list} />);
        const getCountries = () => wrapper.find('p');
        const getFilterInput = () => wrapper.find('input');

        expect(getCountries()).to.have.length(3);
        expect(getCountries().at(0).text()).to.equal('Jamaica');
        expect(getCountries().at(1).text()).to.equal('Japan');
        expect(getCountries().at(2).text()).to.equal('Jordan');

        getFilterInput().simulate('change', { target: { value: 'Jor'}});

        expect(getCountries()).to.have.length(1);
        expect(getCountries().at(0).text()).to.equal('Jordan');

        getFilterInput().simulate('change', { target: { value: 'Ja'}});

        expect(getCountries()).to.have.length(2);
        expect(getCountries().at(0).text()).to.equal('Jamaica');
        expect(getCountries().at(1).text()).to.equal('Japan');
    });
})
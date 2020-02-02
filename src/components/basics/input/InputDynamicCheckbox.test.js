import React from 'react';
import { expect } from 'chai';
import Checkboxes from './Chcekbox';
import { shallow } from 'enzyme';

describe('Display input/forms', ()=> {
    it('Checkboxes only marks the terms input', () => {
        const wrraper = shallow(<Checkboxes terms={true} news={false} />);

        let termsInput = wrraper.find('input[type="checkbox"].terms');
        let newsInput = wrraper.find('input[type="checkbox"].news');

        expect(termsInput.props().value).to.equal(true);
        expect(newsInput.props().value).to.equal(false);
    })
})
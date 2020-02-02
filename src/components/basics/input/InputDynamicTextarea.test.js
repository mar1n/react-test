import React from 'react';
import { expect } from 'chai';
import Textarea from './Textarea';
import { shallow } from 'enzyme';

describe('Display input/forms', () => {
    it('Textarea displays a multi-line input (user thoughts)', () => {
        const wrapper = shallow(<Textarea
            value='Over 300 languages are spoken in London'
            placeholder='Please share your thoughts' />)

        let textarea = wrapper.find('textarea');

        expect(textarea.props().value).to.equal('Over 300 languages are spoken in London');
        expect(textarea.props().placeholder).to.equal('Please share your thoughts');
    })
})
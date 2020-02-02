import React from 'react';
import { expect } from 'chai';
import Submit from './Submit';

import { shallow } from 'enzyme';

describe('Submit a request', () => {
    it('Submit shows the submission progress', async () => {
        const wrapper = shallow(<Submit />);
        const getPressMeButton = () => wrapper.find('button');

        expect(getPressMeButton().text()).to.equal('Press to submit');

        getPressMeButton().simulate('click');

        expect(getPressMeButton().text()).to.equal('Submitting...');

        await new Promise(resolve => setTimeout(resolve, 1000));

        expect(getPressMeButton().text()).to.equal('Done!');
    })
})
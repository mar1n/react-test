import React from 'react';
import { expect } from 'chai';
import EurovisionResults, { Loading } from './EurovisionResults';


import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

describe('EurovisionResults fetches and displays some results', () => {
    it('EurovisionResults fetches and displays some results', 
        async () => {
            
            const wrapper = mount(<EurovisionResults />);

            const getLoading = () => wrapper.find(Loading);
            const getResults = () => wrapper.find('Results');
            
            expect(getLoading().exists()).to.equal(true);
            expect(getLoading().text()).to.equal('Loading results...');
            expect(getResults().exists()).to.equal(false);

            await new Promise(resolve => setTimeout(resolve, 500));
            wrapper.update();

            expect(getLoading().exists()).to.equal(false);
            expect(getResults().exists()).to.equal(true);
            expect(getResults().text()).to.equal('1. Israel (592p), 2. Cyprus (436p), 3. Austria (342p)');
        }
    );
});
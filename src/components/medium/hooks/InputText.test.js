import React from 'react';
import { expect } from 'chai';
import InputText from './InputText';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

describe('Input Text', () => {
    [
        {
            it: 'Input shows the typed text (default: Family)',
            defaultText: 'Family',
        },
        {
            it: 'Input shows the typed text (default: Guy)',
            defaultText: 'Guy',
        }
    ].forEach((scenario) => {
        it(scenario.it, () => {
            const wrapper = mount(<InputText defaultText={scenario.defaultText} />);
            const isStatelessComponent = !wrapper.instance() ;

            const input = wrapper.find('input[type="text"]');
            const label = wrapper.find('label');

            expect(isStatelessComponent).to.equal(true);

            expect(label.text()).to.equal(`The typed text is: ${scenario.defaultText}`);

            input.simulate('change', { target: { value: 'Kodiri rocks'} });

            expect(label.text()).to.equal(`The typed text is: Kodiri rocks`);
        });
    });
});
import React from 'react';
import { expect } from 'chai';
import EvilSignForm from './EvilSignForm';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

describe('Create an evil Sign In form', () => {
    [{
        it:'EvilSignInForm propagates an altered email form the US',
        from: { email: 'donald@trump.com', password: 'AmericaFirst'},
        expected: { email: 'trump@donald.com', password: btoa('AmericaFirst')}
    },
    {
        it: 'EvilSignInForm propagates an altered email from the UK',
        from: { email: 'theresa@may.gov', password: 'Brexit' },
        expected: { email: 'may@theresa.gov', password: btoa('Brexit')}
    }].forEach(scenario => {

        it(scenario.it, () => {
            
            let submitted = false;
            const wrapper = shallow(<EvilSignForm onSubmit={form => {
                submitted = true;

                expect(form.email).to.equal(scenario.expected.email);
                expect(form.password).to.equal(scenario.expected.password)
            }}/>
            );

            const email = wrapper.find('input[type="email"]');
            const password = wrapper.find('input[type="password"]');
            const submitButton = wrapper.find('input[type="submit"]');
            const setValue = ( input, value) => {
                input.simulate('change', { target: { value }});
            };

            setValue(email, scenario.from.email);
            setValue(password, scenario.from.password);
            submitButton.simulate('click');

            expect(submitted).to.equal(true);

        })
    })
})
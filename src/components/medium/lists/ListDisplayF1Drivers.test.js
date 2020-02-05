import React from 'react';
import { expect } from 'chai';
import F1Drivers from './F1Drivers';

import { shallow } from 'enzyme';

describe('Nested list, e.g. players with score and date level', () => {
    [{
        it: 'F1Drivers displays the positions of some Spanish drivers',
        drivers: [
            { name: 'Alonso', positions: { '2003': 6, '2004': 4, '2005': 1 }},
            { name: 'Sainz', positions: { '2015': 15, '2016': 12 }}
        ]
    }, {
        it: 'F1Drivers displays the positions of some British drivers',
        drivers: [
            { name: 'Mansell', positions: { '1991': 2, '1992': 1, '1994': 9 }},
            { name: 'Clark', positions: { '1960': 10, '1961': 4, '1962': 2 }}
        ]
    }].forEach(scenario => {

        it(scenario.it, () => {

            const wrapper = shallow(<F1Drivers list={scenario.drivers} />);
            const getDrivers = () => wrapper.find('.driver');
            const getDriverName = driver => driver.find('.name');
            const getDriverPositions = driver => driver.find('.positions');

            expect(getDrivers()).to.have.length(scenario.drivers.length);

            scenario.drivers.forEach((driver, index) => {
                let driverEl = getDrivers().at(index);
                let { name, positions } = driver;
                let textPos = Object.keys(positions).map(year => {
                    return `${year}: ${positions[year]}`;
                }).join(', ');
                expect(getDriverName(driverEl).text()).to.equal(name);
                expect(getDriverPositions(driverEl).text()).to.equal(textPos);
            });
        });
    });
})
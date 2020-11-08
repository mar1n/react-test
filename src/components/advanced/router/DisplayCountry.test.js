import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router-dom";
import Countries, { Country } from "./DisplayCountry";

Enzyme.configure({ adapter: new Adapter() });
describe("Movie App", () => {
  [
    {
      it: "Countries display details for France",
      currentPath: "/countries/fr",
      expect: { name: "France", population: "67.19 million" },
    },
    {
      it: "Countries display details for Spain",
      currentPath: "/countries/es",
      expect: { name: "Spain", population: "46.53 million" },
    },
    {
      it: "Countries display details for Italy",
      currentPath: "/countries/it",
      expect: { name: "Italy", population: "60.59 million" },
    },
  ].forEach((scenario) => {
    it(scenario.it, () => {
      //given
      const list = [
        { code: "it", name: "Italy", population: "60.59 million" },
        { code: "fr", name: "France", population: "67.19 million" },
        { code: "es", name: "Spain", population: "46.53 million" },
      ];

      //when
      const wrapper = mount(
        <MemoryRouter initialEntries={[scenario.currentPath]}>
          <Countries list={list} />
        </MemoryRouter>
      );
      const country = wrapper.find(Country);
      const countryName = country.find(".name");
      const countryPopulation = country.find(".population");

      //then
      expect(countryName.text()).toEqual(scenario.expect.name);
      expect(countryPopulation.text()).toEqual(scenario.expect.population);
    });
  });
});

import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter, Switch, Route } from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

const RacingDB = () => {
  return (
    <Switch>
      <Route path="/results/f1/1971" exact component={ResultsPage} />
      <Route path="/results/motogp/1990" exact component={ResultsPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

const ResultsPage = () => <>Competition and year correctly indexed</>;
const NotFoundPage = () => {
  return <>Results for that competition and year are not available</>;
};
describe("Movie App", () => {
  [
    {
      it: "RacingDB has already indexed F1 in 1971",
      currentPath: "/results/f1/1971",
      expected: { results: true },
    },
    {
      it: "RacingDB has already indexed MotoGP in 1971",
      currentPath: "/results/motogp/1990",
      expected: { results: true },
    },
    {
      it: "RacingDB has not indexed MotoGP in 1949 yet",
      currentPath: "/results/motogp/1949",
      expected: { results: false },
    },
    {
      it: "RacingDB has not indexed Nascar yet",
      currentPath: "/results/nascar/1984",
      expected: { results: false },
    },
  ].forEach((scenario) => {
    it(scenario.it, () => {
      //given
      const wrapper = mount(
        <MemoryRouter initialEntries={[scenario.currentPath]}>
          <RacingDB />
        </MemoryRouter>
      );

      //when
      const resultsPage = wrapper.find(ResultsPage);
      const notFoundPage = wrapper.find(NotFoundPage);

      //then
      if (scenario.expected.results) {
        expect(resultsPage.exists()).toEqual(true);
        expect(resultsPage.text()).toEqual(
          "Competition and year correctly indexed"
        );
        expect(notFoundPage.exists()).toEqual(false);
      } else {
        expect(resultsPage.exists()).toEqual(false);
        expect(notFoundPage.exists()).toEqual(true);
        expect(notFoundPage.text()).toEqual(
          "Results for that competition and year are not available"
        );
      }
    });
  });
});

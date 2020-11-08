import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router-dom";
import SystemPortfolio, {
  LandingPage,
  PortfolioPage,
  NotFoundPage,
} from "./SystemPortfolio";

Enzyme.configure({ adapter: new Adapter() });

describe("Routing test", () => {
  [
    {
      it: 'App shows landing page when the current path is "/"',
      currentPath: "/",
      expect: {
        landingExists: true,
        portfolioExists: false,
        notFoundExists: false,
        text: "Welcome to my webapp!",
      },
    },
    {
      it: 'App shows portfolio page when the current path is "/portfolio"',
      currentPath: "/portfolio",
      expect: {
        landingExists: false,
        portfolioExists: true,
        notFoundExists: false,
        text: "This is my portfolio",
      },
    },
    {
      it: "App shows not found page when the current path is not registered",
      currentPath: "/projects",
      expect: {
        landingExists: false,
        portfolioExists: false,
        notFoundExists: true,
        text: "Oops, page not Found!",
      },
    },
  ].forEach((scenario) => {
    it(scenario.it, () => {
      //when
      const wrapper = mount(
        <MemoryRouter initialEntries={[scenario.currentPath]}>
          <SystemPortfolio />
        </MemoryRouter>
      );

      //then
      let {
        landingExists,
        notFoundExists,
        portfolioExists,
        text,
      } = scenario.expect;
      expect(wrapper.find(LandingPage).exists()).toEqual(landingExists);
      expect(wrapper.find(PortfolioPage).exists()).toEqual(portfolioExists);
      expect(wrapper.find(NotFoundPage).exists()).toEqual(notFoundExists);
      expect(wrapper.text()).toEqual(text);
    });
  });
});

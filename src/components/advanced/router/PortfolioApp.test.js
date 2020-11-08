import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router-dom";
import PortfolioApp, {
  Home,
  Projects,
  About,
} from "./PortfolioApp";

Enzyme.configure({ adapter: new Adapter() });
describe("Movie App", () => {
    it('PortfolioApp navigates from: Home -> Projects -> About', () => {

        //given
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <PortfolioApp/>
            </MemoryRouter>
        );
    
        //when
        const getHome = () => wrapper.find(Home);
        const getProjects = () => wrapper.find(Projects);
        const getAbout = () => wrapper.find(About);
        const getProjectsLink = () => getHome().find('Link[to="/projects"] a');
        const getAboutLink = () => getProjects().find('Link[to="/about"] a');
    
        //then
        expect(getHome().exists()).toEqual(true);
        expect(getProjects().exists()).toEqual(false);
        expect(getAbout().exists()).toEqual(false);
        expect(getProjectsLink().text()).toEqual('Projects');
        expect(getProjectsLink().prop('href')).toEqual('/projects');
    
        //when
        getProjectsLink().simulate('click');
    
        //then
        expect(getHome().exists()).toEqual(false);
        expect(getProjects().exists()).toEqual(true);
        expect(getAbout().exists()).toEqual(false);
        expect(getAboutLink().text()).toEqual('About');
        expect(getAboutLink().prop('href')).toEqual('/about');
    
        //when
        getAboutLink().simulate('click');
    
        //then
        expect(getHome().exists()).toEqual(false);
        expect(getProjects().exists()).toEqual(false);
        expect(getAbout().exists()).toEqual(true);
        expect(getAbout().text()).toEqual('About me');
    });
});

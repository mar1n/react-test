import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

const SystemPortfolio = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/portfolio" component={PortfolioPage} />
      <Route path="/projects" component={NotFoundPage} />
    </Switch>
  );
};

export const LandingPage = () => <>Welcome to my webapp!</>;
export const PortfolioPage = () => <>This is my portfolio</>;
export const NotFoundPage = () => <>Oops, page not Found!</>;

export default SystemPortfolio;

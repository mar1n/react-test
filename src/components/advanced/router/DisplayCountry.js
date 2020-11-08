import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
const Countries = () => <Country />;

export const Country = () => {
  return (
    <Switch>
      <Route path="/countries/fr" component={France} />
      <Route path="/countries/es" component={Spain} />
      <Route path="/countries/it" component={Italy} />
    </Switch>
  );
};

const France = () => {
  return (
    <>
      <div className="name">France</div>
      <div className="population">67.19 million</div>
    </>
  );
};

const Spain = () => {
  return (
    <>
      <div className="name">Spain</div>
      <div className="population">46.53 million</div>
    </>
  );
};

const Italy = () => {
  return (
    <>
      <div className="name">Italy</div>
      <div className="population">60.59 million</div>
    </>
  );
};

export default Countries;

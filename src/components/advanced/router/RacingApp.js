import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
const RacingDB = () => {

	return (<Switch>

		<Route path='/results/f1/1971' exact component={ResultsPage} />

		<Route path='/results/motogp/1990' exact component={ResultsPage} />

		<Route component={NotFoundPage} />

	</Switch>);

};

export const ResultsPage = () => <>Competition and year correctly indexed</>;

export const NotFoundPage = () => {

	return <>Results for that competition and year are not available</>;

};

export default RacingDB;

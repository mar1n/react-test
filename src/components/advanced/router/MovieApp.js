import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
const MoviesApp = () => {
  return (
    <>
      <Route path="/genres" component={Genres} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/genres" component={GenresHome} />
        <Route path="/genres/romance" component={RomanceHome} />
        <Route path="/genres/drama" component={DramaHome} />
      </Switch>
    </>
  );
};

export const Genres = () => <></>;
export const Home = () => <>Welcome to the Movies app</>;
export const GenresHome = () => <>Please select a genre</>;
export const RomanceHome = () => <>A Star Is Born, The Notebook, La La Land</>;
export const DramaHome = () => <>Black Panther, Moonlight, Metropolis</>;

export default MoviesApp;

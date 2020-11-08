import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

const PortfolioApp = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
    </Switch>
  );
};

export const Home = ({ history }) => {
  return (
    <Link to="/projects" history={history}>
      Projects
    </Link>
  );
};

export const Projects = ({ history }) => {
  return (
    <Link to="/about" history={history}>
      About
    </Link>
  );
};

export const About = () => <>About me</>;

class Link extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push(this.props.to);
  }

  render() {
    return (
      <a href={this.props.to} onClick={this.handleClick}>
        {this.props.children}
      </a>
    );
  }
}

export default PortfolioApp;
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Nav from './features/components/Layout/Nav';
import Home from './features/components/Home/Home';
import Contact from './features/components/Contact/Contact';
import AboutMe from './features/components/AboutMe/AboutMe';
import Opinions from './features/components/Opinions/Opinions'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

function App() {


  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <Route path="/" component={Nav} Data="" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/aboutme" component={AboutMe} />
            <Route path="/opinions" component={Opinions} />
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export {
  App,
  client
};

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./App.css";
import User from "./Components/User";
import UsersList from "./Components/UsersList";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="App">
            <Route exact path="/" component={UsersList} />
            <Route path="/user/:userId" component={User} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;

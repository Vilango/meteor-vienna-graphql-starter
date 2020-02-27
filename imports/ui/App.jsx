import React from "react";
import Hello from "./Hello.jsx";
import Info from "./Info.jsx";
import Say from "./Say.jsx";

import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink
} from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  link: ApolloLink.from([
    // new MeteorAccountsLink(),
    new HttpLink({
      uri: "/graphql"
    })
  ]),
  cache: new InMemoryCache()
});

const App = () => (
  <ApolloProvider client={client}>
    <h1>Welcome to Meteor!</h1>
    <Hello />
    <Say />
    <Info />
  </ApolloProvider>
);

export default App;

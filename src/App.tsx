import { Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ViewNews from "./pages/ViewNews";

// const link = from([new HttpLink({ uri: "http://localhost:4000/graphql" })]);

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_API,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="view/:id" element={<ViewNews />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </ApolloProvider>
  );
}

export default App;

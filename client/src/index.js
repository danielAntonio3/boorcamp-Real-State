import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { ToastProvider } from "react-toast-notifications";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import App from "./App";
import "./css/index.css";

import UserContext from "./context/UseContext";
import HouseContext from "./context/HouseContext";
import DashboardContext from "./context/DashboardContext";

const link = createHttpLink({
  uri: "http://localhost:4000/apollo",
  credentials: "include",
});

const client = new ApolloClient({
  link,
  // uri: "http://localhost:4000/apollo",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <UserContext>
      <ApolloProvider client={client}>
        <HouseContext>
          <DashboardContext>
            <ToastProvider
              autoDismiss
              autoDismissTimeout={6000}
              placement="top-center"
            >
              <App />
            </ToastProvider>
          </DashboardContext>
        </HouseContext>
      </ApolloProvider>
    </UserContext>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

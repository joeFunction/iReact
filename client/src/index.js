// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));

import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import history from "./utils/history";
// import * as serviceWorker from './serviceWorker';

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo
      ? appState.returnTo
      : window.location.pathname
  );
};

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Auth0Provider
      domain={process.env.REACT_APP_DOMAIN}
      clientId={process.env.REACT_APP_CLIENT_ID}
      audience={process.env.REACT_APP_AUDIENCE}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}>
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister();


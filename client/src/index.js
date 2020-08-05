import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-5ghs9zcz.us.auth0.com"
    clientId="aDwwld7e1Ore2S3Nd9VfcxwrkM7UA98B"
    redirectUri="http://localhost:3000/books"
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
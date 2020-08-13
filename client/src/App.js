import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/NavBar";
import Home from "./components/Home"
import Feature from "./components/Feature"
import Profile from "./components/Profile"
import Saved from "./pages/saved"

function App() {
  return (
    <Router history={history}>
      <>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/features" component={Feature} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/search" component={Books} />
          <Route exact path="/books/:id" component={Detail}/>
          <Route component={NoMatch} />
        </Switch>
      </>
    </Router>
  );
}

export default App;

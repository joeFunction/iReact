import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import LoginButton from "./components/Login"
import LogoutButton from "./components/Logout"
import Profile from "./components/Profile"
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <>
        <LoginButton />
        <LogoutButton />
      
        <Profile />
        <Nav />
        <Switch>
          <Route exact path="/" component={LoginButton} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </>
    </Router>
  );
}

export default App;

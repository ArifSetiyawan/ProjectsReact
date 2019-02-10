import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Nav";
import Dasboard from "./components/dasboard/Dasboard";
import Projectsdetails from "./components/projects/Projectsdetails";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Create from "./components/projects/Createprojects";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dasboard} />
            <Route path="/project/:id" component={Projectsdetails} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/create" component={Create} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { route_constants } from './config/constants'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Profile from './components/profile/Profile'
import CreateSecret from './components/secrets/CreateSecret'
class App extends Component {
  render() {
    // console.log(temp_constants)
    const { DASHBOARD_ROUTE, SIGNIN_ROUTE,
    SIGNUP_ROUTE, CREATE_SECRET_ROUTE, PROFILE_ROUTE } = route_constants
    return (
      <BrowserRouter>
        <div className="App">
            <Navbar />
            <Switch>
              <Route exact path={ DASHBOARD_ROUTE } component={ Dashboard } />
              <Route path={ SIGNIN_ROUTE } component={ SignIn } />
              <Route path={ SIGNUP_ROUTE } component={ SignUp } />
              <Route path={ PROFILE_ROUTE } component={ Profile } />
              <Route path={ CREATE_SECRET_ROUTE } component={ CreateSecret } />
            </Switch>
        </div>
    </BrowserRouter>
    );
  }
}

export default App;

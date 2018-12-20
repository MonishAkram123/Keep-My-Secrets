import React, { Component } from 'react';
import { path_constants } from './config/constants'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateSecret from './components/secrets/CreateSecret'
class App extends Component {
  render() {
    // console.log(temp_constants)
    const { DASHBOARD_PATH, SIGNIN_PATH,
    SIGNUP_PATH, CREATE_SECRET_PATH } = path_constants
    return (
      <BrowserRouter>
        <div className="App">
            <Navbar />
            <Switch>
              <Route exact path={ DASHBOARD_PATH } component={ Dashboard } />
              <Route path={ SIGNIN_PATH } component={ SignIn } />
              <Route path={ SIGNUP_PATH } component={ SignUp } />
              <Route path={ CREATE_SECRET_PATH } component={ CreateSecret } />
            </Switch>
        </div>
    </BrowserRouter>
    );
  }
}

export default App;

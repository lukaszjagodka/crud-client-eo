import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import decode from 'jwt-decode';

import Navbar from './components/views/Navbar';
import TestPage from './components/views/TestPage';
import Courses from './components/views/Courses';
import Login from './components/users/Login'

import auth from './components/Auth';
import Logout from './components/users/Logout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={auth(Courses)} />
              <Route path="/testpage" component={auth(TestPage)} />
              <Route path="/login" component={Login} />
              <Route path="/logout" component={auth(Logout)}/>
              {/* <Route path="/users/register" component={Registration} /> */}
            </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;

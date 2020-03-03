import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/views/Navbar';
import TestPage from './components/views/TestPage';
import Courses from './components/views/Courses';
import Profile from './components/views/Profile';
import auth from './components/Auth';
import Logout from './components/users/Logout';
import LogReg from './components/views/LogReg';


import './css/style.css'

class App extends Component {
  render() {
    return (
      // <div className="container">
        <BrowserRouter>
            <div className="App" >
              <Navbar />
              <Switch>
                <Route exact path="/" component={auth(Courses)} />
                <Route path="/testpage" component={auth(TestPage)} />
                <Route path="/logout" component={auth(Logout)}/>
                <Route path="/profile" component={auth(Profile)}/>
                <Route path="/login" component={LogReg} />
              </Switch>
            </div>
        </BrowserRouter>
      // </div>
    );
  }
}

export default App;

import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import LoginRouter from '../login/LoginRouter';
import Signup from '../login/Signup';
import axios from 'axios';

interface MainContainerState {
  auth_token: string;
}

export default class MainContainer extends React.Component<{},MainContainerState> {
  constructor(props) {
    super(props);
    this.state = {
      auth_token: ''
    }
  }

  componentWillMount() {
    this.state = {
      auth_token: window.localStorage.getItem('auth_token')
    }
  }

  render() {
    if (this.state.auth_token != null) {
      return (
        <Router>
          <Signup alert={''}></Signup>
        </Router>
      );
    }
    else {
      return (
        <Router>
          <LoginRouter></LoginRouter>
        </Router>
      );
    }
  }
}
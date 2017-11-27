import * as React from 'react';
import {
  BrowserRouter as Router,
  HashRouter,
  Link,
  Switch,
  Route
} from 'react-router-dom';
import Login from '../login/Login';
import Signup from '../login/Signup';
import Dashboard from '../wallet/Dashboard';
import Logout from '../login/Logout';

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
    this.updateToken();
  }

  updateToken() {
    this.setState({
      auth_token: window.localStorage.getItem('auth_token')
    })
  }

  render() {
    const LoginRouter = () => {
      if (this.state.auth_token != '') {
        window.location.hash = '/';
        return null;
      }
      else {
        return (
          <Login alert={''} updateToken={this.updateToken.bind(this)}/>
        );
      }
    }

    const SignupRouter = () => {
      if (this.state.auth_token != '') {
        window.location.hash = '/';
        return null;
      }
      else {
        return (
          <Signup alert={''}/>
        );
      }
    }

    const LogoutRouter = () => {
      if (this.state.auth_token != '') {
        this.setState({
          auth_token: ''
        });
        
        return (
          <Logout/>
        );
      }
      return null;
    }

    const DashboardRouter = () => {
      if (this.state.auth_token != '') {
        return (
          <Dashboard/>
        );
      }
      else {
        return (
          <Login alert={''} updateToken={this.updateToken.bind(this)}/>
        );
      }
    }

    return (
      <HashRouter>
        <Switch>
          <Route path='/users/sign_in' component={ LoginRouter }/>
          <Route path='/users/sign_up' component={ SignupRouter }/>
          <Route path='/users/sign_out' component={ LogoutRouter }/>
          <Route path='/' component={ DashboardRouter }/>
        </Switch>
      </HashRouter>
    );
  }
}
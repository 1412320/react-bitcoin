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
import HomeContainer from '../wallet/HomeContainer';
import Logout from '../login/Logout';

interface MainContainerState {
  auth_token: string;
  uuid: string;
}

export default class MainContainer extends React.Component<{},MainContainerState> {

  constructor(props) {
    super(props);
    this.state = {
      auth_token: '',
      uuid: ''
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

  sendUuid(uuid) {
    this.setState({
      uuid: uuid
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
          <Login updateToken={this.updateToken.bind(this)} 
                 uuid={this.state.uuid}/>
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
          <Signup sendUuid={this.sendUuid.bind(this)}/>
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
          <HomeContainer/>
        );
      }
      else {
        return (
          <Login updateToken={this.updateToken.bind(this)} 
                 uuid={this.state.uuid}/>
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
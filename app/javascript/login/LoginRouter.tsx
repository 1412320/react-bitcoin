import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

export default class LoginRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/users/sign_in' component={Login}/>
        <Route path='/users/sign_up' component={Signup}/>
      </Switch>
    );
  }
}

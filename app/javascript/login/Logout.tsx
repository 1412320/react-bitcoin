import * as React from 'react';
import MainContainer from '../container/MainContainer';
import Login from './Login';

export default class Logout extends React.Component {  
  render() {
    window.localStorage.setItem('auth_token', '');
    window.location.hash = '/users/sign_in';
    return null;
  }
}
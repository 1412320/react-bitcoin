import * as React from 'react';
import { Input, Label, Button, FormGroup, Container, Form } from 'reactstrap';
import { render } from 'react-dom';
import LoginBox from './LoginBox';
import LoginRouter from './LoginRouter';
import Signup from './Signup';
import { Link } from 'react-router-dom';
import axios from 'axios';

export interface LoginState {
  isRemember: boolean;
  w_id: string;
  pass: string;
  error: string;
}

export interface LoginProps {
  alert: string;
}

export default class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      isRemember: true,
      w_id: '',
      pass: '',
      error: this.props.alert
    };
  }

  toggleChange(e) {
    var input = e.target;
    if (input.value == 0)
      input.value = 1
    else
      input.value = 0
  }

  handleChange(e) {
    if (e.target.name == 'user[wallet_id]')
      this.setState({
        w_id: e.target.value
      });
    if (e.target.name == 'user[password]')
      this.setState({
        pass: e.target.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log
    axios.post('/users/sign_in', {
      user: {
        wallet_id: this.state.w_id,
        password: this.state.pass
      }
    })
    .then(response => {
      window.localStorage.setItem('auth_token', response.data.auth_token);
      window.location.href = '/users/sign_up';
    })
    .catch(error => {
      this.setState({
        error: error.response.data.errors
      });
      render(<p>{this.state.error}</p>, document.getElementById('login-alert') as HTMLElement)
    })
  }

  render() {
    var mailclasses = ["input-color"];
    var passclass = ["input-color"];
      if (this.state.error == "Email is not valid") {
        mailclasses.push('input-alert');
      }
      if (this.state.error == "Password is not valid") {
        passclass.push('input-alert');
      }
    return(
        <LoginBox title="Sign in" desc="Sign in to your account">
           <Form action="/users/sign_in" method="post" onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup>
              <div id='login-alert'>
                { this.state.error != '' ? <p>{this.state.error}</p> : <span></span> }
              </div>
              <Label className="login-label">Wallet ID</Label>
              <Input type="text" className={mailclasses.join(' ')} 
                     name="user[wallet_id]" onChange={this.handleChange.bind(this)}/>
            </FormGroup>
            <FormGroup>
              <Label className="login-label">Password</Label>
              <Input type="password" className={passclass.join(' ')} 
                     name="user[password]" onChange={this.handleChange.bind(this)}/>
            </FormGroup>
            <div>
              <Input id="checkbox-remember" type="checkbox" 
                     name="user[remember_me]" value={0} onChange={this.toggleChange}
                     defaultChecked={true}/>
              <Label className="remember-label" 
                     for="checkbox-remember">Remember Login Information</Label>
            </div>
            <div className="forgot-pass-link">
            </div>
            <Button type="submit" className="btn btn-login" block={true}>Login</Button>
          </Form>
          <Link to="/users/sign_up">Sign up</Link>
        </LoginBox>
    );
  }
}

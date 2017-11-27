import * as React from 'react';
import { Link } from 'react-router-dom';

export default class WalletDashboard extends React.Component {
  render() {
    return (
      <div className="login-pg">
        <h2 className="banner">DASHBOARD</h2>
        <Link to="/users/sign_out">Log out</Link>
      </div>
    );
  }
}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Login from './Login';

var login = document.getElementById('root');

if (!!login) {
  let alert:string = login.getAttribute('data-alert');
  ReactDOM.render(<Login alert={alert}/>, document.getElementById('root') as HTMLElement)
}
document.addEventListener('turbolinks:before-cache', function () {
  ReactDOM.unmountComponentAtNode(login)
})

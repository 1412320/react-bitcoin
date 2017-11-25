import * as React from 'react';
import * as ReactDOM from 'react-dom';
import LoginBox from './LoginBox';
import '../main';

var login = document.getElementById('root');

if (!!login) {
  let alert:string = login.getAttribute('data-alert');
  ReactDOM.render(<LoginBox/>, document.getElementById('root') as HTMLElement)
}
document.addEventListener('turbolinks:before-cache', function () {
  ReactDOM.unmountComponentAtNode(login)
})

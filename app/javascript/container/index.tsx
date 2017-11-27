import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MainContainer from './MainContainer';

var login = document.getElementById('root');

if (!!login) {
  let alert:string = login.getAttribute('data-alert');
  ReactDOM.render(
    <div>
      <MainContainer></MainContainer>
    </div>
  , document.getElementById('root') as HTMLElement)
}
document.addEventListener('turbolinks:before-cache', function () {
  ReactDOM.unmountComponentAtNode(login)
})

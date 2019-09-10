import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'

import '../assets/stylesheets/application.scss';

const Hello = ({ name }) => {
  return (
    <App />
  );
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="World" />, root);
}

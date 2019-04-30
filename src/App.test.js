import React from 'react';
import ReactDOM from 'react-dom';
import AppMarvel from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppMarvel />, div);
  ReactDOM.unmountComponentAtNode(div);
});

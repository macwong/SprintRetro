import * as React from 'react';
import * as ReactDOM from 'react-dom';
import RetroBoard from './RetroBoard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RetroBoard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

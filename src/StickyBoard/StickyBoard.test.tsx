import * as React from 'react';
import * as ReactDOM from 'react-dom';
import StickyBoard from './StickyBoard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StickyBoard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

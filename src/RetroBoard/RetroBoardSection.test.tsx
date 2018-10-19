import * as React from 'react';
import * as ReactDOM from 'react-dom';
import RetroBoardSection from './RetroBoardSection';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RetroBoardSection className="block_topleft" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import StickyNoteEdit from './StickyNoteEdit';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StickyNoteEdit />, div);
  ReactDOM.unmountComponentAtNode(div);
});

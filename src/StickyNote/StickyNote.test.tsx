import * as React from 'react';
import * as ReactDOM from 'react-dom';
import StickyNote from './StickyNote';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StickyNote initialNote="test" index={0} deleteEvent={jest.fn()} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

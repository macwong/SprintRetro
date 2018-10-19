import * as React from 'react';
import * as ReactDOM from 'react-dom';
import _HelloWorld from './_HelloWorld';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<_HelloWorld />, div);
  ReactDOM.unmountComponentAtNode(div);
});

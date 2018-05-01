import React from 'react';
import ReactDOM from 'react-dom';
import Browser from './Browser';

describe('<Browser />', () => {
  beforeEach(() => {
    window = window || {};
    window.chrome = window.chrome || {};
    window.chrome.webstore = window.chrome.webstore || {};
  });

  it('should render', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Browser expcept firefox />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

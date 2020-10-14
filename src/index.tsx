import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SpreadSheet from './SpreadSheet';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <SpreadSheet
      cells={[
        ['abc0', 'abc'],
        ['abc', 'abc'],
      ]}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();

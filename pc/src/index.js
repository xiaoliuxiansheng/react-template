import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Routes from './routers/index';
const container = document.getElementById('root');

ReactDOM.render(<Routes /> , container);
serviceWorker.unregister();

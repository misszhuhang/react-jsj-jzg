import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Play from './play';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Play />, document.getElementById('root'));
registerServiceWorker();

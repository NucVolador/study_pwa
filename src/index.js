import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Demo02 from './class/02';
import Demo03 from './class/03';
import Demo04 from './class/04-2';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Demo04 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

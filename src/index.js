import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Demo01 from './class/01'
import Demo02 from './class/02';
import Demo03 from './class/03';
// import Demo04 from './class/04-2';
import Demo05 from './class/04-3';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Demo05 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

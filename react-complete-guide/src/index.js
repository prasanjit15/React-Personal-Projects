import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/*<App/ > This renders the app.js (app.js is the root component inside it we will nest other components )file
or the core react app is rendered as root element.We can replace this app.js by some simple html code and 
that will also render in the frontend*/
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

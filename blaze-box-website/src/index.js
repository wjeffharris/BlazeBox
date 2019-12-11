import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from './Context'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
<Provider>
<Router>
    <App />
</Router>
</Provider>
, 
document.getElementById('root')
);


serviceWorker.unregister();

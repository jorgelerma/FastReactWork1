import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Seconds from './Seconds';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/second" component={Seconds} />
      </div>
  </Router>,
document.getElementById('root'));
// registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import AppRobot from './AppRobot';

ReactDOM.render(
  <AppRobot />
  , document.getElementById('root'));
registerServiceWorker();

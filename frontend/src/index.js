import React from 'react';
import ReactDOM from 'react-dom';
import RequestForm from './components/requestForm.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( < RequestForm / > , document.getElementById('root'));
registerServiceWorker();
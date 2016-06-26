import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import './styles/style.css'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
ReactDOM.render(<App source="/resume.json" />, document.getElementById('app'));

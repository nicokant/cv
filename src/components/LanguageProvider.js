import { Router, Route, IndexRoute } from 'react-router'
import React from 'react';
import App from './App.jsx';

export default ({sourceBase, langs}) => (
  <Route path="/" component={App}>
      {langs.map(lang => (
        <Route key={lang} path={lang}>
          <IndexRoute component={App}/>
        </Route>
      ))}
    </Route>
);

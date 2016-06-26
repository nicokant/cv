import React from 'react';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';

export default ({title, icon, children}) => (
  <Paper className="card">
    <AppBar title={title} iconClassNameLeft={"fa fa-"+icon} />
    <div className="text">{children}</div>
  </Paper>
);

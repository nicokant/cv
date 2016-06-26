import React from 'react';
import Paper from 'material-ui/Paper';
import {dateFormat} from './helpers';

export default ({title, date, awarder, summary}) => (
  <Paper className="text smallblock">
    <h3>{title}</h3>
    <p className="dates">{awarder} - {dateFormat(date)}</p>
    <p>{summary}</p>
  </Paper>
)

import React from 'react';
import {dateFormat} from './helpers.js';

export default ({releaseDate, name, publisher, summary}) => (
  <div className="item">
    <h3>{name}</h3>
    <p><em>Published by {publisher}</em></p>
    <p className="dates">{dateFormat(releaseDate)}</p>
    <p>{summary}</p>
  </div>
)

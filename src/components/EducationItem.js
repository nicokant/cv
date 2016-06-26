import React from 'react';
import {dateFormat} from './helpers.js';

export default ({studyType, area, institution, startDate, endDate, courses}) => (
  <div className="item">
    <h3>{studyType} in {area}</h3>
    <h4>{institution}</h4>
    <p className="dates">{dateFormat(startDate)} - {dateFormat(endDate)}</p>
    <ul>
      {courses && courses.map(course => <li>{course}</li>)}
    </ul>
  </div>
);

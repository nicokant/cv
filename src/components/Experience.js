import React from 'react';
import {dateFormat} from './helpers.js';
import Paper from 'material-ui/Paper';

const Experience = ({title, subtitle, text, startDate, endDate, list}) => (
  <div className="item">
    <h3>{title}</h3>
    <h4>{subtitle}</h4>
    {(startDate) ? <p className="dates">{dateFormat(startDate)} - {(endDate) ? dateFormat(endDate) : "Present"}</p> :  null}
    <p>{text}</p>
    <ul>
      {list && list.map(item => <li>{item}</li>)}
    </ul>
  </div>
);

export const ExperienceBlock = ({title, subtitle, text, startDate, endDate, list}) => (
  <Paper className="text smallblock">
    <Experience title={title} subtitle={subtitle} text={text} startDate={startDate} endDate={endDate} list={list} />
  </Paper>
);

export default Experience;

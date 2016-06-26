import React from 'react';
import moment from 'moment';

export default ({position, company, organization, startDate, endDate, highlights, summary}) => (
  <div className="item">
    <h3>{position}, <span>{company || organization}</span></h3>
    <p className="dates">{getWorkDates(startDate, endDate)}</p>
    <p>{summary}</p>
    <ul>{highlights.map(hl => <li>{hl}</li>)}</ul>
  </div>
)

function getWorkDates(startDate, endDate) {
  let start = moment(startDate).format("MMM, YYYY");
  let end;
  if (endDate !== "") {
    end = moment(endDate).format("MMM, YYYY");
  }else{
    end = "Present";
  }

  return <span className="startdate">{start} - {end}</span>
};

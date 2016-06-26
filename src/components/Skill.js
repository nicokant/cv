import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import LinearProgress from 'material-ui/LinearProgress';
import FontIcon from 'material-ui/FontIcon'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';

const style = getMuiTheme();

export const LinearSkill = ({min=0, max=10, value, color, name}) => (
  <div className="skill">
    <label className='skill-label'>{name}</label><LinearProgress className="progress-bar" mode="determinate" color={color} min={min} max={max} value={value} />
  </div>
);

export const CircularSkill = ({min=0, max=10, value, name, size=4, sublabel,color=style.baseTheme.palette.primary2Color}) => (
  <div className="circular-skill">
    <CircularProgress class="circular-skill-progress" mode="determinate" size={size} color={color} min={min} max={max} value={value} />
    <label>{name}</label>
    <label className="label-subtitle">{sublabel}</label>
  </div>
);

export const PointSkill = ({min=0, max=5, value, color, title, shape="star"}) => (
  <div className="flex-grid">
    <label className='skill-label'>{title}</label><Point value={value} max={max} shape={shape} />
  </div>
);

const Point = ({value, max, shape="circle", color=style.baseTheme.palette.primary2Color}) => (
  <div className="skillset flex-grid">{
    (generateArray(max)).map((i) => <FontIcon style ={{color}} className={(i < value) ? "skillicon devicon-"+shape : "skillicon empty devicon-"+shape} />)
  }</div>
)

export const BlockSkill = ({min=0, max=5, value, color, title, subtitle, shape="star"}) => (
  <div className="text">
    <h3>{title}</h3>
    <h5 className="dates">{subtitle}</h5>
    <Point value={value} max={max} shape={shape} />
  </div>
)

function generateArray(l) {
  let a = [];
  for (let i=0; i<l; i++){
    a.push(i);
  }
  return a;
}

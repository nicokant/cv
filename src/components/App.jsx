import React from 'react';
import $ from 'jquery';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';
import {ProfileBar, ProfileBlock} from './ProfileBar.jsx';

import Block from './Block.jsx';
import CarouselBlock from './CarouselBlock.js';
import WorkItem from './WorkItem';
import Award from './Award';
import EducationItem from './EducationItem';
import Publication from './Publication.jsx';
import Experience, { ExperienceBlock} from './Experience';
import {PointSkill, CircularSkill, BlockSkill} from './Skill.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {jsonObj: props.jsonObj};

    $.get(this.props.source, function(result) {
      this.setState({jsonObj: result});
  	}.bind(this));
  }

  render() {
    if (this.state.jsonObj) {
      const profileData = this.state.jsonObj.basics;
      const aboutData = profileData.summary;
      const workData = this.state.jsonObj.work;
      const volunteerData = this.state.jsonObj.volunteer;
      const skillsData = this.state.jsonObj.skills;
      const educationData = this.state.jsonObj.education;
      const publicationsData = this.state.jsonObj.publications;
      const languages = this.state.jsonObj.languages;
      const awards = this.state.jsonObj.awards;

      return (<MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <ProfileBar profileObj={profileData} />
          <ProfileBlock profileObj={profileData} />
          <Block title="About" icon="user" >
            <Experience  text={aboutData} /></Block>
          <Block title="Education" icon="graduation-cap">
            {educationData.map(ed => (<Experience
                subtitle={ed.institution}
                title={`${ed.studyType} in ${ed.area}`}
                list={ed.courses}
                startDate={ed.startDate}
                endDate={ed.endDate}
            />))}
          </Block>
          <Block title="Work" icon="building">
            {workData.map(work => (<Experience
                title={`${work.position} at ${work.company}`}
                text={work.summary}
                list={work.highlights}
                startDate={work.startDate}
                endDate={work.endDate}
            />))}
          </Block>
          <Block title="Volunteer" icon="flag">
            {volunteerData.map(work => (<Experience
              title={`${work.position} at ${work.organization}`}
              text={work.summary}
              list={work.highlights}
              startDate={work.startDate}
              endDate={work.endDate}
            />))}
          </Block>
          <Block title="Skills" icon="wrench">
            {skillsData.map(skill => (<PointSkill
              title={skill.name}
              value={parseInt(skill.level)}
              shape={skill.shape}
            />))}
          </Block>
          <Block title="Languages" icon="globe">
            <div className="lang-grid">
            {languages.map(lang => (<CircularSkill
              name={lang.language}
              sublabel={lang.fluency}
              value={parseInt(lang.level)}
            />))}</div>
          </Block>
          <Block title="Publications" icon="book">
            {publicationsData.map(pub => (<Experience
              startDate={pub.releaseDate}
              title={pub.name}
              subtitle={pub.publisher}
              text={pub.summary}
            />))}
          </Block>
          <Block title="Awards" icon="certificate">
            {awards.map(award => <Experience
              title={award.title}
              subtitle={award.awarder}
              startDate={award.date}
              text={award.summary}
            />)}
          </Block>
        </div>
      </MuiThemeProvider>)
    }else{
      return <MuiThemeProvider muiTheme={getMuiTheme()}><div className="loading-wrapper"><CircularProgress size={2} value={9} max={10}/></div></MuiThemeProvider>
    }
  }
}

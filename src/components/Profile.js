import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';

import {dateFormat} from './helpers';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
const style = getMuiTheme();

export default ({profileObj}) => (
  <div>
    <Avatar src={profileObj.picture} size={200} className="center-div" style={{display:"block", boxShadow: "0px 1px 1px 1px"+style.baseTheme.palette.primary3Color}}/>
    <h1 className="text-center">{profileObj.name}</h1>
    <h2 className="text-center subtitle">{profileObj.label}</h2>
    <List>
      <ListItem
        leftIcon={<FontIcon className="fa fa-calendar" />} primaryText={dateFormat(profileObj.bornDate)}
      />
      <ListItem
        leftIcon={<FontIcon className="fa fa-location-arrow" />}
        primaryText={profileObj.location.city +', '+ profileObj.location.countryCode}
      />
      <ListItem
        leftIcon={<FontIcon className="fa fa-envelope" />}
        LinkButton href={"mailto:"+profileObj.email}
        primaryText={profileObj.email}
      />
  </List>
  <Divider />
  <List>
    {
      profileObj.profiles.map(profile => (
        <ListItem
          leftIcon={<FontIcon className={"fa fa-" + profile.network} />}
          primaryText={profile.username} LinkButton href={profile.url}
        />
      ))
    }
  </List>
  </div>
)

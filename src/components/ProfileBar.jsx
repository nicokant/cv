import React from 'react';
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

import Profile from './Profile';

export const ProfileBar = ({profileObj}) => (
  <Drawer containerClassName="drawer">
    <Profile profileObj={profileObj} />
  </Drawer>
)

export const ProfileBlock = ({profileObj}) => (
  <Paper className="card text" id="profile-block">
    <Profile profileObj={profileObj} />
  </Paper>
)

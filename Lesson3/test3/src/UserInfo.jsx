import React from 'react';
import Avatar from './Avatar';

const UserInfo = props => (
  <div className="user-info">
    <Avatar user={props.name} avatarUrl={props.user.avatarUrl} />
    <div className="user-info__name">{props.user.name}</div>
  </div>
);

export default UserInfo;

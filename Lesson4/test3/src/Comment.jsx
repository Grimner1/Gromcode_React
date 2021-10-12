import React from 'react';
import './comments.scss';
import moment from 'moment';
import UserInfo from './UserInfo';

const formatDate = date => moment(date).format('DD MMM YYYY');

// const userInfo = {
//   name: 'Sam',
//   avatarUrl:
//     'https://ubisoft-avatars.akamaized.net/f49271ad-9ae1-414a-b834-e85ac3c546a3/default_256_256.png',
// };

function Comment(props) {
  return (
    <div className="comment">
      <UserInfo user={props.author} />
      {/* <UserInfo user={userInfo} /> */}
      <div className="comment__text">{props.text}</div>
      <div className="comment__date">{formatDate(props.date)}</div>
    </div>
  );
}

export default Comment;

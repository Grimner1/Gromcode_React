import React from 'react';
import Comment from './Comment';

const userInfo = {
  name: 'Sam',
  avatarUrl:
    'https://ubisoft-avatars.akamaized.net/f49271ad-9ae1-414a-b834-e85ac3c546a3/default_256_256.png',
};

const App = () => (
  <Comment author={userInfo} text="Good job!" date={new Date('2019-01-01T11:32:19.566Z')} />
);

export default App;

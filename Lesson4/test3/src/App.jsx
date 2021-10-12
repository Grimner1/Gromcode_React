import React from 'react';
import Comment from './Comment';

const userInfo = {
  name: 'Sam',
  avatarUrl:
    'https://ubisoft-avatars.akamaized.net/f49271ad-9ae1-414a-b834-e85ac3c546a3/default_256_256.png',
};

const App = () => {
  return <Comment user={userInfo} text="Good job!" date={'2002'} />;
};

export default App;

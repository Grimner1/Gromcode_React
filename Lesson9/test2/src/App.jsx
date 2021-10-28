import React from 'react';
import UserForm from './UserForm';

const App = () => {
  const createUser = user => {
    console.log(user);
  };

  return <>{<UserForm createUser={createUser} />}</>;
};

export default App;

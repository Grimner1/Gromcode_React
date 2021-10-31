import React from 'react';
import UsersList from './UsersList';

const users = [
  {
    name: 'Sid',
    age: 17,
  },
  {
    name: 'Aid',
    age: 20017,
  },
  {
    name: 'Denis',
    age: 37,
  },
  {
    name: 'Loyd',
    age: 25,
  },
  {
    name: 'Sam',
    age: 57,
  },
  {
    name: 'Timbeldorf',
    age: 87,
  },
  {
    name: 'Lui',
    age: 7,
  },
  {
    name: 'Garison',
    age: 22,
  },
  {
    name: 'Loyndo',
    age: 51,
  },
  {
    name: 'Simans',
    age: 66,
  },
  {
    name: 'Siduko',
    age: 12,
  },
];

const App = () => <>{<UsersList users={users} />}</>;

export default App;

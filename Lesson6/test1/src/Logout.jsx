import React from 'react';

const Logout = func => {
  return (
    <button className="logout btn" onClick={func}>
      Logout
    </button>
  );
};

export default Logout;

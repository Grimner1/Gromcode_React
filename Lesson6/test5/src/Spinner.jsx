import React from 'react';

const Spinner = ({ spinnerSize }) => {
  const spinerSize = {
    height: spinnerSize,
  };
  return <span className="spinner" style={spinerSize}></span>;
};

export default Spinner;

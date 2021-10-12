import React from 'react';

const userAge = date => {
  const birthDate = new Date(date).getFullYear();
  const todaysВate = new Date().getFullYear();
  const yearsOld = todaysВate - birthDate;
  return yearsOld;
};

const Greeting = props => {
  console.log(userAge());
  return (
    <div className="greeting">{`My name is ${props.firstName} ${props.lastName}. I'm ${userAge(
      props.birthDate,
    )} years old`}</div>
  );
};
export default Greeting;

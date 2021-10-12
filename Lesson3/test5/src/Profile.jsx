import React from 'react';
import moment from 'moment';

const formatDate = date => moment(date).format('DD MMM YY');

const Profile = ({ userData }) => (
  <div>
    <p className="profile__name">{`${userData.firstName} ${userData.lastName}`}</p>
    <p className="profile__birth">
      {`Was born ${formatDate(userData.birthDate)} in ${userData.birthPlace}`}
    </p>
  </div>
);

export default Profile;

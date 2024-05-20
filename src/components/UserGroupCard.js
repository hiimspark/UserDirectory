import React from 'react';

const UserGroupCard = ({ user }) => {
  return (
    <div className="userGroupCard">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
};

export default UserGroupCard;

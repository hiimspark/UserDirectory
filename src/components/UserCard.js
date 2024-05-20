import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="userCard">
      <img src="/data/icon.png" alt=""></img>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.group || 'Без группы'}</p>
    </div>
  );
};

export default UserCard;

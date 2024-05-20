import React from 'react';
import UserGroupCard from './UserGroupCard';

const UserGroups = ({ users, groups }) => {
  if (!users || users.length === 0) {
    return <p>Нет данных для отображения</p>;
  }

  const groupedUsers = groups.map(group => ({
    group,
    users: users.filter(user => user.group === group)
  }));


  return (
    <div className="userGroupsBlock">
      {groupedUsers.map(({ group, users }) => (
        <div className="userGroup" key={group}>
          <h2>{group}</h2>
          <div className="userGroups">
            {users.map(user => <UserGroupCard key={user.id} user={user} />)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserGroups;

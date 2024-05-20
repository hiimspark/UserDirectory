import React from 'react';

const UserTable = ({ users, sortConfig, onSort }) => {
  const getSortIndicator = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'asc' ? ' ↑' : ' ↓';
    }
    return '';
  };

  return (
    <table className="userTable">
      <thead>
        <tr>
        <th
            className={sortConfig.key === 'name' ? 'active' : ''}
            onClick={() => onSort('name')}
          >
            Имя {getSortIndicator('name')}
          </th>
          <th
            className={sortConfig.key === 'email' ? 'active' : ''}
            onClick={() => onSort('email')}
          >
            Email {getSortIndicator('email')}
          </th>
          <th
            className={sortConfig.key === 'phone' ? 'active' : ''}
            onClick={() => onSort('phone')}
          >
            Номер телефона {getSortIndicator('phone')}
          </th>
          <th
            className={sortConfig.key === 'group' ? 'active' : ''}
            onClick={() => onSort('group')}
          >
            Отдел {getSortIndicator('group')}
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.group || 'Без группы'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;

import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import UserCard from '../components/UserCard';
import UserTable from '../components/UserTable';
import UserGroups from '../components/UserGroups';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });
  const [viewMode, setViewMode] = useState('table');
  const [uniqueGroups, setUniqueGroups] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/users.json');
        const data = await response.json();
        setUsers(data);
        const groups = new Set(data.map(user => user.group).filter(group => group));
        setUniqueGroups([...groups]);
      } catch (error) {
        console.error("Ошибка при загрузке данных: ", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
    setUsers(_.orderBy(users, [key], [direction]));
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Список пользователей</h1>
      <div className="inputBox">
        <input type="text" placeholder="Поиск по имени" value={searchQuery} onChange={handleSearch} />
      </div>
      <div className="buttons">
        <button onClick={() => setViewMode('table')}>Таблица</button>
        <button onClick={() => setViewMode('cards')}>Карточки</button>
        <button onClick={() => setViewMode('groups')}>Группы</button>
      </div>
      {viewMode === 'table' && <UserTable users={filteredUsers} sortConfig={sortConfig} onSort={handleSort}  />}
      {viewMode === 'cards' && <div className="cards">{filteredUsers.map(user => <UserCard key={user.id} user={user} />)}</div>}
      {viewMode === 'groups' && <UserGroups users={filteredUsers} groups={uniqueGroups.sort()}/>}
    </div>
  );
};

export default UsersPage;

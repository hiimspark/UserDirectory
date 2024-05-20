import React from 'react';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  const nav = useNavigate();
  return (
    <div>
      <h1>Добро пожаловать в каталог пользователей!</h1>
      <div className="buttons">
        <button onClick={()=> nav("/users")}>Перейти к каталогу</button>
      </div>
    </div>
  );
};

export default HomePage;

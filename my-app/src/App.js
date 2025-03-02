import React from 'react';
import { v4 as uuidv4 } from 'react-uuid'; 

function App() {
  // Функция для генерации уникального id
  const id = () => uuidv4();

  // Массив пользователей с уникальными id
  const users = [
    { id: id(), name: 'user1', surn: 'surn1', age: 30 },
    { id: id(), name: 'user2', surn: 'surn2', age: 31 },
    { id: id(), name: 'user3', surn: 'surn3', age: 32 },
  ];

  return (
    <div>
      <h2>Список пользователей</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} {user.surn}, возраст: {user.age} (ID: {user.id})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
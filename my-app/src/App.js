import React from 'react';

function App() {
  // Задание 1: Массив с элементами <li>
  const arr1 = [
    <li key={1}>1</li>,
    <li key={2}>2</li>,
    <li key={3}>3</li>,
    <li key={4}>4</li>,
    <li key={5}>5</li>,
  ];

  // Задание 2: Формирование списка с помощью цикла for
  const arr2 = [];
  for (let i = 1; i <= 5; i++) {
    arr2.push(<li key={i}>{i}</li>);
  }

  // Задание 3: Массив с буквами
  const arr3 = ['a', 'b', 'c', 'd', 'e'];

  // Задание 4: Массив с пользователями
  const users1 = [
    { name: 'user1', surn: 'surn1', age: 30 },
    { name: 'user2', surn: 'surn2', age: 31 },
    { name: 'user3', surn: 'surn3', age: 32 },
  ];

  // Задание 5: Массив с пользователями и id
  const users2 = [
    { id: 1, name: 'user1', surn: 'surn1', age: 30 },
    { id: 2, name: 'user2', surn: 'surn2', age: 31 },
    { id: 3, name: 'user3', surn: 'surn3', age: 32 },
  ];

  return (
    <div>
      {/* Задание 1: Рендеринг массива с элементами <li> */}
      <h2>Задание 1</h2>
      <ul>{arr1}</ul>

      {/* Задание 2: Рендеринг списка, сформированного циклом for */}
      <h2>Задание 2</h2>
      <ul>{arr2}</ul>

      {/* Задание 3: Рендеринг списка из массива букв */}
      <h2>Задание 3</h2>
      <ul>
        {arr3.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Задание 4: Рендеринг списка пользователей */}
      <h2>Задание 4</h2>
      <ul>
        {users1.map((user, index) => (
          <li key={index}>
            {user.name} {user.surn}, возраст: {user.age}
          </li>
        ))}
      </ul>

      {/* Задание 5: Рендеринг таблицы пользователей */}
      <h2>Задание 5</h2>
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Возраст</th>
          </tr>
        </thead>
        <tbody>
          {users2.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.surn}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
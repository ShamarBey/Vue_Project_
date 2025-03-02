import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Для генерации уникальных id

// Компонент User (простой текст)
function User() {
  return <p>Это компонент User!</p>;
}

// Компонент Employee (работник)
function Employee({ surname, name, patronymic, salary }) {
  return (
    <div>
      <p>Фамилия: {surname}</p>
      <p>Имя: {name}</p>
      <p>Отчество: {patronymic}</p>
      <p>Зарплата: {salary}</p>
      <hr />
    </div>
  );
}

// Компонент User (таблица)
function UserTableRow({ name, surname, age }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{age}</td>
    </tr>
  );
}

// Компонент User с кнопкой бана
function UserWithBan({ id, name, surname, age, onBan }) {
  return (
    <div>
      <p>Имя: {name}</p>
      <p>Фамилия: {surname}</p>
      <p>Возраст: {age}</p>
      <button onClick={() => onBan(id)}>Забанить</button>
      <hr />
    </div>
  );
}

// Основной компонент App
function App() {
  // Задание 1: Использование компонента User
  const userComponents = [1, 2, 3].map((_, index) => <User key={index} />);

  // Задание 2: Использование компонента Employee
  const employees = [
    { surname: 'Иванов', name: 'Иван', patronymic: 'Иванович', salary: 50000 },
    { surname: 'Петров', name: 'Пётр', patronymic: 'Петрович', salary: 60000 },
    { surname: 'Сидоров', name: 'Сидор', patronymic: 'Сидорович', salary: 70000 },
  ];

  // Задание 3: Массив users для таблицы
  const users = [
    { id: uuidv4(), name: 'user1', surn: 'surn1', age: 30 },
    { id: uuidv4(), name: 'user2', surn: 'surn2', age: 31 },
    { id: uuidv4(), name: 'user3', surn: 'surn3', age: 32 },
  ];

  // Задание 4: Массив initUsers для компонента Users
  const [initUsers, setInitUsers] = useState([
    { id: uuidv4(), name: 'user1', surname: 'surn1', age: 30 },
    { id: uuidv4(), name: 'user2', surname: 'surn2', age: 31 },
    { id: uuidv4(), name: 'user3', surname: 'surn3', age: 32 },
  ]);

  // Функция для бана пользователя
  const banUser = (id) => {
    setInitUsers(initUsers.filter((user) => user.id !== id));
  };

  return (
    <div>
      {/* Задание 1: Использование компонента User */}
      <h2>Задание 1</h2>
      {userComponents}

      {/* Задание 2: Использование компонента Employee */}
      <h2>Задание 2</h2>
      {employees.map((employee, index) => (
        <Employee
          key={index}
          surname={employee.surname}
          name={employee.name}
          patronymic={employee.patronymic}
          salary={employee.salary}
        />
      ))}

      {/* Задание 3: Таблица с пользователями */}
      <h2>Задание 3</h2>
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Возраст</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserTableRow key={user.id} name={user.name} surname={user.surn} age={user.age} />
          ))}
        </tbody>
      </table>

      {/* Задание 4: Использование компонента User с кнопкой бана */}
      <h2>Задание 4</h2>
      {initUsers.map((user) => (
        <UserWithBan
          key={user.id}
          id={user.id}
          name={user.name}
          surname={user.surname}
          age={user.age}
          onBan={banUser}
        />
      ))}
    </div>
  );
}

export default App;
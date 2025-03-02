import React, { useState } from 'react';

function App() {
  // Стейты для имени, фамилии, возраста и бана пользователя
  const [name, setName] = useState('Иван');
  const [surname, setSurname] = useState('Иванов');
  const [age, setAge] = useState(25);
  const [isBanned, setIsBanned] = useState(false);

  // Функции для изменения имени и фамилии
  const changeName = () => {
    setName('Пётр');
  };

  const changeSurname = () => {
    setSurname('Петров');
  };

  // Функции для бана и разбана пользователя
  const banUser = () => {
    setIsBanned(true);
  };

  const unbanUser = () => {
    setIsBanned(false);
  };

  // Функции для изменения возраста
  const increaseAge = () => {
    setAge(age + 1);
  };

  const decreaseAge = () => {
    setAge(age - 1);
  };

  return (
    <div>
      {/* Отображение данных пользователя */}
      <h2>Данные пользователя</h2>
      <p>Имя: {name}</p>
      <p>Фамилия: {surname}</p>
      <p>Возраст: {age}</p>
      <p>Статус: {isBanned ? 'Забанен' : 'Активен'}</p>

      {/* Кнопки для изменения имени и фамилии */}
      <div>
        <button onClick={changeName}>Изменить имя</button>
        <button onClick={changeSurname}>Изменить фамилию</button>
      </div>

      {/* Кнопки для бана и разбана пользователя */}
      <div>
        <button onClick={banUser}>Забанить</button>
        <button onClick={unbanUser}>Разбанить</button>
      </div>

      {/* Кнопки для изменения возраста */}
      <div>
        <button onClick={increaseAge}>Увеличить возраст</button>
        <button onClick={decreaseAge}>Уменьшить возраст</button>
      </div>
    </div>
  );
}

export default App;
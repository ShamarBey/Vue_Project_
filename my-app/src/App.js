import React, { useState } from 'react';

function App() {
  // Задание 1: Выпадающий список городов
  const cities = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань'];
  const [selectedCity, setSelectedCity] = useState('');

  // Задание 2: Возрастные группы
  const ageGroups = ['0-12 лет', '13-17 лет', '18-25 лет', 'старше 25 лет'];
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('');

  // Задание 3: Радиокнопки для выбора значения
  const [selectedRadio, setSelectedRadio] = useState('');

  // Задание 4: Любимый язык программирования
  const programmingLanguages = ['JavaScript', 'Python', 'Java'];
  const [favoriteLanguage, setFavoriteLanguage] = useState('');

  // Задание 5: Среднее арифметическое массива
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const average = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

  // Задание 6: Объект с датой
  const [date, setDate] = useState({
    year: 2025,
    month: 12,
    day: 31,
  });

  // Функция для получения дня недели
  const getDayOfWeek = (year, month, day) => {
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const date = new Date(year, month - 1, day);
    return days[date.getDay()];
  };

  return (
    <div>
      {/* Задание 1: Выпадающий список городов */}
      <h2>Задание 1</h2>
      <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
        <option value="">Выберите город</option>
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
      <p>Выбранный город: {selectedCity}</p>

      {/* Задание 2: Возрастные группы */}
      <h2>Задание 2</h2>
      <select value={selectedAgeGroup} onChange={(e) => setSelectedAgeGroup(e.target.value)}>
        <option value="">Выберите возрастную группу</option>
        {ageGroups.map((group, index) => (
          <option key={index} value={group}>
            {group}
          </option>
        ))}
      </select>
      <p>Выбранная возрастная группа: {selectedAgeGroup}</p>

      {/* Задание 3: Радиокнопки для выбора значения */}
      <h2>Задание 3</h2>
      <label>
        <input type="radio" name="radio" value="Вариант 1" onChange={(e) => setSelectedRadio(e.target.value)} />
        Вариант 1
      </label>
      <label>
        <input type="radio" name="radio" value="Вариант 2" onChange={(e) => setSelectedRadio(e.target.value)} />
        Вариант 2
      </label>
      <label>
        <input type="radio" name="radio" value="Вариант 3" onChange={(e) => setSelectedRadio(e.target.value)} />
        Вариант 3
      </label>
      <p>Выбранный вариант: {selectedRadio}</p>

      {/* Задание 4: Любимый язык программирования */}
      <h2>Задание 4</h2>
      {programmingLanguages.map((language) => (
        <label key={language}>
          <input
            type="radio"
            name="language"
            value={language}
            onChange={(e) => setFavoriteLanguage(e.target.value)}
          />
          {language}
        </label>
      ))}
      <p>
        Ваш любимый язык программирования: {favoriteLanguage}
        {favoriteLanguage === 'JavaScript' && ' — Отличный выбор!'}
      </p>

      {/* Задание 5: Среднее арифметическое массива */}
      <h2>Задание 5</h2>
      {numbers.map((num, index) => (
        <input
          key={index}
          type="number"
          value={num}
          onChange={(e) => {
            const newNumbers = [...numbers];
            newNumbers[index] = parseInt(e.target.value, 10) || 0;
            setNumbers(newNumbers);
          }}
        />
      ))}
      <p>Среднее арифметическое: {average.toFixed(2)}</p>

      {/* Задание 6: Объект с датой */}
      <h2>Задание 6</h2>
      <p>
        Дата: {date.day}.{date.month}.{date.year} ({getDayOfWeek(date.year, date.month, date.day)})
      </p>
    </div>
  );
}

export default App;
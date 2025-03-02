import React, { useState } from 'react';

// Компонент TempInp (ввод температуры)
function TempInp({ scale, temperature, onTemperatureChange }) {
  return (
    <fieldset>
      <legend>Введите температуру в градусах {scale}:</legend>
      <input value={temperature} onChange={(e) => onTemperatureChange(e.target.value)} />
    </fieldset>
  );
}

// Компонент Verdict (вывод вердикта)
function Verdict({ celsius }) {
  if (celsius >= 100) {
    return <p>Вода закипит.</p>;
  } else if (celsius <= 0) {
    return <p>Вода замёрзнет.</p>;
  } else {
    return <p>Вода останется жидкой.</p>;
  }
}

// Компонент Calculator (исправленный)
function Calculator() {
  const [value, setValue] = useState('');
  const [nums, setNums] = useState([1, 2, 3]);

  // Сумма вычисляется на основе массива nums
  const sum = nums.reduce((acc, num) => acc + Number(num), 0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleBlur = (event) => {
    const newNum = event.target.value;
    setNums([...nums, newNum]); // Добавляем элемент в массив
    setValue(''); // Очищаем инпут
  };

  return (
    <div>
      <p>Сумма: {sum}</p>
      <input value={value} onChange={handleChange} onBlur={handleBlur} />
    </div>
  );
}

// Компонент App (исправленный)
function App() {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
  const [editNum, setEditNum] = useState(null);

  const startEdit = (index) => {
    setEditNum(index);
  };

  const changeItem = (event, index) => {
    const newNotes = [...notes];
    newNotes[index] = event.target.value;
    setNotes(newNotes);
  };

  return (
    <div>
      {notes.map((note, index) => (
        <div key={index}>
          {editNum === index ? (
            <input
              value={note}
              onChange={(e) => changeItem(e, index)}
              onBlur={() => setEditNum(null)} // Завершаем редактирование
            />
          ) : (
            <p onClick={() => startEdit(index)}>{note}</p>
          )}
        </div>
      ))}
    </div>
  );
}

// Основной компонент
function Main() {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('celsius');

  // Функции для конвертации температуры
  const toCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
  const toFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

  const handleCelsiusChange = (value) => {
    setTemperature(value);
    setScale('celsius');
  };

  const handleFahrenheitChange = (value) => {
    setTemperature(value);
    setScale('fahrenheit');
  };

  const celsius = scale === 'celsius' ? parseFloat(temperature) : toCelsius(parseFloat(temperature));
  const fahrenheit = scale === 'fahrenheit' ? parseFloat(temperature) : toFahrenheit(parseFloat(temperature));

  return (
    <div>
      <h2>Задание 1: Конвертер температуры</h2>
      <TempInp scale="Цельсия" temperature={celsius} onTemperatureChange={handleCelsiusChange} />
      <TempInp scale="Фаренгейта" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
      <Verdict celsius={celsius} />

      <h2>Задание 2: Исправленный Calculator</h2>
      <Calculator />

      <h2>Задание 3: Исправленный App</h2>
      <App />
    </div>
  );
}

export default Main;
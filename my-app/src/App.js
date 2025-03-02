import React from 'react';

// Функция для нахождения суммы цифр числа
function getDigitsSum(number) {
  return String(number)
    .split('')
    .reduce((sum, digit) => sum + Number(digit), 0);
}

function App() {
  // Функции для обработки кликов
  const show1 = () => {
    alert(1);
  };

  const show2 = () => {
    alert(2);
  };

  const showNumber = (number) => {
    alert(number);
  };

  const handleClickEvent = (event) => {
    console.log('Event:', event);
  };

  const handleClickTarget = (event) => {
    console.log('Event Target:', event.target);
  };

  return (
    <div>
      {/* Задание 1: Вывод суммы цифр числа 12345 */}
      <p>Сумма цифр числа 12345: {getDigitsSum(12345)}</p>

      {/* Задание 2: Кнопки с вызовом функций show1 и show2 */}
      <div>
        <button onClick={show1}>act1</button>
        <button onClick={show2}>act2</button>
      </div>

      {/* Задание 3: Три кнопки с выводом чисел 1, 2, 3 */}
      <div>
        <button onClick={() => showNumber(1)}>act1</button>
        <button onClick={() => showNumber(2)}>act2</button>
        <button onClick={() => showNumber(3)}>act3</button>
      </div>

      {/* Задание 4: Кнопка для вывода объекта Event в консоль */}
      <div>
        <button onClick={handleClickEvent}>Show Event</button>
      </div>

      {/* Задание 5: Кнопка для вывода event.target в консоль */}
      <div>
        <button onClick={handleClickTarget}>Show Event Target</button>
      </div>
    </div>
  );
}

export default App;
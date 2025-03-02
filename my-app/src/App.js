import React from 'react';

// Функция для нахождения суммы цифр числа
function getDigitsSum(number) {
  return String(number)
    .split('')
    .reduce((sum, digit) => sum + Number(digit), 0);
}

function App() {
  const isAuth = true; // Здесь может быть true или false
  const number = 123; // Число, сумму цифр которого нужно найти
  const sum = getDigitsSum(number); // Вычисляем сумму цифр

  return (
    <div>
      {/* Условный рендеринг для isAuth */}
      {isAuth && <p>вы авторизованы</p>}
      {!isAuth && <p>пожалуйста, авторизуйтесь</p>}

      {/* Вывод суммы цифр числа */}
      <p>Сумма цифр числа {number} равна {sum}.</p>
    </div>
  );
}

export default App;
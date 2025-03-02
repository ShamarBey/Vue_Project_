import React from 'react';

function App() {
  const isAdult = true; // Здесь может быть true или false

  return (
    <div>
      {isAdult ? (
        <p>Вам уже есть 18 лет. Добро пожаловать!</p>
      ) : (
        <p>Вам ещё нет 18 лет. Доступ ограничен.</p>
      )}
    </div>
  );
}

export default App;
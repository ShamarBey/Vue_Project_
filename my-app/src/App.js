import React from 'react';

function App() {
  const age = 19; // Здесь может быть любое число

  return (
    <div>
      {age > 18 ? (
        <p>Вам уже есть 18 лет. Добро пожаловать!</p>
      ) : (
        <p>Вам ещё нет 18 лет. Доступ ограничен.</p>
      )}
    </div>
  );
}

export default App;

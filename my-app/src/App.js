import React from 'react';

function App() {
  const isAdmin = true; // Здесь может быть true или false

  return (
    <div>
      {isAdmin && (
        <div>
          <p>Вы являетесь администратором.</p>
          <p>Вам доступны все функции системы.</p>
        </div>
      )}
    </div>
  );
}

export default App;

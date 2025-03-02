import React from 'react';
import './styles.css'; // Подключение внешнего CSS файла

function ButtonComponent() {
  return (
    <div className="container">
      <button className="primary-button">Кнопка 1</button>
      <button className="secondary-button">Кнопка 2</button>
    </div>
  );
}

export default ButtonComponent;
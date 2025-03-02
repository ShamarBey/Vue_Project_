import React from 'react';
import styles from './Inputs.module.css'; // Импорт стилей из CSS Modules

function Inputs() {
  return (
    <div>
      <h1>Приложение с инпутами</h1>
      <input type="text" className={styles.input1} placeholder="Инпут 1" />
      <input type="text" className={styles.input2} placeholder="Инпут 2" />
      <input type="text" className={styles.input3} placeholder="Инпут 3" />
    </div>
  );
}

export default Inputs;
import React from 'react';
import { styles } from './styles'; // Импорт стилей из styles.js

function ButtonComponent() {
  return (
    <div style={styles.container}>
      <button style={styles.primaryButton}>Кнопка 1</button>
      <button style={styles.secondaryButton}>Кнопка 2</button>
    </div>
  );
}

export default ButtonComponent;
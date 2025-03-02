import React from 'react';

// Объекты с CSS стилями
const styles = {
  container: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '20px',
  },
  primaryButton: {
    padding: '10px 20px',
    margin: '5px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: 'blue',
    color: 'white',
  },
  secondaryButton: {
    padding: '10px 20px',
    margin: '5px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: 'gray',
    color: 'white',
  },
};

function ButtonComponent() {
  return (
    <div style={styles.container}>
      <button style={styles.primaryButton}>Кнопка 1</button>
      <button style={styles.secondaryButton}>Кнопка 2</button>
    </div>
  );
}

export default ButtonComponent;